
- Setup the entire toolchain consisting of the following NPM scripts
    - build for calling webpack only (webpack will call babel, typescript etc. as needed)
    - watch for running webpack in background and compile code when files change
    - lint for calling eslint and check the code
    - typecheck should call typescript and only show type errors not outputting compiled JS (noEmit compiler option)
    Use the square and sum functions from above as example code
- There should be one linting and one type error in the submission
- Use [typescript combined with babel](https://iamturns.com/typescript-babel/) and [webpack](https://webpack.js.org/guides/typescript/)
- Make sure code is type-checked and running in the browser
- [Use eslint to lint your typescript code](https://github.com/typescript-eslint) - done
