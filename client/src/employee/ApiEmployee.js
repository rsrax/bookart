// Fetch all orders for employee
export const listOrders = (userId, token) => {
    return fetch(`/api/order/list/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err));
}

// Get status values of all orders
export const getStatusValues = (userId, token) => {
    return fetch(`/api/order/status-values/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// Update status values
export const updateOrderStatus = (userId, token, orderId, status) => {
    return fetch(`/api/order/${orderId}/status/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status, orderId })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// Get all complaints
export const getComplaints = () => {
    return fetch(`/api/complaints?limit=100`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// Update a complaint
export const updateComplaint = (complaintId, userId, token) => {
    return fetch(`/api/complaint/${complaintId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        //body: complaintData   // not stringify because we are using form data as image is also there
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// // Delete a complaint
// export const deleteComplaint = (complaintId, userId, token) => {
//     return fetch(`/api/complaint/${complaintId}/${userId}`, {
//         method: "DELETE",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//         }
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };