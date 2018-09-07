import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style.css';

const IndexPage = () => (
  <div>
    <h1>This is Vipul Basapati.</h1>
    <p>I want to attend the Freecodecamp Hackathon.</p>
    <br/>
    <p>Find Me Here:</p>
    <div className="socialLinks">
      <a href="https://twitter.com/bvipul9523" className="twitter">
        <i className="fab fa-2x fa-twitter-square"></i>
      </a>
      <a href="https://github.com/bvipul" className="github">
        <i className="fab fa-2x fa-github-square"></i>
      </a>
      <a href="https://medium.com/@bvipul" className="medium">
        <i className="fab fa-2x fa-medium"></i>
      </a>
    </div>
  </div>
)

export default IndexPage;
