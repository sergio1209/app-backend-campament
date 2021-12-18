import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/controller.module';
import { DatabaseModule } from './database/database.module';
import { RespositoryModule } from './repository/repository.module';
import { ServicesModule } from './services/services.module';
import { ShareModule } from './share/share.module';

@Module({
  imports: [
    ControllerModule,
    ServicesModule,
    RespositoryModule,
    DatabaseModule,
    ShareModule
  ],

})
export class AppModule {}
