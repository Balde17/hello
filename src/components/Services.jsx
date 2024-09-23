const servicesData = [

]

function Services() {
  return (
    <div className='py-10' id="contact">
        <div className="">
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text
                text-transparent bg-gradient-to-r 
                from-primary to-secondary'>
                    Mes services
                </p>
                <h1
                className='text-3xl font-bold'
                >Services</h1>
            </div>
            <div className="px-10">
              <div className=" flex justify-between sm:px-10 lg:px-[400px] font-bold ">
                <ul className="list-disc">
                  <li>RESTful or GraphQL APIs</li>
                  <li>SEO Optimization</li>
                  <li>UI/UX Design</li>
                </ul>
                <ul className="list-disc">
                  <li>Website Maintenance</li>
                  <li>Technical Consulting</li>
                  <li>Third-Party Tool Integration</li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services