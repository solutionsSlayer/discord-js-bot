const MESSAGES = {
    COMMANDS: {
        MISC: {
            ADD: {
                name: 'add',
                aliases: ['add'],
                category: 'Misc',
                description: 'Ajoute un rôle.',
                permission: true,
                isUserAdmin: false,
                args: true,
                usage: `!add <your_role>`,
                isAdmin: true
            },
            HELP: {
                name: 'help',
                aliases: ['help'],
                category: 'Misc',
                description: 'Consulter les commandes',
                permission: true,
                isUserAdmin: false,
                args: false,
                usage: `!help`,
                isAdmin: false
            },
            ARTIST: {
                name: 'artist',
                aliases: ['artist'],
                category: 'Misc',
                description: 'Ajoute le rôle artist.',
                permission: true,
                isUserAdmin: false,
                args: false,
                usage: `!artist`,
                isAdmin: false
            },
            CLEAN: {
                name: 'clean',
                aliases: ['clean'],
                category: 'Misc',
                description: 'Nettoyer le channel de tout les messages.',
                permission: false,
                isUserAdmin: false,
                args: false,
                usage: `!clean`,
                isAdmin: false
            },
            SERVERINFO: {
                name: 'serverinfo',
                aliases: ['serverinfo'],
                category: 'Misc',
                description: 'Renvoi un message renseignant sur le serveur',
                permission: false,
                isUserAdmin: false,
                permission: true,
                args: false,
                usage: `!serverinfo`,
                isAdmin: false
            },
            STREAMER: {
                name: 'streamer',
                aliases: ['streamer'],
                category: 'Misc',
                description: 'Valider le rôle utilisateur',
                cooldown: 10,
                permissions: false,
                isUserAdmin: false,
                args: false,
                usage: `!streamer`,
                isAdmin: false
            },
            USERINFO: {
                name: 'userinfo',
                aliases: ['userinfo'],
                category: 'Misc',
                description: 'Renvoi un message renseignant sur l\'utilisateur',
                permission: false,
                isUserAdmin: false,
                args: true,
                usage: `!userinfo`,
                isAdmin: false
            }
        },
        MODERATION: {
            BAN: {
                name: 'ban',
                aliases: ['ban'],
                category: 'Moderation',
                description: 'Ban un utilisateur',
                permission: true,
                isUserAdmin: true,
                args: true,
                usage: `!ban <@user> <reason>`,
                isAdmin: false
            },
            KICK: {
                name: 'kick',
                aliases: ['kick'],
                category: 'Moderation',
                description: 'Kick un utilisateur',
                permission: true,
                isUserAdmin: true,
                args: true,
                usage: `!kick <@user> <reason>`,
                isAdmin: false
            },
            MUTE: {
                name: 'mute',
                aliases: ['mute'],
                category: 'Moderation',
                description: 'mute un utilisateur avec une durée détérminée ou une heure par défaut.',
                permission: true,
                isUserAdmin: true,
                args: true,
                usage: `!mute <@user> <number s/m/h> <reason>`,
                isAdmin: false
            },
            PRUNE: {
                name: 'prune',
                aliases: ['prune'],
                category: 'Moderation',
                description: 'Supprime les messages d"un utilisateur dans le channel',
                permission: true,
                isUserAdmin: false,
                args: true,
                usage: `!prune <@user> <number_message>`,
                isAdmin: false
            },
            UNBAN: {
                name: 'unban',
                aliases: ['unban'],
                category: 'Moderation',
                description: 'Unban un utilisateur',
                permission: true,
                isUserAdmin: false,
                args: true,
                usage: `!unban <@user>`,
                isAdmin: false
            },
            UNMUTE: {
                name: 'unmute',
                aliases: ['unmute'],
                category: 'Moderation',
                description: 'unmmute un utilisateur',
                permission: true,
                isUserAdmin: true,
                args: true,
                usage: `!unmute <@user>`,
                isAdmin: false
            }
        },
        REACTIONS: {
            ALLROLES: {
                name: 'allroles',
                aliases: ['allroles'],
                category: 'reactions',
                description: 'Créer un embed permettant de réagir avec le rôle twitchUser "welcome embed"',
                cooldown: 10,
                permissions: true,
                isUserAdmin: false,
                args: false,
                usage: `!allroles`,
                isAdmin: true
            }
        },
        ADMIN: {
            RELOAD: {
                name: 'reload',
                aliases: ['reload'],
                category: 'Admin',
                description: 'Relancer le bot',
                permission: true,
                isUserAdmin: false,
                args: false,
                usage: `!reload>`,
                isAdmin: true
            },
            EVAL: {
                name: 'eval',
                aliases: ['eval'],
                category: 'admin',
                description: 'Permet d"éxécuter du code dans la barre des tâches.',
                cooldown: 10,
                permissions: true,
                isUserAdmin: false,
                args: false,
                usage: `!eval`,
                isAdmin: true
            },
            CONFIG: {
                name: 'config',
                aliases: ['config'],
                category: 'admin',
                description: 'Permet de modifier la config de base du bot comme le préfix ou le message de bienvenue. Cette command est liée au cluster mongoDB atlas.',
                cooldown: 10,
                permissions: true,
                isUserAdmin: false,
                args: false,
                usage: `!config`,
                isAdmin: true
            }
        }
    }
}

exports.MESSAGES = MESSAGES;