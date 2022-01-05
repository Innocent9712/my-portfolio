// import {getPostArr} from "../lib/projects"
import Image from "next/image";
import styles from "../styles/projects.module.css"

// export async function getStaticProps() {
//     const allPostsData = getSortedPostsData()
//     return {
//       props: {
//         allPostsData
//       }
//     }
//   }

const projects = [
    {
        name: "Resource Edge",
        img: "/images/resource_edge_desktop.png",
        url: "https://resource-edge.netlify.app",
        source: "https://github.com/Innocent9712/Learnable-2021-standardization-test.git"
    },

    {
        name: "Mix-Match",
        img: "/images/resource_edge_desktop.png",
        url: "https::mix-match.netlify.app",
        source: "https://github.com/Innocent9712/mix-match.git"
    },

    {
        name: "Quick Question",
        img: "/images/resource_edge_desktop.png",
        url: "https::quickquestion.netlify.app",
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
                                    // width={150} 
                                    // height={150}
                                    // layout="fill"
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
                            <a href={project.url} target="_blank">website</a>
                            <a href={project.source} target="_blank">source</a>
                        </figcaption>
                    </li>
                ))
            }
        </ul>
    )
}

export default Projects
