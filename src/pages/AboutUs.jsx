import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs = () => {
  const slogan = 'We Are A Family.';
  const words = slogan.split(' ');
  const wordRefs = useRef([]);
  const boxes = [
    { Name: 'Box1' },
    { Name: 'Box2' },
    { Name: 'Box3' },
    { Name: 'Box4' },
    { Name: 'Box5' },
  ];

  useGSAP(() => {
    gsap.from(wordRefs.current, {
      scale: 0.9,
      opacity: 0,
      y: 25,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power3.out',
      rotate: 3,
      filter: 'blur(7px)',
    });
  }, []);

  return (
    <div className="page flex items-center justify-center flex-col px-4 py-12 text-center gap-15">
      <div className="flex flex-wrap justify-center gap-4 md:gap-7 mt-10 sm:mt-20 md:mt-30 lg:mt-40 xl:mt-45">
        {words.map((item, idx) => (
          <span
            key={idx}
            ref={el => (wordRefs.current[idx] = el)}
            className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] text-white font-[nmr] leading-13 tracking-tight"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
