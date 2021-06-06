import React, { useEffect, useState } from 'react';
import SearchField from "react-search-field";



function Search(props){
    const [response, setResp] = useState({})
    return <h1> 
      <SearchField
        placeholder="Search..."
        onChange={props.onChange}
      />
     </h1>;

}
export default Search;