import type { CvData } from '../types/cv'

export const data: CvData = {
	about: [
		{
			firstname: 'Sandra',
			lastname: 'Paläng',
			summary: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt, ligula ut hendrerit malesuada, tortor magna bibendum nisi, in porttitor libero ante sed felis. Cras sed metus non justo tempor tristique. Donec vulputate diam nec justo convallis, at dignissim sapien sollicitudin. ',
			],
		},
	],
	cv: [{ id: 'CV' }],
	education: [
		{
			id: 'FED',
			startDate: '2023',
			endDate: '2025',
			title: 'Frontend-Utveckling',
			school: {
				name: 'IT-högskolan',
				location: 'Göteborg',
				linkUrl:
					'https://www.iths.se/utbildningar/frontend/?_gl=1*1qa4iwp*_up*MQ..&gclid=CjwKCAjw2dG1BhB4EiwA998cqD-7SgzDc-Ke2CNO6DjM6ikmwTAEkw-RP5MlmETYu_DpZj5lW5hhVRoCi2cQAvD_BwE',
				linkText: 'iths.se',
			},
			content: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			],
		},
		{
			id: 'WEB1',
			endDate: '',
			startDate: 'VT 2023',
			title: 'Webbutveckling',
			school: {
				name: 'Hermods',
				location: 'Göteborg',
				linkUrl: 'https://hermods.se/utbildningar/webbutveckling-1/',
				linkText: 'hermods.se',
			},
			content: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			],
		},
		{
			id: 'PRR1',
			endDate: '',
			startDate: 'HT 2022',
			title: 'Programmering',
			school: {
				name: 'Hermods',
				location: 'Göteborg',
				linkUrl: 'https://hermods.se/utbildningar/programmering-1/',
				linkText: 'hermods.se',
			},
			content: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			],
		},
	],
	headings: {
		at: 'på',
		education: 'Utbildning',
		in: 'i',
		skills: 'Kompetenser',
		work: 'Arbete',
	},

	skills: [
		{
			label: 'HTML',
			slug: 'html',
			usedIn: ['WEB1', 'FED', 'LIA1', 'LIA2', 'CV'],
		},
		{
			label: 'CSS',
			slug: 'css',
			usedIn: ['WEB1', 'FED', 'LIA1', 'LIA2', 'CV'],
		},
		{
			label: 'SASS',
			slug: 'sass',
			usedIn: ['FED', 'LIA1', 'LIA2', 'CV'],
		},
		{
			label: 'JavaScript',
			slug: 'javascript',
			usedIn: ['WEB1', 'FED', 'LIA1', 'LIA2', 'CV'],
		},
		{
			label: 'TypeScript',
			slug: 'typescript',
			usedIn: ['WEB1', 'FED', 'LIA1', 'LIA2', 'CV'],
		},
		{
			label: 'PHP',
			slug: 'php',
			usedIn: ['WEB1', 'FED', 'CV'],
		},
		{
			label: 'SQL',
			slug: 'sql',
			usedIn: ['FED', 'CV'],
		},
		{
			label: 'C#',
			slug: 'csharp',
			usedIn: ['PRR1'],
		},
		{
			label: 'JSON',
			slug: 'json',
			usedIn: ['FED', 'LIA1', 'LIA2', 'CV'],
		},
		{
			label: 'React',
			slug: 'react',
			usedIn: ['FED', 'LIA2', 'CV'],
		},
		{
			label: 'Vue',
			slug: 'vue',
			usedIn: ['FED', 'LIA1', 'CV'],
		},
		{
			label: 'Express',
			slug: 'express',
			usedIn: ['FED'],
		},
		{
			label: 'Next',
			slug: 'next',
			usedIn: ['FED'],
		},
		{
			label: 'Node',
			slug: 'node',
			usedIn: ['FED', 'LIA1', 'LIA2', 'CV'],
		},
		{
			label: 'Vite',
			slug: 'vite',
			usedIn: ['FED', 'LIA2', 'CV'],
		},
		{ label: 'Axios', slug: 'axios', usedIn: [] },
		{ label: 'Fetch', slug: 'fetch', usedIn: [] },
		{
			label: 'GraphQL',
			slug: 'graphql',
			usedIn: ['FED', 'LIA1', 'CV'],
		},
		{
			label: 'SQLite',
			slug: 'sqlite',
			usedIn: ['FED'],
		},
		{
			label: 'PostgreSQL',
			slug: 'postgresql',
			usedIn: ['FED', 'CV'],
		},
		{
			label: 'ESLint',
			slug: 'eslint',
			usedIn: ['FED', 'LIA1', 'LIA2', 'CV'],
		},
		{
			label: 'Prettier',
			slug: 'prettier',
			usedIn: ['FED', 'LIA2', 'CV'],
		},
		{
			label: 'SonarQube',
			slug: 'sonarqube',
			usedIn: ['LIA2', 'CV'],
		},
		{
			label: 'Jest',
			slug: 'jest',
			usedIn: ['LIA2', 'CV'],
		},
		{
			label: 'Git',
			slug: 'git',
			usedIn: ['WEB1', 'PRR1', 'FED', 'LIA1', 'LIA2', 'CV'],
		},
		{
			label: 'GitHub',
			slug: 'github',
			usedIn: ['FED', 'CV'],
		},
		{
			label: 'Gitea',
			slug: 'gitea',
			usedIn: ['LIA1', 'LIA2'],
		},
		{
			label: 'IntelliJ',
			slug: 'intellij',
			usedIn: ['LIA1'],
		},
		{
			label: 'Visual Studio',
			slug: 'visual-studio',
			usedIn: ['PRR1'],
		},
		{
			slug: 'visual-studio-code',
			label: 'Visual Studio Code',
			usedIn: ['WEB1', 'FED', 'LIA2'],
		},
		{
			label: 'WordPress',
			slug: 'wordpress',
			usedIn: ['FED', 'CV'],
		},
		{
			label: 'Contentful',
			slug: 'contentful',
			usedIn: ['FED', 'CV'],
		},
		{
			label: 'Render',
			slug: 'render',
			usedIn: ['FED', 'CV'],
		},
		{
			label: 'Vercel',
			slug: 'vercel',
			usedIn: ['FED'],
		},
		{
			label: 'Confluence',
			slug: 'confluence',
			usedIn: ['LIA1', 'LIA2'],
		},
		{
			label: 'Jira',
			slug: 'jira',
			usedIn: ['LIA1', 'LIA2'],
		},
		{
			label: 'Slack',
			slug: 'slack',
			usedIn: ['LIA1', 'LIA2'],
		},
		{
			label: 'Trello',
			slug: 'trello',
			usedIn: ['FED'],
		},
		{
			label: 'Figma',
			slug: 'figma',
			usedIn: ['FED', 'LIA1', 'LIA2', 'CV'],
		},
		{
			label: 'Scrum',
			slug: 'scrum',
			usedIn: ['FED', 'LIA1', 'LIA2', 'CV'],
		},
		{
			label: 'Kanban',
			slug: 'kanban',
			usedIn: ['FED', 'LIA1', 'LIA2', 'CV'],
		},
	],
	work: [
		{
			id: 'LIA2',
			startDate: 'VT 2025',
			endDate: '',
			title: 'Frontend-utvecklare',
			isInternship: true,
			internship: 'praktik',
			company: {
				name: 'Stendahls',
				location: 'Göteborg',
				linkUrl: 'https://www.stendahls.se',
				linkText: 'stendahls.se',
			},
			content: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			],
		},
		{
			id: 'LIA1',
			startDate: 'HT 2024',
			endDate: '',
			title: 'Frontend-utvecklare',
			isInternship: true,
			internship: 'praktik',
			company: {
				name: 'Stendahls',
				location: 'Göteborg',
				linkUrl: 'https://www.stendahls.se',
				linkText: 'stendahls.se',
			},
			content: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			],
		},
	],
}
