import friends from '../Data';
import './css/wallet.css';
const Wallet = () => {
  return (
    <div className="enrollment-info">
      <div className="wallet-banner">
        <div className="referral-info">
          <h5>Your Referral Code </h5>
          <h6>EDCH54</h6>
        </div>
        <div className="wallet">
          <h5>Wallet Balance</h5>
          <h6>&#8377;500</h6>
        </div>
      </div>
      <h4 className="referrals-title">Friends who enrolled(3)</h4>
      <div className="referrals-cards">
        {friends.map((friend) => (
          <div className="friend-card" key={friend.id}>
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
      </div>
      <div className="bottom-navigation">
        <h6>Terms & Conditions</h6>
      </div>
    </div>
  );
};

export default Wallet;
