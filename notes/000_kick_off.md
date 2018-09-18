> ## A. About Angular
- JS framework to develop SPA.
- Does not make regular communication with Server.
- No page refresh / no URL change (route chnages).
- `Angular1(2010)` > `Angular2 (2016)`, with `TS` (developed by microsoft) > `Angular7(2018 Sep)` > _just incremental improvements_
- TS 


> ## B. Traditional webapp vs Angular

1. **JS**
- It is used just to do basic DOM manipulation in traditional web app. 
- Angular uses JS to more complex operation indirectly. Angular uses scripting language TS, transcompile it to JS, and finally serves JS to target env.

2. 


> ## C. Flavours of Angular - AngularJs and Angular (2+)
1. Angular 2+ is complete rewrite for Angular1 or AngularJS.


> ## D. Manually create Typescript project (no angular CLI)

0. Install node js and npm (`ng -v , npm -v, ng <cli commands>, eg: ng g c | ng g d | ng build | ng server | etc`)
1. Create and open project folder in editor.
2. install `npm typescript` : to run tsc command manually and amanage compilation manually.
3. ng project > It will create **tsconfig.json**  : now dont need to compile manually. Configure compilation process in this jscon fiile.
    
> ## E. Create Angular using CLI
1. `ng new` <proj1>
2. Check `pkg.json` : It define all the dependencies for node-module folder.
3. check `tsconfig.json`
4. `ng build`
5. `ng serve` : It will bootstrap root module.
6. `ng generate component` or `ng g c `
7. `ng generate service` or `n g s`
8. `ng generate directive` or `ng g d`

