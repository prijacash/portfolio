

import Image from 'next/image'

export default function Contact() {
    return (
        <div className='mt-10'>
            <div className='flex justify-center mt-1'>
                <p>Contact Me | 
                    <a href='https://docs.google.com/document/d/1UvjA-Ue6rGHsNs7tKLyBrmKeW-u4oYSmmmYesMX8ehI/edit?usp=sharing'>
                        Resume
                    </a>
                </p>
                <br></br>

                <div className='mr-1  transform transition duration-500 hover:scale-110'>
                    <a href='https://www.linkedin.com/in/prijacash/'>
                        <Image
                            src='/linkedin.png'
                            alt='LinkedIn logo'
                            height='75'
                            width='75'
                        />
                    </a>
                </div>

                <div className='transform transition duration-500 hover:scale-110'>
                    <a href='https://github.com/prija-cash'>
                        <Image
                            src='/github.png'
                            alt='Github logo'
                            height='75'
                            width='75'
                        />
                    </a>
                </div>

            </div>
        </div>
    )
}