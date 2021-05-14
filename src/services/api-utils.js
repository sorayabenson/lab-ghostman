export const getApi = async (url) => {
    const res = await fetch(url)
    const data = await res.json();

    return data;
}

export const postApi = async (url, jsonBody) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonBody
    })
    const data = await res.json();
    
    return data;
}

export const putApi = async (url, jsonBody) => {
    const res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: jsonBody
    })
    const data = await res.json();

    return data;
}

export const deleteApi = async (url) => {
    const res = await fetch(url, {
        method: 'DELETE'
    })
    const data = await res.json();

    return data;
}