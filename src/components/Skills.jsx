import goImg from "../assets/go.png"
import jsImg from "../assets/js.png"
import cImg from "../assets/c.png"
import rustImg from "../assets/rust.png"
import nodeImg from "../assets/node.png"
import expressImg from "../assets/express-js.png"
import reactImg from "../assets/react.png"
import ginImg from "../assets/gin.png"
import fiberImg from "../assets/fiber.png"

const SkillsData = [
    {
        id : 1,
        name : "Golang",
        img : goImg,
    },
    {
        id : 2,
        name : "JavaScript",
        img : jsImg,   
    },
    {
        id : 3,
        name : "C",
        img : cImg,   
    },
    {
        id : 4,
        name : "Rust",
        img : rustImg,   
    },
    {
        id : 5,
        name : "Node Js",
        img : nodeImg,   
    },
    {
        id : 6,
        name : "Express Js",
        img : expressImg,   
    },
    {
        id : 7,
        name : "React",
        img : reactImg,   
    },
    {
        id : 9,
        name : "Gin",
        img : ginImg,   
    },
    {
        id : 10,
        name : "Fiber",
        img : fiberImg,   
    },
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
            {/* Images section */}
            <div>
                <div className="grid grid-cols-2 sm:grid-cols-4
                md:grid-cols-4 gap-14 md:gap-5 place-items-center ">
                    {
                        SkillsData.map(({id, name, img})=>{
                            return (
                                <div key={id}
                                    data-aos="zoom-in"
                                    data-aos-duration="300"
                                    data-aos-onse="true"
                                    className="dark:bg-gray-800 p-2 hover:text-white dark:text-white gap-2">
                                    <div className="h-[100px] w-full mb-8">
                                        <img 
                                            src={img}
                                            alt=""
                                            className="max-w-[150px] mx-auto block hover:scale-y-50
                                            transform  
                                            duration-300"
                                            />                                    
                                    </div>
                                    <p className="font-bold text-center hidden hover:flex">{name}</p>
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