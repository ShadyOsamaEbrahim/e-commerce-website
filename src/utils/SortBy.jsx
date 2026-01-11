import { React, useEffect, useState, useRef } from "react";
import PrimaryButtons from "../components/layout/PrimaryButtons";
import { FaCaretDown } from "react-icons/fa6";

export const sortProducts = (products , sortBy) => {
     const sorted =[...products];
     switch (sortBy) {
        case "price-asc":
            return sorted.sort((a , b) =>a.price - b.price);
        case 'price-desc':
            return sorted.sort((a , b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a , b) => b.rating - a.rating);
        case 'name':
            return sorted.sort((a , b) => a.title.localeCompare(b.title));
        default:
            return sorted;
        }};
   export const mapSortBy = (value) => {
           switch(value) {
             case "Price: Low to High": return "price-asc";
             case "Price: High to Low": return "price-desc";
             case "Rating":return "rating";
             case "Name A-Z":return "name";
             default:return "default";
           }
         };
     

function SortBy({ onChange }) {
  const [sortBy, setSortBy] = useState("Sort By");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.type === "scroll") {
        setDropdownOpen(false);
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("scroll", closeDropdown);
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      window.removeEventListener("scroll", closeDropdown);
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);
  const handleSelect = (label) => {
setSortBy(label);
setDropdownOpen(false);
onChange(mapSortBy(label));
};

    

  return (

      <div ref={dropdownRef} className="relative inline-block w-40">

      <PrimaryButtons
        onClick={()=>setDropdownOpen((prev)=>!prev)}
        className="w-full flex justify-between"
        >{sortBy}
        <FaCaretDown className={`transition-all duration-200
        ${dropdownOpen ? 'rotate-180' : '' }` }/>
      </PrimaryButtons>
      {dropdownOpen &&(
          
          <ul className="absolute w-full bg-white  dark:bg-gray-950 dark:text-white shadow-2xl rounded mt-1 z-10">
        <li 
        className="px-3 py-2 hover:text-primary cursor-pointer" 
        onClick={()=>{ 
            setSortBy('Price: Low to High'); 
            setDropdownOpen(false);
            onChange(mapSortBy('Price: Low to High'))}}>
          Price: Low to High</li>
        <li 
        className="px-3 py-2 hover:text-primary cursor-pointer" 
        onClick={()=>{ 
            setSortBy('Price: High to Low');
            setDropdownOpen(false);
            onChange(mapSortBy('Price: Low to Low'))}}>
          Price: High to Low</li>
        <li 
        className="px-3 py-2 hover:text-primary cursor-pointer" 
        onClick={()=>{ 
            setSortBy('Rating'); 
            setDropdownOpen(false);
            onChange(mapSortBy('Rating'))}}>
          Rating</li>
        <li 
        className="px-3 py-2 hover:text-primary cursor-pointer" 
        onClick={()=>{ 
            setSortBy('Name A-Z'); 
            setDropdownOpen(false);
            onChange(mapSortBy('Name A-Z'))}}>
          Name A-Z</li>
          </ul>
          )}
          </div>
)
  ;
}

export default SortBy;
