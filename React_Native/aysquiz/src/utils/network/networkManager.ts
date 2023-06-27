import axios from 'axios';
import { Alert } from 'react-native';
import { ApiConstant } from '@/constants/apiConstant';
import { StorageService } from '../storage';


const instance = axios.create({
    baseURL: ApiConstant.baseUrl,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    validateStatus: function (status) {
        return status >= 200 && status <= 500; // default
    }
});

instance.interceptors.request.use(
    async (config) => {
        try {
            const token = await StorageService.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    (error) => {
        // Hata yönetimi
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        if (response?.status === 401) {
            StorageService.clearAll();
            Alert.alert('Giriş Başarısız');
        }
        else if (response?.status === 500) {
            Alert.alert('Sunucu Hatası');
        }
        return response;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

export class NetworkManager {
    static async get(url = "") {
        return await instance.get(url);
    }
    static async post(url = "", data: any) {
        return await instance.post(url, data);
    }
    static async put(url = "", data: any) {
        return await instance.put(url, data);
    }
    static async delete(url = "") {
        return await instance.delete(url);
    }
}