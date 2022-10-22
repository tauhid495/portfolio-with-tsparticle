import React from 'react';
import Particle from '../Particles/Particle';

import Type from '../typist/Type';

const Banner = () => {
    return (
        <div className='relative block w-full mt-4 md:pr-5'>
            <div className="absolute w-full md:pr-5 -z-10">
                <Particle />
            </div>
            <img className='absolute h-[300px] md:h-[400px] w-full md:pr-5 -z-20' src="https://i.ibb.co/LdcDpkH/bg.png" alt="" srcset="" />
            <div className=" hero h-[300px] md:h-[400px]">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className=" text-center ">
                    <div data-aos="fade-in"
                        className="w-auto block">
                        <h1 className="mb-5 text-4xl md:text-5xl font-bold">I'm Shahidul Islam</h1>
                        <Type />
                    </div>
                    <div data-aos="fade-up" className=''>
                        <a target="_blank" href="https://drive.google.com/file/d/1AUi0FOKdBMMhx0te6BLqLXu7kRNfSK3g/view?usp=sharing" rel="noreferrer">
                            <button className="btn btn-primary mt-10">
                                My Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;