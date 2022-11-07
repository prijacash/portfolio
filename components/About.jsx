

import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div className=''>

            <div className='flex justify-center'>
                <img src='https://i.imgur.com/Wg1Ro1q.png' alt='photo of Prija' className='rounded-full mt-5' />
            </div>
            
            <p className='mt-7'>Hello world! I&#39;m Prija, a full stack software developer based in Orange County.<br></br> I began coding in the fall of 2022, and I was quickly immersed and facinated with the developer world.<br></br> I would love to hear any questions/collaboration proposals you might have!</p>


        </div>
    )
}