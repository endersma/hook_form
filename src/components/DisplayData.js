import React from 'react';

const DisplayData = (props) => {

const containerStyle = {
    margin: 'auto',
    width: '400px',
};

const h3Style = {
    textAlign: 'center',
};

const pStyle = {
    textAlign: 'left',
};

    const {firstName, lastName, email, password, confirmPass} = props;

    return (
        <div style={containerStyle}>
            <h3 style={h3Style}>Display User Data</h3>
            <div style={pStyle}>
                <p>First Name: { props.firstName }</p>
                <p>Last Name: { props.lastName }</p>
                <p>Email: { props.email }</p>
                <p>Password: { props.password }</p>
                <p>Confirm Password: { props.confirmPass }</p>
            </div>
        </div>
    );
}

export default DisplayData;