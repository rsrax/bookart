import React from 'react'
import { useState, useEffect } from "react";
import Layout from '../core/Layout'
import './ComplaintCSS.css'
import {getPurchaseHistory} from './apiUser';
import {isAuthenticated} from '../auth';
import {createComplaint} from './apiUser';
export default function Complaint() {
  const {user: {_id, name, email, role}, token} = isAuthenticated();
  const [values, setValues] = useState({
    transaction_id: '',
    title: '',
    complaint: '',
    success: false
});
  const {transaction_id, title, complaint, success} = values;
  const [history, setHistory] = useState([]);

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({...values});
    createComplaint({_id,token,values})
    .then(data => {
        if(data.error)
        {
            setValues({...values, success: false})
        }
        else
        {
            setValues({...values, transaction_id: '', title: '', complaint: '',success: true});
        }
    })

}
const handleChange = name => e => {
  setValues({...values, [name]: e.target.value})
};
  const init = (userId, token) => {
      getPurchaseHistory(userId, token).then(data => {
          if(data.error)
          {
              console.log(data.error)
          }
          else
          {
              console.log(data);
              setHistory(data);
          }
      })
  }

    useEffect(() => {
      init(_id, token)
        
    }, [])
    return (
        <Layout title="Complaint" description={`Complaint For your Orders`}>
        <div className="contact3 py-5">
  <div className="row no-gutters">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="card-shadow">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" className="img-fluid"/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-box ml-3">
            <h1 className="font-weight-light mt-2">Complaint</h1>
            <form className="mt-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <select className='form-control' onChange={handleChange('transaction_id')}>
                            <option value="All">Select Order</option>
                            {history.map((h, i) => (
                                <option key={i} value={h._id}>
                                    {h.transaction_id}
                                </option>
                            ))}
                        </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
    
                    <input  onChange={handleChange('title')} type="text" placeholder="Title" className="form-control" value={title}/>
                  </div>
                </div>
    
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <textarea onChange={handleChange('complaint')} className="form-control" rows="3" value={complaint} placeholder="Complaint "></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" onSubmit={clickSubmit} className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card mt-4 border-0 mb-4">
            <div className="row">
             
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"/>
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Phone</h6>
                    <p className="">98984 51000
                      <br/> 98984 50025</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"/>
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium">Email</h6>
                    <p className="">
                      bookart1@gmail.com
                      <br/> bookart2@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</Layout>
    )
}
