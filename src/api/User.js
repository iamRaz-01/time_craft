class User {
  async createUser(data) {
    let result;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3030/api/user/create", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = await function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Request was successful, handle the response here
        result = xhr.responseText;
      }
    };
    xhr.send(JSON.stringify(data));
    return result;
  }

  async loginUser(data) {
    let result;
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", "http://localhost:3030/api/user/login", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = await function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Request was successful, handle the response here
        result = xhr.responseText;
      }
    };
    xhr.send(JSON.stringify(data));
    return result;
  }

  async getUserProfileImage(data) {
    let result;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3030/api/user/getUserProfileImage", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = await function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Request was successful, handle the response here
        result = xhr.responseText;
      }
    };
    xhr.send(JSON.stringify(data));
    return result;
  }


}
export default User;
