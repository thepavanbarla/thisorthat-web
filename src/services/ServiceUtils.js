const fetchGet = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'        }
    });
    return response;
}

export { fetchGet };