import React from 'react'
import PropTypes from 'prop-types'

import logo from '../images/logo.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <img src={logo} className="logo" alt="The English Bookshop" />
        <div className="content">
            <div className="inner">

                <p>The English Bookshop St Antonin Noble Val</p><p>Second chance books to discover and love again</p><p>Raising money from reading to help others in need</p>

            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('donate') }}>Donate Books</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('charity') }}>Charity</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
            </ul>
        </nav>
    </header >
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
