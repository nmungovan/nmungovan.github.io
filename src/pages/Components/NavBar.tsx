export const NavBar = () => {
    return (
        <header className='sticky top-0 z-10 bg-white'>
            <nav className='flex'>
                <ul className='flex px-5 py-5'>
                    <li className='px-5'><a href="/">Home</a></li>
                    <li className='px-5'><a href="/#/resume">Resume</a></li>
                    <li className='px-5'><a href="/#/projects">Projects</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    )
}
