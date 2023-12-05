import "./SocialHeader.css";
import { FaInstagram, FaFacebook, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const SocialHeader = () => {
  return (
    <section className="social_container">
      <p className="login_text">
        Already have an account? <a href="#">Login</a>
      </p>
      <div className="contact">
        <span className="tell_no">
          +(234)-806-719-1062
        </span>
        <span className="social_icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaWhatsapp /></a>
        </span>
      </div>

    </section>
  )
}

export default SocialHeader;