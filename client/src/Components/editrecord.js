import React,{Fragment,useState} from "react"

const styles = { color:'red'}
const Updateemployee = ({ e }) =>{

    const [fname,setfname] = useState(e.fname) 
    const [initials,setinitials] = useState(e.initials) 
    const [lname,setlname] = useState(e.lname) 
    const [address,setaddress] = useState(e.address) 
    const [phone_no,setphone_no] = useState(e.phone_no) 

    const editemployee = async k => {
        k.preventDefault();
        try{
            const body = {fname,initials,lname,address,phone_no}
            const response = await fetch(`http://localhost:5000/employee/${e.e_id}`,{
                method:"PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/"
        }catch(err){
            console.error(err.message)
        }
    }
    
    return(
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${e.e_id}`}>
                UPDATE
            </button>


            <div className="modal" id={`id${e.e_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">

                    
                    <div className="modal-header">
                        <h4 className="modal-title" style={styles}>Edit Details</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    
                    <div className="modal-body">
                        <input 
                            type = "text" 
                            className='form-control' 
                            value={fname}
                            onChange={k => setfname(k.target.value)}
                        />
                        <br/>
                        <input 
                            type = "text" 
                            className="form-control" 
                            value={initials}
                            onChange={k => setinitials(k.target.value)}
                        /><br/>
                        <input 
                            type = "text" 
                            className='form-control' 
                            value={lname}
                            onChange={k => setlname(k.target.value)}
                        /><br/>  
                        <input 
                            type = "text" 
                            className='form-control'
                            value={address}
                            onChange={k => setaddress(k.target.value)}
                        /><br/>
                        <input 
                            type = "number" 
                            className='form-control'
                            value={phone_no} 
                            onChange={k => setphone_no(k.target.value)}
                        /><br/>
                    </div>

                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-warning" 
                            data-dismiss="modal"
                            onClick = {k => editemployee(k)}
                        >
                            EDIT
                        </button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Updateemployee;