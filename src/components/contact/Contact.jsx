import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FiInstagram } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'


import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs
            .sendForm('service_8og69sn', 'template_hkrv5dl', form.current, 'p7TxsLapQc5uOGrQ1')
            .then(
                (result) => {
                    Swal.fire('Your message has been sent!', 'Thanks!', 'success');
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    

    return (
        <section id='contact' className='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h6 className='email'>diegoesteban.ders@gmail.com</h6>
                        <a href="mailto:diegoesteban.ders@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FiInstagram className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>diegooders</h5>
                        <a href="https://www.instagram.com/diegooders/">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+56972893848</h5>
                        <a href="https://wa.me/56972893848">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Ful Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact