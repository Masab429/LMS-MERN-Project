import React from 'react';
const StudentDashboard = () => (
    <div className="container mt-5">
        <h1>Student Dashboard</h1>
        <div className="row mt-4">
            <div className="col-md-6">
                <div className="card p-3 shadow-sm">
                    <h3>My Courses</h3>
                    <p>View and access your enrolled learning materials.</p>
                    <button className="btn btn-primary">Open Courses</button>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card p-3 shadow-sm">
                    <h3>Profile Page</h3>
                    <p>Update your personal information and password.</p>
                    <button className="btn btn-secondary">Edit Profile</button>
                </div>
            </div>
        </div>
    </div>
);
export default StudentDashboard;