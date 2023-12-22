class User {
    constructor(data) {
        this.username = data.username;
        this.email = data.email;
        this.password = data.password;
    }
}

class Task {
    constructor(data) {
        this.task_id = data.task_id;
        this.list_id = data.list_id;
        this.task_name = data.task_name;
        this.description = data.description;
        this.priority = data.priority;
        this.status = data.status;
        this.due_date = data.due_date;
    }
}

class List {
    constructor(data) {
        this.list_id = data.list_id;
        this.user_id = data.user_id;
        this.list_name = data.list_name;
        this.description = data.description;
    }
}

export {User,Task,List}