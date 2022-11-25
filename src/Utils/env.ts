export function cleanUpEnv(data: string): Record<string, string> {
  const res: Record<string, string> = {};

  data
    .replace(/#+.+\n/gm, '')
    .replace(/(\r?\n)(?:\r?\n)+/gm, '')
    .split('\n')
    .forEach(line => {
      if (line) {
        const [key, value] = line.split('=');
        res[key.trim()] = value.trim();
      }
    });

  return res;
}

export function convertEnvToString(data: Record<string, string>): string {
  return Object.keys(data)
    .map(key => `${key}=${data[key]}`)
    .join('\n');
}
