import mongoose from "mongoose"

mongoose.connect("chave do banco");

let db = mongoose.connection;

export default db;