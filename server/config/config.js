// ============================
// Puerto
// ============================

process.env.PORT = process.env.PORT || 3000;


// ============================
// Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
// DB
// ============================
let urlDB;
//*
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cafe-user:K1g7zPFyqMdbLUOL@clustermay-lk2me.mongodb.net/cafe';
}
//*/

//urlDB = 'mongodb+srv://adminmay:rBQ9pff2pPxlMYDX@clustermay-lk2me.mongodb.net/cafe?retryWrites=true&w=majority';


process.env.URLDB = urlDB;