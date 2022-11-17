import './css/navbar.css';
import { AccountCircle, KeyboardArrowDown } from '@mui/icons-material';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left" style={{ height: '100%' }}>
        <img src="src\assets\tutedude.png" style={{ height: '100%' }}></img>
      </div>
      <div className="right">
        <h4 className="navOptions">My Assignment</h4>
        <h4 className="navOptions">Chat With Mentor</h4>
        <div className="navOptions profile">
          <AccountCircle />
          <h4>ProfileName</h4>
          <KeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
