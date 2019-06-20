import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
          <li><a href="https://twitter.com/theenglishbookshop1" target="_blank" rel="noreferrer" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="https://www.facebook.com/theenglishbookshop/" target="_blank" rel="noreferrer" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="https://www.instagram.com/theenglish_bookshop/" target="_blank" rel="noreferrer" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="MAILTO:mail@theenglishbookshop.org" target="_blank" rel="noreferrer" className="icon fa-envelope"><span className="label">Mail</span></a></li>
        </ul>
        <p className="copyright">&copy; The English Bookshop. Design: <a href="https://html5up.net" target="_blank" rel="noreferrer">HTML5 UP</a> &amp; <a href="https://l96.netlify.com" target="_blank">L96</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
