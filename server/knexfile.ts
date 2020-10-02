import path from "path";

try {
   module.exports = {
      development: {
         client: "mysql",
         connection: {
            database: "desafio3",
            host: "localhost",
            user: "root",
            password: "P24h08g00"
         },
         migrations: {
            directory: path.resolve(__dirname, "src", "database", "migrations"),
         },
         useNullAsDefault: true,
      },
   };
} catch (err) {
   console.log(err);
}
