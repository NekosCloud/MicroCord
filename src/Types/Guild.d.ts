import { Snowflake } from "./Common";
import { User } from "./User";

export interface Guild {
    id: Snowflake;
    name: string;
    icon?: string;
    iconHash?: string;
    splash?: string;
    discoverySplash?: string;
    owner?: boolean;
    ownerId: Snowflake;
    permissions?: string;
    region?: string;
    afkChannelId?: Snowflake;
    afkTimeout: number;
    widgetEnabled?: boolean;
    widgetChannelId?: Snowflake;
    verificationLevel: number;
    defaultMessageNotifications: number;
    explicitContentFilter: number;
    roles: Role[];
    emojis: Emoji[];
    features: string[];
    mfaLevel: number;
    applicationId?: Snowflake;
    systemChannelId?: Snowflake;
    systemChannelFlags: number;
    rulesChannelId?: Snowflake;
    joinedAt?: string;
    large?: boolean;
    unavailable?: boolean;
    memberCount?: number;
    voiceStates?: object[]; // TODO
    members?: Member[];
    channels?: object[]; // TODO
    threads?: object[]; // TODO
    presences?: object[]; // TODO
    maxPresences?: number;
    maxMembers?: number;
    vanityUrlCode?: string;
    description?: string;
    banner?: string;
    premiumTier: number;
    premiumSubscriptionCount?: number;
    preferredLocale: string;
    publicUpdatesChannelId?: Snowflake;
    maxVideoChannelUsers?: number;
    approximateMemberCount?: number;
    approximatePresenceCount?: number;
    welcomeScreen?: WelcomeScreen;
    nsfwLevel: number;
    stageInstances?: object[]; // TODO
    stickers?: object[]; // TODO
}

export interface Member {
    user?: User;
    nick?: string;
    avatar?: string;
    roles: Snowflake[];
    joinedAt: string;
    premiumSince?: string;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
    permissions?: string;
}

export interface Role {
    id: Snowflake;
    name: string;
    color: number;
    hoist: boolean;
    icon?: string;
    unicode_emoji?: string;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: RoleTag;
}

export interface RoleTag {
    botId?: Snowflake;
    intergrationId?: Snowflake;
    premiumSubscriber?: null;
}

export interface Emoji {
    id?: Snowflake;
    name?: string;
    roles?: Role[];
    user?: User[];
    requireColons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}

export interface WelcomeScreen {
    description?: string;
    welcomeChannels: WelcomeScreenChannel[];
}

export interface WelcomeScreenChannel {
    channelId: Snowflake;
    description: string;
    emojiId?: Snowflake;
    emojiName?: string;
}
