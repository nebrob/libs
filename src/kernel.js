import {Module} from "./modules/Module";

class Kernel {
    constructor() {
        this.modules = new Map();
    }

    /**
     *
     * @param {Module} _module
     */
    add(_module) {
        this.modules.set(_module.name, new _module(this));
    }

    /**
     * @param {string} moduleName
     * @returns {Module}
     */
    get(moduleName){
        return this.modules.get(moduleName);
    }

    list(){
        return [...this.modules];
    }
}

export {Kernel}
