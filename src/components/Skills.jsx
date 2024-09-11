

const SkillsData = [
    {},
];

function Skills() {
  return (
    <div className='py-10'>
        <div className='container'>
            {/* Header section */}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text
                text-transparent bg-gradient-to-r 
                from-primary to-secondary'>
                    My Skills
                </p>
                <h1
                className='text-3xl font-bold'
                >Skills</h1>
            </div>
            {/* card section */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2
                md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
                    {
                        SkillsData.map(({id, img, name, langages, description})=>{
                            return (
                                <div key={id}
                                data-aos="zoom-in"
                                data-aos-duration="300"
                                data-aos-onse="true"
                                className="dark:bg-gray-800 p-2 hover:bg-primary hover:text-white dark:text-white gap-2">
                                    <div className="h-[100px] w-full mb-8">
                                        <img 
                                            src={img}
                                            alt=""
                                            className="max-w-[200px] mx-auto block
                                            transform  
                                            duration-300"
                                            />                                    

                                    </div>
                                    
                                    <div className="p-4">
                                        <h1 className="text-xl font-bold text-center">{name}</h1>
                                        <p>{langages}</p>
                                        <p className="text-gray-500 text-sm line-clamp-2 
                                        group-hover:text-white duration-300">{description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills