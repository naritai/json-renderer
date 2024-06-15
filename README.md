# 💥🤖🪄 HUGE JSON lists Renderer (mostly arbitrary 🙂)

## LIVE DEMO
[https://json-renderer.netlify.app/](https://json-renderer.netlify.app/)
* note: MSW is used in production just to showcase purposes only, as a consequences, on mobile
devices it's not working, so check it up from Desktop device only.

## SCREEN
![JSONRenderer](/public/screenshots/edit.png?raw=true "JSONRenderer")

#### Run & Requirements
* clone this repo and open terminal in the root of the repo
* run `yarn install` (you have to use Node 18v or higher)
* run `yarn dev` and follow the link from your command line

#### Features
* 🔎 JSON Renderer
* 🖍 Edit JSON members form


#### Used packages / libs / api
* [Vite](https://vitejs.dev/)
* [Feature Sliced Design](https://feature-sliced.design/ru/docs/)
* [SASS](https://sass-lang.com/)
* [React-Window](https://github.com/bvaughn/react-window)
* [Zustand](https://github.com/pmndrs/zustand)
* [MSW](https://mswjs.io/)
* [Vitest](https://vitest.dev/)
* [React Testing Library](https://testing-library.com/)
* Prettier/Eslint/Husky

#### Tests
* write a few integration tests
* Why integration tests frist in React app ?
[Writing Tests (redux)](https://redux.js.org/usage/writing-tests)
[Kent C. Dodds (Implementation details)](https://kentcdodds.com/blog/testing-implementation-details)

#### TODO:
* Write more integration tests
* Add Sort (every field need to be sorted differently based on type) & Filtration
* Persist edited delta locally: localstorage | IndexedDB
* Use react-hook-form & zod
* Profile & optimize things
* Refactoring: there's quite a few things that we need to change to make project more scalable. 
  * provide more robust JSON typings to make it really arbitrary JSON
  * make more general form components + use libs for that + make validation
  * add infinite scroll option for clients with low bandwith connection and send them json members in batches
  * for now I'll live things as is, because no new requirements are coming and this is a TEST proj.

#### P. S.
* [Used this eslint setup](https://github.com/ezelohar/task-boilerplate/blob/master/.eslintrc-typescript) - There's a few outdated rules + we have use compat for backward compatibility with oldfashioned eslint config. 