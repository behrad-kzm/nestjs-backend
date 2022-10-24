import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class RequestLogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('\nLog Request: ', req)
    next();
  }
}
