module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "ec2-44-207-253-50.compute-1.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "d4t3id3gh4j4bf"),
      user: env("DATABASE_USERNAME", "mjekafvvbatrrg"),
      password: env("DATABASE_PASSWORD"),
      schema: env("DATABASE_SCHEMA", "public"),
      ssl: { rejectUnauthorized: false },
    },
  }
});