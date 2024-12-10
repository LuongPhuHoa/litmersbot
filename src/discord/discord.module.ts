import { Module } from '@nestjs/common';
import { DiscordUpdate } from './discord.update';
import { DiscordService } from './discord.service';

@Module({
  providers: [DiscordUpdate, DiscordService],
})
export class DiscordModule {}
