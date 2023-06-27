import { ApiConstant } from "../constants/apiConstant";
import { NetworkManager } from "../utils/network/networkManager";
import { StorageService } from "../utils/storage";
import { IUser } from "../types/authTypes";
import { Alert } from "react-native";

export class AuthService {
    /* static async getUserProfile() {
        let response = await NetworkManager.getRequest(ApiConstant.profile);
        return response.data;
    } */

    static async login(user: IUser) {
        try {
            let response = await NetworkManager.post(ApiConstant.login, user);
            if (response?.status === 404) {
                Alert.alert('Email veya şifre hatalı');
                return;
            }
            StorageService.setItem('token', response?.data?.data?.token);
            return response;
        } catch (error: any) {
            return Promise.reject(error);
        }

    }

    static async logout() {
        await StorageService.clearAll();
    }
}