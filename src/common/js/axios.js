import axios from 'axios';
import siteinfo from '../../siteinfo';

const getAxios = (url, params) => {
    // 基础路径
    return new Promise((resolve, reject) => {
        axios({
            url: siteinfo.baseUrl + url,
            method: 'get',
            params: params,
        }).then(response => {
            if (response.status === 200) {
                resolve(response);
            } else {
                throw new Error('Response data error')
            }
        }).catch(error => {
            reject(error)
        })
    })
}

const postAxios = (url, data) => {
    // 基础路径
    return new Promise((resolve, reject) => {
        axios({
            url: siteinfo.baseUrl + url,
            method: 'post',
            data: data,
        }).then(response => {
            if (response.status === 200) {
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