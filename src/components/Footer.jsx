import { Link } from 'react-scroll'; 

import fbImg from '../assets/fb.png'
import twitterImg from '../assets/twitter.png'
import instaImg from '../assets/insta.png'
import tiktokImg from '../assets/tiktok.png'
import inImg from '../assets/linkedin.png'

const Footer = () => {
    return (
        <div className="bg-gray-100 dark:gray-950 py-[80px]">
            <section className="max-w-[1200px] mx-auto flex flex-col gap-16">
                <div>
                    <h1 className="animate-pulse text-2xl font-bold italic">Breyard Baldé</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates sit, ad quisquam facere voluptas quis, impedit quibusdam neque enim suscipit totam perspiciatis eveniet fugiat mollitia officia non maxime esse!</p>
                </div>
                <div className='text-center '>
                    <p>abdramanebalde4@gmail.com</p>
                </div>
                <div>
                    
                    <ul className='flex max-w-[500px] justify-between mx-auto'>
                        <li>
                            <Link>
                                <img src={twitterImg} alt="" srcset=""
                                className='w-[50px] bg-black rounded-full mx-auto block transform  duration-300 hover:scale-75 hover:rotate-45' />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src={inImg} alt="" srcset=""
                                className='w-[50px]  rounded-full mx-auto block transform  duration-300 hover:scale-75 hover:rotate-45' />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src={instaImg} alt="" srcset=""
                                className='w-[50px]  rounded-full mx-auto block transform  duration-300 hover:scale-75 hover:rotate-45' />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src={tiktokImg} alt="" srcset=""
                                className='w-[50px]  rounded-full mx-auto block transform  duration-300 hover:scale-75 hover:rotate-45' />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src={fbImg} alt="" srcset=""
                                className='w-[50px]  rounded-full mx-auto block transform  duration-300 hover:scale-75 hover:rotate-45' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='text-center'>
                    <hr />
                    <p>@copyright 2024 All rights reserved | Made by the owner</p>
                </div>
            </section>
        </div>
    )
}

export default Footer;