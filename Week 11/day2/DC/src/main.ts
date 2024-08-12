function validateUnionType(value: any, allowedTypes: string[]): boolean {

    const valueType = typeof value;


    return allowedTypes.includes(valueType);
}



const stringValue: string = "Hello";
const numberValue: number = 42;
const booleanValue: boolean = true;
const objectValue: object = { key: "value" };


const allowedTypes1: string[] = ["string", "number"];
const allowedTypes2: string[] = ["boolean"];
const allowedTypes3: string[] = ["object"];


console.log(validateUnionType(stringValue, allowedTypes1)); 
console.log(validateUnionType(numberValue, allowedTypes1)); 
console.log(validateUnionType(booleanValue, allowedTypes1)); 
console.log(validateUnionType(objectValue, allowedTypes2)); 
console.log(validateUnionType(objectValue, allowedTypes3)); 
