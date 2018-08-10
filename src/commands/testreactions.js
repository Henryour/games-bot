module.exports = {
	run: (message) => testReactions(message),
	help: 'Tests reactions'
};

async function testReactions (message) {
	const msg = await message.channel.send('React to this message in the next minute to get information about emojis:');
	const collector = msg.createReactionCollector(r => r.users.get(message.author.id), {maxUsers: 1, time: 60 * 1000});
	collector.on('end', collected => {
		console.log(collected.first().emoji.name);
	});
	return;
}