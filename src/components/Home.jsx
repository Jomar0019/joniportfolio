import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaInstagram, FaLinkedinIn  } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="w-full h-screen">
        <div className="max-w-[1400] mx-auto flex justify-center items-center h-full">
            <div>
                <h1 className='text-[#303030] text-4xl md:text-5xl font-bold'>{`I'm Joni Malazarte`}</h1>
                <h2 className='text-[#303030] flex justify-center text-2xl md:text-3xl pt-6'>{`I'm a `}
                <TypeAnimation
                    sequence={[
                        'Author',
                        2000,
                        'Graphic Designer',
                        2000,
                    ]}
                    wrapper="div"
                    speed={50}
                    style={{ display: 'inline', paddingLeft: '10px' }}
                    repeat={Infinity}
                    />
                </h2>

                <div className='flex gap-6 items-center justify-center pt-6'>
                    <FaFacebookF size={25} className='text-[#303030] cursor-pointer'/>
                    <FaInstagram size={25} className='text-[#303030] cursor-pointer'/>
                    <FaLinkedinIn size={25} className='text-[#303030] cursor-pointer'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home
