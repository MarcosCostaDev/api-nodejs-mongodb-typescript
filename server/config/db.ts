
import * as mongoose from 'mongoose';

export default class DataBase {
    private DB_URI = 'mongodb://marcos:marcos@ds036967.mlab.com:36967/typescript-mongo';
    private DB_CONNECTION;

    constructor() {

    }

    createConnection() {
        mongoose.connect(this.DB_URI, { useMongoClient: true });
        this.logger(this.DB_URI);
    }

    logger(uri) {
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on("connected", () => console.log(`Mongoose está conectado ao ${uri} `));
        this.DB_CONNECTION.on("error", error => console.error.bind(console, `erro na conexão: ${error}`));
        this.DB_CONNECTION.on("disconnected", () => console.log(`Mongoose está desconectado do ${uri} `));
    }

    closeConnection(message, callback) {
        this.DB_CONNECTION.close(() => {
            console.log(`mongoose foi desconectado: '${message}' `);
            callback();
        })
    }
}


