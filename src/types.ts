var aBoolean = false;
console.log(typeof aBoolean); // "boolean"

// Type error - Type 'string' is not assignable to type 'boolean'.
aBoolean = "Tom";
console.log(typeof aBoolean); // "string"