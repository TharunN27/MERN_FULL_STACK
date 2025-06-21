import "./style/Login.css";
function Login() {
    return (
        <div className="login-center">
            <div className="login-box">
                <img  className="image" src="https://i.pinimg.com/originals/c4/ff/c0/c4ffc08d8d41bf1416a78e5ea2b734f5.jpg" alt="image"></img>
                <h1 className="Login">Login</h1>
                <input type="text" placeholder="Enter username" />
                <input type="password" placeholder="Enter password" />
                <input type="submit" value="Login" />
            </div>
        </div>
    )
};
export default Login;