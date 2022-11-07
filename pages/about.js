import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return(
        <div>
            <h1>About Me</h1>

            <p className={styles.extraGreen}>Hi Im Prija, I am a Software Engineer, and I make neat stuff with the codes.</p>

            {/* load image locally */}
            <Image 
                src='/prija.png'
                alt='logo'
                width={500}
                height={400}
            />

            {/* <img
                src='/prija.png'
                alt='logo'
            /> */}

            {/* <Image
                src='https://placekitten.com/400/500'
                alt='cat'
                width={400}
                height={500}
            /> */}
        </div>
    )
}