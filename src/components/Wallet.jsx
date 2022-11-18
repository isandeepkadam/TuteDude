import friends from '../Data';
import './css/wallet.css';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
const Wallet = () => {
  return (
    <div className="enrollment-info">
      <Link to="/">
        <div className="nav-back">
          <ArrowBack />
          <span>go back</span>
        </div>
      </Link>
      <section className="wallet-banner">
        <div className="referral-info">
          <h5>Your Referral Code </h5>
          <h6>EDCH54</h6>
        </div>
        <div className="wallet">
          <h5>Wallet Balance</h5>
          <h6>&#8377;500</h6>
        </div>
      </section>
      <h4 className="referrals-title">
        Friends who enrolled
        <span className="enrolled-count">({friends.length})</span>
      </h4>
      <section className="referrals-cards">
        {friends.map((friend) => (
          <div className="card" key={friend.id}>
            <div className="card-title">
              <h5>{friend.name}</h5>
              <h6>{friend.date}</h6>
            </div>
            <h5 className="courses-enrolled-info">
              Courses Enrolled({friend.totalCourses})
            </h5>
            <div className="courses">
              {friend.courses.map((course) => (
                <div key={course} className="chip">
                  <p>{course}</p>
                </div>
              ))}
            </div>
            <div className="referral-amount">
              <p>Referral Amount</p>
              <span>&#8377;{friend.amount}</span>
            </div>
          </div>
        ))}
        <div className="shadow"></div>
      </section>
      <footer className="bottom-navigation">
        <h6>Terms & Conditions</h6>
      </footer>
    </div>
  );
};

export default Wallet;
