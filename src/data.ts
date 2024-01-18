import { v4 } from 'uuid'
import {
	Emprendedores,
	Portfolio,
	Quizinator,
	Weather,
	GameOver,
} from '@import/image'

export const PortfolioData = [
	{
		id: v4(),
		title: 'Web para Emprendedores',
		subTitle: 'Official Website',
		url: 'https://webs-emprendedores.vercel.app',
		description: [
			'🚀 ¡Bienvenido a Web para Emprendedores! 🚀',
			'Somos tu espacio digital diseñado exclusivamente para inspirar y apoyar a emprendedores como tú en la emocionante travesía del mundo empresarial. 💼✨',
			'🌐 Explora, Aprende, Triunfa: En "Web para Emprendedores", te ofrecemos una',
			'amplia gama de recursos y conocimientos esenciales para construir y promover tu ',
			'presencia en línea. Desde la creación de sitios web hasta estrategias efectivas de ',
			'marketing, aquí encontrarás todo lo que necesitas para destacar en el universo digital.',
		],
		image: {
			main: Emprendedores,
			desktop: '',
			mobile: '',
		},
		filter: 'filter-web',
	},
	{
		id: v4(),
		title: 'Game Over',
		subTitle: 'SPA | Catalogo de video juegos',
		url: 'https://koushikpuppala.com/github/musics_dj',
		description: [
			'This is also an open-source Discord Bot which I made using discord.js and JavaScript.',
			'It is having so many music commands like play, pause, skip, volume settings, etc.',
			'There are so many filter commands and playlist commands also.',
		],
		image: {
			main: GameOver,
			desktop: '',
			mobile: '',
		},
		filter: 'filter-bot',
	},
	{
		id: v4(),
		title: 'Portfolio',
		subTitle: 'Official Website - IIIT Raichur',
		url: 'https://iiitr.ac.in',
		description: [
			'This is the Official Website of our College Indian Institute of Information Technology Raichur.',
			'The full website was made using Jekyll and there is no use of Backend and Database at present, Nothing about those.',
			'It has been hosted on GitLab.',
			'In this, we have everything about our college Information, Activates etc.',
		],
		image: {
			main: Portfolio,
			desktop: '',
			mobile: '',
		},
		filter: 'filter-web',
	},
	{
		id: v4(),
		title: 'Quizinator',
		subTitle: 'App | Quiz',
		url: 'https://koushikpuppala.com/github/avenger',
		description: [
			'This is one of my best Discord bots made by using discord.js and Javascript.',
			'It has more than 150+ commands and 13+ categories.',
			'It is an open-source, fully customizable Discord bot that is constantly growing.',
			'It also comes packed with a variety of features, such as Welcome messages and farewell messages, Extensive Logging for 37 events, Slash Commands, Advanced auto-moderation, Audio filters for music plugins, Custom playlist support, Giveaways, Reaction roles, And much more! There are over 40+ settings to tweak!',
		],
		image: {
			main: Quizinator,
			desktop: '',
			mobile: '',
		},
		filter: 'filter-bot',
	},
	{
		id: v4(),
		title: 'Weather',
		subTitle: 'React APP | Weather Forecast',
		url: 'https://koushikpuppala.com/github/E.D.I.T.H-Screen-Recorder',
		description: [
			'This is a Screen recording Application created for our Semester Project.',
			'It was built using Electron, HTML, and Javascript.',
			'This application has Google Login and Google Drive Authentication.',
			"The recorded video will be auto-uploaded to the User's google drive if the user logged in using google.",
		],
		image: {
			main: Weather,
			desktop: '',
			mobile: '',
		},
		filter: 'filter-app',
	},
	
]

export const SkillsData = [
	{
		id: v4(),
		name: 'NodeJS',
		percentage: 100,
	},
	{
		id: v4(),
		name: 'HTML',
		percentage: 100,
	},
	{
		id: v4(),
		name: 'Express',
		percentage: 100,
	},
	{
		id: v4(),
		name: 'JavaScript',
		percentage: 90,
	},
	{
		id: v4(),
		name: 'EJS',
		percentage: 90,
	},
	{
		id: v4(),
		name: 'CSS',
		percentage: 80,
	},
	{
		id: v4(),
		name: 'React',
		percentage: 80,
	},
	{
		id: v4(),
		name: 'NextJS',
		percentage: 80,
	},
	{
		id: v4(),
		name: 'MongoDB',
		percentage: 75,
	},
	{
		id: v4(),
		name: 'TypeScript',
		percentage: 40,
	},
]

export const InterestData = [
	{
		id: v4(),
		name: 'Open Source',
		icon: 'ri-open-source-line',
		color: '#11DBCF',
	},
	{
		id: v4(),
		name: 'Full Stack Development',
		icon: 'ri-stack-line',
		color: '#FFBB2C',
	},
	{
		id: v4(),
		name: 'MERN Stack Development',
		icon: 'ri-code-s-slash-line',
		color: '#4233FF',
	},
	{
		id: v4(),
		name: 'Discord Bots Development',
		icon: 'ri-discord-line',
		color: '#FFA76E',
	},
	{
		id: v4(),
		name: 'Android Apps Development',
		icon: 'ri-android-line',
		color: '#5578FF',
	},
	{
		id: v4(),
		name: 'Game Development',
		icon: 'ri-gamepad-line',
		color: '#E80368',
	},
	{
		id: v4(),
		name: 'Artificial Intelligence',
		icon: 'ri-cpu-line',
		color: '#E361FF',
	},
	{
		id: v4(),
		name: 'Machine Learning',
		icon: 'ri-settings-5-line',
		color: '#47AEFF',
	},
]
