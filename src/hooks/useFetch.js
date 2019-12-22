import React from 'react'

async function fetchData(url) {
    const res = await fetch(url)
    const resolvedRes = await res.json()

    return resolvedRes
}

async function fetchDataWithOptions(url, options) {
    const res = await fetch(url, options)
    const resolvedRes = await res.json()

    return resolvedRes
}

export const useFetch = (url, fetchOptions, cleanupFunc, ...deps) => {
    const [response, setResponse] = React.useState(null)
    const [error, setError] = React.useState(null)
    let data

    React.useEffect(() => {
        try {
            if (fetchOptions) {
                data = fetchDataWithOptions(url, fetchOptions)
            } else {
                data = fetchData(url)
            }
    
            setResponse(data)
        } catch(e) {
            setError(e)
        }

        if (cleanupFunc instanceof Function) {
            cleanupFunc()
        }
    }, [ ...deps ])

    return { response, error }
}

export default useFetch
