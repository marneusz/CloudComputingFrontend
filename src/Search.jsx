import React, { useEffect, useState } from 'react';
import SearchField from "react-search-field";



function Search(props){
    const [response, setResp] = useState({})
    return <div> 
      <SearchField
        placeholder="Search..."
        onChange={props.onChange}
      />
     </div>;

}
export default Search;