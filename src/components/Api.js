export class Api {
  constructor({ url, cohortId, headers }) {
    this._url = url;
    this._cohortId = cohortId;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(`${this._url}/${this._cohortId}/users/me`, {
      headers: this._headers,
      method: "GET",
    });
  }

  getCards() {
    return fetch(`${this._url}/${this._cohortId}/cards`, {
      headers: this._headers,
      method: "GET",
    });
  }

  saveProfileData(data) {
    return fetch(`${this._url}/${this._cohortId}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  addNewCard(data) {
    return fetch(`${this._url}/${this._cohortId}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  deleteCard(id) {
    return fetch(`${this._url}/${this._cohortId}/cards/${id}`, {
      headers: this._headers,
      method: "DELETE"
    });
  }

  setLike(id){
    return fetch(`${this._url}/${this._cohortId}/cards/${id}/likes`, {
      headers: this._headers,
      method: "PUT"
    });
  }

  deleteLike(id){
    return fetch(`${this._url}/${this._cohortId}/cards/${id}/likes`, {
      headers: this._headers,
      method: "DELETE"
    });
  }

  updateAvatar(url) {
    return fetch(`${this._url}/${this._cohortId}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({avatar: url}),
    });
  }
}
export default Api;
