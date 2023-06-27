import { ApiConstant } from "../constants/apiConstant";
import { NetworkManager } from "../utils/network/networkManager";

export class CategoryService {

    static async getAllCategories() {
        try {
            let response = await NetworkManager.get(ApiConstant.getAllCategories);
            console.log("CategoryService :::::::: ", response);
            return response;
        } catch (error: any) {
            return Promise.reject(error);
        }

    }

}