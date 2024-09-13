import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ contact_info, terms_link, social_links }) => (
  <footer>
    <div>{contact_info}</div>
    <div>
      <a href={terms_link}>Términos y Condiciones</a>
    </div>
    <div>
      {social_links.map((link, index) => (
        <a key={index} href={link.url}>
          <img src={link.icon} alt={link.platform} />
        </a>
      ))}
    </div>
  </footer>
);

Footer.propTypes = {
  contact_info: PropTypes.string.isRequired,
  terms_link: PropTypes.string.isRequired,
  social_links: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
