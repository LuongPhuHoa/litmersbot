import { Injectable } from '@nestjs/common';
import {
  Context,
  SlashCommand,
  SlashCommandContext,
  UserCommand,
  UserCommandContext,
  TargetUser,
} from 'necord';
import { User, EmbedBuilder } from 'discord.js';

@Injectable()
export class DiscordService {
  @SlashCommand({
    name: 'ping',
    description: 'Ping command!',
  })
  public async onPing(@Context() [interaction]: SlashCommandContext) {
    return interaction.reply({ content: 'Pong!' });
  }

  @UserCommand({ name: 'Get avatar' })
  public async getUserAvatar(
    @Context() [interaction]: UserCommandContext,
    @TargetUser() user: User,
  ) {
    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(`Avatar ${user.username}`)
          .setImage(user.displayAvatarURL({ size: 4096, extension: 'png' })),
      ],
    });
  }
}
