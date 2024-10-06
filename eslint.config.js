import auto from 'eslint-config-canonical/configurations/auto.js';

export default [
  // eslint canonical catch all rules
  ...auto,
  // global ignores
  {
    ignores: [
      'pnpm-lock.yaml',
      '/pnpm-lock.yaml',
      '!.github',
      '!.vscode',
      '**/next-env.d.ts',
      '**/.vercel/**/*',
      '**/.next/**/*',
      '**/dist/**/*',
      'package.json',
      'eslint.config.js'
    ],
  },
];