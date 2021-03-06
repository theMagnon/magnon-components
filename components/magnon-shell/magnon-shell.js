import MagnonElement from "../../src/magnon-element.js";
import GlobalStyle from "../../src/global-style.js";

import html from "./shell.content.js";
import css, { globalStyle, selectionStyle } from "./shell.style.js";

import "../magnon-icon-button/magnon-icon-button.js";
import "../magnon-logo/magnon-logo.js";
import "../magnon-drawer/magnon-drawer.js";
import "../magnon-styles/magnon-styles.js";

GlobalStyle.add(globalStyle);

if (!navigator.userAgent.includes("Edge")) {
    GlobalStyle.add(selectionStyle);
}

export class MagnonShell extends MagnonElement {
    constructor() {
        super({ content: html + css });
    }

    contentReady() {
        this._drawer = this.root.querySelector("magnon-drawer");
        this._siteTitle = this.root.querySelector("#site-title");
        this._content = this.root.querySelector("#content-container");
        this._navButton = this.root.querySelector("magnon-icon-button");

        this._navButton.addEventListener("click", () => {
            this._drawer.open = !this._drawer.open;
        });
    }

    static get elementName() {
        return "magnon-shell";
    }

    static get propertyAttributes() {
        return {
            string: ["site-title"],
            bool: ["expand-content", "use-drawer"]
        };
    }

    propertySet(property, old, value) {
        if (property === "site-title") {
            this._siteTitle.textContent = value;
        } else if (property === "expand-content") {
            if (value) this._content.classList.add("expand-content");
            else this._content.classList.remove("expand-content");
        } else if (property === "use-drawer") {
            this._navButton.style.display = value ? "block" : "none";
        }
    }
}

MagnonShell.init();
