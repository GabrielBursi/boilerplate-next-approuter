export default function (plop) {
    plop.setGenerator('template', {
        description: 'Create a template',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Nome do Template:'
            },
            {
                type: 'confirm',
                name: 'useProps',
                message: 'Vai usar type para as propriedades?'
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/components/index.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/styles.ts',
                templateFile: 'templates/components/styles.ts.hbs'
            },
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/test.spec.tsx',
                templateFile: 'templates/components/test.spec.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/types.ts',
                templateFile: 'templates/components/types.ts.hbs'
            }
        ]
    });
};
