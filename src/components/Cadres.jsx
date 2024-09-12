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
        <div className="px-10">
            {
                cadresData.map((id, name, level) =>{
                    return (
                        <div key={id}
                            data-aos="zoom-in"
                            data-aos-duration="300"
                            data-aos-onse="true"
                            className="dark:bg-gray-800 p-2 hover:text-white dark:text-white gap-2">
                            <div className="h-[100px] w-full mb-8">
                                <p className="font-bold text-center hidden hover:flex">{name}</p>
                                {/* {
                                    for(let i=0, i)
                                }                                     */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}