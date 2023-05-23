import { useContext } from 'react';
import { AppContext } from '../App';
import {content} from "../data"

const About = () => {
    const { value } = useContext(AppContext);
    const selectedContent = content[value as keyof typeof content]

  return (
    <section className='mt-12 mb-8'>
        <div className='relative text-shade-one'>
            <h3 className='font-josefin font-medium text-2xl md:text-3xl absolute left-10 md:left-14 md:top-4'>Hi, I'm</h3>
            <h1 className='font-lobster text-[5rem] md:text-[8rem]'>Innocent</h1>
            <h3 className='font-josefin font-light text-xl md:text-2xl absolute bottom-[-15px] text-shade-four'>{selectedContent.role}</h3>
        </div>
        <div className='mt-6 max-w-7xl ml-auto'>
            {
                selectedContent.about.map((item, index) => (
                    <p key={index} className='mb-4 text-justify text-shade-two'>{item}</p>
                ))
            }
        </div>
    </section>
  )
}

export default About