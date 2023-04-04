import React from 'react';
import './Adduser.css';
import { useState } from 'react';
import Card from '../UI/Card'
import Button from '../UI/Button'

const AddUser = (props) => {
  //hooks//state managment
const [EnteredUserName,setUserName]=useState('');
  const [EnteredAge, setAge] = useState("");
 
    
    const HandleUserName=(event)=>{
      setUserName(event.target.value);
      
    };
    const HandleAge=(event)=>{
      setAge(event.target.value);
      
     };

     const HandleSubmit = (event) => {
       event.preventDefault();
       //validations
       if (
         EnteredUserName.trim().length === 0 ||
         EnteredAge.trim().length === 0
       ) {
         return;
       }
       if(EnteredAge<1){
        return;
       }
       props.onAddUser(EnteredUserName, EnteredAge);
      
       setUserName("");
       setAge("");
     };
  return (
    <Card>
      <form className="form-control" onSubmit={HandleSubmit}>
        <div className="form-feild">
          <label className="label">UserName</label>
          <input type="text" id='userName' value={EnteredUserName} onChange={HandleUserName} />
        </div>
        <div className="form-feild">
          <label className="label">Age(Year)</label>
          <input id='age' type="number" value={EnteredAge} onChange={HandleAge}/>
        </div>
        <Button  />
      </form>
    </Card>
  );
}

export default AddUser;