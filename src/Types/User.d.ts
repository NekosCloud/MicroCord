import { Snowflake } from "./Common";

export interface User {
    id: Snowflake;
    username: string;
    discriminator: string;
    avatar?: string;
    bot?: boolean;
    system?: boolean;
    mfaEnabled?: boolean;
    banner?: string;
    accentColor: number;
    locale?: string;
    verified?: boolean;
    email?: string;
    flags?: number;
    premiumType?: number;
    publicFlags?: number;
}

export interface UserConnection {
    id: string;
    name: string;
    type: string;
    revoked?: boolean;
    intergrations?: Intergration;
    verified: boolean;
    friendSync: boolean;
    showActivity: boolean;
    visibility: number;
}

export interface Intergration {
    id: Snowflake;
    name: string;
    type: string;
    enabled: boolean;
    syncing?: boolean;
    roleId?: Snowflake;
    enableEmoticons?: boolean;
    expireBehavior?: number;
    expireGracePeriod?: number;
    user?: User;
    account: { id: string, name: string };
    syncedAt?: string;
    subscriberCount?: number;
    revoked?: boolean;
    application?: IntergrationApplication;
}


export interface IntergrationApplication {
    id: Snowflake;
    name: string;
    icon?: string;
    description: string;
    summary: string;
    bot?: User;
}
