window.MagnonElement = class extends HTMLElement {
    constructor() {
        super();

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
        this.root = this.attachShadow({ mode: "open" });
        const instance = t.content.cloneNode(true);
        this.root.appendChild(instance);
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
};
