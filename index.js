#! /usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');
const {stripIndent} = require('common-tags');
const locale = require('os-locale');

const t10s = {
	'en' : {
		'title': 'Senior Frontend Developer',
		'office': 'Lucerne, Switzerland'
	},
	'de' : {
		'title': 'Senior Frontend-Entwickler',
		'office': 'Luzern, Schweiz'
	}
}

const displayCard = ( lang = 'en' ) => {
	lang = lang.substring(0,2);

	console.log(
		boxen(
			stripIndent`
				${chalk.magenta('Jason Wilson')}
				${chalk.blue.bold(t10s[lang].title)}
				${chalk.blue('Cultural Care AuPair / Education First')}
				${chalk.gray(t10s[lang].office)}

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
}

(async () => {
	const lang = await locale({spawn: false});
	displayCard(lang);
})();


