import { join as joinPath } from 'path';

import { buildup } from './output';

buildup({
  themes: [
    {
      name: 'testTheme',
      type: 'dark',
      colors: {
        badge: {
          foreground: '#000',
        },
      },
    },
  ],
  path: joinPath(process.cwd(), 'build'),
  prettierConfigPath: joinPath(__dirname, '../.prettierrc.json'),
});
