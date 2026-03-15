import React from 'react';
const AdminDashboard = () => (
    <div className="container mt-5">
        <h1>Admin Control Panel</h1>
        <div className="list-group mt-4">
            <button className="list-group-item list-group-item-action">
                <strong>Manage Users:</strong> View, Edit, or Remove User Accounts
            </button>
            <button className="list-group-item list-group-item-action">
                <strong>Manage Courses:</strong> Approve or Delete System-wide Courses
            </button>
            <button className="list-group-item list-group-item-action">
                <strong>Reports / Analytics:</strong> View Site Growth and Stats
            </button>
        </div>
    </div>
);
export default AdminDashboard;