export class ApiConstant {
  static baseUrl = 'https://quizapp.ayssoft.com/api/v1/';
  static login = 'auth/login';

  static getAllCategories = 'categories/getAllCategories';
  static getTopicsByCategory = 'categories/getTopicsByCategory';
  static getExam = 'topics/getQuestionsByTopicId';
  static getProfile = 'users/getProfile';

  static setExam = 'questions/submitAnswer';
  static getScore = 'questions/getScore';
}