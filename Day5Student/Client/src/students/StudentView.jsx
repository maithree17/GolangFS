import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Header/NavBar";
import axios from 'axios'
function StudentView() {
    const [student, setStudent] = useState({id:'',name:'',usn:'',branch:''});
    const params= useParams();
    const readById = async () => {
        const baseUrl = "http://localhost:8080"
        try {
            const response = await axios.get(`${baseUrl}/students/${params.id}`)
            const queriedStudent = response.data;
            setStudent(queriedStudent);
        } catch(error) {
            alert('Server Error');
        }
    };
    useEffect(() => {
        readById();
    },[]);
    return(
        <>
        <NavBar/>
        <div className="container mt-5 d-flex flex-column align-items-center">
            <h3 className="mb-4 text-center">View Student</h3>
            <div className="card p-4 shadow-sm w-50">
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Student Name:</label>
                    <div className="form-control" id="name">{student.name}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="usn" className="form-label">Student usn:</label>
                    <div className="form-control" id="usn">{student.usn}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="branch" className="form-label">Student branch:</label>
                    <div className="form-control" id="branch">{student.branch}</div>
                </div>
            </div>
            <a href="/students/list" className="btn btn-outline-primary mt-4 align-self-start go-back-btn">Go Back</a>
        </div>
    </>
    );
}

export default StudentView;