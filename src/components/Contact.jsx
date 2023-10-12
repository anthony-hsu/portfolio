import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  const imageUrl = new URL("../assets/contact-photo.jpg", import.meta.url).href;
  const githubLink = "https://github.com/anthony-hsu/";
  const linkedinLink = "https://www.linkedin.com/in/anthony-hsu-73a28985/";

  const openLink = (link) => {
    window.open(link);
  };
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-message contact-body">
          Please get in touch if you think our work could be mutually
          beneficial!
        </p>
        <div className="contact-address">
          <p className="contact-address-street contact-body">123 Fake Street</p>
          <p className="contact-address-city contact-body">
            San Diego, California 92103
          </p>
        </div>
        <div className="contact-phone">
          <PhoneIcon fontSize="large" />
          <p className="contact-phone-number contact-body">123-456-7890</p>
        </div>
        <div className="contact-email">
          <MailOutlineIcon fontSize="large" />
          <p className="contact-email-address contact-body">
            anthhsu@gmail.com
          </p>
        </div>
        <div className="contact-icons">
          <i
            className="devicon-github-original colored about-icon icon"
            onClick={() => openLink(githubLink)}
          ></i>
          <i
            className="devicon-linkedin-plain about-icon icon"
            onClick={() => openLink(linkedinLink)}
          ></i>
          <i className="devicon-twitter-original about-icon icon"></i>
        </div>
      </div>
      <div className="contact-image-container">
        <img src={imageUrl} className="contact-image" />
      </div>
    </div>
  );
}

export default Contact;
