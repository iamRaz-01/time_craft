import "./sign.css";
import { useState } from "react";

function SignUp() {
	
    const [username , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    let data = [
        { 
            type: "text", 
        icon: "badge", 
        place: "Enter the name",
        event :setName
     },
        {
            type: "email",
            icon: "email",
            place: "Enter your email",
            event:setEmail
        },
        {
            type: "password",
            title: "Password",
            icon: "lock",
            place: "Enter your password",
            event:setPassword
        },
        {
            type: "password",
            title: "Confirm Password",
            icon: "lock",
            place: "Confirm your password",
            event:setConfirmPassword
        },
    ];

    const inputs = data.map((e) => {
		return <Input properties={e} />;
	});
    
    



	return <div className="sign-up">
        <h1>Sign Up</h1>
        {inputs}
        <button className="common-button" onClick={()=>{alert(username+" "+email +" "+ password +" " + confirmPassword)}}>Sign up</button>
        </div>;
}

function Input(props) {
	return (
		<div className="input-div">
			<span className="material-symbols-outlined">{props.properties.icon}</span>
			<input
				type={props.properties.type}
				placeholder={props.properties.place}
				pattern={props.properties.pattern}
				title={props.properties.title}
                onChange={(e)=>{
                    props.properties.event(e.target.value)
                }}
			/>
		</div>
	);
}

export default SignUp;
