import {connection} from '../app.mjs'

class UserDao {
   closeConnection(){
    connection.end((err) => {
        if (err) {
          console.error('Error closing MySQL connection:', err);
          return;
        }
        console.log('MySQL connection closed');
      });
   }
   isUserPresent(email){
    let checkPresence =  false;
    connection.query("select email from user where email =?",email ,(e,r)=>{
        if(e){
            console.log(e);
        }
        if(email === r){checkPresence = true}

       })
       return checkPresence;
   }
    createUser(user){
         connection.query("insert into user SET ?",user,(e,r)=>{
            if(e){
                console.log(e.message)
                throw new Error(e);
            }
           return  r ;
         })
    }
  
}

export default UserDao ;