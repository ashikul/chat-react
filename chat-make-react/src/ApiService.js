import database from './database.json'

const ApiService = {
    database: {},
    populate () {
        this.database = this.getDatabase();
        console.log('populate db');
        console.log(database);
        console.log(this.database);
        // console.log(this.database.find(object => object.user === "Laura"));
        // console.log('setting true');
        // this.database.find(object => object.user === "Laura").isOnline = true;
        // console.log(this.database.find(object => object.user === "Laura"));
        // console.log(this.database);

        console.log('getCheckIfReceivingUsersIsTyping');
        console.log(this.getCheckIfReceivingUsersIsTyping("Laura", "Bob"));
        console.log(this.getCheckIfReceivingUsersIsTyping("Bob", "Laura"));

    },
    getDatabase () {
        return database;
    },

    getCheckIfReceivingUsersIsTyping (user, receivingUser){
        console.log('getCheckIfReceivingUsersIsTyping');
        let userData = this.getUsersData("Laura");
        console.log(userData);
        let usersReceivingUsers = userData.receivingUserList;
        let usersDataWithReceivingUser = usersReceivingUsers.find(object => object.receivingUser === receivingUser);
        let isRecevingUserTyping = usersDataWithReceivingUser;
        // console.log(isRecevingUserTyping.then(console.log('');));
        // console.log(isRecevingUserTyping.isTyping);
        //TODO: omfg why is const undefined

        return true;

        // this.database.find(object => object.user === user)
        // [receivingUserList].find(object => object.receivingUser === receivingUser);
    },
    getUsersData(user){
        return this.database.find(object => object.user === user);
    },
    setUserOnline(user){
        this.database.find(object => object.user === "Laura").isOnline = true;
    }

    // save () {
    //     localStorage.setItem(this.lsKey, JSON.stringify(this.items));
    // },
    // toggle (id) {
    //     let todoItem = this.items[id];
    //     todoItem.isCompleted = !todoItem.isCompleted;
    //     this.save();
    // },
    // add (obj) {
    //     this.items.push(obj);
    //     this.save();
    // },
    // remove (id) {
    //     this.items.splice(id, 1);
    //     this.save();
    // },
    // update (id, task) {
    //     let todoItem = this.items[id];
    //     todoItem.task = task;
    //     this.save();
    // }
};

export default ApiService;

// class ApiService {
//     //TODO: data
//
//     //TODO: get user's with incoming user - message history
//     //TODO: get user's with incoming user - isTyping
//     //TODO: set user as online
//
//     const items = [];
//
//     const lsKey = "todos";
//
//     populate () {
//         this.items = this.get();
//     }
//
//     get () {
//         try {
//             return JSON.parse(localStorage.getItem(this.lsKey)) || []
//         } catch(e) {
//         }
//         return [];
//     }
//
//     save () {
//         localStorage.setItem(this.lsKey, JSON.stringify(this.items));
//     }
//
//     toggle (id) {
//         let todoItem = this.items[id];
//         todoItem.isCompleted = !todoItem.isCompleted;
//         this.save();
//     }
//
//     add (obj) {
//         this.items.push(obj);
//         this.save();
//     }
//
//     remove (id) {
//         this.items.splice(id, 1);
//         this.save();
//     }
//
//     update (id, task) {
//         let todoItem = this.items[id];
//         todoItem.task = task;
//         this.save();
//     }
// }
// ;