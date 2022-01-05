import html from "../public/images/html.svg"
import css from "../public/images/css.svg"
import react from "../public/images/react.svg"
import redux from "../public/images/redux.svg"
import sass from "../public/images/sass.svg"
import javascript from "../public/images/javascript.svg"
import next from "../public/images/next.svg"
import Image from "next/image"
import styles from "../styles/stack.module.css"

const stack = [html,css,javascript,react,sass,redux, next]
function Stack() {
    return (
        <ul className={styles.container}>
            {
                stack.map(item => (
                    <li key = {item}>
                        <Image
                        src={item}
                        alt={item}
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default Stack
