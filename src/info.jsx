import React from 'react';

export default function Info() {
  return (
    <div className='info'>
      <img className='person-img' src='../public/men.jpg' alt='' />
      <div className='person-info'>
        <h1>Albert dera</h1>
        <h3 className='sub-h'>Front End Developer</h3>
        <p className='info-p'>Abul Wali Khan University Mardan</p>
      </div>
      <div className='social-links'>
        <a href='#'>
          <button className='btn btn-email'>Email</button>
        </a>
        <a href='#'>
          <button className='btn btn-linkedin'>LinkedIn</button>
        </a>
      </div>
    </div>
  );
}
