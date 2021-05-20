function apiClient(url) {
    return fetch(url).then(async respon => {
        const data = await respon.json();

        if (!respon.ok) {
            return Promise.reject(error => error);
        }

        return data;
    });
}

export { apiClient };
