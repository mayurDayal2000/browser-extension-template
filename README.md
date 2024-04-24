# Extension Template with React, TypeScript, Material UI, and Vite

This project is a template for creating extensions using React, TypeScript, Material UI, and Vite. It's designed to help developers quickly start building extensions for both Chrome and Firefox.

## Features

- **React**: For building the UI components of the extension.
- **TypeScript**: For static typing, enhancing code quality and developer experience.
- **Material UI**: For a modern and responsive UI design.
- **Vite**: For fast development and building of the extension.

## Installation and Working

1. Clone the repository:

```
$ https://github.com/mayurDayal2000/browser-extension-template
```

2. Navigate to the project directory:

```
$ cd browser-extension-template
```

3. Install dependencies:

```
$ yarn install
```

4. Start the development server and watch for changes:

```
$ yarn start
```

## Building

1. Build the extension for production: `$ yarn build`

2. To use extension on

   1. Google Chrome: go to [chrome://extensions/](chrome://extensions/) and click on "Load unpacked", then select the "dist" folder obtained via "yarn build".

   2. Mozilla Firefox: go to [about:debugging#/setup](about:debugging#/setup) and click on the "This Firefox tab" which provides information about the extensions and running workers. Then select "Load temporary addon" and select the "dist/index.html" file obtained by "yarn build".
