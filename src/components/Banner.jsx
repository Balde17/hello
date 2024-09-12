import bgImg from '../assets/vector3.png'
import authorImg from '../assets/author.webp'

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

function Banner() {
  return (
      <div id="banner"
        style={bgImage}
        className='min-h-[550px] sm:min-h-[600px]
        bg-gray-100 dark:bg-gray-950 dark:text-white
        duration-200 flex justify-center items-center'
      >
        <div className='container pb-8 sm:pb-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text content section */}
              <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-onse="true"
              className='flex-col gap-4 justify-center text-center order-1 sm:order-2 sm:text-left'>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Hello, I'm Abdourahmane Balde</h1>
                <p className='text-2xl mb-3'>Web Developer | Full Stack Junior</p>
                <p className='text-sm'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque saepe dolore laudantium temporibus. Pariatur consequuntur ipsam accusamus magni qui explicabo laborum ducimus, earum at, modi temporibus placeat reiciendis aperiam quam?
                </p>
               
              </div>
            {/* Image section */}
              <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px]
              flex justify-center items-center relative'>
                  {/* image principale */}
                  <div data-aos="flip-left"
                        data-aos-duration="300"
                        data-aos-onse="true">
                    <img src={authorImg} alt="" 
                      className='w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin'
                    />
                  </div>
                  {/* list d'image */}
                  <div className='flex lg:flex-col lg:top-1/2
                  lg:-translate-y-1/2 lg:py-2
                  justify-center gap-4 absolute bottom-[0px]
                  lg:-right-10 bg-white/30 rounded-full'>
                  
                  </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Banner;