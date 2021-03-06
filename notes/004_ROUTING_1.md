# Routing PART1 - KickOff

## Application navigation model
Browser is familiar with `Application navigation model`
- Enter a `URL` in the address bar -->  browser navigates to a corresponding `page`.
- Click `links` on the page --> browser navigates to a new `page`.
- Browser History:
a. Click the browser's `back and forward buttons` --> browser navigates to a new `page`.
b. Click `browser history` --> browser navigates to a corresponding `page`

> But angular application is **SPA** and every time application remaina in same page and there will be one URL to luanch for index.html.
but at a time it shows only part of SPA (just one view). 


1. So Angular Router borrows the Application navigation model .It means angular provide a way to map each view with a URL.

- Enter a `URL` in the address bar --> RouterModule --> browser navigates to a corresponding new `View` page.
- Click `links` on the page --> RouterModule --> browser navigates to a new `view`.
- browser history
RouterModule writes to browser history --> Click `browser history` (just a URL) --> RouterModule --> browser navigates to a corresponding `view`.
click the browser's `back and forward buttons` --> RouterModule --> browser navigates to a new `view`.

> ROUTER MODULE ovveride the default behaviour and interpret a URL as an instruction to navigate to a client-generated view. 

> So behind the scene it will remain in single page.

***
## Features:
1. optional module, does not ship with angular module. It is in its own library package, @angular/router.
2. Borrows Application navigation model, writes browing history,etc
3. Maps URL with views.
4. provides capabilty to pass path parameter, queryParam, fragment. Fetch these asyn or syn.
5. Nagivation : by directive (router) or programtically (Router Service)
6. routing Gaurd
7. Lazy loading of module/component with routing.

***

## Start with @angular/router - Navigation Cycle

### 1. import in root module
AppModule:
```
//1
import { Routes, RouterModule } from '@angular/router';

//2
@NgModule({
  imports: [
    RouterModule.forRoot(  appRoutes, { enableTracing: true } )
  ],
  ...
})s

//3
const appRoutes: Routes = [  { path:'', component:  }, {}, {} ] 
```

### 2. Define Route array or Routes
- `appRoutes` is that array
- It defines how to navigate, it provide mapped url.
```
const appRoutes: Routes = [  
{path:'home', component: HomeComponent  }, 
{path:'home', component: ServersComponent},
{path:'home', component: UsersComponent} 
] 
```
- The order of the routes in the configuration matters and this is by design
- note: there are no leading slashes in the path


### 3. Next Navigate to different URL
> 2 ways to navigate:
1.  Route using `routerLink` Directive. 
- eg Add this directive to Anchor link element.RouterLink directives on the anchor tags give the router control. it mean it link is clicked, control will to `router Service`.
```
[routerLink]="['url1', 'p1','p2']"
```

2.  programtically navigate : `navigate()` method  of Router Service.
```
navigate(['url1','p1','p2'])
```
Note: whenever new URL will be hit, `Router Service` will parse it and handle it.

> Can hit relative / absolute paths from both ways. `Router Service` will handle it and convert them final URL.

### 4. Router Service
1. There will be one `singleton instance` of the `Router` service for entire app.
2.  It **parses** `Routes[]` configured in `routerModule`
3.  builds the **final URL** , as its allowing you to use both relative and absolute paths when navigating between application views.
4.  then it uses a `first-match wins strategy` when matching routes, so more specific routes should be placed above less specific routes.

>  { enableTracing: true} --> pass as the second argument to the RouterModule.forRoot() method.
> - to see Navigation Cycle events. https://angular.io/guide/router#router-events
> - this outputs each router event that took place during each navigation lifecycle to the browser console. This should only be used for `debugging` purposes

5. Once it finds mathcing URL, it finds corresponding Component and display it on `Router Outlet`
6. Router builds a `tree of ActivatedRoute objects` at the end of navigation cycle that make up the `current state` of the router service
> Router Service > RouterState property > it holds tree of ActivatedRoute type.
- this.router.RouterState --> could use it to traverse tree using `parent` and `children` property. there are other property as well.

7. `ActivatedRoute Service` --> Another service. 
- Contains the information about a route associated with a component loaded in an outlet. hence will have all info for current path.
- https://angular.io/api/router/ActivatedRoute
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/route/io1.JPG)
- can also be used to traverse the RouterState tree of ActivatedRoute object


### 4. Router-Outlet
- it is a directive from the router library
- component style directive
- acts as a placeholder that marks the spot in the template where the router service should display the mapped components.

### RouterActiveLink and RouterActiveLinkOption

### Glossary
https://angular.io/guide/router#summary
*** 







