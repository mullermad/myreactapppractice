import React from 'react';
import './Adduser.css';
import { useState } from 'react';
import Card from '../UI/Card'
import Button from '../UI/Button'
 import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {
  //hooks//state managment
const [EnteredUserName,setUserName]=useState('');
  const [EnteredAge, setAge] = useState("");
  const [error,setError]=useState('');
 
    
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
         EnteredUserName.trim().length === 0 || EnteredAge.trim().length === 0
       ) {
        setError({title:'Invalid input',
        message:"Please enter valid input"})
        

         return;
       }
       if(EnteredAge<1){
        setError({
           title: "Invalid Age",
        message: "Please enter valid Age (Age>0)"
        });
       
        return;
       }
       props.onAddUser(EnteredUserName, EnteredAge);
      
       setUserName("");
       setAge("");
     };
     const HandleError=()=>{
      setError(null);
     };
  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={HandleError}
        />
      )}
      <Card>
        <form className="form-control" onSubmit={HandleSubmit}>
          <div className="form-feild">
            <label className="label">UserName</label>
            <input
              type="text"
              id="userName"
              value={EnteredUserName}
              onChange={HandleUserName}
            />
          </div>
          <div className="form-feild">
            <label className="label">Age(Year)</label>
            <input
              id="age"
              type="number"
              value={EnteredAge}
              onChange={HandleAge}
            />
          </div>
          <Button buttonName={"Add User"} />
        </form>
      </Card>
    </div>
  );
}

export default AddUser;