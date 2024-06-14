# 💥🤖🪄 HUGE JSON lists Renderer (mostly arbitrary 🙂)

## LIVE DEMO
[https://json-renderer.netlify.app/](https://json-renderer.netlify.app/)
* note: on mobile ot won't work, bc MSW Service Worker won't supported, so open from desktop.
Of course we could use just a simple file... data.json, but project won't adapted for mobile either.

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
* Prettier/Eslint/Husky

#### TODO:
* Add Sort (every field need to be sorted differently based on type) & Filtration
* Persist edited delta locally: localstorage | IndexedDB
* Use react-hook-form & zod
* Profile & optimize things
* Write integration tests. Use RTL + Vitest + MSW
* Refactoring: there's quite a few things that we need to change to make project more scalable. 
  * provide more robust JSON typings to make it really arbitrary JSON
  * make more general form components + use libs for that + make validation
  * add infinite scroll option for clients with low bandwith connection and send them json members in batches
  * for now I'll live things as is, because no new requirements are coming and this is a TEST proj.

#### P. S.
* [Used this eslint setup](https://github.com/ezelohar/task-boilerplate/blob/master/.eslintrc-typescript) - There's a few outdated rules + we have use compat for backward compatibility with oldfashioned eslint config. 