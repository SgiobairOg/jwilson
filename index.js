#! /usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');
const {stripIndent} = require('common-tags');

console.log(
	boxen(
		stripIndent`
			${chalk.blue.dim('Jason Wilson')}
			${chalk.blue.bold('Senior Frontend Developer')}
			${chalk.blue('Cultural Care AuPair / Education First')}
			
			${chalk.gray('https://www.wilsons.io')}
			${chalk.gray('https://twitter.com/wilsonuponsea')}
			${chalk.gray('https://www.github.com/sgiobairog')}
		`,
		{
			borderColor: "blue",
			borderStyle: "double",
			dimBorder: true,
			margin: 1,
			padding: 1,
			align: "center"
		}
	)
);


