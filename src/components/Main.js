import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="donate" className={`${this.props.article === 'donate' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Donate your books</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>We can’t run our bookshop without you.</p>
          <p>We rely on readers to pass on their loved books so we can constantly re-stock our shelves and offer our customers true literary treasures. Our generous book donors are the life blood of the shop – without you we just couldn’t keep on raising money.</p>
          <p>Each summer we pass on our profit to a charity chosen for the exceptional work it does either locally or internationally.</p>
          <p>So don’t leave those books gathering dust on your shelf – pass them to us to work their magic again.</p>
          <p><a href="MAILTO:mail@theenglishbookshop.org">mail@theenglishbookshop.org</a></p>
          {close}
        </article>

        <article id="charity" className={`${this.props.article === 'charity' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Charity</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>This is the heart of The English Bookshop.</p>
          <p>We give our profit to charity.</p> 
          <p>If reading can raise money for charities supporting people in need then we’re right there.</p>
          <p>Each year we choose a charity our customers will believe in knowing the proceeds after tax from each book they buy is going into action where needed.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>
        {/* <ul className="icons">
          <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
        </ul> */}

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main