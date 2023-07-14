import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { TestCollection } from './test-collection.model';



@Injectable()
export class TestCollectionService {
  constructor(
    @Inject('TEST_COLLECTION_MODEL')
    private testModel: Model<TestCollection>,
  ) {}

  async findAll(): Promise<TestCollection[]> {
    return this.testModel.find().exec();
  }
}