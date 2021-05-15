export const getApi = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json();

        return data;
    } catch(err) {
        return err.message;
    } 
}

export const postApi = async (url, jsonBody) => {
    try {
        const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonBody
        })
        const data = await res.json();
    
        return data
    } catch(err) {
        return err.message;
    }
}

export const putApi = async (url, jsonBody) => {
    try {
        const res = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: jsonBody
        })
        const data = await res.json();

        return data;
    } catch(err) {
        return err.message;
    }
}

export const deleteApi = async (url) => {
    try {
        const res = await fetch(url, {
        method: 'DELETE'
        })
        const data = await res.json();

        return data;
    } catch(err) {
        return err.message;
    }
}