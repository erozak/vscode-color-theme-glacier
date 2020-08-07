import { mkdir } from 'fs';

export function makeDirectory(path: string): Promise<boolean> {
  return new Promise((resolve, reject) =>
    mkdir(path, error => (error ? reject(error) : resolve(true))),
  );
}
