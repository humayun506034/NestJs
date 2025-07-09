import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
  controllers: [HelloController],
  providers: [HelloService],
  // imports: [], // imports other modules if needed
  exports: [HelloService], //exports services if needed in other modules used to need this
})
export class HelloModule { }
