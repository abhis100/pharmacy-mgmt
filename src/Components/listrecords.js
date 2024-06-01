import React,{Fragment,useEffect,useState} from "react";
import Updateemployee from "./editrecord";

const Employeelist = () => {

    const [employee,setemployee] = useState([]);

    const deleteemployee = async (id) => {
        try{
            const deleteemployee = await fetch(`http://localhost:5000/employee/${id}`,{
                method:"DELETE"
            }); 
            
        setemployee(employee.filter(e=>e.e_id !== id))
        }catch(err){
            console.error(err.message)
        }
    }

    const getemployee = async () => {
        try{
            const response = await fetch("http://localhost:5000/employee")
            const jsonData = await response.json()
            setemployee(jsonData);
        }catch(err)
        {
            console.error(err.message)
        }
    }


    useEffect(()=>{
        getemployee();
    }, []);

    return (
        <Fragment>
            <br/>
            <br/>
             <table className="table table-dark table-hover table-bordered">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Initials</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                {employee.map(e => (
                    <tr key={e.e_id}>
                        <td>{e.fname}</td>
                        <td>{e.initials}</td>
                        <td>{e.lname}</td>
                        <td>{e.address}</td>
                        <td>{e.phone_no}</td>
                        <td>
                            <Updateemployee e={e}/>
                        </td>
                        <td>
                            <button 
                                className="btn btn-danger"
                                onClick={() => deleteemployee(e.e_id)}
                            >
                                REMOVE
                            </button>
                        </td>
                    </tr>
                ))}    
                </tbody>
            </table>
        </Fragment>
    )
}

export default Employeelist;