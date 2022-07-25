import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMain(): any {
    return {
      name: 'music-platform',
      version: '0.0.1',
      description: 'Music APP with NEST.JS and MONGODB',
      author: 'ArtemHorbas',
    };
  }
}
