import React from 'react';
import '../../css/footer.css';
import sanin from '../../assets/svg/sanin.svg';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg';
import github from '../../assets/svg/github.svg';
import instagram from '../../assets/svg/instagram.svg';


const Footer = () => {
  return (
    <footer className="Footer">
      <div className="logo-grid">
        <img src={sanin} alt="sanin logo"/>
      </div>
      <div className="links-grid">
        <h4>
          LINKS
        </h4>
        <ul>
          <li><a>CHARACTERS</a></li>
          <li><a>HOUSES</a></li>
          <li><a>SPELLS</a></li>
          <li><a>SORTING HAT</a></li>
          <li><a>ABOUT</a></li>
        </ul>
      </div>
      <div className="social-grid">
        <div>
          
        </div>
        <a href="https://github.com/ADRE9" className="social-button">
          <img
            src={github}
            alt="github" />
        </a>
        <a
          href="https://twitter.com/iam_mak13" className="social-button">
          <img
            src={twitter}
            alt="twitter" />
          
        </a>
        <a
          href="https://www.facebook.com/md.arshad.3114935" className="social-button">
          <img
            src={facebook}
            alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/immak13/" className="social-button">
          <img
            src={instagram}
            alt="instagram" />
        </a>
      </div>
    </footer>
  )
};

export default Footer;
