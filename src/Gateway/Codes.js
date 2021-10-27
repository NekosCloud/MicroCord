export const GatewayOpcodes = {
    0: 'dispatch',
    1: 'heartbeat',
    2: 'identify',
    3: 'presenceUpdate',
    4: 'voiceStateUpdate',
    6: 'resume',
    7: 'reconnect',
    8: 'requestGuildMembers',
    9: 'invalidSession',
    10: 'hello',
    11: 'heartbeatACK'
}

export const EnumGatewayOpcodes = {
    'DISPATCH': 0,
    'HEARTBEAT': 1,
    'IDENTIFY': 2,
    'PRESENCE_UPDATE': 3,
    'VOICE_STATE_UPDATE': 4,
    'RESUME': 6,
    'RECONNECT': 7,
    'REQUEST_GUILD_MEMBERS': 8,
    'INVALID_SESSION': 9,
    'HELLO': 10,
    'HEARTBEAT_ACK': 11
}

export const GatewayErrorCodes = {
    4000: 'Unknown Error',
    4001: 'Unknown Opcode',
    4002: 'Decode Error',
    4003: 'Not Authenticated',
    4004: 'Authentication Failed',
    4005: 'Already Authenticated',
    4007: 'Invalid SEQ',
    4008: 'Rate Limited',
    4009: 'Session Timed Out',
    4010: 'Invalid Shard',
    4011: 'Sharding Required',
    4012: 'Invalid API Version',
    4013: 'Invalid Intent(s)',
    4014: 'Disallowed Intent(s)'
}

export const VoiceOpcodes = {
    0: 'identify',
    1: 'selectProtocol',
    2: 'ready',
    3: 'heartbeat',
    4: 'sessionDescription',
    5: 'speaking',
    6: 'heartbeatACK',
    7: 'resume',
    8: 'hello',
    9: 'resumed',
    13: 'clientDisconnect'
}

export const EnumVoiceOpcodes = {
    'IDENTIFY': 0,
    'SELECT_PROTOCOL': 1,
    'READY': 2,
    'HEARTBEAT': 3,
    'SESSION_DESCRIPTION': 4,
    'SPEAKING': 5,
    'HEARTBEAT_ACK': 6,
    'RESUME': 7,
    'HELLO': 8,
    'RESUMED': 9,
    'CLIENT_DISCONNECT': 13
}

export const VoiceErrorCodes = {
    4001: 'Unknown Opcode',
    4002: 'Failed To Decode Payload',
    4003: 'Not Authenticated',
    4004: 'Authentication Failed',
    4005: 'Already Authenticated',
    4006: 'Session No Longer Vaild',
    4009: 'Session Timeout',
    4011: 'Server Not Found',
    4012: 'Unknown Protocol',
    4014: 'Disconnected',
    4015: 'Voice Server Crashed',
    4016: 'Unknown Encryption Mode'
}