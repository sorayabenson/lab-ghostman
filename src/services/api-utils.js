export const getApi = async (url) => {
    const res = await fetch(url)
    const data = await res.json();

    return data;
}

export const postApi = (url, json) => {
    console.log('post', url, json)
}

export const putApi = (url, json) => {
    console.log('put', url, json)
}

export const deleteApi = (url) => {
    console.log('delete', url)
}