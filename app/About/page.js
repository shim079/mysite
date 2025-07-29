import React from 'react'
import { FaHtml5, FaCss3, FaNodeJs, FaJava, FaReact, FaBootstrap, FaPython, FaGithub, FaDiagramProject } from 'react-icons/fa6';
import Styles from './style.module.css'
import TextPressure from './TextPressure';
import Magnet from './Magnet'

const page = () => {
    return (
        <div className={Styles.Skill}>
            <div className="relative md:h-[200px] md:w-[900px] md:pl-[650px] h-[100px] w-[350px] pt-[40px] pl-[130px] ">
                <TextPressure
                    text="Skills! "
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#ffffff"
                    strokeColor="#ff0000"
                    minFontSize={36}
                />
            </div>


            <div className={Styles.H1Container}>
                <div className={Styles.Content}>
                    I'm a senior-year student at SEU in Jeddah with a strong passion for learning and exploring technologies.
                    My expertise includes Software Develpment, Data Analsis, And Information Security.
                    and I'm always open to learn new tools and technologies.
                </div>
            </div>


            <div className={Styles.Card}>
                <div className={Styles.Icon}>
                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaHtml5 />
                        </div>
                        <div><h2 className={Styles.H2}>HTML</h2></div>
                    </div>


                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaCss3 />
                        </div>
                        <div><h2 className={Styles.H2}>CSS5</h2></div>
                    </div>

                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaJava />
                        </div>
                        <div><h2 className={Styles.H2}>JAVA</h2></div>
                    </div>


                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaBootstrap />
                        </div>
                        <div><h2 className={Styles.H2}>BootStrap</h2></div>
                    </div>


                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaPython />
                        </div>
                        <div><h2 className={Styles.H2}>Python</h2></div>
                    </div>


                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaReact />
                        </div>
                        <div><h2 className={Styles.H2}>React</h2></div>
                    </div>


                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaNodeJs />
                        </div>
                        <div><h2 className={Styles.H2}>NoodJS</h2></div>
                    </div>


                    <div className={Styles.Container}>
                        <div className={Styles.Icon1}>
                            <FaGithub />
                        </div>
                        <div><h2 className={Styles.H2}>GitHub</h2></div>
                    </div>




                </div>



            </div>
            <Magnet padding={70} disabled={false} magnetStrength={20}>
                <button className='hidden sm:inline-block font-sans font-light ml-263 mt-7 p-4 border-2 rounded-3xl '> And more Technical skills! </button>
            </Magnet>
        </div>
    )
}

export default page
