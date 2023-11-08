import { Module } from '@nestjs/common';
import { TestroutingService } from './testrouting.service';
import { TestroutingController } from './testrouting.controller';
import { Prodotti2Repository } from './entities/repository/prodotti.repository';

@Module({
  controllers: [TestroutingController],
  providers: [TestroutingService, Prodotti2Repository],
})
export class TestroutingModule {}
/**/
