import { join as joinPath } from 'path';
import prettier = require('prettier');

export async function getPrettierOptions(
  path: string = joinPath(__dirname, '../../.prettierrc.json'),
): Promise<prettier.Options | null> {
  return await prettier.resolveConfig(path);
}
