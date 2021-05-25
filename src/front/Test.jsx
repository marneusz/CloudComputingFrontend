import React, { useEffect, useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Search(){
    const [response, setResp] = useState({})
  useEffect(()=> { 
    const apiUrl = 'https://dpu55juedc.execute-api.us-east-1.amazonaws.com/Prod/hello/';
    fetch(apiUrl)
      .then((response) => response.json())
      .then(response => (setResp( response)));
  }, [])
    return <h1> Data on the endpoint: {JSON.stringify(response)}
        <ReactSearchAutocomplete  />
     </h1>;

}
export default Search;