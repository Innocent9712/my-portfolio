import { useContext } from 'react';
import { AppContext } from '../App';
import {content} from "../data"

const Header = () => {
    const { value, handleChange } = useContext(AppContext);
  return (
    <header>
        <div className='flex flex-col gap-4 font-open md:flex-row md:justify-between md:items-center'>
            <button
                onClick={()=> handleChange((value === "swe" ? "devops" : "swe"))}
                className='flex items-center gap-2 focus:outline-none w-full md:w-auto rounded-none text-shade-one md:basis-3/5 bg-shade-nine'
            >
                <div className="flex flex-col justify-center">
                <i className="ri-arrow-up-s-line h-3"></i>
                <i className="ri-arrow-down-s-line"></i>
                </div>
                <h3><span className='text-shade-four'>{`${content[value as keyof typeof content]?.title}`}</span> Hat</h3>
            </button>
            <div className='flex justify-end px-3'>
                <button className='text-white bg-shade-one flex items-center gap-2'>
                    <p>Download CV</p>
                    <i className="ri-arrow-down-fill"></i>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header