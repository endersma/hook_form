import './App.css';
import UserForm from './components/UserForm';
import DisplayData from './components/DisplayData';
import React, {useState} from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <div className="App">
      <UserForm 
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        confirmPass={confirmPass}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPass={setConfirmPass}
      />
      <DisplayData 
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        confirmPass={confirmPass}
      />
    </div>
  );
}

export default App;
