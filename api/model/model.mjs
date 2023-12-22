class User {
    constructor(data) {
        this.username = data.username;
        this.email = data.email;
        this.password = data.password;
    }
}

class Task {
    constructor(task_id, list_id, task_name, description, priority, status, due_date) {
        this.task_id = task_id;
        this.list_id = list_id;
        this.task_name = task_name;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.due_date = due_date;
    }
}

class List {
    constructor(list_id, user_id, list_name, description) {
        this.list_id = list_id;
        this.user_id = user_id;
        this.list_name = list_name;
        this.description = description;
    }
}

export {User,Task,List}