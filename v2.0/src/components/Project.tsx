import { useContext } from 'react';
import { AppContext } from '../App';
import {content} from "../data"
import longArrow from "../assets/arrow right.svg"
import ace from "../assets/ace.svg"
import heart from "../assets/heart.svg"
import diamond from "../assets/diamond.svg"
import club from "../assets/club.svg"
import github from "../assets/github.svg"
import link from "../assets/link.svg"
import "../App.css"

const Project = () => {
    const { value } = useContext(AppContext);
    const selectedContent = content[value as keyof typeof content]
    let count = 0
    const choices = [ace, heart, diamond, club]
    // function to get a random number between 0 and 3
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 4)
    }

    // check if a value is in an array
    // const isInArray = (value: number, array: number[]) => {


    return (
        <section className='mt-12 pb-8'>
            <div className=' text-shade-one'>
                <div className='flex justify-between'>
                    <h4 className='font-lobster text-2xl md:text-3xl'>
                        Projects
                    </h4>
                    <div className='flex flex-col'>
                        <img src={longArrow} alt="long arrow svg" className='w-20' />
                        <p className='text-xs'>Scroll to see more</p>
                    </div>
                </div>
                <div className="overflow-y-auto max-h-screen mt-6 md:mt-12 p-4 custom">
                    <ul className='flex gap-10'>
                        {
                            selectedContent.projects.map((project, index) => {
                                count++;
                                let num = getRandomNumber()
                                return (
                                    <li key={index} className={`${selectedContent.projects.length - 1 === index && "pr-8"}`}>
                                        <div className='h-[450px] w-[300px] rounded-lg bg-shade-nine flex items-center justify-center relative' style={{boxShadow: '3px 4px 5px 2px #00000040'}}>
                                            <div className='flex flex-col items-center absolute top-2 left-4'>
                                                <p className={`font-josefin ${[1, 2].indexOf(num) !== -1 ? "text-red-600": "text-shade-one"}`}>{count > 1 ? count : 'A'}</p>
                                                <img src={choices[num]} alt="card image" className='w-4' />
                                            </div>
                                            <div className='h-[365px] w-[70%] rounded-lg bg-shade-svn relative'>
                                                <div className='h-[35%] bg-shade-four w-full rounded-t-lg flex justify-center items-center'>
                                                    {
                                                        project.image ? (
                                                            <img src={project.image} alt="project preview" className='h-full' />
                                                        ) : (
                                                            <p className='font-lobster text-shade-two'>No Preview Avaliable</p>
                                                        )
                                                    }
                                                </div>
                                                <div className='px-2 mt-2'>
                                                    <ul className='flex gap-2 flex-wrap flex-row-reverse'>
                                                        {
                                                            project.techStack.map((item, index) => (
                                                                <li key={index} className='text-shade-nine font-josefin text-[0.6rem] md:text-xs bg-shade-two px-3 py-1 rounded-full'>{item}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h5 className='font-lobster mt-1 ml-2'>{project.title}</h5>
                                                    <p className='text-sm px-2 mt-3'>{project.description}</p>
                                                </div>
                                                <div className='absolute bottom-2 left-2'>
                                                    <ul className='flex items-center gap-2'>
                                                        <li>
                                                            <a className='flex flex-col items-center' href={project.github} target="_blank" rel="noopener noreferrer">
                                                                <img src={github} alt="github icon" />
                                                                <p className='text-josefin text-[0.6rem]'>codebase</p>
                                                            </a>
                                                        </li>
                                                        {
                                                            project.demo &&
                                                            <li>
                                                                <a className='flex flex-col items-center' href={project.demo} target="_blank" rel="noopener noreferrer">
                                                                    <img src={link} alt="deployed icon" className='mb-1' />
                                                                    <p className='text-josefin text-[0.6rem]'>codebase</p>
                                                                </a>
                                                            </li>
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-center absolute bottom-4 right-4 scale-y-[-1]'>
                                                <p className={`font-josefin ${[1, 2].indexOf(num) !== -1 ? "text-red-600": "text-shade-one"}`}>{count > 1 ? count : 'A'}</p>
                                                <img src={choices[num]} alt="card image" className='w-4' />
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    
                </div>

            </div>
        </section>
    )
}

export default Project