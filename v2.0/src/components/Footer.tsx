const Footer = () => {
    const year = new Date().getFullYear()

  return (
    <footer className='flex justify-center py-4 text-shade-three font-open'>
        <p><i className="ri-copyright-line"></i> IamInnocent {year}.</p>
    </footer>
  )
}

export default Footer