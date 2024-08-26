export interface Github {
  background: String;
  octocat: String;
  repoUrl: String
}

export interface ApplicationState {
  version: String;
  github: Github;
}

const DEFAULT_GITHUB_STATE: Github = {
  background: '#000',
  octocat: "#FFF",
  repoUrl: "https://github.com/theaccordance/design-tools"
};

export const DEFAULT_APPLICATION_STATE: ApplicationState = {
  version: "2024.1.0",
  github: DEFAULT_GITHUB_STATE
}
