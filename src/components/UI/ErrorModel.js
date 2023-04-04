import React from 'react'
import Card from './Card';
import Button from './Button';
import './errormodel.css';
const ErrorModel = (props) => {
  return (
    <Card className="error-card">
      <div className="errormodel">
        <header>{props.title}</header>
        <div>{props.message}</div>
        <footer>
        
            <Button onClick={props.onConfirm} buttonName={"Okay"} />
          
        </footer>
      </div>
    </Card>
  );
}

export default ErrorModel;