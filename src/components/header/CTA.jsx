import React from 'react'
import CV from '../../assets/CV-Mariana Franco.pdf'

function CTA() {
  return (
    <div>
        <div className="cta">
            <a href={CV} download className='ctaBtn'>Download CV</a>
            <a href="#contact" className='ctaBtn'>Let's Talk!</a>
        </div>
    </div>
  )
}

export default CTA