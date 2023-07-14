import { Module } from '@nestjs/common';6
import { DatabaseModule } from '../database/database.module';
import { TestCollectionService } from './test-collection.sevice';
import { testCollectionProviders } from './test-collection.providers';

@Module({
  imports: [DatabaseModule],
  providers: [
    TestCollectionService,
    ...testCollectionProviders,
  ],
  exports: [TestCollectionService]
})
export class TestCollectionModule {}