import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { NecordModule } from 'necord';
import { IntentsBitField } from 'discord.js';
import { DiscordModule } from './discord/discord.module';

@Module({
  imports: [
    DiscordModule,
    NecordModule.forRoot({
      token: process.env.DISCORD_TOKEN,
      development: [process.env.DISCORD_DEVELOPMENT_GUILD_ID],
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.DirectMessages,
      ],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
