import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ nav_links }) => (
  <nav>
    <ul>
      {nav_links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.text}</a>
          {link.submenu && (
            <ul>
              {link.submenu.map((sublink, subindex) => (
                <li key={subindex}>
                  <a href={sublink.url}>{sublink.text}</a>
                  {sublink.submenu_level2 && (
                    <ul>
                      {sublink.submenu_level2.map((sub2link, sub2index) => (
                        <li key={sub2index}>
                          <a href={sub2link.url}>{sub2link.text}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

Navbar.propTypes = {
  nav_links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      submenu: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          submenu_level2: PropTypes.arrayOf(
            PropTypes.shape({
              text: PropTypes.string.isRequired,
              url: PropTypes.string.isRequired,
            })
          ),
        })
      ),
    })
  ).isRequired,
};

export default Navbar;
