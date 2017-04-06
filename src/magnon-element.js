window.MagnonElement = class extends HTMLElement {
    constructor(options = { shadow: true }) {
        super();

        this.usesShadow = options.shadow;
        this.usesShadyCSS = options.shadow && window.ShadyCSS;

        this.root = this;

        const searchForTemplate = (doc) => {
            const template = doc.querySelector(`#${this.name}`);
            if (template) return template;
            else {
                for (const link of doc.querySelectorAll("link[rel=import]")) {
                    const template = searchForTemplate(link.import);
                    if (template) return template;
                }
            }
        };

        const t = searchForTemplate(document);
        if (!t) return; // Component without elements

        if (this.usesShadyCSS) window.ShadyCSS.prepareTemplate(t, this.name);

        this._instance = t.content.cloneNode(true);
        if (this.usesShadyCSS) window.ShadyCSS.styleElement(this._instance);

        if (options.shadow) this.root = this.attachShadow({ mode: "open" });
        this.root.appendChild(this._instance);
    }

    static get name() {
        throw new TypeError("Element is missing an element name declaration");
    }

    get name() {
        return this.constructor.name;
    }

    static init() {
        customElements.define(this.name, this);
    }

    static restyle() {
        if (this.usesShadyCSS) window.ShadyCSS.styleDocument();
    }

    restyleLocal() {
        if (this.usesShadyCSS) window.ShadyCSS.styleSubtree(this._instance);
    }

    fire(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, {
            detail
        }));
    }
};
