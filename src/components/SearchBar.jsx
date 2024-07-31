import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TrackDataContext } from '../context/TrackDataContext'
import { FaSearch } from "react-icons/fa";  

function SearchBar({ style1='grid justify-between' }) {
    const {setSearchTrack, setSearchParams} = useContext(TrackDataContext)
    const [searchKeyword, setSearchKeyword] = useState('')
    const { quality, setQuality } = useContext(TrackDataContext)

    const navigate = useNavigate()

    const handleSearch = () => {
        setSearchTrack(searchKeyword)
        setSearchParams({ v: searchKeyword })
    }

    const handleSelectChange = (event) => {
        setQuality(Number(event.target.value))
    };

    const QualitySelector = () => {
        return (
            <div className="flex gap-2 flex-col md:flex-row items-center p-2">
                <label
                    className="mb-2 md:mb-0 text-md md:text-lg font-medium"
                    htmlFor="download-quality"
                >
                    Set Download Quality
                </label>
                <select
                    id="download-quality"
                    className="px-1 py-1 rounded-md shadow-sm focus:outline-none"
                    value={quality}
                    onChange={handleSelectChange}
                >
                    <option value="" disabled>
                        Select quality
                    </option>
                    <option value="0">Very Low (12kbps)</option>
                    <option value="1">Low (48kbps)</option>
                    <option value="2">Medium (96kbps)</option>
                    <option value="3">High (160kbps)</option>
                    <option value="4">Very High (320kbps)</option>
                </select>
            </div>
        );
    }

    return (
        <div className={`${style1} justify-items-center gap-4 ml-auto`}>

            <div className='flex items-center gap-1'>
                <input
                    className={`md:text-2xl rounded-xl p-2 text-lg w-[70dvw] lg:w-[90dvw] max-w-[900px]`}
                    placeholder='Search Your favorite Track here ...'
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    onKeyPress={(e) => {
						if (e.key === "Enter") {
							navigate(`/search?v=${searchKeyword}`)
							handleSearch();
						}
					}}
                />
                                
                <Link
                    to={`/search?v=${searchKeyword}`}
                    onClick={handleSearch}
                >
                        <FaSearch className='h-10 w-10 ml-4' />
                </Link>
            </div>
            
            <QualitySelector />
        </div>
    )
}

export default SearchBar