import type { CvData } from '../types/cv'

export const data: CvData = {
	education: [
		{
			id: 'FED',
			startDate: '2023',
			endDate: '2025',
			title: 'Frontend-Utveckling',
			school: {
				name: 'IT-högskolan',
				linkUrl:
					'https://www.iths.se/utbildningar/frontend/?_gl=1*1qa4iwp*_up*MQ..&gclid=CjwKCAjw2dG1BhB4EiwA998cqD-7SgzDc-Ke2CNO6DjM6ikmwTAEkw-RP5MlmETYu_DpZj5lW5hhVRoCi2cQAvD_BwE',
				linkText: 'iths.se',
			},
			skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue'],
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
				linkUrl: 'https://hermods.se/utbildningar/webbutveckling-1/',
				linkText: 'hermods.se',
			},
			skills: ['HTML', 'CSS', 'Php', 'WordPress'],
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
				linkUrl: 'https://hermods.se/utbildningar/programmering-1/',
				linkText: 'hermods.se',
			},
			skills: ['C#', 'Python', 'Visual Studio', 'Git'],
			content: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			],
		},
	],
	headings: {
		at: 'på',
		education: 'Utbildning',
		work: 'Arbete',
	},

	skills: [
		{
			label: 'HTML',
			slug: 'html',
			usedIn: ['WEB1', 'FED', 'LIA1', 'LIA2'],
		},
		{
			label: 'CSS',
			slug: 'css',
			usedIn: ['WEB1', 'FED', 'LIA1', 'LIA2'],
		},
		{
			label: 'SASS',
			slug: 'sass',
			usedIn: ['FED', 'LIA1', 'LIA2', 'WEB2'],
		},
		{
			label: 'JavaScript',
			slug: 'javascript',
			usedIn: ['WEB1', 'FED', 'LIA1', 'LIA2'],
		},
		{
			label: 'TypeScript',
			slug: 'typescript',
			usedIn: ['WEB1', 'FED', 'LIA1', 'LIA2'],
		},
		{
			label: 'PHP',
			slug: 'php',
			usedIn: ['WEB1', 'FED'],
		},
		{
			label: 'SQL',
			slug: 'sql',
			usedIn: ['FED'],
		},
		{
			label: 'C#',
			slug: 'csharp',
			usedIn: ['PRR1'],
		},
		{
			label: 'JSON',
			slug: 'json',
			usedIn: ['FED', 'LIA1', 'LIA2'],
		},
		{
			label: 'React',
			slug: 'react',
			usedIn: ['FED', 'LIA2'],
		},
		{
			label: 'Vue',
			slug: 'vue',
			usedIn: ['FED', 'LIA1'],
		},
		{
			label: 'Express',
			slug: 'express',
			usedIn: ['FED'],
		},
		{
			label: 'Next',
			slug: 'next',
			usedIn: [],
		},
		{
			label: 'Node',
			slug: 'node',
			usedIn: ['FED', 'LIA1', 'LIA2'],
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
			usedIn: ['FED', 'LIA1'],
		},
		{
			label: 'SQLite',
			slug: 'sqlite',
			usedIn: ['FED'],
		},
		{
			label: 'PostgreSQL',
			slug: 'postgresql',
			usedIn: ['FED'],
		},
		{
			label: 'ESLint',
			slug: 'eslint',
			usedIn: ['FED', 'LIA1', 'LIA2'],
		},
		{
			label: 'Prettier',
			slug: 'prettier',
			usedIn: ['FED', 'LIA2'],
		},
		{
			label: 'SonarQube',
			slug: 'sonarqube',
			usedIn: ['LIA2'],
		},
		{
			label: 'Jest',
			slug: 'jest',
			usedIn: ['LIA2'],
		},
		{
			label: 'Git',
			slug: 'git',
			usedIn: ['WEB1', 'PRR1', 'FED', 'LIA1', 'LIA2'],
		},
		{
			label: 'GitHub',
			slug: 'github',
			usedIn: ['FED'],
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
			usedIn: ['WEB1', 'FED', 'LIA2', 'WEB2'],
		},
		{
			label: 'WordPress',
			slug: 'wordpress',
			usedIn: ['FED'],
		},
		{
			label: 'Contentful',
			slug: 'contentful',
			usedIn: ['FED'],
		},
		{
			label: 'Render',
			slug: 'render',
			usedIn: ['FED'],
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
			usedIn: ['FED', 'LIA1', 'LIA2'],
		},
		{
			label: 'Scrum',
			slug: 'scrum',
			usedIn: ['FED', 'LIA1', 'LIA2'],
		},
		{
			label: 'Kanban',
			slug: 'kanban',
			usedIn: ['FED', 'LIA1', 'LIA2'],
		},
	],
	work: [
		{
			id: 'LIA2',
			startDate: 'VT 2025',
			endDate: '',
			title: 'Frontend-utvecklare praktik',
			company: {
				name: 'Stendahls',
				linkUrl: 'https://www.stendahls.se',
				linkText: 'stendahls.se',
			},
			skills: ['JavaScript', 'React', 'TypeScript', 'HTML', 'CSS'],
			content: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			],
		},
		{
			id: 'LIA1',
			startDate: 'HT 2024',
			endDate: '',
			title: 'Frontend-utvecklare praktik',
			company: {
				name: 'Stendahls',
				linkUrl: 'https://www.stendahls.se',
				linkText: 'stendahls.se',
			},
			skills: ['JavaScript', 'Vue', 'TypeScript', 'HTML', 'CSS'],
			content: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			],
		},
	],
}
