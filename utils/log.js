const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
				console.log(chalk.bold.hex("#66FFFF").bold('😈 Lỗiiii ời 😈 ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FFBBFF").bold('😈 Lỗiiii ời 😈') + data);
			break;
		default:
				console.log(chalk.bold.hex("#99FF33").bold(`${option} Tobi❤️ `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#EEEEEE").bold('» Tobi « ') + data);
			break;
		case "error":
		console.log(chalk.bold.hex("#FFFFFF").bold('» Tobi « ') + data);
			break;
		default:
	console.log(chalk.bold.hex("#FF0000","#FF6699").bold(`» Tobi «  `) + data);
			break;
	}
}