

const About = () => {
    return(
        <div className='py-10' id="about">
            <div className='container'>
                <div className='text-center mb-10 max-w-[400px] mx-auto'>
                    <p className='text-sm bg-clip-text
                        text-transparent bg-gradient-to-r 
                        from-primary to-secondary'>
                        About me
                    </p>
                    <h1
                    className='text-3xl font-bold'
                    >About</h1>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-onse="true">
                    <p className="text-xl dark:bg-gray-800 dark:text-white p-6">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque qui itaque consequatur officiis, nesciunt quasi commodi incidunt optio quis ipsam labore maiores! Rem tenetur eaque illo est voluptatem impedit soluta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque qui itaque consequatur officiis, nesciunt quasi commodi incidunt optio quis ipsam labore maiores! Rem tenetur eaque illo est voluptatem impedit soluta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque qui itaque consequatur officiis, nesciunt quasi commodi incidunt optio quis ipsam labore maiores! Rem tenetur eaque illo est voluptatem impedit soluta.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default About;