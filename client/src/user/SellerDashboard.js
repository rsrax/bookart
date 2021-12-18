import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';

const SellerDashboard = () => {

    const {user: {_id, name, email, role}} = isAuthenticated();

    const sellerLinks = () => {
        return (
            <div className="card mb-5">
                <h4 className="card-header text-center">Seller Links</h4>
                <ul className="list-group">
                    <li className="list-group-item"><Link to="/create/product" className="nav-link">Create Product</Link></li>
                    <li className="list-group-item"><Link to="/seller/products" className="nav-link">Manage Products</Link></li>
                </ul>

            </div>
        )
    }

    const sellerInfo = () => {
        return (
            <div className="card mb-5">
            <h3 className="card-header text-center">Seller Information</h3>
            <ul className="list-group">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{role === 3 ? 'Seller': `User id : ${_id}`}</li>
            </ul>
            </div>
        )
    }

    return (
        <Layout title="Seller Dashboard" description={`Welcome, ${name}`} className="container-fluid">
            <div className="row">
                <div className="xs-col-12 col-sm-4">
                    {sellerLinks()}
                </div>

                <div className="xs-col-12 col-sm-8">
                    {sellerInfo()}
                </div>
            </div>
        </Layout>
    )
}

export default SellerDashboard;
