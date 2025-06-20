// components/SearchBar.jsx
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ className = "" }) => {
  return (
    <div className={`flex w-full rounded overflow-hidden //shadow ${className}`}>
      <input
        type="text"
        placeholder="Search Jubi"
        className="flex-1 px-3 py-2 outline-none text-black bg-white"
      />
      <button className="bg-lime-500 px-4 text-white hover:bg-lime-600">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
