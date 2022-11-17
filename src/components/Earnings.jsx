import './css/earnings.css';
import {
  Groups,
  CurrencyRupee,
  LocalOffer,
  AccountBalanceWallet,
} from '@mui/icons-material';

const Earnings = () => {
  return (
    <div className="earnings">
      {/* Referral Banner */}
      <div className="banner">
        <div className="earnings-card">
          <div className="earning-info">
            <div className="earning-info item">
              <h6>Referral Earning</h6>
              <h3>&#8377; 2,500</h3>
            </div>
            <div className="earning-info item">
              <h6>Total Referrals</h6>
              <h3>7</h3>
            </div>
            <div className="earning-info item">
              <h6>Wallet Balance</h6>
              <h3>&#8377; 500</h3>
            </div>
          </div>
          <div className="withdraw">
            <button className="withdraw-button">Withdraw Balance</button>
          </div>
        </div>
        <div className="referral-code">
          <h3>Your Referral Code</h3>
          <div className="code">EDCH54</div>
        </div>
      </div>
      {/* Referral info */}
      <div className="referrals-info">
        <h3 className="referralsInfo-title">How does it work?</h3>
        <div className="referral-info-items">
          <div className="info-item">
            <div className="info-icon">
              <svg width={0} height={0}>
                <linearGradient id="linearColors" x1={0} y1={1} x2={1} y2={1}>
                  <stop offset={0} stopColor="#ff864c" />
                  <stop offset={1} stopColor="#800080" />
                </linearGradient>
              </svg>
              <Groups sx={{ fill: 'url(#linearColors)' }} />
            </div>
            <div className="info-detail">
              <h6>Invite Your Friends</h6>
              <p>Share the link tutedude.com with your friends</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <LocalOffer sx={{ fill: 'url(#linearColors)' }} />
            </div>
            <div className="info-detail">
              <h6>Friend purchases any course</h6>
              <p>Using your REFERRAL CODE in the payments page</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <CurrencyRupee sx={{ fill: 'url(#linearColors)' }} />
            </div>
            <div className="info-detail">
              <h6>You get ₹ 200 as referral money</h6>
              <p>On total purchase the friend makes, into your wallet</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <Groups sx={{ fill: 'url(#linearColors)' }} />
            </div>
            <div className="info-detail">
              <h6>Your Friend gets ₹ 200 Off </h6>
              <p>
                On his overall fee on successful purchase using your referral
                code
              </p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <AccountBalanceWallet sx={{ fill: 'url(#linearColors)' }} />
            </div>
            <div className="info-detail">
              <h6>Transfer money from wallet</h6>
              <p>
                When the wallet balance reaches ₹200 or more, you can withdraw
                it
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="bottom-navigation">
        <h6>Friends Who Enrolled</h6>
        <h6>Terms & Conditions</h6>
      </div>
    </div>
  );
};

export default Earnings;
