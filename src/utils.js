console.log("utils.js is running");

const squareNum = (x) => x*x; 

const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

export {squareNum, add, subtract as default};

// export { squareNum, add };