import database from './database.json'

/*
 *
 * Object to mock http service and database
 *
 * */

let ApiService = {
    database: {},
    populateMockDatabase () {
        this.database = this.getSeedDatabase();

        console.log('TESTING');
        console.log('TESTING');
        console.log('TESTING');

        console.log(ApiService.getReceivingUserMessages("Laura", "Rob"));
    },
    getSeedDatabase () {
        return database;
    },
    getReceivingUserIsTyping (user, receivingUser){
        let userData = this.getUsersData(user);
        let isReceivingUserTyping = userData.receivingUserList.find(object => object.receivingUser === receivingUser).isTyping;
        return isReceivingUserTyping;
    },
    setReceivingUserIsTyping (user, receivingUser){
        this.database.find(object => object.user === user).receivingUserList.find(object => object.receivingUser === receivingUser).isTyping = true;
    },
    getUsersData(user){
        return this.database.find(object => object.user === user);
    },
    setUserOnline(user){
        this.database.find(object => object.user === user).isOnline = true;
    },
    setUserOffline(user){
        this.database.find(object => object.user === user).isOnline = false;
    },
    getReceivingUserMessages (user, receivingUser){
        let userData = this.getUsersData(user);
        let receivingUserMessages = userData.receivingUserList.find(object => object.receivingUser === receivingUser).messages;
        return receivingUserMessages;
    },
    pushNewMessage (user, receivingUser, text, time){
        this.database.find(object => object.user === user).receivingUserList.find(object => object.receivingUser === receivingUser).messages.push(
            {
                message: text,
                time: time
            }
        );

    }

};

export default ApiService;
