/**JavaScript
 * 
 */
// const heading = document.createElement("h2");
// heading.textContent = "Hello World";
// heading.className = "header";
// document.getElementById("root").append(heading);

// console.log("Java Script Element: ", heading);

/**React with Js */

const reactHeading = React.createElement("h1", {className : "head", id:"reactHead",
 children: "Hello wolrd!"});
// console.log("React element", reactHeading);
ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

/**React with JSX */

// const jsxHeading = <React.Fragment>
//     <h1>Hello JSX</h1>
// <p> Hey, This is Shyam here</p>
// <ol>
//     <li>Learn Babel</li>
//     <li>Learn react fragment</li>
//     <li>Learn JSX and its writhing</li>
// </ol>
// </React.Fragment>
// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);  

function App(){
    return(
        <>
        <h1>Hello JSX</h1>
     <p> Hey, This is Shyam here</p>
     <ol>
     <li>Learn Babel</li>
     <li>Learn react fragment</li>
     <li>Learn JSX and its writhing</li>
     </ol>
        </>
       

    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);  