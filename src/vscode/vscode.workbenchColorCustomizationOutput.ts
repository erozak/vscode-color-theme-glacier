import type { VscodeOutput } from './vscode.types';

import { jsonStringify } from '../io';
import { stringifyColorSettings } from './vscode.stringifyColorSettings';

export const vscodeWorkbenchColorCustomizationOutput: VscodeOutput = function vscodeOutput(
  _,
  theme,
  config,
) {
  const data = {
    'workbench.colorCustomizations': stringifyColorSettings({
      terminal: theme.colors?.terminal,
    }),
  };

  return jsonStringify(data, {
    prettierOptions: config?.prettierOptions,
  });
};
