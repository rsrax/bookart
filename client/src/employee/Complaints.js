import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { getComplaints, updateComplaint } from "./ApiEmployee";

const ManageComplaints = props => {
  const [complaints, setComplaints] = useState([]);
  const { user, token } = isAuthenticated();
  const loadComplaints = () => {
    getComplaints().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setComplaints(data);
      }
    });
  };

  const updateStatus = complaintId => {
    updateComplaint(complaintId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadComplaints();
      }
    });
  };

  // const destroy = (complaintId) => {
  // 	deleteComplaint(complaintId, user._id, token).then((data) => {
  // 		if (data.error) {
  // 			console.log(data.error);
  // 		} else {
  // 			loadComplaints();
  // 		}
  // 	});
  // };

  useEffect(() => {
    loadComplaints();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout title="Manage Complaints" description={`Check user's complaints`}>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Total {complaints.length} complaints </h2>
          <hr />
          <ul className="list-group">
            {complaints.map((c, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                <strong>{c.title}</strong>
                <span>{c.status ? "Resolved" : "Pending"}</span>
                <span>{c.user_id}</span>
                <button onClick={() => updateStatus(c._id)} className="badge badge-danger badge-pill">
                  Update
                </button>

                {/* <span
									onClick={() => destroy(c._id)}
									className="badge badge-danger badge-pill"
								>
									Delete
								</span> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ManageComplaints;
