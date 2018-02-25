class Portfolio {
    constructor() {
        this.portfolioMain = $(".portfolio__content-main");
        this.showMore = $(".portfolio__show-more");
        this.portfolioSub = $(".portfolio__content-sub");
        this.isSubVisible = false;
        this.portfolioLiveTrigger = $(".portfolio__item-cta__link--live");
        this.portfolioInfoTrigger = $(".portfolio__item-cta__link--info");
        this.baseUrl = "http://andresliu.xyz/portfolio/";
        this.sectionMain = $(".section-main");
        this.sectionPortfolioViewer = $(".section-portfolio-viewer");
        this.hero = $(".hero");
        this.btnBack = $(".section-portfolio-viewer__back");
        this.iframe = $(".portfolio-viewer");
        this.html = $("html");
        this.bindEvents();
    }

    bindEvents = () => {
        const that = this;
        this.showMore.click(this.showSubContent);
        this.portfolioLiveTrigger.click(function(e) {
            e.preventDefault();
            const $this = $(this);
            const url = that.getPorfolioItem($this);
            that.displayPortfolioItem(url);
        });
        this.btnBack.click(this.goBack.bind(this));
        this.portfolioInfoTrigger.click(this.toggleInfo);
    }

    toggleInfo = (e) => {
        e.preventDefault();
        const $this = $(e.currentTarget);
        $this.children().toggleClass("portfolio__item-cta__icon--is-open");
        $this.parents(".portfolio__item-preview").toggleClass("portfolio__item-preview--is-open").siblings().slideToggle("fast");
    }

    showSubContent = () => {
        this.portfolioSub.slideToggle();
        this.isSubVisible ? this.showMore.text("Show more") : this.showMore.text("Show less");
        this.isSubVisible = !this.isSubVisible;
    }

    getPorfolioItem($this) {
        const $item = $this.parents(".portfolio__item-preview");
        const name = $item.attr("data-portfolio");
        const fullUrl = this.baseUrl + name;
        return fullUrl;
    }

    displayPortfolioItem = (fullUrl) => {
        this.iframe.attr("src", fullUrl);
        this.sectionMain.addClass("section-main--inactive");
        this.hero.addClass("hero--inactive");
        this.sectionPortfolioViewer.addClass("section-portfolio-viewer--active");
        this.html.addClass("u-overflow-vertical-hidden");
        const timeout = setTimeout(() => {
            $.scrollTo(0, 500);
            clearTimeout(timeout);
        }, 500);
    }

    goBack() {
        this.sectionMain.removeClass("section-main--inactive");
        this.hero.removeClass("hero--inactive");
        this.sectionPortfolioViewer.removeClass("section-portfolio-viewer--active");
        this.html.removeClass("u-overflow-vertical-hidden");
    }
}