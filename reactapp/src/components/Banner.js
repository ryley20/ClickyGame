import React from 'react';

const style = {
  logoIcon: {
    width: 250,
    heigth: 200
  },
  bgDark: {
    backgroundColor: `rgb(1,0,1)`
  }
}

const Banner = props => (
  <article style={style.bgDark} className="mw7 center ph3 ph5-ns tc br2 pv3 bg-black-90 mb5 animated fadeIn">
    <img style={style.logoIcon} className='logoIcon' src="https://i.ytimg.com/vi/EhgDibw7vB4/maxresdefault.jpg" alt="smashbroslogo"/>
    <h2 className="fw2 f4 lh-copy mt0 mb3 white animated fadeIn slower">
    Click on a character to earn points, but don't click the same character twice or you lose!
    </h2>
  </article>
);

export default Banner;