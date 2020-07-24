import React from 'react';
import '../style/main.css';

function About() {
  return (
    <div className="jumbotron" id="frontHead">
    <h1 className="title"><b>About</b></h1>
    <h4 className="title">Learn more about our Histopathology Web Platform.</h4>
    <br />
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <p>We first decided to test how well deep learning neural networks could perform on Region of Interest (ROI) images.</p>
          <p>We saw some great success, specifically with the binary classification task of sarcoma vs. carcinoma tumors on a small amount of images.</p>
          <p>As a result, we continued our work into multiclass classification as well, looking at different subtypes of carcinoma.</p>
        </div>
        <div className="col-sm">
          <p>This project attempts to leverage the power of deep learning neural networks into a web platform that can be used by pathologists for a quick screening.</p>
          <p>The weights utilized for this project were initially trained from data from the National Cancer Institute's <a href="https://pdmr.cancer.gov/" id="PDMRLink">Patient Derived Models Repository</a>, but we hope to continue training our platform with more data in the near future.</p>
        </div>
      </div>
    </div>
</div>
  );
}

export default About;