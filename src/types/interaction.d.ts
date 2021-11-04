import { Snowflake } from "./Common";
import { Member } from "./Guild";
import { User } from "./User";

export interface Interaction {
    id: Snowflake;
    guildId?: string;
    channelId?: string;
    member?: Member;
    user?: User;
    token: string;
}

export interface Common {
    
}