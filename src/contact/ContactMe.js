import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdLocationOn } from 'react-icons/md';
import { MdMarkEmailUnread } from 'react-icons/md';
import { MdWifiCalling3 } from 'react-icons/md';


const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e8qcnvs', 'template_fj4zpok', form.current, 'A141ADNPuBy4inFEz')
            .then((result) => {
                alert('Your message sent');
            }, (error) => {
                alert(error.text);
            });
        e.target.reset();
    };

    return (
        <div className='min-h-screen w-full mt-10'>
            <div className='pl-3'>
                <p className='z-10 text-primary text-xl md:text-3xl relative top-10 md:top-16 drop-shadow-md font-semibold '>Contact</p>
                <p data-aos="slide-right"
                    className='text-4xl md:text-6xl font-semibold text-gray-700'>Contact With Me</p>
            </div>

            <div className='mt-16 md:flex w-full items-center justify-center pr-7'>
                <div className='pl-3 mx-7 md:w-1/2 bg-secondary h-[390px] rounded-xl'>
                    <p><MdLocationOn data-aos="fade-in" className='w-14 h-14 text-primary block mx-auto mt-5' /> </p>
                    <p className='text-center text-xl'>Cornel Hat, Chattagram, Bangladesh. </p>

                    <p><MdMarkEmailUnread data-aos="fade-in" className='w-12 h-12 text-primary block mx-auto mt-7' /> </p>
                    <p className='text-center text-xl'>shahidul.islam.1691.bd@gmail.com
                        <br /> tauhid495@gmail.com </p>

                    <p><MdWifiCalling3 data-aos="fade-in" className='w-12 h-12 text-primary block mx-auto mt-7' /> </p>
                    <p className='text-center text-xl'>(+880) 1755338813 </p>
                </div>

                {/* contact form */}
                <div className='md:w-1/2 mx-7 mt-7 md:mt-0'>
                    <p className='text-center text-xl text-primary md:hidden'>Feel Free To Write</p>
                    <div class="block p-6 rounded-lg shadow-lg bg-secondary w-full">
                        <form ref={form} onSubmit={sendEmail}>
                            {/* name */}
                            <div class="form-group mb-6">
                                <input type="text" class="form-control block
                        w-full bg-gray-200
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-900
                        bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                          focus:outline-none"
                                    id="exampleInput7"
                                    placeholder="Your Name"
                                    name='name' />
                            </div>

                            {/* email */}
                            <div class="form-group mb-6">
                                <input type="email" class="form-control block
                            w-full bg-gray-200
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-900 
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700  focus:outline-none" id="exampleInput8"
                                    placeholder="Email address"
                                    name='email' />
                            </div>

                            {/* subject */}
                            <div class="form-group mb-6">
                                <input type="text" class="form-control block
                        w-full bg-gray-200
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-900
                        bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                          focus:outline-none"
                                    id="exampleInput7"
                                    placeholder="Subject"
                                    name='subject' />
                            </div>

                            {/* message */}
                            <div class="form-group mb-6">
                                <textarea
                                    class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-900 bg-gray-200 bg-clip-padding border border-solid 
                            border-gray-300 rounded transition  ease-in-out m-0 
                            focus:outline-none "
                                    id="exampleFormControlTextarea13"
                                    rows="3"
                                    placeholder="Message"
                                    name='message'
                                ></textarea>
                            </div>

                            <button type="submit" class="
                        px-6 btn-primary btn
                        py-2.5 block mx-auto
                        transition
                        duration-150
                        ease-in-out">
                                Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;