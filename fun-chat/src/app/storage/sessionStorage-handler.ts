export default class SessionStorageHandler {
  static readonly USER_DATA_KEY = "currentUser";

  static saveUserData(userData: { [key: string]: string }): void {
    if (SessionStorageHandler.validateUserData(userData)) {
      sessionStorage.setItem(
        SessionStorageHandler.USER_DATA_KEY,
        JSON.stringify(userData),
      );
    }
  }

  static validateUserData(userData: { [key: string]: string }): boolean {
    return (
      userData && Object.values(userData).every((value) => value.trim() !== "")
    );
  }

  static removeUserData(): void {
    sessionStorage.removeItem(SessionStorageHandler.USER_DATA_KEY);
  }

  static getUserData(): { [key: string]: string } {
    const userDataString =
      sessionStorage.getItem(SessionStorageHandler.USER_DATA_KEY) || "{}";
    return JSON.parse(userDataString);
  }
}
