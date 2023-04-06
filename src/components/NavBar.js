
 const Nav=()=> {

  return (
    <div className="navbar">
      <div className="title">
        <h2>React NavBar</h2>
      </div>
      <div className="menubar">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Products</a>
        <a href="#">Support</a>
        <button>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;