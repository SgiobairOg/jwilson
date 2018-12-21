#! /usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');
const {stripIndent} = require('common-tags');
const locale = require('os-locale');
const link = require('terminal-link');

const t10s = {
	'en' : {
		'title': `Senior Frontend Developer`,
		'office': `Lucerne, Switzerland`,
		'hiring': `We're hiring! `
	},
	'de' : {
		'title': `Senior Frontend-Entwickler`,
		'office': `Luzern, Schweiz`,
		'hiring': `Wir stellen ein! `
	}
}

const urlAsText = (text, url) => text;

const displayCard = ( lang = 'en' ) => {
	lang = lang.substring(0,2);

	console.log(
		boxen(
			stripIndent`
				${chalk.magenta('Jason Wilson')}
				${chalk.blue.bold(t10s[lang].title)}
				${chalk.blue('Cultural Care AuPair / Education First')}
				${chalk.gray(link('jason.wilson@ef.com','mailto:jason.wilson@ef.com?subject=NPX%20Contact', {fallback: urlAsText}))}
				${chalk.gray(t10s[lang].office)}

				${chalk.gray(link('https://www.wilsons.io', 'https://www.wilsons.io', {fallback: urlAsText}))}
				${chalk.gray(link('https://twitter.com/wilsonuponsea', 'https://twitter.com/wilsonuponsea', {fallback: urlAsText}))}
				${chalk.gray(link('https://www.github.com/sgiobairog','https://www.github.com/sgiobairog', {fallback: urlAsText}))}

				${chalk.blue(`${t10s[lang].hiring} ${link('Frontenders and more.','http://app.jobvite.com/m?3YMLbkwv')}`)}
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


