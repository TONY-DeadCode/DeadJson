"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
var Dead;
(function (Dead) {
    class DeadJSON {
        path;
        data = {};
        TypeData;
        /**
         *
         * @param path
         *
         * we made thats to get all types of your data and make control more easy
         * @param Types
         * @returns
         */
        constructor(path, Types) {
            if (!path)
                return;
            try {
                if (!(0, fs_1.existsSync)(path)) {
                    (0, fs_1.writeFileSync)(path, JSON.stringify({}));
                }
                var read = (0, fs_1.readFileSync)(path, { encoding: "utf-8" });
                const data = JSON.parse(read);
                this.data = data;
                this.TypeData = data;
                this.path = path;
            }
            catch (err) {
                if (!read) {
                    (0, fs_1.writeFileSync)(path, JSON.stringify({}));
                }
                else {
                    throw new Error(err);
                }
            }
        }
        add(key, Value) {
            this.data[key] = Value;
            return this;
        }
        delete(key) {
            delete this.TypeData[key];
            return this;
        }
        get() {
            return this.TypeData;
        }
        save(space = { spaces: 2 }) {
            if (!space.spaces) {
                space.spaces = 2;
            }
            (0, fs_1.writeFileSync)(this.path, JSON.stringify(this.data, null, space.spaces));
            return this;
        }
    }
    Dead.DeadJSON = DeadJSON;
})(Dead || (Dead = {}));
exports.default = Dead.DeadJSON;
//# sourceMappingURL=main.js.map