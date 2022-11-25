import GithubIntegration from './Integration/Github';
import {existsSync, readFileSync, writeFileSync} from 'fs';
import {cleanUpEnv, convertEnvToString} from './Utils/env';

async function main() {
  const res = await new GithubIntegration().getGist(
    '81ca4525fc8a9c43322a05613979a3eb'
  );

  let envContents: Record<string, string> = cleanUpEnv(
    res.data.files!['.env']!.content!
  );

  if (existsSync('.env')) {
    const currentEnvContents = cleanUpEnv(readFileSync('.env', 'utf8'));
    envContents = {...currentEnvContents, ...envContents};
  }

  writeFileSync('.env', convertEnvToString(envContents));
}

main().catch(console.error);
