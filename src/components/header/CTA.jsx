import React from 'react';
import CV from '../../assets/Rasif-Taghizade-CV.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-dark">
        CONTACT ME
      </a>
      <a href="/resume.pdf" download className="btn btn-primary">
        GET RESUME ⬇
      </a>
    </div>
  );
};

export default CTA;
