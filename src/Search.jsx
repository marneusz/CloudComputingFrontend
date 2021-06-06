import React  from 'react';
import SearchField from "react-search-field";



function Search(props){ 
    return <div> 
      <SearchField
        placeholder="Search..."
        onChange={props.onChange}
      />
     </div>;

}
export default Search;