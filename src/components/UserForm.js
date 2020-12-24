import React from 'react';

const UserForm = (props) => {

    const containerStyle = {
        marginTop: '100px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
    };

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '400px',
        background: 'gray',
        border: '2px solid black',
        padding: '5px',
        marginBottom: '10px',
    };

    const labelStyle = {
        order: '1',
        paddingRight:'.5em',
        width: '9em'
    };

    const inputStyle = {
        order: '2',
        flex: '1 1 auto',
        height: '25px',
    };

    const {firstName, lastName, email, password, confirmPass, setFirstName, setLastName, setEmail, setPassword, setConfirmPass} = props;

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPass };
    };

    const passwordsDontMatch = () => {
        if(confirmPass === password) {
            return <h2>Passwords match!</h2>
        }
        else {
            return <h2>Passwords don't match!</h2>
        }
    }; 

    return (
        <div style={containerStyle}>
            <form onSubmit={createUser}>
                <div style={divStyle}>
                    <label style={labelStyle} htmlFor='setFirstName'>First Name: </label>
                    <input
                        style={inputStyle} 
                        type="text" 
                        name="setFirstName" 
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div style={divStyle}>
                    <label style={labelStyle} htmlFor="setLastName">Last Name: </label>
                    <input 
                        style={inputStyle}
                        type="text" 
                        name="setLastName" 
                        onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div style={divStyle}>
                    <label style={labelStyle} htmlFor="setEmail">Email Address: </label>
                    <input
                        style={inputStyle} 
                        type="text" 
                        name="setEmail" 
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div style={divStyle}>
                    <label style={labelStyle} htmlFor="setPassword">Password: </label>
                    <input
                        style={inputStyle} 
                        type="text" 
                        name="setPassword" 
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                { passwordsDontMatch()}
                <div style={divStyle}>
                    <label style={labelStyle} htmlFor="setConfirmPass">Confirm Password: </label>
                    <input
                        style={inputStyle} 
                        type="text" 
                        name="setConfirmPass" 
                        onChange={(e) => setConfirmPass(e.target.value)} />
                </div>
            </form>
        </div>
    );
}

export default UserForm;
