
import React, { useRef, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../redux/userSlice";
import { Navigate } from "react-router"


function Login() {
	const userRef = useRef();
	const dispatch = useDispatch();
	const user = useSelector(app => app.user)
	
	const handleLogin = (e) => {
		e.preventDefault();
		const {email, password} = userRef.current

		const userData = {
			email: email.value,
			password: password.value.trim()
		}
		dispatch(loginUser({data: userData}))

	}
	console.log(user.loggedIn)
	if(user.loggedIn){
		return <Navigate to='/product'></Navigate>
	}

	return (
		<>
			<form className="Apps" onSubmit={handleLogin} ref={userRef}>
				<p className="title">Login</p>
				<input name='email' type="email" placeholder="Enter your email" />
				<input name='password' type="password" placeholder="Enter your password" />
				<input type={"submit"}
					style={{ backgroundColor: "#a1eafb" }} />
				<p class="text-center text-muted mt-5 mb-0">Not a member?
					<Link to='/register' class="fw-bold text-body"><u>Register</u></Link></p>
			</form>
		</>
	);
}

export default Login;
