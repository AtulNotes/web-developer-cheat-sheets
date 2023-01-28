<!--! Index -->

# React Tutorial

- [React Home](#what-is-reactjs)

- [React Setup](#react-setup)

- [React Getting Started](#react-getting-started)

- [React ES6](#react-es6)

- [React Render HTML](#react-render-html)

- [React JSX](#react-jsx)

- [React Components](#react-components)

- [React Class](#react-class)

- [React Props](#react-props)

- [React Events](#react-events)

- React Conditional

- React Lists

- React Forms

- React Router

- React Memo

- React CSS Styling

- React Hooks

- What is a Hook?

- React useState Hook

- React useEffect Hook

- React useContext

- React useRef

- React useReducer

- React useCallback

- React useMemo

<!--? 1 Step What is ReactJS?  -->

# What is ReactJS

ReactJS is a **JavaScript** library used to build User Interfaces(UI). It significantly decreases the code with it's components, states i.e. hooks, etc.

## Creating react app

Open your terminal in the directory you would like to create your application. Run this command to create a React application named my-react-app:

```
 npx create-react-app my-react-app
```

OR, you can directly make your application without specifying a name, like this:

```
npx create-react-app .
```

In this case, all files will be kept in the current directory.

**Note:** When choosing folder name, make sure there are no spaces or capital letters because of npm naming restrictions.

Once base application is created, if folder specified you just have to enter the folder. You can use this command to enter:

```
cd directory-name
```

Then just start up the application with this command:

```
npm start
```

and you are good to go!

## Hello World

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);
```

In this we are just putting `<h1>` tag in a div with id 'root'. That's it! In div with id 'root' everything will be rendered. We can also change it from 'root' to something else, as we are just getting an element and putting HTML in it.

<!--? 2 Step React Setup -->

# React Setup

## Node.js

You can download it from: [https://nodejs.org/en/](https://nodejs.org/en/)

```
Creating our first react app
```

Open your terminal in the directory you would like to create your application. Run this command to create a React application named my-react-app:

```
npx create-react-app my-react-app
```

OR, you can directly make your application without specifying a name, like this:

```bash
npx create-react-app .
```

In this case, all files will be kept in the current directory.

**Note:** When choosing folder name, make sure there are no spaces or capital letters because of npm naming restrictions.

Once base application is created, if folder specified you just have to enter the folder. You can use this command to enter:

```bash
cd directory-name
```

Then just start up the application with this command:

```
npm start
```

and you are good to go!

<!--? 3 Step  -->

# React Getting Started

## Run and Check

Run the React Application with this command:

A new browser window will pop up, if it does't then go on `[http://localhost:3000/](http://localhost:3000/)`. Check if it is showing the same page:

![React default page](https://64.media.tumblr.com/7789f4de47cac1e76e9c2606ae9eccf4/f1bd1031278dc079-37/s640x960/d28d98d794901f8a9b6ffb3945107cf032005a9c.pnj)

If it's the same page then you are good to go!

## Hello World

For this first you need to navigate to `src/App.js`, it will look like:

```js
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Whatever you put in return will be rendered as HTML on the page, you can change it like:

```js
function App() {
  return <div className="App">Hello World</div>;
}
```

**Note:** Remember to wrap whole return value in an HTML element as you can't return multiple elements but you can return multiple elements in one element.

Page would look like this:

![](https://64.media.tumblr.com/6b889f2794b45c59f35c1c0f9ef4b0fd/5e5a914eaf18e0b3-d1/s1280x1920/76db9f9b62d1f2b1713f6d132a0759f5ef8c1a86.pnj)

<!--? Step 4 -->

# React ES6

## What is ES6?

ES6 stands for ECMAScript 6. ECMAScript is a JavaScript standard intended to ensure a common language across different browsers. ES6 is the 6th version of ECMAScript.

# Why ES6? / Features of ES6 / Upgrades in ES6

React uses ES6 and all of these new features will make your coding experience in react much much better. You will be able to do things with much more ease and in very less lines! Features like:

- **Arrow Functions:**

```js
const hello = () => {
  return "Hello World!";
};
```

or

```js
const hello = () => "Hello World!";
```

- **.map():** `.map` can be used for alot of things, one of it's use case is, we can make any number of cards through loop and just put it in jsx, like this:

```js
const data = ["title1", "title2", "title3"];
let cards = data.map((item) => <card>{item}</card>);
```

- **Destructuring:**

Old Way:

```js
const languages = ["JS", "Python", "Java"];
const js = languages[0];
const python = languages[1];
const java = languages[2];
```

New Way:

```js
const languages = ["JS", "Python", "Java"];
const [js, python, java] = languages;
```

- **Ternary Operator:** With this, you can write if/else conditions in one line. It's syntax is fairly simple like this:

```js
 condition ? <expression if true> : <expression if false>
```

Example:

```js
let loading = false;
const data = loading ? <div>Loading...</div> : <div>Data</div>;
```

- **Spread Operator:**

```js
const languages = ["JS", "Python", "Java"];
const morelanguages = ["C", "C++", "C#"];

const allLanguages = [...languages, ...morelanguages];
```

Output:

```js
["JS", "Python", "Java", "C", "C++", "C#"];
```

and many more like, classes, modules.

<!--? 5 Step  -->

# React Render HTML

React renders HTML to the web page by using a function called `ReactDOM.render()`.

## ReactDOM.render()

This function takes two arguments, HTML content which you want to show on page and HTML element where you want to put the HTML content(first argument).

But where will it find that element? It will find it inside "index.html" located in "public" folder. There you will notice a `div` with id "root". That is where all this will be rendered!

```
ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
```

![](https://64.media.tumblr.com/058207b0c925d3640fcb2d5b45f9b784/b48977d868aaca87-2c/s1280x1920/29db3feadd9b8da9d74589762e4b1ae928696000.pnj)

<!--? 6Step  -->

# React JSX

## What is JSX?

JSX stands for JavaScript XML. It is similar in appearance to HTML, hence provides a way to easily write HTML in react.

## Coding in JSX

Earlier we had to make an HTML element or append it into existing ones with methods like `createElement()` / `appendChild()`

```
const elem = React.createElement('h1', {}, 'Hello World!');
```

Now we can just do it directly, like this:

```
const elem = <h1>Hello World!</h1>
```

## Expressions in JSX

You can write the expression in `{}`

You can write simple mathematical operations to variable to states to complicated operations with ternary operators and it will return the result, like:

**Mathematical Operations:**

```
const elem = <h1>React was released in {2010+3}</h1>
```

**Variables/States:**

```
const name = "CWH"
const elem = <h1>My name is {name}</h1>
```

**Ternary Operators:**

```
const elem = <h1>Hello {name ? name : 'World'}</h1>
```

<!--? 7Step -->

# React Components

There are two types of components:

1.  Class Based Components
2.  Function Based Components

## Class Based Components

Before making class based component we need to inherit functions from `React.Component` and this can be done with `extends`, like this:

```
class Cat extends React.Component {
    render() {
    return <h1>Meow</h1>;
    }
}
```

it also requires a `render` method which returns HTML.

## Function Based Components

In function it's simpler, we just need to return the HTML, like this:

```js
function Cat() {
  return <h1>Meow</h1>;
}
```

**Note:** Component's name must start with uppercase letter.

## Rendering a Component

We made a component, now we want to render/use it. Syntax for using a component is:

```html
<ComponentName />
```

## Components in Files

To have less mess inside main file(with all the components in the same file) and to resuse components on different pages, we have to make them separately. So that we can just import them in any file and use them!

For that we will just make a new file called `Cat.js`, make class or function based component there and `export default` that class/function! Like this:

```
    function Cat() {
      return <h1>Meow</h1>;
    }

    export default Cat;
```

**Note:** File name must start with uppercase letter.

## Props

As mentioned earlier, we can import the same component in different files and use it, but maybe in different files some changes in the component is needed. For that, we can use `props`! Like this:

**Component:**

```
function Cat(props) {
    return <h1>Meow's color is {props.color}</h1>;
}
```

**Main file:**

```html
<Cat color="purple" />
```

<!--? 8Step  -->

# React Class

## Class Based Components

Before making class based component we need to inherit functions from `React.Component` and this can be done with `extends`, like this:

```
class Cat extends React.Component {
    render() {
    return <h1>Meow</h1>;
    }
}
```

it also requires a `render` method which returns HTML.

**Note:** Component's name must start with uppercase letter.

## Component Constructor

Constructor gets called when the component is initiated. This is where you initiate the component's properties. In React we have states which update on page without reload. Constructor properties are kept in state.

We also need to add `super()` statement, which executes the parent component's constructor and component gets access to all the functions of the parent component, like this:

```
class Cat extends React.Component {
    constructor() {
        super();
        this.state = { color: "orange" };
    }
    render() {
        return <h1>Meow's color is {this.state.color}</h1>;
    }
}
```

<!-- 9Step -->

React Props
===========

Props are arguments passed to React components via HTML attributes. Example: 

**Component:**

```js
function Cat(props) {
    return <h1>Meow's color is {props.color}</h1>;
}
```

**Main file:** 

```html
<Cat color="purple" />
```

Output:

![](https://64.media.tumblr.com/812d3244a8d31666deb018ae73646adb/5a2c53c0b1931d46-37/s640x960/38fc24af97c19253fdd5eff7060ccc6b35c4d2e8.pnj)

<!--  -->

# React Events


If you have coded even a little bit in javascript, you know the importance of events. 

## **Events**


Every HTML attribute in React is written in camelCase syntax. Event is also an attribute. Hence, written in camelCase.

As we learnt variables, states, javascript operations are written in curly braces `{}`, same is true with React event handlers too! Like this: `onClick={show}` 

```
<button onClick={show}>Show</button>
```
## **Arguments in events**


We can't pass arguments just like that, it will give syntax error. First, we need to put the whole function in arrow function, like this:

```
<button onClick={ ()=>show('true') }>Show</button>
```

## **React Event Object**


Event handler can be provided to the function like this:

```
<button onClick={ (event)=>show('true', event) }>Show</button>
```