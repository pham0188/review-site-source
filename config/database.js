// config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      connectionString: env("DATABASE_URL"),
      ssl: {
        rejectUnauthorized: false, // needed for Neon
      },
    },
    pool: { min: 0, max: 10 },
  },
});
