const add = (x, y) => {
  //Check if parameters passed are string and throw error
  if(typeof(x) === "string" || typeof(y) === "string"){
    throw new Error("Strings are not accepted");
  } 
  //Add if the parameters are passed as floating point numbers
    return parseFloat(x + y);
   
  };
  
  const subtract = (x, y) => {
  //Check if parameters passed are string and throw error
  if(typeof(x) === "string" || typeof(y) === "string"){
    throw new Error("Strings are not accepted");
  } 
    return parseFloat(x - y);
  };
  
  const multiply = (x, y) => {
    if(typeof(x) === "string" || typeof(y) === "string"){
      throw new Error("Strings are not accepted");
    } 
    return parseFloat(x * y);
  };
  
  const divide = (x, y) => {
    if(typeof(x) === "string" || typeof(y) === "string"){
      throw new Error("Strings are not accepted");
    } else if( y === 0){
     throw new Error("Divide by Zero Error");
    }

    return parseFloat(x / y);
  };

  const clearAllfields = ()=>{
      return 0;
  }
  
  const equals = (x,operator,y) => {
    if (y === undefined || y === null){
      y = x;
    }
    if (operator === '+'){
      return add(x,y);
    } else if(operator === '-'){
      return subtract(x,y);
    } else if(operator === '*'){
      return multiply(x,y);
    }else if(operator === '/'){
      return divide(x,y);
    }
  }
 
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    clearAllfields,
    equals
  };