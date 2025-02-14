import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Header/NavBar";
import axios from 'axios'
function StudentEdit() {
    const [student, setStudent] = useState({id:'',name:'',usn:'',branch:''});
    const params= useParams();
    const navigate = useNavigate();
    const txtBoxOnChange = event => {
        const updatableStudent = {...student};
        updatableStudent[event.target.id] = event.target.value;
        setStudent(updatableStudent);
    };
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
    const updateStudent = async () => {
        const baseUrl = "http://localhost:8080"
        try {
            const response = await axios.put(`${baseUrl}/students/${params.id}`,{...student})
            const updatedStudent = response.data.student;
            setStudent(updatedStudent);
            alert(response.data.message)
            navigate('/students/list')
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
            <h3 className="mb-4 text-center">Edit Student</h3>
            <div className="card p-4 shadow-sm w-50">
                <div className="form-group mb-3">
                    <label htmlFor="text" className="form-label">Student Name:</label>
                    <input type="text" className="form-control" id="text" 
                        placeholder="please enter student name"
                        value={student.name} 
                        onChange={txtBoxOnChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="usn" className="form-label">Student usn:</label>
                    <input type="text" className="form-control" id="usn" 
                        placeholder="please enter student usn"
                        value={student.usn} 
                        onChange={txtBoxOnChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="branch" className="form-label">Student branch:</label>
                    <input type="text" className="form-control" id="branch" 
                        placeholder="please enter student branch"
                        value={student.branch} 
                        onChange={txtBoxOnChange}/>
                </div>
                <button className="btn btn-success"
                    onClick={updateStudent}>Update Student</button>
            </div>
            <a href="/students/list" className="btn btn-outline-primary mt-4 align-self-start go-back-btn ">Go Back</a>
        </div>
    </>
    );
}

export default StudentEdit;