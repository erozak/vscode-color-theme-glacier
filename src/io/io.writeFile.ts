import { writeFile as fsWriteFile } from 'fs';

export function writeFile(path: string, data: string): Promise<boolean> {
  if (!data || data.length <= 0) return Promise.resolve(false);
  else {
    return new Promise((resolve, reject) =>
      fsWriteFile(
        path,
        data,
        {
          flag: 'w',
        },
        error => (error ? reject(error) : resolve(true)),
      ),
    );
  }
}
