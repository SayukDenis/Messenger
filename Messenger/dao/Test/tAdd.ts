import { addClasses, Creator  } from "../dao/create";

export function tAdd(){
    addClasses();
    const creator = Creator.getInstance();
    for (const model of creator.outClass()) {
        console.log(`Schema for ${model.schema.name}:`, model.schema.properties,'\n');
    }
}