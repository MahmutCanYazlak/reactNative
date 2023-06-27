import { ApiConstant } from "../constants/apiConstant";
import { NetworkManager } from "../utils/network/networkManager";

export class ExamService {

    static async getExam(id: number) {
        try {
            let url = ApiConstant.getExam + '?id=' + id;
            let response = await NetworkManager.get(url);
            return response;
        } catch (error: any) {
            return Promise.reject(error);
        }

    }

    static async setExam(data: any) {
        try {
            let response = await NetworkManager.post(ApiConstant.setExam, data);
            return response;
        } catch (error: any) {
            return Promise.reject(error);
        }

    }

    static async getScore(topicId: number) {
        try {
            let url = ApiConstant.getScore + '?topicId=' + topicId;
            let response = await NetworkManager.get(url);
            console.log("getScore ExamService :::::::::::: ", response);
            return response;
        } catch (error: any) {
            return Promise.reject(error);
        }

    }

}