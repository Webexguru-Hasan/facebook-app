import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)

        }).catch(error => {
            console.error(error)
        })

    }, [url] )

    return {data}
}

export default useFetch
