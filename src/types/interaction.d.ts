import { Snowflake } from "@spectacles/util";

export interface Interaction {
    id: Snowflake;
    guildId?: string;
    channelId?: string;
    member?: object; // TODO
    user?: object; // TODO
    token: string;
}

export interface Common {
    
}