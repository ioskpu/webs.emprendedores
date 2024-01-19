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
		url: 'https://game-over-nine.vercel.app/',
		description: [
			'Single Page Application utlizando las tecnologías: React, Redux, Node, Express y Sequelize.',
			'- Poner en práctica recursos básicos de estilo y diseño (UX : UI).',
			'- Afirmar y conectar los conceptos aprendidos en la carrera.',
			'- Aprender mejores prácticas.',
			'- Aprender y practicar el workflow de GIT.',
			'- Utilizar y practicar testing.',
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
		subTitle: 'Mi Portfolio oficial',
		url: 'https://portfolio-ioskpu.vercel.app',
		description: [
			'Aqui encontraras todos mis proyectos y habilidades.',
			'Ha sido alojado en Vercel.',
			'He utilizado tecnologias como React, Vite, Typescript y Tailwind CSS.',
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
		url: 'https://opentrivia-nine.vercel.app',
		description: [
			'Es un juego de palabras que consume sus datos de una API',
			
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
		url: 'https://react-weather-app-blond.vercel.app',
		description: [
			'Este proyecto esta hecho en React',
			'Consume sus datos de una API y muestra los datos en tiempo real',
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
		percentage: 80,
	},
	{
		id: v4(),
		name: 'HTML',
		percentage: 100,
	},
	{
		id: v4(),
		name: 'Express',
		percentage: 80,
	},
	{
		id: v4(),
		name: 'JavaScript',
		percentage: 75,
	},
	{
		id: v4(),
		name: 'EJS',
		percentage: 70,
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
		percentage: 60,
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
