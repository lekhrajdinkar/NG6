## Angular Pipes
### Features
1. transforms the data (sync/Async)
2. eg: **component** - var name = "lekhraj" , **template** - {{name | uppercase}}, **rendered output** - LEKHRAJ.
3. Use it at template. can be apply on any output data.

4. Configure pipe - 
> `eg: {{ start_date | date : 'FullDate'}}`
> `eg: {{ var1 | pipe1 : 'pipe-arg-1' : 'pipe-arg-2' : ... }}`

5. can be chained, order is matter. eg: pipe1 | pipe2

***

### Type
1. **built in**
- [Angular All built -in pipes](https://angular.io/api?query=pipe)

2. **Custom** 

- Can be used with inbuilt pipes as well
- Generate pipe with cli
`C:\Users\lekhrajdinkar\Documents\GitHub\ng6> ng g p opac/asset-info/pipes/pipe1`

Example: 
2.1. Shorten text if lenght is  ore than 10 char.
- before : 
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/pipe3b.PNG)
- Add pipe in declaration : 
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/pipe1.PNG)
- Add Pipe class : 
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/pipe2.PNG)
- After applying : 
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/pipe3a.PNG)
- Add arg in pipe.
![](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/pipe4.PNG)

2.2. Filter Pipe Demo
- Applied on ngFor ouput.
- Create prgram to understand it.

