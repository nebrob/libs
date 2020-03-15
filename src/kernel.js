import {Module} from "./modules/Module";

class Kernel {
    constructor() {
        this.modules = new Map();
    }

    /**
     *
     * @param {Module} module
     */
    add(module) {
        this.modules.set(module.name, new module(this));
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
