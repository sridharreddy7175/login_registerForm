import React, { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <div className="container login">
                <form>
                    <div className="form-group text-center">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control w-50" id="exampleInputEmail1" style={{ margin: "auto" }}
                            placeholder="Enter email" />
                    </div>
                    <div className="form-group text-center">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control w-50" id="exampleInputPassword1"
                            placeholder="Password" style={{ margin: "auto" }} />
                    </div>
                    <div className="text-center">
                        <a href="#" style={{ margin: "auto" }}>Forgot Password?</a>
                    </div>

                    <button className="btn btn-lg btn-danger btn-block w-25 mt-3" 
                        style={{ margin: "auto" }}>Login</button>
                </form>
            </div>
        </div>
    )

}
export default Login;