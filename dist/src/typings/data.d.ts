export interface space {
    spaces: number;
}
export interface DataOBJ extends Record<string, object> {
    /** Returns a string representation of an object. */
    toString(): string;
    /** Returns a date converted to a string using the current locale. */
    toLocaleString(): string;
    /** Returns the primitive value of the specified object. */
    valueOf(): Object;
    /**
     * Determines whether an object has a property with the specified name.
     * @param v A property name.
     */
    hasOwnProperty(v: PropertyKey): boolean;
    /**
     * Determines whether an object exists in another object's prototype chain.
     * @param v Another object whose prototype chain is to be checked.
     */
    isPrototypeOf(v: Object): boolean;
    /**
     * Determines whether a specified property is enumerable.
     * @param v A property name.
     */
    propertyIsEnumerable(v: PropertyKey): boolean;
}
export interface DeadJSONInterface {
    /**
     * to add data to your json file
     * @param {string} key
     * @param {string} data
     * @example add("dataName", DataValue)
     * @requires key
     * @requires data
     * @returns DeadJson
     */
    add(key: string, data: any): DeadJSONInterface;
    /**
     * to get element and values
     * @param key
     * @example delete("dataName")
     * @returns DeadJson
     * @requires key
     */
    delete(key: any): DeadJSONInterface;
    /**
     * to get element and his value
     * @example get().["Your Data"]
     * @returns Object
     */
    get(): any;
    /**
     * save your data in to your file
     * @param {space} space
     */
    save(space: space): DeadJSONInterface;
}
