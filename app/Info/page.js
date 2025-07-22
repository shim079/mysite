import Link from 'next/link';
import SplashCursor from './SplashCursor'
import styles from './style.module.css';
import React from 'react'
import { FaAlignRight, Fa42Group, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa6";
import SpotlightCard from './SpotlightCard';


const page = () => {
  return (
    <div className={styles.all}>
     <div className=' p-30 pb-95  '>
                <div className='mb-10'>
                    <h2  className=' relative z-10 pl-30 pt-35 text-white text-4xl text-shadow-lg'>Hi, I’M SHAIMA <span className="multiple-text"></span></h2>
                    <h3 className=' relative z-10 pl-30 mt-3 text-white text-3xl '>Graphic Designer, Full Stack Developer, And a Self-Learner</h3>
                    <h5 className=' relative z-10 pl-30 mt-3 text-white text-1'>I craft intutive, beautiful, and accessible mobile experiences. Passionate about turning ideas into apps that peaple love.</h5>
                </div>
    
                <div className='text-1xl text-white ml-30 flex items-center space-x-9 
                 absolute '>
                    <a href='https://www.linkedin.com/in/shaima-alharbi-7201b822a/'><FaLinkedinIn /></a>
                    <a href='/'><FaTwitter /></a>
                    <a href='https://www.behance.net/shaimas4'><FaBehance /></a>
                    <div className={styles.logo}>
                        <div className={styles.name}>
                            <p className={styles.codeBy}>Code by</p>
                            <p className={styles.shaima}>Shaima</p>
                            <p className={styles.alharbi}>Alharbi</p>
                        </div>
                    </div>
                    
                </div>
                
                
    
    <SpotlightCard className=" w-50 ml-30 mt-25 box-content size-30  content-center  cursor-pointer text-center 
    h-6 text-white [transition:0.5s] rounded-3xl p-1 absolute 
                   custom-spotlight-card">
                
                    <Link
                        href="/Project"> 
                         View My Work
                    </Link>
                
    
            </SpotlightCard>
     
        
    
    
            </div>
            </div>
  )
}

export default page