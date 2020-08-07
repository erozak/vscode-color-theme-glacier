import prettier = require('prettier');

export function jsonStringify(
  data: Record<string, unknown>,
  options?: {
    prettierOptions?: prettier.Options | null;
  },
): string {
  let parsed = JSON.stringify(data);

  if (options?.prettierOptions) {
    parsed = prettier.format(parsed, {
      ...options.prettierOptions,
      parser: 'json-stringify',
    });
  }

  return parsed;
}
