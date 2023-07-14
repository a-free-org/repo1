import { Inject, Injectable } from '@nestjs/common';
import { TestCollectionService } from './test-collection/test-collection.sevice';


@Injectable()
export class AppService {

  constructor(@Inject(TestCollectionService) private readonly test: TestCollectionService){}
  
  public async getHello(): Promise<string> {
    var allo = "hello"

    await this.test.findAll().then((values) => {
      console.log(values)
      allo = values[0].text
    })
    
    console.log("sdkljgf")

    return allo;
  }
}