import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";
import { getProducts, deleteProduct } from "./ApiSeller";

const ManageProducts = props => {
  const [products, setProducts] = useState([]);
  const { user, token } = isAuthenticated();
  const loadProducts = () => {
    getProducts().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        const d = data.filter(p => p.seller === user._id);
        setProducts(d);
      }
    });
  };

  const destroy = productId => {
    deleteProduct(productId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout title="Manage Products" description={`Perform CRUD on products`}>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Total {products.length} Products </h2>
          <hr />
          <ul className="list-group">
            {products.map((p, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                <strong>{p.name}</strong>
                <Link to={`/seller/products/update/${p._id}`}>
                  <span className="badge badge-warning badge-pill">Update</span>
                </Link>

                <button onClick={() => destroy(p._id)} className="badge badge-danger badge-pill">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ManageProducts;
