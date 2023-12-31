class Tag {
    async createTag(name) {
        const token = sessionStorage.getItem('token');
        let result;
        let data = { token, tag_name: name }
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3030/api/tag/create", false);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = await function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Request was successful, handle the response here
                result = xhr.responseText;
            }
        };
        xhr.send((JSON.stringify(data)));
        return result;
    }

} export default Tag