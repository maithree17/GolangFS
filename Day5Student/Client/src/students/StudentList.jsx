import { useEffect, useState } from "react";
import NavBar from "../Header/NavBar";
import axios from 'axios'
function StudentList() {
    const [students, setStudents]= useState([{id:'',name:'',usn:'',branch:''}])
    const readAllStudents = async () => {
        try {
            const baseUrl = 'http://localhost:8080';
            const response = await axios.get(`${baseUrl}/students`);
            const queriedStudents = response.data;
            setStudents(queriedStudents);
        } catch(error) {
            alert('Server Error');
        }
    };
    

    const deleteStudent = async (id) => {
        if(!confirm("Are you sure to delete?")) {
            return;
        }
        const baseUrl = "http://localhost:8080"
        try {
            const response = await axios.delete(`${baseUrl}/students/${id}`)
            alert(response.data.message)
            await readAllStudents();
        } catch(error) {
            alert('Server Error');
        }
    };
    
    useEffect(()=>{
        readAllStudents();
    },[]);
    return (
        <>
            <NavBar />
            <div className="container mt-5 d-flex flex-column align-items-center">
                <h3 className="mb-4 text-center">List of Students</h3>
                <div className="w-75">
                    <table className="table table-success table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Student name</th>
                                <th scope="col">USN</th>
                                <th scope="col">Branch</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {(students && students.length > 0) ? students.map(
                                (student) =>  {
                                    return (
                                        <tr key={student.id}>
                                            <th scope="row">{student.id}</th>
                                            <td>{student.name}</td>
                                            <td>{student.usn}</td>
                                            <td>{student.branch}</td>
                                            <td>
                                                <a href={`/students/view/${student.id}`} className="btn btn-success">View</a>
                                                &nbsp;
                                                <a href={`/students/edit/${student.id}`} className="btn btn-warning">Edit</a>
                                                &nbsp;
                                                <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    );
                                }
                            ) : <tr><td colSpan="5">No Data Found</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default StudentList;