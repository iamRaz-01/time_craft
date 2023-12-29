class Tag {
    async createTag(data) {
        let result;
        data.token = sessionStorage.getItem('token');
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3030/api/tag/createtag", false);
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