export class UserInfo {
  constructor({nameElement, statusElement, id}) {
    this._nameUser = nameElement;
    this._statusUser = statusElement;
    this._id = id;
  }

  getUserInfo() {
    return {nameUser: this._nameUser.textContent, statusUser: this._statusUser.textContent}
  }

  setUserInfo({nameUser, statusUser, id}) {
    this._nameUser.textContent = nameUser;
    this._statusUser.textContent = statusUser;
    this._id = id;
  }

  getUserId() {
    return this._id;
  }

}

export default UserInfo
