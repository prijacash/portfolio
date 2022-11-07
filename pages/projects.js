import styles from '../styles/About.module.css'
import Image from 'next/image'


export default function Projects() {
    return (
        <div className='projects'>
            <h1>Projects</h1> 
            <div className='project'>
                <div className='screenshot'>
                <Image 
                src='/dreamplanner.png'
                alt='dreamplanner'
                width={500}
                height={300}
                />
                </div>
                <div className='description'>
                    <h3>Dream Planner   <a href='https://github.com/mousesaver/dreamplanner-backend'><button>GitHub Repo</button></a></h3>
                    <p>A vacation planning full-stack app that allows users to do CRUD operations on their profiles, destinations, and expenses.</p>
                    <p>Frontend websites were created by using React and Tailwind and CRUD operations with the backend were realized by employing Axios and React Router.</p>
                    <p>Backend REST APIs were established using Django, Rest framework, and PostgreSQL.</p>
                    
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <div className='project'>
                <div className='screenshot'>
                    <Image 
                    src=''
                    alt=''
                    width={500}
                    height={300}
                    />
                </div>
                <div className='description'>
                    <h3>Project Info <a href=''><button>Info</button></a></h3>
                    <p>Info on Project</p>
                    <p>Info on Project</p>
                    <p>Info on Project</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

                        <div className='project'>
                <div className='screenshot'>
                    <Image 
                    src=''
                    alt=''
                    width={500}
                    height={300}
                    />
                </div>
                <div className='description'>
                    <h3>Project Info <a href=''><button>Info</button></a></h3>
                    <p>Info on Project</p>
                    <p>Info on Project</p>
                    <p>Info on Project</p>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

            <div className='project'>
                <div className='screenshot'>
                    <Image 
                    src=''
                    alt=''
                    width={500}
                    height={300}
                    />
                </div>
                <div className='description'>
                    <h3>Project Info <a href=''><button>Info</button></a></h3>
                    <p>Info on Project</p>
                    <p>Info on Project</p>
                    <p>Info on Project</p>
                </div>
            </div>
  
        </div>
    )
}