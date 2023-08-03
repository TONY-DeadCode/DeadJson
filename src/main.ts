import { existsSync, readFileSync, writeFileSync } from "fs";
import { space, DataOBJ, DeadJSONInterface } from "./typings/data";
namespace Dead {
  export class DeadJSON<DataType> implements DeadJSONInterface {
    private path!: string;
    private data: DataOBJ = {};
    private TypeData!: DataType;
    /**
     *
     * @param path
     *
     * we made thats to get all types of your data and make control more easy
     * @param Types
     * @returns
     */
    constructor(path, Types: DataType) {
      if (!path) return;
      try {
        if (!existsSync(path)) {
          writeFileSync(path, JSON.stringify({}));
        }
        var read: any = readFileSync(path, { encoding: "utf-8" });
        const data = JSON.parse(read);
        this.data = data;
        this.TypeData = data;
        this.path = path;
      } catch (err: any) {
        if (!read) {
          writeFileSync(path, JSON.stringify({}));
        } else {
          throw new Error(err);
        }
      }
    }
    add(key: string, Value: any) {
      this.data[key] = Value;
      return this;
    }
    delete(key: keyof DataType) {
      delete this.TypeData[key];
      return this;
    }
    get() {
      return this.TypeData as DataType;
    }
    save(space: space = { spaces: 2 }) {
      if (!space.spaces) {
        space.spaces = 2;
      }
      writeFileSync(this.path, JSON.stringify(this.data, null, space.spaces));
      return this;
    }
  }
}

export default Dead.DeadJSON;
