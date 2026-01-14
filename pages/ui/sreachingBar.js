import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react"

const Search = ({ onSearch }) =>  {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} name="sreaching">
            <button type="submit"><MagnifyingGlass size={32} /></button>
            <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Rechercher.."
            />
       </form>
    );
};

export default Search;