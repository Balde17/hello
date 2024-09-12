import startImg from "../assets/star.png"

const cadresData = [
    {
        id : 1,
        name : "Restfull API",
        level: 5
    },
    {
        id : 2,
        name : "Frontend development",
        level: 4
    },
    {
        id : 3,
        name : "SysAdmin",
        level: 4
    },
    {
        id : 4,
        name : "Web design",
        level: 3
    }
]

const Cadres = () => {
    return (
        <div className="px-20">
            <div className="grid grid-cols-2 sm:grid-cols-3
                md:grid-cols-4 gap-14 md:gap-5 place-items-center ">
                    {
                        cadresData.map(({id, name, level})=>{
                            return (
                                <div key={id}
                                data-aos="zoom-in"
                                data-aos-duration="300"
                                data-aos-onse="true"
                                className="dark:bg-gray-800 rounded-md justify-items-center p-2 hover:bg-primary hover:text-white dark:text-white gap-2">
                                    <h1 className="text-xl font-bold text-center">{name}</h1>  
                                    <div className="flex ">
                                    {Array.from({ length: level }, (_, index) => (
                                        <img 
                                            key={index} // Ajout de la clé unique pour chaque image
                                            src={startImg} 
                                            alt={`Star ${index + 1}`} // Ajout d'une description alternative
                                            className="w-8 h-8" // Exemple de style pour les images
                                        />
                                    ))}
                                    </div>                                      
                                </div>
                            )
                        })
                    }
                </div>
            
        </div>
    )
}

export default Cadres

