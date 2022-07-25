import { Module } from "@nestjs/common";
import { FileService } from "./file.srvice";


@Module({
	providers: [FileService]
})
export class FileModule {}