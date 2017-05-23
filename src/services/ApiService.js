import database from './mockDatabase.json'

/*
 *
 * Object to mock a http service to backend
 * or local db queries
 *
 * */

let ApiService = {
    database: {},
    populateMockDatabase () {
        this.database = this.getSeedDatabase();
    },
    getSeedDatabase () {
        return database;
    },

    getReceivingUserIsTyping (convoId, receivingUser){
        return this.database.conversations.find(object => object.id === convoId).areTyping.find(object => object.user === receivingUser).isTyping;
    },
    setUserIsTyping (convoId, user, boolean){
        this.database.conversations.find(object => object.id === convoId).areTyping.find(object => object.user === user).isTyping = boolean;
    },

    getMessagesForConversation (convoId){
        return this.database.conversations.find(object => object.id === convoId).messages;
    },
    pushNewMessageToConversation (convoId, user, text, time){
        this.database.conversations.find(object => object.id === convoId).messages.push({
            message: text,
            time: time,
            user: user
        })
    },
    getConvoId  (user, receivingUser){
        let userData = this.getUsersData(user);
        let convoId = userData.conversationsWith.find(object => object.receivingUser === receivingUser).convoId;
        return convoId;
    },

    getUsersData(user){
        return this.database.users.find(object => object.user === user);
    },
    setUserOnline(user){
        this.database.users.find(object => object.user === user).isOnline = true;
    },
    setUserOffline(user){
        this.database.users.find(object => object.user === user).isOnline = false;
    },

};

export default ApiService;
