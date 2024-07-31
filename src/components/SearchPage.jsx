import React from 'react'
import SearchBar from './SearchBar';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SearchPage() {
    return (
        <>
            <div className='absolute top-0 right-0 left-0 p-4'>
                <span className='main-title text-2xl lg:text-3xl font-bold'>Basic Luna Music</span>
            </div>

            <div className="grid justify-items-center">
                <SearchBar style1={`grid`} />
            </div>


            <div className='absolute bottom-0 left-0 right-0 bg-zinc-900 h-12 lg:h-16 px-4 flex items-center justify-between'>
                <Link
                    to={'https://github.com/Arnav-lunatic'}
                    className='flex gap-2 items-center '>
                    <FaGithub className='h-8 w-8 lg:h-10 lg:w-10' />
                    <span className='text-2xl lg:text-4xl font-bold'>Github</span>
                </Link>

                <Link
                    to={'https://lunamusic.vercel.app'}
                    className='text-2xl lg:text-4xl font-bold'
                >
                    Luna Music
                </Link>
            </div>
        </>
    )
}

export default SearchPage