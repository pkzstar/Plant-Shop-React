import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navBarContainer">
      <div className="navBarOptions">
        <a href="/"><img
          src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/04/Evergreen-Business-Logo.png"
          alt="Logo"
          className="navBarHeaderImg"
        /></a>
        <Link to='/plants'>Plants</Link>
        <Link to="/soils">Soil</Link>
        </div>
    </div>
  );
}

export default NavBar;
