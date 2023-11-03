import logo from '../../images/logo.png'
import row from '../../images/row.png'
import './index.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="section">
        <p className="head">About</p>
        <li>How it works</li>
        <li>Company</li>
        <li>Help and support</li>
      </div>
      <div className="section">
        <p className="head">For creators</p>
        <li>How can i get paid</li>
        <li>Become a creator</li>
        <li></li>
      </div>
      <div className="section">
        <p className="head">Learn</p>
        <li>Blog</li>
        <li>Cookies policy</li>
        <li>Privacy Policy</li>
      </div>
      <div className="section">
        <p className="head">Support</p>
        <li>Service status</li>
        <li>Report Abuse</li>
        <li>Dispute a payment</li>
      </div>
      <div className="footerLogo">
        <img src={logo} alt="logo" />
        <img src={row} alt="social" />
      </div>
    </div>
  )
}

export default Footer
