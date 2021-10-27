/* eslint-disable no-undef, no-irregular-whitespace */
import fs from 'fs';

export const Intents = {
    GUILDS: 1, // 1 << 0
    GUILD_MEMBERS: 2, // 1 << 1 (Privileged)
    GUILD_BANS: 4, // 1 << 2
    GUILD_EMOJIS_AND_STICKERS: 8, // 1 << 3
    GUILD_INTEGRATIONS: 16, // 1 << 4
    GUILD_WEBHOOKS: 32, // 1 << 5
    GUILD_INVITES: 64, // 1 << 6
    GUILD_VOICE_STATES: 128, // 1 << 7
    GUILD_PRESENCES: 256, // 1 << 8 (Privileged)
    GUILD_MESSAGES: 512, // 1 << 9
    GUILD_MESSAGE_REACTIONS: 1024, // 1 << 10
    GUILD_MESSAGE_TYPING: 2048, // 1 << 11
    DIRECT_MESSAGES: 4096, // 1 << 12
    DIRECT_MESSAGE_REACTIONS: 8192, // 1 << 13
    DIRECT_MESSAGE_TYPING: 16384, // 1 << 14
}

export const Events = {
    'HELLO': 'hello',
    'READY': 'ready',
    'RESUMED': 'resumed',
    'RECONNECT': 'reconnect',
    'INVALID_SESSION': 'invalidSession',
    'APPLICATION_COMMAND_CREATE': 'applicationCommandCreate',
    'APPLICATION_COMMAND_UPDATE': 'applicationCommandUpdate',
    'APPLICATION_COMMAND_DELETE': 'applicationCommandDelete',
    'CHANNEL_CREATE': 'channelCreate',
    'CHANNEL_UPDATE': 'channelUpdate',
    'CHANNEL_DELETE': 'channelDelete',
    'CHANNEL_PINS_UPDATE': 'channelPinsUpdate',
    'THREAD_CREATE': 'threadCreate',
    'THREAD_UPDATE': 'threadUpdate',
    'THREAD_DELETE': 'threadDelete',
    'THREAD_LIST_SYNC': 'threadListSync',
    'THREAD_MEMBER_UPDATE': 'threadMemberUpdate',
    'THREAD_MEMBERS_UPDATE': 'threadMembersUpdate',
    'GUILD_CREATE': 'guildCreate',
    'GUILD_UPDATE': 'guildUpdate',
    'GUILD_DELETE': 'guildDelete',
    'GUILD_BAN_ADD': 'guildBanAdd',
    'GUILD_BAN_REMOVE': 'guildBanRemove',
    'GUILD_EMOJIS_UPDATE': 'guildEmojisUpdate',
    'GUILD_STICKERS_UPDATE': 'guildStickerUpdate',
    'GUILD_INTERGRATIONS_UPDATE': 'guildInteractionsUpdate',
    'GUILD_MEMBER_ADD': 'guildMemberAdd',
    'GUILD_MEMBER_REMOVE': 'guildMemberRemove',
    'GUILD_MEMBER_UPDATE': 'guildMemberUpdate',
    'GUILD_MEMBERS_CHUNK': 'guildMembersChunk',
    'GUILD_ROLE_CREATE': 'guildRoleCreate',
    'GUILD_ROLE_UPDATE': 'guildRoleUpdate',
    'GUILD_ROLE_DELETE': 'guildRoleDelete',
    'INTERGRATION_CREATE': 'intergrationCreate',
    'INTERGRATION_UPDATE': 'intergrationUpdate',
    'INTERGRATION_DELETE': 'intergrationDelete',
    'INTERACTION_CREATE': 'interactionCreate',
    'INVITE_CREATE': 'inviteCreate',
    'INVITE_DELETE': 'inviteDelete',
    'MESSAGE_CREATE': 'messageCreate',
    'MESSAGE_DELETE': 'messageDelete',
    'MESSAGE_BULK_DELETE': 'messageBulkDelete',
    'MESSAGE_REACTION_ADD': 'messageReactionAdd',
    'MESSAGE_REACTION_REMOVE': 'messageReactionRemove',
    'MESSAGE_REACTION_REMOVE_ALL': 'messageReactionRemoveAll',
    'MESSAGE_REACTION_REMOVE_EMOJI': 'messageReactionRemoveEmoji',
    'PRESENCE_UPDATE': 'presenceUpdate',
    'STAGE_INSTANCE_CREATE': 'stageInstanceCreate',
    'STAGE_INSTANCE_DELETE': 'stageInstanceDelete',
    'STAGE_INSTANCE_UPDATE': 'stageInstanceUpdate',
    'TYPING_START': 'typingStart',
    'USER_UPDATE': 'userUpdate',
    'VOICE_STATE_UPDATE': 'voiceStateUpdate',
    'VOICE_SERVER_UPDATE': 'voiceServerUpdate',
    'WEBHOOKS_UPDATE': 'webhooksUpdate'
}

export const NekoSoft = `
⡀         ⢀⣀⡤⣸⡇⣤⣤⣤⣀⣀⣀⠴⣾⣿⣿⡟⣿⠏⡏⣴⣿⣿⣿⢏⣾⣿⣿⣧⢻⣿⣿⠆⣠         ⡀   
       ⣠⣶⣿⣿⢳⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣶⣭⣻⢿⢯⣞⡝⣿⣿⣫⢃⣛⣵⣾⣿        ⢀⣾    
      ⣰⣿⣿⣿⣏⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⡿⣟⣯⣷⣾⢸⣿⣿⣿⣷⣿⡏⠁⣿⣿⡀⢸⣿⣿⣿⣿        ⣼⣿    
     ⣼⣿⣿⣿⡟⣼⣿⣿⡇⣿⣿⣿⣿⡿⣟⣽⣾⣿⣿⣿⣿⡏⣿⣿⣿⣿⣿⣷⡴⠿⢟⣛⣭⣭⣭⣭⣝⣀      ⢠⣿⣿⡀   
    ⣸⣿⣿⣿⣿⢱⣿⣿⣿⡇⣿⣿⡿⣫⣾⣿⣿⡿⣻⣵⣶⣿⣿⣷⣶⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀   ⢸⣿⣿⡇   
   ⢰⣿⣿⣿⣿⡟⣾⣿⣿⣿⣧⠹⣫⣾⣿⣿⣿⣫⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆  ⢸⣿⣿⣿   
   ⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣎⢿⣿⣿⣿⣳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆ ⢸⣿⣿⣿⡇  
  ⢸⣿⣿⣿⣿⣿⢹⣿⣿⣿⣿⣿⣿⣦⡻⣿⢧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢹⣿⣿⣿⣿⣿⣿⣿⣿⣇⢿⣿⣿⣿⣿  
  ⣾⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⡆⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⣿⣿⣿⣿⣿⣿⣿⠿⣿⡎⣿⣿⣿⣿⡇ 
  ⣿⣿⣿⣿⣿⣿⡜⣿⣿⣿⣿⣿⣿⣿⡿⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⢻⣿⣿⣿⡿⠛⣡⣾⣿⣿⡜⣿⣿⣿⣇ 
 ⢸⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⢟⣵⣟⣼⣿⣟⠻⣿⣿⣿⣿⣿⣿⣿⢁⢿⣿⣿⣿⣿⣿⣿⣿⡿⣼⣎⢿⠿⢋⣴⣿⣿⣿⣿⣿⣷⡹⣿⣿⣿ 
 ⢸⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣟⣑⣚⢍⣾⣿⣿⣿⣷⣦⣙⠻⣿⣿⣿⢧⣿⡸⣿⣿⣿⣿⣿⣿⣿⢇⣿⠟⣀⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣜⠿⡟ 
 ⢸⣿⣿⣿⣿⣿⣿⣿⡘⣿⣿⣿⡿⢟⣵⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡙⠣⣿⣿⣧⢻⣿⣿⣿⣿⣿⠏⠜⡡⠞⠛⠃⠙⠿⠿⣿⣿⣿⢿⣿⣿⠿⣫⠇ 
 ⠈⣿⣿⣿⣿⣿⣿⡟⣷⢜⣫⣽⢞⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⠟⠵⠷⢬⡙⢿⡜⣿⢹⣿⣿⢏⣴⠊⣠⠶⠿⢷⣦⣄⠈⢙⣛⡛⣃⣐⣶⣾⠏  
  ⣿⣿⣿⣿⣿⣿⣧⣿⣿⣔⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠂⣠⡤⠴⠦⢤⣙⣿⣧⠛⣼⠟⣡⣾⣿⣾⣿⡗  ⠹⣿⣆⠈⣙⡇⣿⣿⡿⠋   
  ⢸⣿⣿⣿⣿⣿⣿⢉⣾⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⠃⢠⣾⣿⡷   ⠻⣿⣿⣴⣷⣿⣿⣿⣿⡇⠉    ⢻⣿⡆⢿⣇⠛⠉     
  ⠘⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣶⣤⣲⣶⣾⠿⢀⣿⣿⠙⠁   ⡀⢻⣿⣿⣿⣿⣿⣿⣿⣧⠰⣄⣀⣠⡇⢸⣿⣧⢺⣿⡄      
   ⣿⣿⣿⣿⣿⣿⡏⣿⣿⣿⣿⣿⣿⣿⢻⣿⣿⡇⢸⣿⣷⠠⣄⡀⢀⣰⡇⣸⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⠿⠿⣡⣿⢿⣿⡏⣿⣷⡀     
   ⢻⣿⣿⣿⣿⣿⣿⣹⣿⣿⣿⣿⢏⣽⢸⣿⣿⣧⠘⣿⣿⣆⠙⠿⠿⢟⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⢲⢮⡿⣽⣷⣿⣿⣷     
   ⣸⣿⣿⣿⣿⣿⣿⣧⢿⣿⣿⡏⣾⣯⡍⣿⣿⣿⡼⣯⣟⣛⣻⢶⢼⣟⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⠿⣫⣏⣾⢳⢳⢇⣿⣿⡿⡇    
   ⣿⣟⣿⣿⣿⣿⣿⣿⣎⢿⣿⡇⣿⡿⡇⢻⣿⣿⣷⣝⠳⠷⢯⢏⣟⣾⡏⣙⣛⢛⣋⣥⣶⣶⣦⣄⡀⠐⠆⣿⣿⣿⣟⣫⢾⣿⣿⡇⠃    
  ⡸⠋⣼⣿⣿⣿⣿⣿⣿⣿⣯⢿⣿⡜⠋⢀⡌⣿⣿⣿⣮⡩⢾⣯⣾⣿⣿⡇⣧⣣⣾⣿⣿⣿⣿⣿⣿⣿⣦ ⣿⣿⣿⣿⢏⣿⣿⠟⠁     
   ⣸⣿⣿⣿⣿⣿⣿⣿⣿⢟⣽⣿⠃ ⣾⣿⡘⢿⣿⣿⣿⣷⡮⣹⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢱⣿⣿⣿⣋⠚⣩⡵⣸      
  ⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⢦⣇ ⣿⣿⣿⣤⠓⠈⢽⣭⣾⣿⣿⣿⣷⡘⣿⣿⣿⣿⣿⣿⣿⣿⠟⣡⣿⣿⡿⢛⡁⠘⢛⣱⡇      
  ⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡱⢿⣿⣦⡘⠿⠿⢟⣱⣶⣤⣽⡻⢿⣿⣿⣿⣿⣮⣙⠻⠿⠿⠟⣋⣡⣾⠿⢛⣥⣶⣿⣧⡀ ⠛       
 ⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣶⣻⣿⣿⡏⠛⠿⡟⣫⠁⠸⢭⣝⣛⣛⣛⠿⡟⠛⢋⣭⣥⣶⣾⡟⠛⠋⢉⣁ 
 ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢛⣛⠓⠉⠛⠇⣀⣤⠶⢎⠠⠇ ⣀⠈⢉⡉⠉⢀⡀⠰ ⠉⠉⠉⠉
 ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡎⡳⠂ ⣠⡾⣫⣶⣿⣿⣷⣦⣄⣉⣀⣈⣁⣀⣠⣤⣾⣶⣦⣄⡀ 
 ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢟⠋⡱⠁ ⡰⡟⠑⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡦

                     © NEKOSOFT ${new Date().getFullYear()}
    SPS Version: ${JSON.parse(fs.readFileSync('./package.json')).version}
    Node.JS Version: ${process.version}
`;
