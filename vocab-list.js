// ******************************
// *** Function               ***
// ******************************
// A function is a grouping of related lines of code that can be executed (aka invoked) elsewhere 
// in your code.
//
// In Javascript, functions are defined by using the "function" keyword, providing a name to the function,
// listing input parameters, and finally writing your code in curly braces:

function adamsFunction(parameterOne, anotherParameter) {
    console.log('hi')
}


// ******************************
// *** Parameters             ***
// ******************************
// Parameters are variable inputs that you define in your function. They are the labels for the
// input arguments that are passed in when your function is invoked.
//
// In Javascript, your function can have many parameters, just one parameter, or even no parameters at all.

// ******************************
// *** Arguments              ***
// ******************************
// Arguments are the values that you pass into your function when you invoke it. Your function will take
// those arguments and label them with the parameters you defined.
//


// ******************************
// *** Output/Return          ***
// ******************************
// In Javascript, functions always have exactly one output. You should provide a 'return' statement
// in your function definition, which outputs the given value from the function.
// Without a 'return' statement, your function will output the value 'undefined'

function scream(text) {
    return text + '!!!'; 
}

scream('Bueller');
