import { initialization } from "./Initialization";
import SelfProfile from "../dao/Models/SelfProfile";


//print SelfProfile data - recommended
export function printSelfProfile() {
    const selfProfile: SelfProfile = initialization();
    for (const key in selfProfile) {
        if (selfProfile.hasOwnProperty(key)) {
            const value = selfProfile[key as keyof SelfProfile];

            if (Array.isArray(value)) {
                console.log(`${key}: ${value.length} elements`);
                value.forEach((element, index) => {
                    console.log(`  ${index + 1}: ${element}`);
                });
            } else {
                console.log(`${key}: ${value}`);
            }
        }
    }
}

//print all data  - not recommended: write more 200 string in log
export function printFullData() {
    const selfProfile = initialization();
    printObject(selfProfile, 0);
}

function printObject(obj: any, depth: any) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (Array.isArray(value)) {
                console.log(`${key}: ${value.length} elements`);
                value.forEach((element, index) => {
                    console.log(`${getIndentation(depth + 1)}${index + 1}:` + printObject(element, depth + 1));
                    //(`${getIndentation(depth + 1)}${index + 1}: ${element}`);
                });
            } else if (typeof value === 'object') {
                console.log(`${getIndentation(depth)}${key}:`);
                printObject(value, depth + 1);
            } else {
                console.log(`${getIndentation(depth)}${key}: ${value}`);
            }
        }
    }
}

function getIndentation(depth: any) {
    return '  '.repeat(depth);
}