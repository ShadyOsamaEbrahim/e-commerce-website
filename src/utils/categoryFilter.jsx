import React , {useState , useEffect ,useRef} from 'react'
import PrimaryButtons from "../components/layout/PrimaryButtons";
import {FaCaretDown} from "react-icons/fa6"
const CategoryFilter = ({selectedCategories , setSelectedCategories }) => {
    const[categories , setCategories] = useState([]);
    const [open , setOpen] = useState(false);
    const categoriesRef = useRef(null);

    useEffect(() => {
        const closeCategories = (e) => {
          if (e.type === "scroll") {
            setOpen(false);
            return;
          }
          if (categoriesRef.current && !categoriesRef.current.contains(e.target)) {
            setOpen(false);
          }
        };
        window.addEventListener("scroll", closeCategories);
        document.addEventListener("mousedown", closeCategories);
        return () => {
          window.removeEventListener("scroll", closeCategories);
          document.removeEventListener("mousedown", closeCategories);
}},[]);
    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data))
        .catch((err) => console.error(err));
    },[])
    const handleChange = (category) =>{
        setSelectedCategories((prev)=>
        prev.includes(category)
        ? prev.filter((c)=> c !==category)
    : [...prev , category]
);
    };

    const resetAll = () => setSelectedCategories([]);
  return (
    <div  ref={categoriesRef} className='relative inline-block '>
        <PrimaryButtons
        onClick={() => setOpen(!open)}
        className='w-full flex justify-between gap-10'
        
        >
            Categories
            <FaCaretDown className={`transition-all duration-200
            ${open ? "rotate-180" : ""}`} />
        </PrimaryButtons>
        {open && (
            <div
            className='absolute w-full bg-white dark:bg-gray-950 shadow-2xl px-3 
            rounded max-h-60 overflow-auto pt-1 z-10'>
                <button
                onClick={resetAll}
                className='border rounded p-1 mb-3 bg-red-100
                text-red-600 w-full '
                >
                    Reset All
                </button>
                {categories.map((category) => (
                    
                    <label key={category.slug}
                    className='flex items-center space-x-2 mb-2 
                    cursor-pointer'>
                        <input 
                        type="checkbox"
                        checked={selectedCategories.includes(category.slug)}
                        onChange={() => handleChange(category.slug)} />
                        <span className='capitalize'>{category.name}</span>
                    </label>
                ))}
            </div>
        )}      
    </div>
  );
};

export default CategoryFilter
