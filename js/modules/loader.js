class Loader {
    constructor() {
        this.loader = $(".loader");
        this.window = $(window);
        this.bindEvents();
    }

    bindEvents = () => {
        this.window.ready(this.hideLoader);
    }

    hideLoader = () => {
        const that = this;
        const timeout = setTimeout(() => {
            that.loader.addClass("loader--inactive"); 
            clearTimeout(timeout);
        }, 1000);
    }

}