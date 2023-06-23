import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services' className='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>User research and analysis</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>User interface (UI) design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>User experience (UX) design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Prototyping and Wireframing</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Usability testing and user feedback</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive and adaptive design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Integration and collaboration with development teams</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Custom Website Development.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Web application development.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive website development.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>System integration and API.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>E-commerce development.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Performance and speed optimization.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Maintenance and technical support.</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Writing articles and blogs.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Design of infographics and visual material.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Content writing for websites and landing pages.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Audio recording and editing.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Interpretation and live performances.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Collaborations and study sessions.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Consulting and musical advice.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services