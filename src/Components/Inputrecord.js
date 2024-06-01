import React,{Fragment,useState} from "react";

const styles = { color:'red'}
const Inputrecord = () => {

    const[e_id,sete_id] = useState(undefined) 
    const[fname,setfname] = useState(undefined) 
    const[initials,setinitials] = useState(undefined) 
    const[lname,setlname] = useState(undefined) 
    const[address,setaddress] = useState(undefined) 
    const[phone_no,setphone_no] = useState(undefined) 

    const onSubmitForm = async e => {
        e.preventDefault();
        try{
            const body = {e_id,fname,initials,lname,address,phone_no}
            const response = await fetch("http://localhost:5000/employee",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)   
            })
            window.location = "/"
        }catch(err){
            console.error(err.message)
        }
    }

    return (
       <Fragment>
           <h1 className="text-center mt-5">Employee list</h1>
           <form className="d-flex mt-5" onSubmit={onSubmitForm}>
               <label>Employee ID:</label>
                <input 
                    type = "number" 
                    className='form-control' 
                    value={e_id}
                    onChange={e=>sete_id(e.target.value)} 
                />
               <br/> 
               <label>First Name:</label>
                <input 
                    type = "text" 
                    className='form-control' 
                    value={fname}
                    onChange={e=>setfname(e.target.value)}
                />
               <br/>
               <label>Initials</label>
                <input 
                    type = "text" 
                    className="form-control" 
                    value = {initials}
                    onChange={e=>setinitials(e.target.value)}
                /><br/>
               <label>Last Name:</label><br/>
                <input 
                    type = "text" 
                    className='form-control' 
                    value = {lname}
                    onChange={e=>setlname(e.target.value)}
                /><br/>  
               <label>Address:</label><br/>
                <input 
                    type = "text" 
                    className='form-control' 
                    value = {address}
                    onChange={e=>setaddress(e.target.value)}
                /><br/>
               <label>Phone Number:</label><br/>
                <input 
                    type = "number" 
                    className='form-control' 
                    value ={phone_no}
                    onChange={e=>setphone_no(e.target.value)}
                /><br/>
                <button className="btn btn-success">Add</button>
           </form>
       </Fragment>
    );
};

export default Inputrecord;