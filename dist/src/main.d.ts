import { space, DeadJSONInterface } from "./typings/data";
declare namespace Dead {
    class DeadJSON<DataType> implements DeadJSONInterface {
        private path;
        private data;
        private TypeData;
        /**
         *
         * @param path
         *
         * we made thats to get all types of your data and make control more easy
         * @param Types
         * @returns
         */
        constructor(path: any, Types: DataType);
        add(key: string, Value: any): this;
        delete(key: keyof DataType): this;
        get(): DataType;
        save(space?: space): this;
    }
}
declare const _default: typeof Dead.DeadJSON;
export default _default;
