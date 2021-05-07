import { useState } from "react";
import { useRouter } from "next/router";


const SearchBar = (props) => {
  const router = useRouter();
  const [queryName, setQueryName] = useState("");
  const [invisible, setInvisible] = useState(true);
  
  const btnInvisible = "invisible px-6 py-3 mt-3 text- text-white transition-all duration-150 ease-linear rounded-full shadow outline-none bg-red-400 hover:bg-red-500 hover:shadow-lg focus:outline-none ";
  const btnVisible = "px-6 py-3 my-2 mx-2 text- text-white transition-all duration-150 ease-linear rounded-full shadow outline-none bg-red-400 hover:bg-red-500 hover:shadow-lg focus:outline-none ";
  const onClick = (queryName) => {
    props.searchContact(queryName);
    setInvisible(false);
    setQueryName("");
    
  };

  const onClickBack = () => {
    props.loadContacts()
    setInvisible(true)

  }

  return (
    <div className="flex">
      <div>{
        invisible ? <button className={btnInvisible}>Back</button> : <button className={btnVisible} onClick={() => onClickBack()}>Back</button>
        }
        </div>
      <div className="bg-white flex items-center rounded-full shadow-lg h-16 max-w-lg ">
        
        <input
          className="h-auto rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none "
          id="search"
          type="text"
          placeholder="Search"
          value={queryName}
          onChange={(e) => setQueryName(e.target.value)}
        />

        <div className="p-4">
          <button
            className="bg-gray-50 text-gray-500 text- rounded-full p-2 hover:bg-gray-100 focus:outline-none w-8 h-8 flex items-center justify-center"
            onClick={() => onClick(queryName)}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
