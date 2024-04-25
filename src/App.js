import logo from './logo.svg';
import './App.css';
import InputField from './child';
import { useState } from 'react';

function App() {
  const [formData,setFormData] = useState('')
  const [inputValue,setInputValue] = useState('')
  const [error,setError] = useState('')

  const handleInputChange = (value) =>{
   setInputValue(value)
  }

  const handleFormSubmit = (event)=>{
    event.preventDefault()

    if(!inputValue){
      setError("enter something")
    }
    else if(inputValue.length > 1){
      setError("")
    }
    setFormData(inputValue)
    setInputValue('')

  }

  return (
    <div className="App">
      <h2>parent component</h2>
      <form onSubmit={handleFormSubmit}>
<InputField
inputType="text"
inputStyle={{width:'200px',padding:'5px'}}
inputTitle= "Enter Name : "
placeholder = "Enter Your Name"
required={true}
customChangeFunction={handleInputChange}
value={inputValue}
errorMessage={error}
error={error}


/>

<button type='submit'>Submit</button>
</form>
<p>form data : {formData}</p>
    </div>
  );
}

export default App;
