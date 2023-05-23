import twitter from "../assets/twitter.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"


const Footer = () => {
    const year = new Date().getFullYear()

  return (
    <footer className='flex flex-col justify-center items-center py-4 text-shade-three font-open mt-12'>
        <ul className="flex gap-5 mb-4">
          <li>
            <a href="https://twitter.com/brainmode" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter icon" className="w-6" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/iaminnocent99" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin icon" className="w-6" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Innocent9712" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github icon" className="w-6" />
            </a>
          </li>
        </ul>
        <p><i className="ri-copyright-line"></i> IamInnocent {year}.</p>
    </footer>
  )
}

export default Footer