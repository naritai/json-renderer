# 💥🤖🪄 HUGE JSON lists Renderer (mostly arbitrary 🙂)

## SCREEN
![JSONRenderer](/public/screenshots/edit.png?raw=true "JSONRenderer")

#### Run & Requirements
* clone this repo and open terminal in the root of the repo
* run `yarn install` (you have use Node 18v or higher)
* run `yarn dev` and follow the link from your command line

#### Features
* 🔎 JSON Renderer
* 🖍 Edit JSON members


#### Used packages / libs / api
* [Vite](https://vitejs.dev/)
* [Feature Sliced Design](https://feature-sliced.design/ru/docs/)
* [SASS](https://sass-lang.com/)
* [React-Window](https://github.com/bvaughn/react-window)
* [Zustand](https://github.com/pmndrs/zustand)
* Prettier/Eslint/Husky/lint-staged/pre-commit

#### TODO:
* Persist edited delta locally: localstorage | IndexedDB
* Add Sort & Filtration
* Write mobile styles
* Use react-hook-form & zod
* Profile & optimize things when needed. Premature optimisation is evil
* Write integration tests. Use RTL + Vitest
* Refactoring: there's quite a few things that we need to change to make project more scalable. 
Some JSON typings to provide really arbitrary JSON, some decisions about form components. But for now I'll live things as is, because no new requirements are coming.

#### P. S.
* [Used your eslint setup](https://github.com/ezelohar/task-boilerplate/blob/master/.eslintrc-typescript) - There's a few outdated rules + we have use compat for backward compatibility with oldfashioned eslint config. 