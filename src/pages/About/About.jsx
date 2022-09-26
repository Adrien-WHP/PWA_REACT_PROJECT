import React from 'react';
import "./About.css";
import aboutImg from '../../images/about-img.jpeg';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt=""/>
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Kili</h2>
            <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore debitis molestias repellendus nobis quaerat quia error in, natus cumque saepe atque delectus iure ipsum provident ea eum architecto, eaque totam qui. Nesciunt sunt iusto quod! Repellat asperiores possimus dolor. Ea voluptatibus adipisci minus sit distinctio! Nemo voluptates accusantium nam!</p>
            <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempore debitis molestias repellendus nobis quaerat quia error in, natus cumque saepe atque delectus iure ipsum provident ea eum architecto, eaque totam qui. Nesciunt sunt iusto quod! Repellat asperiores possimus dolor. Ea voluptatibus adipisci minus sit distinctio! Nemo voluptates accusantium nam!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About