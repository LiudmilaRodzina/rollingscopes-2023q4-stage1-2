export default class LocalStorageHandler {
  static readonly USER_DATA_KEY = 'userData';

  static saveUserData(userData: { [key: string]: string }): void {
    if (LocalStorageHandler.validateUserData(userData)) {
      localStorage.setItem(
        LocalStorageHandler.USER_DATA_KEY,
        JSON.stringify(userData),
      );
    }
  }

  static validateUserData(userData: { [key: string]: string }): boolean {
    return (
      userData && Object.values(userData).every((value) => value.trim() !== '')
    );
  }

  static removeUserData(): void {
    localStorage.removeItem(LocalStorageHandler.USER_DATA_KEY);
  }

  static getUserData(): { [key: string]: string } {
    const userDataString = localStorage.getItem(LocalStorageHandler.USER_DATA_KEY) || '{}';
    return JSON.parse(userDataString);
  }
}
