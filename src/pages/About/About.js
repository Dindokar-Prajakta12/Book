import React from 'react';
import "./About.css";
// import aboutImg from "../../images/about-img.jpg";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Books contain all the information we need to learn and remember.
               There are many different types of books, such as textbooks, story books and reference encyclopedias. 
               It is vital to cultivate the habit of reading books, especially in kids. Reading books improves concentration and reading skills</p>
            <p className='fs-17'>But what makes a book good? A captivating story and character development are always key indicators 
              for me, which explains why I would much rather read a book than watch a movie. The author needs to be able to write the 
              story in a way that attracts a reader and keeps the reader's attention.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
