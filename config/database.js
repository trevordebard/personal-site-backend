module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', ''),
        username: env('DATABASE_USERNAME', 'trevordebardeleben'),
        password: env('DATABASE_PASSWORD', ''),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        // ssl: {
        //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        // },
      },
      options: {
        // ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});