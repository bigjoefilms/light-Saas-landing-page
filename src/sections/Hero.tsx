"use client"
import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import cylinderImage from '@/assets/cylinder.png'
import Image from 'next/image';
import noodleImage from '@/assets/noodle.png'
import {motion,useScroll ,useTransform,useMotionValueEvent} from 'framer-motion'
import { useRef } from 'react';


export const Hero = () => {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target:heroRef,
    offset: ["start end","end start"],
  });
  const translateY = useTransform(scrollYProgress,[0, 1], [150, -150]);

  // useMotionValueEvent(translateY, "change", (latestValue) =>
  // console.log(latestValue) );

  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip" style={{ background: 'radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)' }}>
      <div className="container">
        <div className='md:flex items-center '>
          <div className='md:w-[478px]'>
            <div className="tag">Version 2.0 is here</div>
            <h1 className=" text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-black to-[#001E80]  mt-4">Pathway to productivity</h1>
            <p className="text-xl text[#010D3E] tracking-tight mt-6"> Celebrate the joy of accomplishment with an app designed to 
              track your progress, motivate your efforts and celebrate your succes</p>
              <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1"><span>
              Learn more
                </span>
                <ArrowIcon  className="h-5 w-5"/>
                </button>
              </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative '>
            <motion.img src={cogImage.src} alt='Cog image' className='md:absolute 
            md:h-full md:w-auto md:max-w-none md:left-6 lg:left-0 '
            animate={{translateY: [-30,30],}}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: 'easeInOut'
            }}
            />
           <motion.img src={cylinderImage.src} 
           alt=' cylinder Image' 
           width={220}  
           height={220}
           className='hidden md:block -top-8 -left-32 md:absolute'
           style={{
            translateY: translateY,
           }}
           />
           <motion.img src={noodleImage.src} alt='noodle image' 
           width={220}
           className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]'
           style={{
            rotate: 30,
            translateY: translateY,
           }}
           />
          </div>
        </div>
      </div>
      
    </section>
  );
};
