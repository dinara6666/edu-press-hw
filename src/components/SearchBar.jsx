import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { In, In2 } from "../assets/index.js";

const SearchBar = () => {
    const [query, setQuery] = useState("");

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        console.log("Searching for:", query);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex items-center z-10 p-4">
                <h1 className="text-[36px] font-semibold leading-[43.2px] text-left mr-[300px] ml-[30px]">
                    All Courses
                </h1>

                <div className="flex items-center ml-[100px] space-x-4">
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearchChange}
                        placeholder="Поиск..."
                        className="border-b-[0.2px] border-b-black px-1 w-[300px] text-[16px] focus:outline-none"
                    />
                    <button
                        onClick={handleSearch}
                        className="text-black px-4 py-2 rounded-[20px] flex items-center"
                    >
                        <FaSearch/>
                        <img className="ml-[20px]" src={In} alt="icon 1"/>
                        <img className="ml-[20px]" src={In2} alt="icon 2"/>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default SearchBar;







