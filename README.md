# One on One

App para la gestion de reuniones entre lideres con sus liderados.

### Stack:

- Vite
- Node 20 🚀
- React 💻
- JSDoc 📒
- GitHub Actions 🤖

We choose JSDoc for type checks, to avoid the compilying phease like TypeScript, improve the developer experience, still have all the benefits from typing, no configurations, dependencies, etc.

We use prettier, ESLint and webhooks locally to have a better developer experience. Some of these tasks will be handled in the repository trought Actions too like doble check, and other with big overhead like complex tests, etc.

### Project Setup:

First check if your enviroment has the necesary to run:

- check node and npm version running `npm run check-engines-requirements`
- install dependencies `npm install`
- run locally `npm run dev`

### Conventional commit:

We are using [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/) and this implemented in our git process (with git hooks).

Make use of it running the script

```shell
  npm run commit
```

after adding your changes to stage phase.

### GIT rules:

Write good commit message, use [imperative mood](https://en.wikipedia.org/wiki/Imperative_mood) and use the body to explain what and why as opposed to how.

You should commit and push frequently in order to have a good feedback about your changes in the repository. For that, we recommend add your changes to stage (git phase), then commit them with the script `npm run commit` who will guide you throw the process to make the commit with the conventional commits standars.

### Workflow:

Insert a description...

### Enviroments:

Insert your environments, treatment for them, settings, etc.

### Style guide:

Explain your code style and show how to check it.

🚧 🧑‍💻 WIP 🧑‍💻 🚧
