import Head from "next/head"

function Layout({children}) {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;1,400&family=Poppins:wght@400;500&display=swap" rel="stylesheet"/>
            </Head>
            {children}
        </div>
    )
}

export default Layout
