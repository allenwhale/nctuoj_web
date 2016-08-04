
const Config = {
    baseUrl: 'http://localhost:3023',
    checkStatus: (res) => {
        if (res.status >= 200 && res.status < 300) {
            return res.json();
        } else {
            return Promise.reject(res.json());
        }
    },
}

export default Config;
