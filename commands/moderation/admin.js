exports.commands = [
    "uptime"
]

var startTime = Date.now();


exports.uptime = {
    usage = "",
    description: "returns the amount of time since the bot started",
    process: function(bot, msg, suffix){
        var now = Date.now();
		var milsec = now - startTime;
		console.log("Uptime is " + milsec + " milliseconds");
		var days = Math.floor(milsec / 1000 / 60 / 60 / 24);
		milsec -= days * 1000 * 60 * 60 * 24;
		var hours = Math.floor(milsec / 1000 / 60 / 60);
		milsec -= hours * 1000 * 60 * 60;
		var mins = Math.floor(milsec / 1000 / 60);
		milsec -= mins * 1000 * 60;
		var secs = Math.floor(milsec / 1000);
		var timestr = "";
		if(days > 0) {
			timestr += days + " days ";
		}
		if(hours > 0) {
			timestr += hours + " hours ";
		}
		if(mins > 0) {
			timestr += mins + " minutes ";
		}
		if(secs > 0) {
			timestr += secs + " seconds ";
		}
		msg.channel.send("**Uptime**: " + timestr);
    } 
}