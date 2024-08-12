"use strict";
function validateUnionType(value, allowedTypes) {
    const valueType = typeof value;
    return allowedTypes.includes(valueType);
}
const stringValue = "Hello";
const numberValue = 42;
const booleanValue = true;
const objectValue = { key: "value" };
const allowedTypes1 = ["string", "number"];
const allowedTypes2 = ["boolean"];
const allowedTypes3 = ["object"];
console.log(validateUnionType(stringValue, allowedTypes1));
console.log(validateUnionType(numberValue, allowedTypes1));
console.log(validateUnionType(booleanValue, allowedTypes1));
console.log(validateUnionType(objectValue, allowedTypes2));
console.log(validateUnionType(objectValue, allowedTypes3));
