
const Login=()=> {
  
  return (
    <div className="login-main">
      <h3>Login Form </h3>
      <div>
        <input type="text" placeholder="User Name"       
        />
      </div>
      <br />
      <div>
        <input
          type="password"
          placeholder="Password" />
      </div>
      <br />
      <div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;