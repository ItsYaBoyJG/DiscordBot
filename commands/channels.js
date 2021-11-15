exports.commands = [
    "create",
    "voice",
    "delete",
    "servers",
    "topic"
]
 
    exports.create = {
        usage: "<channel name>",
        description: "creates a new text channel with the given name.",
        process: function(bot,msg,suffix) {
            if(msg.channel.permissionsFor(bot.user).any(Discord.Permissions.MANAGE_CHANNELS)){
                msg.channel.guild.channels.create(suffix,{type:"text"}).then(function(channel) {
                    msg.channel.send("created " + channel);
                }).catch(function(error){
                    msg.channel.send("failed to create channel: " + error);
                });
            } else {
                msg.channel.send("You don't have permission to manage channels!");
            }
        }
},
exports.voice = {
	usage: "<channel name>",
	description: "creates a new voice channel with the give name.",
	process: function(bot,msg,suffix) {
		if(msg.channel.permissionsFor(bot.user).any(Discord.Permissions.MANAGE_CHANNELS)){
			msg.channel.guild.channels.create(suffix,{type:"voice"}).then(function(channel) {
				msg.channel.send("created " + channel.id);
				console.log("created " + channel);
			}).catch(function(error){
				msg.channel.send("failed to create channel: " + error);
			});
		} else {
			msg.channel.send("You don't have permission to manage channels!");
		}
	}
},
exports["delete"] = {
	usage: "<channel name>",
	description: "deletes the specified channel",
	process: function(bot,msg,suffix) {
		if(msg.channel.permissionsFor(bot.user).any(Discord.Permissions.MANAGE_CHANNELS)){
			var channel = bot.channels.resolve(suffix);
			if(!channel && suffix.startsWith('<#')){
				channel = bot.channels.resolve(suffix.substr(2,suffix.length-3));
			}
			if(!channel){
				msg.channel.send( "Couldn't find channel " + suffix + " to delete!");
				return
			}
			msg.channel.send(`deleting channel ${suffix} at ${msg.author}'s request`);
			channel.delete().then(function(channel){
				console.log(`deleted ${suffix} at ${msg.author}'s request`);
			}).catch(function(error){
				msg.channel.send("couldn't delete channel: " + error);
			});
		} else {
			msg.channel.send("You don't have permission to manage channels!");
		}
	}
}

exports.topic = {
	usage: "[topic]",
	description: 'Sets the topic for the channel. No topic removes the topic.',
	process: function(bot,msg,suffix) {
		if(msg.channel.permissionsFor(bot.user).any(Discord.Permissions.MANAGE_CHANNELS)){
			msg.channel.setTopic(suffix);
		} else {
			msg.channel.send("You don't have permission to manage channels!");
		}
		
	}
}