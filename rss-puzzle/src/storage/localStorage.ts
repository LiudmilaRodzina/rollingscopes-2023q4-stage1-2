export default class LocalStorageManager {
  static saveUserData(userData: { [key: string]: string }): void {
    if (LocalStorageManager.validateUserData(userData)) {
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }

  static validateUserData(userData: { [key: string]: string }): boolean {
    if (!userData || Object.keys(userData).length === 0) {
      return false;
    }
    return Object.values(userData).every((value) => value.trim() !== '');
  }

  static removeUserData(): void {
    localStorage.removeItem('userData');
  }

  static getUserData(): { [key: string]: string } {
    const userDataString = localStorage.getItem('userData') || '{}';
    return JSON.parse(userDataString);
  }
}
