import styles from "../styles/projects.module.css"


const projects = [
    {
        name: "Resource Edge",
        img: "/images/resourceedge.png",
        url: "https://resource-edge.netlify.app",
        source: "https://github.com/Innocent9712/Learnable-2021-standardization-test.git"
    },

    {
        name: "Spacetagram",
        img: "/images/spacetagram.png",
        url: "https://spacetagran.netlify.app",
        source: "https://github.com/Innocent9712/Spacetagram.git"
    },

    {
        name: "Mix-Match",
        img: "/images/mix-match.png",
        url: "https:mix-match.netlify.app",
        source: "https://github.com/Innocent9712/mix-match.git"
    },

    {
        name: "Quick Question",
        img: "/images/quickquestion.png",
        url: "https:quickquestion.netlify.app",
        source: "https://github.com/Innocent9712/QuickQuestion.git"
    }
]

// console.log(projects);
function Projects() {
    return (
        <ul className={styles.list}>
            {
                projects.map(project => (
                    <li key={project.name}>
                        <h3>{project.name}</h3>
                        <figure>
                            <div>
                            {
                                project.img ? (
                                    <img
                                    className = {styles.siteImg}
                                    src={project.img}
                                    alt={project.name}
                                    />
                                ) : (
                                    <div>
                                        <h2>{project.name[0]}</h2>
                                    </div>
                                )
                            }
                            </div>
                        </figure>
                        <figcaption>
                            <a href={project.url} target="_blank">
                                <svg width="14" height="14" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.54 16C24.5358 14.6554 24.3917 13.3148 24.11 12H27.71C27.5246 11.4516 27.3007 10.9169 27.04 10.4H23.69C23.0603 8.29606 22.0835 6.3121 20.8 4.53001C19.98 4.18521 19.125 3.93038 18.25 3.77001C20.0083 5.65925 21.3356 7.90769 22.14 10.36H16.75V3.60001H15.25V10.37H9.86001C10.6661 7.91325 11.9968 5.6612 13.76 3.77001C12.8888 3.92771 12.0372 4.17917 11.22 4.52001C9.93147 6.29463 8.94797 8.27176 8.31001 10.37H4.94001C4.67458 10.8963 4.44732 11.4411 4.26001 12H7.89001C7.6083 13.3148 7.46419 14.6554 7.46001 16C7.46277 17.4708 7.63049 18.9366 7.96001 20.37H4.42001C4.62689 20.9305 4.87421 21.4753 5.16001 22H8.39001C9.00222 23.9158 9.90982 25.7242 11.08 27.36C11.918 27.7194 12.7934 27.9844 13.69 28.15C12.0579 26.3698 10.8028 24.2778 10 22H15.26V28.34H16.76V22H22C21.1945 24.2788 19.9359 26.3708 18.3 28.15C19.2008 27.9787 20.0797 27.707 20.92 27.34C22.0884 25.7104 22.9959 23.9088 23.61 22H26.81C27.0945 21.485 27.3418 20.9503 27.55 20.4H24C24.3452 18.9584 24.5264 17.4823 24.54 16V16ZM15.25 20.37H9.51001C8.80598 17.6178 8.77511 14.7366 9.42001 11.97H15.25V20.37ZM22.49 20.37H16.75V12H22.58C22.8673 13.3137 23.0081 14.6553 23 16C23.0081 17.472 22.8369 18.9395 22.49 20.37V20.37Z" fill="#457B9D"/>
                                    <path d="M16 0C12.8355 0 9.74207 0.938383 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87706C0.0069325 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0V0ZM16 30C13.2311 30 10.5243 29.1789 8.22202 27.6406C5.91974 26.1022 4.12532 23.9157 3.06569 21.3576C2.00607 18.7994 1.72882 15.9845 2.26901 13.2687C2.80921 10.553 4.14258 8.05844 6.10051 6.1005C8.05845 4.14257 10.553 2.8092 13.2687 2.26901C15.9845 1.72881 18.7994 2.00606 21.3576 3.06569C23.9157 4.12531 26.1022 5.91973 27.6406 8.22202C29.1789 10.5243 30 13.2311 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30Z" fill="#457B9D"/>
                                </svg>
                                <p>website</p>
                            </a>
                            <a href={project.source} target="_blank">
                                <svg fill="#457b9d" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="16px" height="16px">    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/></svg>
                                <p>source</p>
                            </a>
                        </figcaption>
                    </li>
                ))
            }
        </ul>
    )
}

export default Projects
