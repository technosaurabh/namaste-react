const heading = React.createElement('div',{id:'parent'}, 
[React.createElement('div' , {id:'child'}, [
    React.createElement('h1', {id:'heading1'}, 'this is heading 1'),
    React.createElement('h2', {id:'heading2'}, 'this is heading 2'),
] ),
React.createElement('div', {id:'child2'}, [
    React.createElement('h1', {id:'heading1'}, 'this is heading 1'),
    React.createElement('h2', {id:'heading2'}, 'this is heading 2'),
]),
] );

console.log(heading);

// const jsHeading = document.createElement('h1')
// jsHeading.innerHTML = `hey this is new heading`;

// console.log(jsHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));
 

const renderJS = root.render(heading);

console.log(renderJS, "rednerJS");