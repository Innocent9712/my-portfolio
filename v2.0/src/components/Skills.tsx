import { useContext } from 'react';
import { AppContext } from '../App';
import {content} from "../data"

const Skills = () => {
    const { value } = useContext(AppContext);
    const selectedContent = content[value as keyof typeof content]

    return (
        <section className='mt-12 mb-8'>
            <div className=' text-shade-one'>
                <h4 className='font-lobster text-2xl md:text-3xl'>
                    {selectedContent.skills.title}
                </h4>
                <div className=''>
                    {
                        Object.entries(selectedContent.skills.content).map(([key, values]) => {
                            return (
                                <div key={key} className='my-8'>
                                    <h5 className='font-josefin font-medium text-lg md:text-xl text-shade-three mb-3'>{key}</h5>
                                    <div className='flex flex-wrap gap-4'>
                                        {
                                            values.map((value, index) => (
                                                <div key={index} className='bg-shade-nine px-3 py-1 rounded-full'>
                                                    <p className='text-shade-three'>{value}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills