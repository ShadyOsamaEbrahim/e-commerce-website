import Logo from "../../assets/logo.png";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "../DarkMode";
import PrimaryButtons from "../layout/PrimaryButtons";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState , useRef} from "react";
import { useSearch } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

// navbar menu
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Proudcts",
    link: "/products",
  },
  {
    id: 3,
    name: "Smart Phones",
    link: "/products/category/smartphones",
  },
  {
    id: 4,
    name: "For Girls",
    link: "/products/category/beauty",
  },
  {
    id: 5,
    name: "Market",
    link: "/products/category/groceries",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const {search,setSearch} = useSearch();
  const searchRef = useRef(null);
  const handleMobileSearch =() =>{
    if(search.trim()!==''){
      navigate('/products');
      setMobileSearchOpen(false);
    }
    };
    useEffect(()=>{
      const handleClickOutside = (e) => {
        if (
          mobileSearchOpen &&
          searchRef.current &&
          ! searchRef.current.contains(e.target)
        ){
          setMobileSearchOpen(false);
        }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return() =>{
    document.removeEventListener('mousedown',handleClickOutside);
  };
    }, [mobileSearchOpen])
  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" :"auto";
    return ()=> {
      document.body.style.overflow ="auto";
    };
  }, [openMenu]);

  return (
    // all navbar
    <div
      className=" shadow-md bg-white 
    dark:bg-gray-900 dark:text-white duration-200
      fixed w-full z-40 bottom-0 sm:bottom-auto sm:top-0 "
    >
      {/* branding navbar */}
      <div className="bg-mainColor/40 dark:bg-secondMainColor/50 py-2">
        <div className=" container-custom flex justify-between items-center  ">
          <div>
            <a
              href="/"
              className="font-bold
            text-2xl sm:text-3xl flex gap-2"
            >
              <img src={Logo} alt="Logo" className="w-8" />
              MS
            </a>
          </div>
          {/* search bar*/}
          <div
            className="flex justify-between 
            items-center gap-4"
          >
            <div className="relative group  sm:block">
              <input
                type="text"
                placeholder="Search"
                className="hidden sm:inline-block 
                w-48 sm:w-48 
                group-hover:w-56 transition-all
                duration-300 rounded-full border
                border-gray-300 px-2 py-1
                bg-gray-50
                dark:bg-gray-900
                focus:outline-none
                 focus:border-mainColor"
              />
              <IoMdSearch
                className="hidden sm:inline-block text-gray-500 
                group-hover:text-mainColor absolute
                top-1/2 -translate-y-1/2 right-3"
              />
            </div>
            {/* order button */}
            <PrimaryButtons className="group"
            onClick={()=> navigate("/cart")}
            >
                <span
                className="hidden group-hover:block  
                transition-all duration-200"
                >Order
                </span>
              
              <FaCartShopping
                className="text-xl text-white drop-shadow-sm
            cursor-pointer"
              />
            </PrimaryButtons>

            {/* DarkMode */}

            <DarkMode />
            <div className="sm:hidden">
              { !openMenu &&  (<FiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setOpenMenu(true)} />) }
            </div>
          </div>
        </div>
      </div>
      {/* menu navbar */}
      <div className="flex justify-center">
        <ul
          className="sm:flex hidden items-center
         gap-4"
        >
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                className="inline-block  px-4
                hover:text-mainColor duration-200"
                href={data.link}
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center 
              gap-0.5 py-2 "
            >
              Trending Product
              <span>
                <FaCaretDown
                  className="transition-all duration-200
                  group-hover:rotate-180"
                />
              </span>
            </a>
            {/* trinding product dropdown */}
            <div
              className="absolute z-10 hidden group-hover:block
              w-37.5 rounded-md bg-white p-2 text-black shadow-md
              dark:bg-gray-900 dark:text-white shadow-white-md "
            >
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2
                      hover:bg-mainColor/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      {openMenu&& (
        <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={()=>setOpenMenu(false)}/>

        
      )}
      {/* Sidebar */}
      <div
      className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 
        shadow-lg z-50  transition-transform duration-300 ${openMenu ? "translate-x-0" : "translate-x-full"}`}
        >
        { openMenu  && (
          <div className="flex w-full justify-between px-3 pt-3 items-center ">
            <a className="flex items-center font-bold text-2xl" href="/">
            <img src={Logo} alt="logo" className="w-10" />
            MS
            </a>
          <FiX className="text-2xl cursor-pointer"
          onClick={()=> setOpenMenu(false)} />
          </div>
                )}
          <div className="p-4 ">
            <ul className="flex flex-col gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
            <a href={data.link} className="block py-2 border-b border-gray-200
            dark:border-mainColor"
            onClick={()=> setOpenMenu(false)}>
              {data.name}
            </a>

              </li>
              ))}
              <div className="mt-4">
        <p className="font-semibold mb-2">Trending</p>
        {DropdownLinks.map((data) => (
          <a
          key={data.id}
          href={data.link}
          className="block py-1 text-sm"
            onClick={() => setOpenMenu(false)}
            >
            {data.name}
          </a>
        ))}
      </div>
    </ul>
          </div>

      </div>

        <div 
        ref={searchRef}
        className="absolute w-full flex justify-end pr-3 sm:hidden bottom-15 ">
      {mobileSearchOpen ? (
            <div className="relative w-full">
                  <input type="text"
                  value={search}
                  onChange={(e)=> setSearch(e.target.value)}
                  onKeyDown={(e)=>e.key=== "Enter" && handleMobileSearch()}
                    className="w-full bg-mainColor/70 rounded-2xl  border
                    border-gray-400 px-4 py-2 text-white focus:outline-none
                    focus:border-mainColor transition-all duration-300  
                    " autoFocus />
                  <IoMdSearch
                  onClick={handleMobileSearch}
                  className="absolute top-1/2 -translate-y-1/2 right-3
                  text-white cursor-pointer"/>
                  </div>
                  ) : (
                    <div className="rounded-xl  bg-mainColor/40 cursor-pointer  p-2">

                    <IoMdSearch
                    onClick={()=> setMobileSearchOpen(true)}
                    className="text-2xl   text-mainColor inline-flex items-center justify-center"
                    />
                    </div>
                  )}
        </div>
    </div>
  );
};

export default Navbar;
