import React from 'react';
import CV from '../../assets/Sahil_Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-dark">
        CONTACT ME
      </a>
      <a href={CV} download className="btn btn-primary">
        GET RESUME ⬇
      </a>
    </div>
  );
};

export default CTA;
