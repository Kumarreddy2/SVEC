###  Front-end Technologies
 
- html
- css
- javascript
- bootstrap framework
- angular framework
- reactjs

### Backend Technologies
  
- node.js
       - express.js
       - nodemoon
       - cors
       - dotenv
- php
- c#
- java
- python

### Database

- mongoDb
- mysql
- sqlite
- Firebase
- postgressql
- oracle

+ VCS (source code management)
        - Distributed VCS 
            - Git ,mercurial
        - Remote(central)VCS
           - Github,Bitbucket


###   Git

- git init
- git add filename
- git add filename filename5 filename100
- git add.or git space add --all
- git status   
- Do git configurations(set user.name and user.email)(git cofig --global user.name "<user name>")            
- commit data with commit message
- push the code into github


### HTML5

- Hyper Text Markup Language
- semantic Elements
     - header
     - section
     - article
     - aside
     - footer
     - table

- Blocklevel Elements
     - h1 to h6
     - p
     - div
     - all semantic elements are blocklevel elements but not vice versa
     - Text will start frome newline

- Inline Elements
     - span
     - img
     - a
     - nav
     - form
     - input
     - Textarea
     - legend
     - sup
     - sub
     - ol
     - ul

#### Reference Links
- [FLATICON](https//www.flaticon.com)  
- [html color codes]  
- [webaim]contrast checker
Task
####

- Audio
- video
- canvas(animation)
- progress
- meter
- datalist
- select



### CSS

- cascading style sheets
- we cn apply css to html in three ways they are
        - inline css
        - internal css
        - external css

 + styles of css
 ...

  selector {
       css properties
  }       

 ...


 ####  selectors

 + simple selectors
      -universal selector(*)
      - by element name
      - grouping selector (,)
      - class selector(.)
      - id selector(#)

+ combinators 
   + decendant selector ( )
   + child selector (>)
   + adjacent sibling selector (+)
   + general sibling selector (~)
+ pseudo class selector
+ pseudo element selector
+ attribute selector

#### box model

+ margin()
+ border
+ padding :10px(for all adjacent sides)
          :10px 30px(10px for top and bottom;30px for left and right)
          :10px 300px 50px(10px for top;300px for left and right;50px for bottom)
          :10px 30px 4px 50px(top,right,bottom,left)
+ width(1rem=16px)

### responsive web design

#### Flex-box

+ display
     -none
     -inline
     -block
     -inline-block
+ position
      - static
      - relative
      - absolute
      - fixed
      - sticky
+ align-content
+ align-items
+ align-sel

- display
     - flex
         - flex-wrap
         - justify-content
         - flex-direction
         - flex-flow

### media quires

- Extra small devices (Mobiles)
      - max-width:600px
- small devices (Large phones)
      - min-width:600px
      - 768
- medium devices(small laptaps)
      - min-width:768px
- Large devices (Large laptops or desktops)
      - min-width:992px
- extra large devices()
      - min-width:1200px


...
@media only screen(max-width:320px) and (max-width:500px)
  css code


  ### Bootstrap4.6

  - it is a css framework
  Task3:
  ======
      
      - navbar with responsive

  - module(collections of functions and classes)
  - package (collection of modules)
  - library ( collection of packages)
  - framework(collection of library)
  +  module --> package --> library --> Framework


  + Type of modes
     - offline
     - online
          - CDN links

  + background-color - bg
  + text-white


  + margin in bootstrap(m-* (0.5))
     - 0 --> 0rem
     - 1 --> 0.25rem(4px)
     - 2 --> o.5rem(8px)
     - 3 --> 1rem(16px)
     - 4 --> 1.5rem(24px)
     - 5 --> 3rem(48px)
     - m(margin in all directions)
     - ml-5(margin-left)
     - mt(margin-top)
     - mb(margin-bottom)
     - mr(margin-right)
  + padding (padding-left --> p1-5)  

  + colors
     - primary
     - secondary
     - info
     - success
     - warning
     - danger
     - light
     - dark
     - white


  + we can use color classes for
     - buttons(btn btn-primary)
     - text(text-white)
     - background(bg-secondary)
     - alerts(alert alert-primary)         
  + Grid system
    - sm (small devices)
    - md (medium devices)
    - lg(large devices)
    - xl(extra large devices)
+ Modal
+ Table


#### Javascript

+ In 1995 'brenden eich' introduced Javascript(ES-262)
+ Javascript loosely toupled and dynamic language
+ It is a text-based programming language and
  we can run in clint-side and serverside (node.js) for
  dynamic web applications
- ECMA-script (ES-6)
     - let & constant
     - map()
     - arrow function
     - classes
     - spread operator
     - rest operator
+ datatypes
    - Number
    - bigInt(2^53-1)
    - string
    - boolean
    - undefine
    - Null
    - object
    - array
    
+ variable
    - var,let & const
    - scope
        - function level --> var
        - block level  --> let & const
    - redifine (IT IS POSSIBLE ONLY BY var and let)
    - Redeclare(only var)

+ 'typeof()'
+ object

,,,

{
      name:"kalyan"
}

,,,

+ Array


### Alerts

+ To generate notifications
    - alerts
    - prompt(to take input from the user)
    - confirm

+ console statement
    - 'console.log()'
    - 'console.warn()'
    - 'console.info()'
    - `console.error()`

+ spread operator

     - to change the array elements frome one array to another
...
    ...variableName
...    
+ rest parameter
     + to handle function paramaters
...

...parameter

...


+ Destructuring of array and objects


+ functions

 - function with functionname
 ...

 function demo(x,y){
      return x+y
 }
 demo()
 ...

 - Anonymous function
 ...

 let demo=function (x,y){
      return x+y
 }
 ...

 - arrow function
 ...
 let demo= (x,y)=>{
      return x*y
 }
 demo(3,4)
...

+ for-in
    - to get index values of an array
+ for-of
    - to get elements in an array

+ forEach() --> (ES-5)
+ map() --> (ES-6)        



### DOM

    - document object model
    - document
    - history
    - window
    - navigator
+ DOM methods
    - `getElementById()`
    - `getElementsByClassName()`
    - `querySelector`
    - `innerText`
    - `textContent`
    - `append`
    - `appendChild`
    - `innerHTML`
    - `setAttribute()`
    - `classList`
    - `style`
    - `src`    

#### JSON
+ JavaScript object Notation
     - to exchange information between application and server
     

...
{
     "name":"chaithanya reddy",
     "salary":"6.5LPA",
     "Designation":"mern developer",
     "mobile":8328140790
}     
...

+ Ajax call or promises (fetch API) or axios



#### ReactJS

###### ReactJS Features
+ it is a library
+ it follows component based architechture
    - Function component
    - class component
    - pure component
    - higher order component
+ it provides virtual DOM
+ it provides JSX (javascript and XML)
+ Unidirectional data flow
+ single page Applications


+ props

    - to press data from one component to another component we will use props
    - props are immutable

    + UnionBank
       - AndhraBank(Functional)
       - CorporationBank(class)

    + states

    - In react to maintain information we will use states
    ...

    constructor(){
        super();
        this.states={

        }
    }   
    ...

    - To update the state information in class component use 
     'setState()' method

    constructor(){
        super();
        this.state={

        }
    }
    ...
    + to update the state information in class component we have to follow component life cycle methods
       - 'componentwillrecieveprops()'
       - 'componentwillmount()'
       + 'componentDidMount()'
       - 'shouldcomponentupdate'
       - 'componentwillupdate'
       - 'componentDidupdate'
       - 'componentwillunmount()'


    ##### Hooks

    + from react16.8 Hooks are introduced

    - parent -child --> child2 --> child3
    - 'useState()'
    - 'useref'
    - 'usecontent'


    #### List rendering
    ### Event handling & Form handling

    - 'onchange'
    - 'onsubmit'
    - 'preventDefault()'


    #### Routing in React

    + To navigate(Route) from one component to another
        - install react-router-dom package by using
            - 'npm install react-router-dom'
        - 'browserRouter'
        - 'Route'
        - 'link'
        - 'routes'
        - 'element'
        - 'path'



+ project Environment setup
     - [download visualstudiocode]
     - [Download NodeJS]
     - Install nodejs and check versions of `node` and `npm`
          - `node -v`
          - `npm -v`
     - `webpack` and `babel`
     - `create-react-app`
         - `npm install create-react-app`
             - `create-react-app projectname`
     - `npx create-react-app appname`        
          
 + Index.html
 + index.js
 + App.js
     + indexpage
         - nav.js
         -                        