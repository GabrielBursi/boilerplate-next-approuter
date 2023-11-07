export default function (plop) {
	plop.setGenerator('page', {
		description: 'Create a page folder',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Nome da página (rota):'
			}
		],
		actions: [
			{
				type: 'add',
				path: '../src/app/{{name}}/page.tsx',
				templateFile: 'templates/page/page.tsx.hbs'
			},
			{
				type: 'add',
				path: '../src/app/{{name}}/layout.tsx',
				templateFile: 'templates/page/layout.tsx.hbs'
			},
			{
				type: 'add',
				path: '../src/app/{{name}}/loading.tsx',
				templateFile: 'templates/page/loading.tsx.hbs'
			},
			{
				type: 'add',
				path: '../src/app/{{name}}/not-found.tsx',
				templateFile: 'templates/page/not-found.tsx.hbs'
			},
			{
				type: 'add',
				path: '../src/app/{{name}}/error.tsx',
				templateFile: 'templates/page/error.tsx.hbs'
			}
		]
	});
};
