import Image from 'next/image'

export default function Projects() {
    return (
        <div className='flex flex-col items-center'>
            <p className='mt-6 text-xl italic'>Projects</p>

            <div className='text-center mt-3'>
                <div className='md:flex items-center gap-5'>
  
                    <a href='https://elaborate-tanuki-10288f.netlify.app/'><img src='https://i.imgur.com/9BZIANX.png' className='project transform transition duration-500 hover:scale-110' /></a>
                    <p><span className='italic text-3xl'><a href='https://elaborate-tanuki-10288f.netlify.app/'>DreamPlanner</a><br></br></span>A vacation expense/budget planner with unique user profiles to track destinations <br></br> Tech stack: React, Python, Django, PostgreSQL</p>
                </div>
            </div>

            <div className='text-center mt-10'>
                <div className='md:flex items-center gap-5'>

                    <p><span className='italic text-3xl'><a href='https://63474bcce7c33a0f52f33153--curious-choux-137367.netlify.app/'>Bloom</a><br></br></span>User can create, browse and purchase courses. User has the ability to add, remove items from cart.  User can also comment on other courses. <br></br> Tech stack: MongoDB, Express, React, Node</p>
                    <a href='https://63474bcce7c33a0f52f33153--curious-choux-137367.netlify.app/'><img src='https://i.imgur.com/Fcab6MV.png' className='project transform transition duration-500 hover:scale-110' /></a>
                </div>
            </div>

            <div className='text-center mt-10'>
                <div  className='md:flex  items-center gap-5'>
     
                    <a href='https://project2-crypto-insight-prijacash.koyeb.app/'><img src='https://i.imgur.com/dVjGTa0.png' className='project transform transition duration-500 hover:scale-110' /></a>
                    <p><span className='italic text-3xl'><a href='https://project2-crypto-insight-prijacash.koyeb.app/'>Crypto Insights</a><br></br></span>List of major Crypto Currencies and have users comment on their market insights on different topics. <br></br> Tech stack: Node, Express, PostgreSQL, Sequelize, EJS</p>
                </div>
            </div>
            
            <div className='text-center mt-10'>
                <div className='md:flex items-center gap-5'>
                    <p><span className='italic text-3xl'><a href='https://prijacash.github.io/Project-1/'>Pokemon Battle</a><br></br></span>A Pokemon battle simulation using DOM manipulation <br></br> Tech stack: JavaScript, HTML, CSS</p>
                    <a href='https://github.com/prijacash/Project-1'><img src='https://i.imgur.com/oRKkqGs.png' className='project transform transition duration-500 hover:scale-110' /></a>

                </div>
            </div>
            
        </div>
    )
}