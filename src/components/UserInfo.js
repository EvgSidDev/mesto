export class UserInfo {
  constructor({nameElement, statusElement, avatarElement, id}) {
    this._nameUser = nameElement;
    this._statusUser = statusElement;
    this._avatar =  avatarElement;
  }

  getUserInfo() {
    return {nameUser: this._nameUser.textContent, statusUser: this._statusUser.textContent}
  }

  setUserInfo({nameUser, statusUser, id, avatarUrl}) {
    this._nameUser.textContent = nameUser;
    this._statusUser.textContent = statusUser;
    this._id = id;
    this._avatar.src = avatarUrl;
  }

  getUserId() {
    return this._id;
  }

  updateAvatar(url) {
    this._avatar.src = url;
  }

}

export default UserInfo
