import React from 'react';

export const NavBar = () => {
    return (
        <>
            <nav className='flex'>
                <ul className='flex px-5 py-5'>
                    <li className='px-5'><a href="/">Home</a></li>
                    <li className='px-5'><a href="/#/resume">Resume</a></li>
                    <li className='px-5'><a href="/#/about">About</a></li>
                </ul>
            </nav>
            <hr />
        </>
    )
}