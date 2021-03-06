import React from 'react'
import PropTypes from 'prop-types'

import picAbout from '../images/picAbout.jpg'
import picDonate from '../images/picDonate.jpg'
import picCharity from '../images/picCharity.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="donate"
          className={`${this.props.article === 'donate' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Donate your books</h2>
          <p>We can’t run our bookshop without you.</p>
          <p>
            We rely on readers to pass on their loved books so we can constantly
            re-stock our shelves and offer our customers true literary
            treasures. Our generous book donors are the life blood of the shop –
            without you we just couldn’t keep on raising money.
          </p>
          <p>
            Each summer we pass on our profit to a charity chosen for the
            exceptional work it does either locally or internationally.
          </p>
          <p>
            So don’t leave those books gathering dust on your shelf – pass them
            to us to work their magic again.
          </p>
          <p>
            <a href="MAILTO:englishbookshopstantonin@gmail.com">
              englishbookshopstantonin@gmail.com
            </a>
          </p>
          <span className="image main">
            <img src={picDonate} alt="The English Bookshop Donate" />
          </span>
          {close}
        </article>

        <article
          id="charity"
          className={`${this.props.article === 'charity' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Charity</h2>
          <p>This is the beating heart of The English Bookshop.</p>
          <p>We give our profit to charity.</p>
          <span className="image main">
            <img src={picCharity} alt="The English Bookshop Charity" />
          </span>
          <p>
            If reading can raise money for charities supporting people in need
            then we’re right there.
          </p>
          <p>
            Each year we choose a charity our customers will believe in knowing
            the proceeds after tax from each book they buy is going into action
            where needed.
          </p>
          <p>
            This year we are supporting Le Croix Rouge (Red Cross) here in the
            village for the dedicated work they do for people in daily need, for
            example the foodbank.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            We are readers with heart. We love our shop and love to welcome
            people in.
          </p>
          <p>
            Reading is dreaming; a good book opens minds, experiences and souls.
          </p>
          <span className="image main">
            <img src={picAbout} alt="" />
          </span>
          <p>
            You’ll find us in St Antonin Noble Val, an exquisite medieval
            village nestled in a gorge on the banks of the Aveyron just north of
            Toulouse.
          </p>
          <p>
            When people come to St Antonin they switch off; it’s a world away
            from the bustle of everyday life and we like to believe our bookshop
            can add to that switched off feeling.
          </p>
          <p>
            Our books, mostly fiction, line the shelves up the winding staircase
            and our eclectic collections can sometimes offer real surprises.
          </p>
          <p>Our children's room will offer smiles to all ages</p>
          <p>
            Come and explore. You’ll find a warm smile and a quirky, rustic
            charm.
          </p>
          <p>
            <u>Opening Times</u>
            <table>
              <tr>
                <td style={{ padding: 0 }}>Wednesday to Saturday</td>
                <td style={{ padding: 0 }}>1000 till 1300, 1500 till 1800</td>
              </tr>
              <tr>
                <td style={{ padding: 0 }}>Sunday</td>
                <td style={{ padding: 0 }}>0930 till 1330</td>
              </tr>
            </table>
            <strong>June till September</strong>
          </p>
          {close}
        </article>
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
