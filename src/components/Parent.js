import React, {useState} from "react"
import Form from "./Form"
import DisplayData from "./DisplayData";

function ParentComponent(){
const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  function handleFirstNameChange(e){
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e){
    setLastName(e.target.value);
  } 
  function handleSubmit(e){
    e.preventDefault();
    console.log("Form submitted!");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  }
  return (
    <div>
    <Form
      firstName={firstName}
      lastName={lastName}
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handleSubmit={handleSubmit}
    />
    <DisplayData firstName={firstName} lastName={lastName}/>
    </div>
  )
}
export default ParentComponent