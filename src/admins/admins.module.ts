import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './Entity/AdminEntity';


  @Module({
    imports:[TypeOrmModule.forFeature([Admin])],
    controllers: [AdminsController],
    providers: [AdminsService]
})
export class AdminsModule {}
