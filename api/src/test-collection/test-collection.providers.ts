import { Connection } from 'mongoose';
import { TestSchema } from '../schemas/test.schema';

export const testCollectionProviders = [
  {
    provide: 'TEST_COLLECTION_MODEL',
    useFactory: (connection: Connection) => connection.model('test-collections', TestSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];