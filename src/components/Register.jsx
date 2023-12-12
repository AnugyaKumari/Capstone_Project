
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/userSlice";


function Register() {
    const userRef = useRef();
    const dispatch = useDispatch();
    const handleRegisterUser = (e) => {
        e.preventDefault();
        // console.log(userRef.current.email.value);
        const {email, userName, password, rePassword } = userRef.current
        if(password.value.trim() !== rePassword.value.trim()){
            alert('Password is not matching');
            return;
        }
        const user = {
            name: userName.value.trim(), 
            email: email.value.trim(),
            password: password.value.trim()
        }
        dispatch(registerUser({data: user}))
    }

	return (
		<>
        <form className="Apps" onSubmit={handleRegisterUser} ref={userRef}>
            <p className="title">Register</p>
				<input name='userName' type="Name" placeholder="Enter your Name"/>
                <input name='email' type="email" placeholder="Enter your Email"/>
				<input name='password' type="password" placeholder="Enter your Password"/>
                <input name='rePassword' type="password" placeholder="Re-enter your Password"/>
				<input type={"submit"}
					style={{ backgroundColor: "#a1eafb" }} />

			</form>
		</>
	);
}

export default Register;
