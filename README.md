### Overview

This application is built on hapi with es6, react, redux, and webpack.

This is a simple example of providing server side rendering of universal react views with CSS,
but without requiring webpack to compile the server code as well.

To accomplish server side rendering without using webpack, the entire project is transpiled using babel.
Once this is done, webpack is run on the transpiled code to bundle the client side. Finally, the `npm start`
script uses the hook `css-modules-require-hook/preset` to handle css imports in react views when rendering
server side.
