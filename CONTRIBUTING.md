# Contributing

Thanks for your interest in contributing to asterisk/ui. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [hello@asterisk.uno](mailto:hello@asterisk.uno).

## Structure

This repository is structured as follows:

```
├── apps
│   └── www
│       ├── app
│       ├── components
│       │   ├── ui
│       │   └── examples
│       └── content
└── components

```

| Path                  | Description                              |
| --------------------- | ---------------------------------------- |
| `apps/www/app`        | The Next.js application for the website. |
| `apps/www/components` | The React components for the website.    |
| `apps/www/content`    | The content for the website.             |
| `apps/www/registry`   | The registry for the components.         |
| `components`          | The `asterisk-ui` component collection.  |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/asterisk-ui.git
```

### Navigate to project directory

```bash
cd asterisk-ui
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
npm install
```

#### Examples

To run the `asterisk-ui` website:

```bash
npm run dev
```

## Documentation

The documentation for this project is located in the `www` workspace. You can run the documentation locally by running the following command:

```bash
npm run dev
```

Documentation is written using [MDX](https://mdxjs.com). You can find the documentation files in the `apps/www/content/docs` directory.

## Components

You can find the source code for the components under `components`.

When adding or modifying components, please ensure that:

1. You update the documentation.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the evervault card component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub. We'll be happy to help you out.
