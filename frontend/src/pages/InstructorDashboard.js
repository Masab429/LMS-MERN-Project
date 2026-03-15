import React from 'react';
const InstructorDashboard = () => (
    <div className="container mt-5">
        <h1>Instructor Dashboard</h1>
        <div className="row mt-4">
            <div className="col-md-4">
                <div className="card p-3 shadow-sm text-center">
                    <h4>Create Course</h4>
                    <button className="btn btn-success mt-2">Add New</button>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3 shadow-sm text-center">
                    <h4>Manage Courses</h4>
                    <button className="btn btn-warning mt-2">Edit/Update</button>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-3 shadow-sm text-center">
                    <h4>Upload Lessons</h4>
                    <button className="btn btn-info mt-2">Upload File</button>
                </div>
            </div>
        </div>
    </div>
);
export default InstructorDashboard;