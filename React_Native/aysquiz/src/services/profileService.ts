import { ApiConstant } from "../constants/apiConstant";
import { NetworkManager } from "../utils/network/networkManager";

export class ProfileService {

    static async getProfile() {
        try {
            let response = await NetworkManager.get(ApiConstant.getProfile);
            return response;
        } catch (error: any) {
            return Promise.reject(error);
        }

    }

}