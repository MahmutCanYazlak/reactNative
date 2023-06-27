import { ApiConstant } from "../constants/apiConstant";
import { NetworkManager } from "../utils/network/networkManager";

export class ExamTopicService {

    static async getExamTopicsByCategoryId(id: number) {
        try {
            let url = ApiConstant.getTopicsByCategory + '?id=' + id;
            let response = await NetworkManager.get(url);
            return response;
        } catch (error: any) {
            return Promise.reject(error);
        }

    }

}