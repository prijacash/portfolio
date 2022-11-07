import styles from '../styles/About.module.css'
import Image from 'next/image'


export default function Contact() {
    return (
        <div className='contact'>
            <div className='contacttitle'>
                <h1>Contact Me</h1>
            </div>
            <br></br>
            <div className='contactlogos'>
                <div className='github'>
                    <a href='https://github.com/prijacash'>
                        <img src='/icon.png' alt='github icon' width={70}/>
                    </a>
                </div>
                
                <div className='email'>
                    <a href='https://prijacash@gmail.com'>
                        <img src='/Email.png' alt='email icon' width={100}/>
                    </a>
                </div>
                
                <div className='linkedin'>
                    <a href='https://www.linkedin.com/in/prijacash/'>
                        <img src='/LinkedIn.png' alt='linkedin icon' width={70}/>
                    </a>
                </div>

                
            </div>
        </div>
    )
}