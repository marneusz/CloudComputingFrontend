import React  from 'react';
import SearchField from "react-search-field";



function Search(props){ 
    return <div> 
      In order to search for a particular person, <br></br>
      you must log into your account! <br></br>
      <br></br>
      <SearchField
        placeholder="Search..."
        onChange={props.onChange}
      />
     </div>;

}
export default Search;