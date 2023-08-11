export class UserInfo {
  constructor({nameElement, statusElement}) {
    this._nameUser = nameElement;
    this._statusUser = statusElement;
  }

  getUserInfo() {
    return {nameUser: this._nameUser.textContent, statusUser: this._statusUser.textContent}
  }

  setUserInfo({nameUser, statusUser}) {
    this._nameUser.textContent = nameUser;
    this._statusUser.textContent = statusUser;
  }

}

export default UserInfo
