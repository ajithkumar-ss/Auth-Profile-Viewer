import { IoIosSearch } from "react-icons/io";

const Search = ({handleSearch}) => {
  return (
    <>
      <span className="searchinputspan"> <input type="text"  onInput={(e)=>handleSearch(e.target.value)}/></span>
      <span className="searchicon" style={{ fontSize: '24px'}}><IoIosSearch /></span>
    </>
  )
}

export default Search
