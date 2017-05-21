/**
 * Mocking client-server processing
 */
import _products from './products.json'
import _database from './database.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
    getDatabase: (cb, timeout) => setTimeout(() => cb(_database), timeout || TIMEOUT),

}
//TODO: add send message,
//TODO: add get message async
//TODO: add typing
//TODO: add connection?
//TODO: add connection?



//TODO: I would add the 2 users... and a history of messages