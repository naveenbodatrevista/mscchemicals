import { AppBar, Button, Tab, Tabs } from '@material-ui/core';
import axios from 'axios';
import queryString from 'query-string';
import React, { Component } from 'react';
import 'react-datetime/css/react-datetime.css';
import { connect } from 'react-redux';
import { context_path, defaultDateFilter, server_url } from '../../Common/constants';
import Moment from 'react-moment';


import TabPanel from '../../Common/TabPanel';
import Image from '../Common/Image';
import Upload from '../Common/Upload';
import CompanyContacts from '../CompanyContacts/CompanyContacts';
import Add from './Add';
import Branches from './Branches';
import Products from './Products';






const json2csv = require('json2csv').parse;


class View extends Component {
    state = {
        activeTab: 0,
        editFlag: false,
        editSubFlag: false,
        modal: false,
        newObj: '',
        subObjs: [],
        newSubObj: {},
        subPage: {
            number: 0,
            size: 20,
            totalElements: 0,
            totalPages: 0
        },
        filters: {
            search: '',
            fromDate: null,
            toDate: null,
        },
        fileTypes1: [
            { label: 'GSTIN', expiryDate: true },
            { label: 'PAN', expiryDate: true },
            { label: 'FSSAI NO', noshow: false, expiryDate: true },
            { label: 'Drug License', noshow: false, expiryDate: true },
            { label: 'Customer Declaration', noshow: true, expiryDate: true },
            { label: 'Manufacture License', expiryDate: true },
            { label: 'MSME ', expiryDate: false },
            { label: 'Others ', expiryDate: false },
        ],
        fileTypes2: [
            { label: 'Sample with Coa', expiryDate: false },
            { label: 'working Standard with coa', expiryDate: false },
            { label: 'Process Flow Chart', expiryDate: false },
            { label: 'Specifications', expiryDate: false },
            { label: 'Method of analysis', expiryDate: false },
            { label: 'Declaration on material origin', expiryDate: false },
            { label: 'Stability study Data', expiryDate: false },
            { label: 'Shelf Life', expiryDate: false },
            { label: 'Residual Solvents', expiryDate: false },
            { label: 'Heavy Metals', expiryDate: false },
            { label: 'NOTS (Naturally Occurring Toxic Substances)', expiryDate: false },
            { label: 'Aflatoxins', expiryDate: false },
            { label: 'Residual Pesticides', expiryDate: false },
            { label: 'Functional Trial by R&D', expiryDate: false },
            { label: 'TSE/BSE declaration', expiryDate: false },
            { label: 'Gluten Free Certificate', expiryDate: false },
            { label: 'GMO Certificate', expiryDate: false },
            { label: 'Dioxin Certificate', expiryDate: false },
            { label: 'Melanin', expiryDate: false },
            { label: 'MSDS', expiryDate: false },
            { label: 'DMF', expiryDate: false },
        ],
        terms: [
            { label: 'Advance', value: 'ADV' },
            { label: 'PDC 30 days', value: 'PDC-30' },
            { label: 'PDC 60 days', value: 'PDC-60' },
            { label: 'PDC 90 days ', value: 'PDC-90' },
            { label: '45 days from date of invoice', value: 'DI-45' },
            { label: '60 days from date of invoice', value: 'DI-60' },
            { label: '75 days from date of invoice', value: 'DI-75' },
            { label: '90 days from date of invoice', value: 'DI-90' }
        ]
    }

    addSubObj = () => {
        this.setState({ editSubFlag: false });

        this.toggleModal();
    }

    editSubObj = (i) => {
        var obj = this.state.subObjs[i].id;

        this.setState({ editSubFlag: true, subId: obj },this.toggleModal);
    }

    saveObjSuccess(id) {
        this.setState({ editSubFlag: true});
        this.toggleModal();
        this.loadSubObjs();
    }

    searchSubObj = e => {
        var str = e.target.value;
        var filters = this.state.filters;

        filters.search = str;
        this.setState({ filters }, o => { this.loadSubObjs() });
    }

    filterByDate(e, field) {
        var filters = this.state.filters;

        if(e) {
            filters[field + 'Date'] = e.format();
        } else {
            filters[field + 'Date'] = null;
        }

        this.setState({ filters: filters }, g => { this.loadObjects(); });
    }

    onSort(e, col) {
        if (col.status === 0) {
            this.setState({ orderBy: 'id,desc' }, this.loadSubObjs)
        } else {
            var direction = col.status === 1 ? 'desc' : 'asc';
            this.setState({ orderBy: col.param + ',' + direction }, this.loadSubObjs);
        }
    }

    loadSubObjs(offset, callBack) {
        if (!offset) offset = 1;

        var url = server_url + context_path + "api/branches?projection=branch_details&page=" + (offset - 1);


        if (this.state.orderBy) {
            url += '&sort=' + this.state.orderBy;
        }

        url += "&company=" + this.props.currentId;

        if (this.state.filters.search) {
            url += "&name=" + encodeURIComponent('%' + this.state.filters.search + '%');
        }

        url = defaultDateFilter(this.state, url);

        axios.get(url)
            .then(res => {
                    this.setState({
                        subObjs: res.data._embedded[Object.keys(res.data._embedded)[0]],
                        subPage: res.data.page
                    });

                if (callBack) {
                    callBack();
                }
            })
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    loadObj() {
        axios.get(server_url + context_path + "api/" + this.props.baseUrl + "/" + this.props.currentId).then(res => {
            if(res.data.paymentTerms) {
                res.data.paymentTerms = this.state.terms.find(g => g.value === res.data.paymentTerms).label;
            }

            this.setState({ newObj: res.data });

            if(res.data.locationType != 'I') {
                if(!res.data.fssai || !res.data.drugLicense || !res.data.others) {
                    var fileTypes1 = this.state.fileTypes1;

                    if(!res.data.fssai) {
                        fileTypes1[2].noshow = true;
                    }
                    if(!res.data.drugLicense) {
                        fileTypes1[3].noshow = true;
                    }

                    if(!res.data.fssai && !res.data.drugLicense) {
                        fileTypes1[4].noshow = false;
                    }

                    if(!res.data.others) {
                        fileTypes1[5].noshow = true;
                    }

                    this.setState({ fileTypes1 });
                }
            }

            // this.loadSubObjs();

            if(this.props.location.search) {
                let params = queryString.parse(this.props.location.search);
                
                if(params.branch) {
                    this.toggleTab(1);
                }
            }
        });
    }

    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    componentDidMount() {
        console.log('view component did mount');
        console.log(this.props.currentId);

        this.loadObj();
        this.props.onRef(this);
    }

    updateObj() {
        this.setState({ editFlag: true }, () => {
            this.addTemplateRef.updateObj(this.props.currentId);
        })
    }

    saveSuccess(id) {
        this.setState({ editFlag: false});
        this.loadObj();
    }

    cancelSave = () => {
        this.setState({ editFlag: false});
        this.loadObj();
    }



    render() {
        return (
            <div>
                <div className="content-heading">Company</div>
                {!this.state.editFlag &&
                <div className="row">
                    <div className="col-md-12">
                        <AppBar position="static">
                            <Tabs
                                className="bg-white"
                                indicatorColor="primary"
                                textColor="primary"
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                                value={this.state.activeTab}
                                onChange={(e, i) => this.toggleTab(i)} >
                                <Tab label="Details" />
                                <Tab label="Branches" />
                                <Tab label="Contacts" />
                                <Tab label="Documents" />
                            </Tabs>
                        </AppBar>
                        {this.state.newObj &&
                            <TabPanel value={this.state.activeTab} index={0}>
                            <div className="card b">
                                <div className="card-header">
                                    <div className="float-right mt-2">
                                        <Button variant="contained" color="warning" size="xs" onClick={() => this.updateObj()}>Edit</Button>
                                    </div>
                                    <h4 className="my-2">
                                        <span>{this.state.newObj.name}</span>
                                    </h4>
                                </div>
                                <div className="card-body bb bt">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td className="va-middle">
                                                    <strong>Logo</strong>
                                                </td>
                                                <td>
                                                    <Image onRef={ref => (this.imgRef = ref)} baseUrl={this.props.baseUrl}
                                                    parentObj={this.state.newObj}></Image>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Code</strong>
                                                </td>
                                                <td>{this.state.newObj.name}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Type</strong>
                                                </td>
                                                <td>{this.state.newObj.type == 'B' ? 'Buyer' : 'Seller'}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Location</strong>
                                                </td>
                                                <td>{this.state.newObj.locationType == 'I' ? 'International' : 'National'}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Date Of Incorporation</strong>
                                                </td>
                                                <td>
                                                    <Moment format="DD MMM YY">{this.state.newObj.dateOfIncorporation}</Moment>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Email</strong>
                                                </td>
                                                <td>{this.state.newObj.email}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Phone</strong>
                                                </td>
                                                <td>{this.state.newObj.phone}</td>
                                            </tr>
                                        </tbody>

                                            {(this.state.newObj.type == 'V' && this.state.newObj.locationType == 'N') &&
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>Location</strong>
                                                </td>
                                                <td>{this.state.newObj.city}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Pincode</strong>
                                                </td>
                                                <td>{this.state.newObj.pincode}</td>
                                            </tr>
                                        </tbody>}

                                        {(this.state.newObj.type == 'V' && this.state.newObj.locationType == 'I') &&
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>Country</strong>
                                                </td>
                                                <td>{this.state.newObj.country}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Province</strong>
                                                </td>
                                                <td>{this.state.newObj.province}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>City</strong>
                                                </td>
                                                <td>{this.state.newObj.city}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Zipcode</strong>
                                                </td>
                                                <td>{this.state.newObj.zipcode}</td>
                                            </tr>
                                        </tbody>}

                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>Customer Types</strong>
                                                </td>
                                                <td>{this.state.newObj.customerType}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Turn Over</strong>
                                                </td>
                                                <td>{this.state.newObj.turnOver}</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <strong>Rating</strong>
                                                </td>
                                                <td>{this.state.newObj.rating}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Associated Organizations</strong>
                                                </td>
                                                <td>{this.state.newObj.organizations}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Payment Terms</strong>
                                                </td>
                                                <td>{this.state.newObj.paymentTerms}</td>
                                            </tr>


                                            <tr>
                                                <td>
                                                    <strong>Categories</strong>
                                                </td>
                                                <td>{this.state.newObj.categories}</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <strong>Categories Interested</strong>
                                                </td>
                                                <td>{this.state.newObj.categoriesInterested}</td>
                                            </tr>

                                            {this.state.newObj.type == 'B' &&
                                            <tr>
                                                <td>
                                                    <strong>Agent</strong>
                                                </td>
                                                <td>{this.state.newObj.agent == 'N' ? 'No': 'Yes'}</td>
                                            </tr>}
                                        </tbody>

                                        {(this.state.newObj.type == 'B' || this.state.newObj.location == 'N') &&
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>GST IN</strong>
                                                </td>
                                                <td>{this.state.newObj.gstin}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>PAN</strong>
                                                </td>
                                                <td>{this.state.newObj.pan}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>FSSAI NO</strong>
                                                </td>
                                                <td>{this.state.newObj.fssai}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Drug License No</strong>
                                                </td>
                                                <td>{this.state.newObj.drugLicense}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Manufacture license no</strong>
                                                </td>
                                                <td>{this.state.newObj.others}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>MSME</strong>
                                                </td>
                                                <td>{this.state.newObj.msme == 'N' ? 'No': 'Yes'}</td>
                                            </tr>
                                            {this.state.newObj.msme == 'Y' && <tr>
                                                <td>
                                                    <strong>MSME Id</strong>
                                                </td>
                                                <td>{this.state.newObj.msmeId}</td>
                                            </tr>}
                                        </tbody>}
                                    </table>

                                    <Products baseUrl={this.props.baseUrl} onRef={ref => (this.productTemplateRef = ref)} 
                                        currentId={this.props.currentId} type="interested" parentObj={this.state.newObj}></Products>
                                    
                                    <Products baseUrl={this.props.baseUrl} onRef={ref => (this.productTemplateRef = ref)} 
                                        currentId={this.props.currentId} type="focused" parentObj={this.state.newObj}></Products>
                                </div>
                            </div>
                        </TabPanel>}
                        <TabPanel value={this.state.activeTab} index={1}>
                            <Branches baseUrl={this.props.baseUrl} onRef={ref => (this.branchTemplateRef = ref)} 
                            currentId={this.props.currentId} location={this.props.location}></Branches>
                        </TabPanel>
                        <TabPanel value={this.state.activeTab} index={2}>
                            <CompanyContacts company={this.state.newObj} onRef={ref => (this.contactsTemplateRef = ref)}></CompanyContacts> 
                        </TabPanel>
                        <TabPanel value={this.state.activeTab} index={3}>
                            <Upload onRef={ref => (this.uploadRef = ref)} fileFrom={this.props.baseUrl} currentId={this.props.currentId} 
                            fileTypes={this.state.newObj.locationType == 'I' ? this.state.fileTypes2 : this.state.fileTypes1}></Upload>
                        </TabPanel>
                    </div>
                </div>}
                {this.state.editFlag &&
                <div className="card b">
                    <div className="card-body bb bt">
                    <Add baseUrl={this.props.baseUrl} onRef={ref => (this.addTemplateRef = ref)} 
                                onSave={(id) => this.saveSuccess(id)} onCancel={this.cancelSave}></Add>
                    </div>
                </div>}
            </div>)
    }
}

const mapStateToProps = state => ({
    settings: state.settings,
    user: state.login.userObj
})

export default connect(
    mapStateToProps
)(View);