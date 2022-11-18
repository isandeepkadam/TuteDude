import './css/breadcrumbs.css';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const BreadCrumbs = () => {
  console.log();
  return (
    <header className="breadCrumbs">
      <div className="crumbs">
        <Link to="/">UI/UX</Link>
        <KeyboardArrowRight />
        <Link to="/">Refer & Earn</Link>
        {window.location.href.endsWith('friendsreferred') && (
          <>
            <KeyboardArrowRight />
            <Link>Friends Referred</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default BreadCrumbs;
