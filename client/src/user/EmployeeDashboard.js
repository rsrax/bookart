import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';

const EmployeeDashboard = () => {

    const {user: {_id, name, email, role}} = isAuthenticated();

    const empLinks = () => {
        return (
            <div className="card mb-5">
                <h4 className="card-header text-center">Employee Links</h4>
                <ul className="list-group">
                    <li className="list-group-item"><Link to="/employee/orders" className="nav-link">Manage Orders</Link></li>
                    <li className="list-group-item"><Link to="/employee/complaints" className="nav-link">Manage Complaints</Link></li>
                </ul>

            </div>
        )
    }

    const empInfo = () => {
        return (
            <div className="card mb-5">
            <h3 className="card-header text-center">Employee Information</h3>
            <ul className="list-group">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{role === 2 ? `Employee id : ${_id}`: `User id : ${_id}`}</li>
            </ul>
            </div>
        )
    }

    return (
        <Layout title="Employee Dashboard" description={`Welcome, ${name}`} className="container-fluid">
            <div className="row">
                <div className="xs-col-12 col-sm-4">
                    {empLinks()}
                </div>

                <div className="xs-col-12 col-sm-8">
                    {empInfo()}
                </div>
            </div>
        </Layout>
    )
}

export default EmployeeDashboard;
