import {Octokit} from '@octokit/core';

export default class GithubIntegration {
  private octokit: Octokit;
  constructor() {
    this.octokit = new Octokit({
      auth: process.env['GITHUB_TOKEN'],
    });
  }

  public async getGist(id: string) {
    return await this.octokit.request('GET /gists/{gist_id}', {
      gist_id: id,
    });
  }
}
