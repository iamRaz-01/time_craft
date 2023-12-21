import { app, connection } from "../app.mjs";
class User {

    createUser(data) {
        connection.query("insert into user set ?", data, (e, r) => {
            if (e) {
                console.error('Error inserting data:', e);
                return;
            }

            console.log('Data inserted successfully:', r);

        })
    }


}
const data = {
    username: "abdul",
    email: "abdul@gmail",
    password: "123445"

}
const userApi = new User();
userApi.createUser(data);