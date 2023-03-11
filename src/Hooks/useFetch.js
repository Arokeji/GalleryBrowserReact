import React from "react";

const options = {
    headers: {
        'Authorization': "COpIJwSjhO6aE0wSDNDkRRcIEcAMTgDBXOPDbRMF3wqChLhSubaU6UxZ"
    }
};

const useFetch = (apiUrl) => {

    const [info, setInfo] = React.useState(null);

    React.useEffect(() => {
        if (apiUrl){
            fetch(apiUrl, options)
                .then(data => data.json())
                .then(dataParsed => setInfo(dataParsed));
        }
        }, [apiUrl])
    
    return info;
}

export default useFetch;