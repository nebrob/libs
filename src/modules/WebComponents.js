class WebComponents {
    constructor() {
        /** @type {HTMLElement} **/
        this.$root = document.getElementById('#root');

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
