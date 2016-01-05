# Reddit Wallpapers

Reddit Wallpapers is an isomorphic React app that pulls data from /r/wallpaper. It uses Express as the server, React as the renderer, and Redux as the architecture. As an isomorphic app, it renders the very minimum data from the server, and after it's fully loaded in the browser, it continues as a responsive, asynchronous browser app. This project is hosted in [my website]. It's still under development, therefore, feature set and project structure might change over time.

### Requirements

This project uses [Node.js] as its server. In production environment it uses [Forever]. Install forever globally:
```sh
$ npm install -g forever
```

### Installation

After cloning from git:
```sh
$ npm install
```
To build the project for production environment:
```sh
$ npm run build
```

### Running

To run in development mode:
```sh
$ npm run dev
```
To run in production mode:
```sh
$ npm start
```
To stop production mode:
```sh
$ npm stop
```

   [Node.js]: <http://nodejs.org>
   [Forever]: <https://github.com/foreverjs/forever>
   [my website]: <http://wallpaper.sokcoba.in>
