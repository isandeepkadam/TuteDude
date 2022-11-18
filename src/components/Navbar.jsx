import './css/navbar.css';
import { AccountCircle, KeyboardArrowDown } from '@mui/icons-material';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left" style={{ height: '100%' }}>
        <img src="./tutedude.png" style={{ height: '100%' }}></img>
      </div>
      <ul className="right">
        <li className="navOptions">My Assignment</li>
        <li className="navOptions">Chat With Mentor</li>
        <li className="navOptions profile">
          <AccountCircle className="profile-icon" />
          <h4>ProfileName</h4>
          <KeyboardArrowDown />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
