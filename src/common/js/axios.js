import axios from 'axios';
import siteinfo from '../../siteinfo';

let getAxios = (url, params) => {
    // 基础路径
    return new Promise((resolve, reject) => {
        axios({
            url: siteinfo.root+url,
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
    return new Promise((resolve, reject) => {
        axios({
            url: siteinfo.root+url,
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