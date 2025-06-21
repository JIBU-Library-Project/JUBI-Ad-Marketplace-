// components/SearchBar.jsx
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ className = "" }) => {
  return (
    <div className={`flex w-full  rounded overflow-hidden //shadow ${className} //bg-amber-400 `}>
      <input
        type="text"
        placeholder="Search for your favourite product..."
        className="flex-1 px-3 py-2 outline-none border //rounded-l-[20px]  rounded-full border-[#e0e0e0] backdrop-blur-md w-200 bg-[#e6e6e6] text-black  "
      />
      <button className=" ml-2 bg-[#08ae5e]  rounded-full px-4 text-white hover:bg-lime-600">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
