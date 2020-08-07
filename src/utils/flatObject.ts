import { isObject } from './isObject';

interface FlatObjectProject {
  (
    item: unknown,
    key: string,
    source: Record<string, unknown>,
    pathes: Array<string>,
  ): unknown;
}

function _flatObject<S extends Record<string, unknown>, O>(
  source: S,
  pathes: string[],
  project?: FlatObjectProject,
): Record<string, O> {
  return Object.keys(source).reduce((record, key): Record<string, O> => {
    const value = source[key];
    const currentPathes = pathes.concat(key);

    if (isObject(value) && value) {
      Object.assign(
        record,
        _flatObject<Record<string, unknown>, O>(
          value as Record<string, unknown>,
          currentPathes,
          project,
        ),
      );
    } else {
      record[currentPathes.join('.')] = project
        ? (project(source[key] as ValueOf<S>, key, source, currentPathes) as O)
        : (value as O);
    }

    return record;
  }, {} as Record<string, O>);
}

export function flatObject<S extends Record<string, unknown>, O>(
  source: S,
  project?: FlatObjectProject,
): Record<string, O> {
  return _flatObject<S, O>(source, [], project);
}
