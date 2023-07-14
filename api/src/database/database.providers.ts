import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      {
        const dbUser = process.env.MONGO_CERT_PATH;
        return mongoose.connect('mongodb+srv://easycut.nc79y.mongodb.net/test-database', {
        authSource: "$external",
        authMechanism: "MONGODB-X509",
        sslKey: `${dbUser}`,
        sslCert: `${dbUser}`
      })
    },
  },
];