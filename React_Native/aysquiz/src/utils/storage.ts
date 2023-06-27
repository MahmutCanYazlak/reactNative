import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageService {
    static async getItem(key: string): Promise<string | null> {
        try {
            const value = await AsyncStorage.getItem(key);
            return value;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    static async setItem(key: string, value: string): Promise<void> {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    }

    static async removeItem(key: string): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    }
    static async clearAll(): Promise<void> {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.log(error);
        }
    }
}