import axios from 'axios';

let getAxios = (url, params) => {
    // 基础路径
    axios.defaults.baseURL = "http://127.0.0.1:8888/admin";
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: 'get',
            params: params,
        }).then(response => {
            if (response.status == 200) {
                resolve(response);
            } else {
                throw new Error('Response data error')
            }
        }).catch(error => {
            reject(error)
        })
    })
}

let postAxios = (url, params) => {
    // 基础路径
    axios.defaults.baseURL = "http://127.0.0.1:8888/admin";
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: 'post',
            params: params,
        }).then(response => {
            if (response.status == 200) {
                resolve(response);
            } else {
                throw new Error('Response data error')
            }
        }).catch(error => {
            reject(error)
        })
    })
}

export default {
    getAxios,
    postAxios
}