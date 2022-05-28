import React from 'react';
import './styles.css';
import { useParallax } from 'react-scroll-parallax'
const Panel = () => {
  const panelParallax = useParallax({
    scaleX: [1, 0, 'easeInQuad'],
  });

    return(
      <div className="card" ref={panelParallax.ref}>
        <h1>Google</h1>
        <p>Everything is here</p>
      </div>
    )
  }
export default Panel;