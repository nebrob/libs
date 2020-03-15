import {Module} from "./Module";

class WebComponents extends Module {
    static $root = document.getElementById('#root');

    constructor() {
        super();

        /** @type {HTMLElement} **/

        console.log('lol');

        /** @type {MutationObserverInit} **/
        this.observerConfig = {
            attributes: true,
            childList: true,
            subtree: true
        };

        this.observe();
    }

    /**
     * Callback for DOM Mutation Observer
     *
     * @param {MutationRecord} mutationList
     * @param {MutationObserver} mutationObserver
     */
    domCallback(mutationList, mutationObserver) {
        console.log(mutationList);
    }

    observe() {
        this.observer = new MutationObserver(this.domCallback);
        this.observer.observe(this.$root, this.observerConfig);
    }
}

export {WebComponents}
