# Component commnunication

### Scenario
- create single component app
- then break it into multiple component.
- it will break app if data is not communicated among component.

***

### Course Project Example
```
 1. app comp > 1.1. server-element comp + 1.2.cockpit comp
 - server-element : to display list of servers
 - cockpit : to manipulate server
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/cp/7.JPG)

#### Case 1: Parent => child
- servers[] = [{name:'s1', type:'real'},{name:'s2', type:'real'},{name:'s3', type:'blueprint'}] 
- servers array reside on `app comp` > pass it down to `server-element` child comp.

> how? ANS: **Property binding** --> bind property of component

#### Case 2: Child => Parent
- Change individual server at `cockpit comp`
- update servers[] at parent `app comp`

> how? ANS: **Event binding** -->  create custom event in child event. bind event with method of parent component. > child child component emit event along with data > parent will get it becuase of binding.

#### Case 3: sibling1 => sibling2

> how? ANS: Services and ngRX
***

### A. Pass data from Parent to Child Component.
- app comp > passing servers to server-element.
- property binding:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/12.JPG)
- Could also bind with Alias name of property:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/13.JPG)
- so by default component's property are accessible inside component itself. if we decorate a property with @Input('Alias_1'), it would be accessible outside component. thats waht happened abv.

***
### B. Pass data from Child Component to Parent.

1. create event in cockpit component --> `serverCreated` and `bluePrintCreated` 
- it will emit event with data with type : {server: String, serverContect : String }
- `new EventEmitter<{...}>()`
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/comp/04.jpg)
- emit on button click > method :
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/comp/05.jpg)
- Make event bindable from outside this component (cockpit) > @output('alias1')
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/comp/06.jpg)

2. define event in parent:
- template:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/comp/03.jpg)
- logic:
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/basic/comp/02.jpg)

***
### C. Pass data from sibling to anothor siblingComponent.
> 1. too complex appraoch
- pass data to common parent
- pass data down to child.


> 2. Better approach  
- define common service for sibling components .
- comp1 > update data in srv1 > emit event1 of srv1. > using `EventEmitter` or `Subject` (will cover later)
- comp2 > subscribed to event1 > will recieved updated data.

***
