

/**
 * Finds the value of a set of nested properties if it exists
 * @param currentObject object that has the properties
 * @param keys array of nested properties in order
 * @param index  starting index of the properties' array
 */
export function findNestedPropertyValue(currentObject: any, keys: string[], index = 0): any {
    const key = keys[index];

    if (currentObject[key] && index < keys.length - 1) {
        return findNestedPropertyValue(currentObject[key], keys, index + 1);
    } else if (currentObject[key] && index === keys.length - 1) {
        return currentObject[key];
    } else {
        return null;
    }
}
