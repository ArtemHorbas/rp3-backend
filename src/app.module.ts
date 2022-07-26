import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from "./file/file.module";
import * as path from 'path'
import { ServeStaticModule } from "@nestjs/serve-static";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";




@Module({
	imports: [
		ServeStaticModule.forRoot( {rootPath: path.resolve(__dirname, 'static')} ),
		MongooseModule.forRoot(process.env.MONGODB_URI),
		TrackModule,
		FileModule,
	],
	controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
