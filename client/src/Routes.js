import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import EmployeeRoute from './auth/EmployeeRoute';
import SellerRoute from './auth/SellerRoute';
import Shop from './core/Shop'
import Cart from './core/Cart'
import Product from './core/Product';
import UserDashboard from './user/UserDashboard';
import AdminDashboard from './user/AdminDashboard';
import EmployeeDashboard from './user/EmployeeDashboard';
import SellerDashboard from './user/SellerDashboard';
import Profile from './user/UserProfile';
import AddCategory from './admin/AddCateogary';
import Report from './admin/Report';
import AddProduct from './seller/AddProduct';
import UpdateProduct from './seller/UpdateProduct';
import ManageProducts from './seller/ManageProducts';
import Orders from './employee/Orders';
import ManageComplaints from './employee/Complaints';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/product/:productId" component={Product} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/cart" component={Cart} />
                <PrivateRoute exact path="/user/dashboard" component={UserDashboard} />
                <PrivateRoute exact path="/profile/:userId" component={Profile} />
                <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
                <AdminRoute exact path="/create/category" component={AddCategory} />
                <AdminRoute exact path="/generate/report" component={Report} />
                <SellerRoute exact path="/seller/dashboard" component={SellerDashboard} />
                <SellerRoute exact path="/create/product" component={AddProduct} />
                <SellerRoute exact path="/seller/products/update/:productId" component={UpdateProduct} />
                <SellerRoute exact path="/seller/products" component={ManageProducts} />
                <EmployeeRoute exact path="/employee/dashboard" component={EmployeeDashboard} />
                <EmployeeRoute exact path="/employee/orders" component={Orders} />
                <EmployeeRoute exact path="/employee/complaints" component={ManageComplaints} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;