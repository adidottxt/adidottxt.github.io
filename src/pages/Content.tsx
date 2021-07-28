import React from 'react'

import Link from 'components/Link'
import Header from 'components/Header'
import Subheader from 'components/Subheader'

import Mail from 'icons/Mail'
import Arena from 'icons/Arena'
import Github from 'icons/Github'
import Instagram from 'icons/Instagram'

const Content = () => (
  <>
    <Header className="header" title="adi manjunath" />
    <div className="text">
      <Subheader title="presently:" />
      software dev &amp; design at&nbsp;
      <Link
        title="kepler"
        className="kepler"
        href="https://kyu.com/members/kepler-group"
      />
    </div>
    <div className="text">
      <Subheader title="previously:" />
      computer science at the&nbsp;
      <Link
        className="penn"
        href="https://www.upenn.edu"
        title="university of pennsylvania"
      />
      ,<br />
      marketing &amp; communication at the&nbsp;
      <Link
        className="usc"
        href="https://www.usc.edu"
        title="university of southern california"
      />
      , <br />
      research on gaze cueing in ads at the&nbsp;
      <Link
        className="wharton"
        href="https://neuro.wharton.upenn.edu"
        title="wharton neuroscience initiative"
      />
      ,<br />
      ad campaigns &amp; copy at&nbsp;
      <Link
        className="vayner"
        title="vaynermedia"
        href="https://vaynermedia.com"
      />
    </div>
    <div className="text">
      <Subheader title="occasionally:" />
      <Link
        className="soundcloud"
        title="make &amp; mix music"
        href="https://soundcloud.com/astdotwav"
      />
      ,<br />
      <Link
        className="photo"
        title="photograph places &amp; people"
        href="https://adi.photos/"
      />
      ,<br />
      <Link
        className="society6"
        title="experiment with generative art"
        href="https://society6.com/adidotpng"
      />
    </div>
    <div className="logos">
      <a href="https://www.are.na/adi">
        <Arena className="arena icon" />
      </a>
      <a href="https://www.github.com/adidottxt">
        <Github className="github icon" />
      </a>
      <a href="mailto:work@adithya.co">
        <Mail className="email icon" />
      </a>
    </div>
  </>
)

export default Content
