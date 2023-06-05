import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import {content} from "../data"
import Popup from './Popup';


const Header = () => {
    const { value, handleChange } = useContext(AppContext);
    const [popup, setPopup] = useState(false)
    const visitedBefore = localStorage.getItem("visitedBefore")

    // function to set popup to false after 10 seconds
    const setPopupToFalse = () => {
        setTimeout(() => {
            setPopup(false)
            localStorage.setItem("visitedBefore", "true")
        }, 10000)
    }

    const handleSetPopUp = () => {
        setPopup(false)
        localStorage.setItem("visitedBefore", "true")
    }

    useEffect(() => {
      if (!visitedBefore) {
        setPopup(true)
        setPopupToFalse()
      }

    }, [])
    


  return (
    <header>
        <div className='flex flex-col gap-4 font-open md:flex-row md:justify-between md:items-center'>
            <div className='relative md:w-auto md:basis-3/5'> 
                <button
                    onClick={()=> handleChange((value === "swe" ? "devops" : "swe"))}
                    className='flex items-center gap-2 focus:outline-none w-full rounded-none text-shade-one  bg-shade-nine'
                >
                    <div className="flex flex-col justify-center">
                    <i className="ri-arrow-up-s-line h-3"></i>
                    <i className="ri-arrow-down-s-line"></i>
                    </div>
                    <h3><span className='text-shade-four'>{`${content[value as keyof typeof content]?.title}`}</span> Hat</h3>
                </button>
                {
                    popup && <Popup hide={handleSetPopUp} />
                }
            </div>
            <div className='flex justify-end px-3'>
                 <a href="https://drive.google.com/file/d/1ljdLY9vTPssDQn5GRZ3R1g1sov29xJFa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button className='text-white bg-shade-one flex items-center gap-2'>
                        <p>Download CV</p>
                        <i className="ri-arrow-down-fill"></i>
                    </button>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header