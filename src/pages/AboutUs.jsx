import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs = () => {
  const slogan = 'We Are A Family.';
  const words = slogan.split(' ');
  const wordRefs = useRef([]);
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const pinContainerRef = useRef(null); // Container for pin effect
  const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const paragraphWords = paragraph.split(' ');

  const boxes = [
    { Name: 'Box1' },
    { Name: 'Box2' },
    { Name: 'Box3' },
    { Name: 'Box4' },
    { Name: 'Box5' },
  ];

  // Framer Motion scroll progress for the text container
  const { scrollYProgress: textScrollProgress } = useScroll({
    target: containerRef,
    offset: ['center center', 'start start'],
    layoutEffect: false
  });
  const textOpacity = useTransform(textScrollProgress, [0, 0.3, 0.7, 1], [0, 0, 1, 1])

    // Text animation with GSAP (keeping this since it works well)
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

  // Framer Motion scroll progress for the pin effect
  const { scrollYProgress: pinScrollProgress } = useScroll({
    target: pinContainerRef,
    offset: ['start end', 'end start'],
    layoutEffect: false
  });

  // Transform values for the pinned element
  const scale = useTransform(pinScrollProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0]);
  const opacity = useTransform(pinScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(pinScrollProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  // New: Individual word color animations - each word changes color at different scroll points
  const wordColorTransforms = paragraphWords.map((_, index) => {
    const totalWords = paragraphWords.length;
    const startProgress = (index / totalWords) * 0.7; // Start between 0 and 0.7
    const endProgress = Math.min(startProgress + 0.3, 1); // Each word gets 0.3 range
    
    return useTransform(
      pinScrollProgress,
      [0, startProgress, endProgress, 1],
      ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)']
    );
  });

  useEffect(() => {
    const unsubscribe = textScrollProgress.on('change', (value) => {
      console.log('Text Scroll Progress:', value);
    });
    
    return () => unsubscribe();
  }, [textScrollProgress]);

  useEffect(() => {
    const unsubscribe = pinScrollProgress.on('change', (value) => {
      console.log('Pin Scroll Progress:', value);
    });
    
    return () => unsubscribe();
  }, [pinScrollProgress]);

  return (
    <div className="page flex items-center justify-center flex-col px-4 py-4 text-center gap-15">
      <div 
        ref={containerRef}
        className="h-1/2 flex flex-wrap justify-center gap-4 md:gap-7 mt-10 sm:mt-20 md:mt-30 lg:mt-40 xl:mt-45"
      >
        {words.map((item, idx) => (
          <motion.span
            key={idx}
            ref={el => (wordRefs.current[idx] = el)}
            className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] text-white font-[nmr] leading-13 tracking-tight"
            style={{rotate: textScrollProgress}}
          >
            {item}
          </motion.span>
        ))}
      </div>

      {/* Pin container - this creates the "pin" effect by having a tall height */}
      <div ref={pinContainerRef} className="relative h-[300vh] w-full">
        {/* Sticky container that creates the pin effect */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <motion.div 
            ref={pinRef} 
            className='h-[95vh] bg-[#09090B] w-full z-10 rounded-lg border-2 border-[#708873]'
            style={{
              scale: scale,
              opacity: opacity,
              y: y,
              scaleY: useTransform(pinScrollProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8])
            }}
          >
            {/* Your content goes here */}
            <div className="h-full flex items-center px-5 text-2xl text-center">
              <motion.div 
                className='font-[inknut] w-full lg:w-full text-[4vw] md:text-[2vw]' 
                style={{
                  opacity: textOpacity
                }}
              >
                {paragraphWords.map((word, index) => (
                  <motion.span
                    key={index}
                    style={{
                      color: wordColorTransforms[index]
                    }}
                  >
                    {word}{index < paragraphWords.length - 1 ? ' ' : ''}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='h-screen bg-emerald-900 w-full'>After pin section 1</div>
    </div>
  );
};

export default AboutUs;