import { html } from "../../src/literals.js";

import MagnonIconSet from "./icon-set.js";

export default new MagnonIconSet("standard", html`
<svg>
    <defs>
        <g id="cross"><path d="M1.414 0L0 1.414 6.586 8 0 14.586 1.414 16 8 9.414 14.586 16 16 14.586 9.414 8 16 1.414 14.586 0 8 6.586z"/></g>
        <g id="check"><path d="M14.564 2l-8.837 9.125-4.29-4.43L0 8.088 5.727 14 16 3.39z"/></g>
        <g id="menu"><path d="M3 4v1h10V4zM3 7v1h10V7zM3 10v1h10v-1z"/></g>
        <g id="warn"><path d="M8.05 1.047a1.5 1.5 0 0 0-1.34.73L.21 12.686a1.5 1.5 0 0 0 1.29 2.27h13a1.5 1.5 0 0 0 1.29-2.27L9.29 1.777a1.5 1.5 0 0 0-1.24-.73zM8 3.533a1 1.09 0 0 1 1 1.09v3.898a1 1.09 0 0 1-1 1.09 1 1.09 0 0 1-1-1.09V4.623a1 1.09 0 0 1 1-1.09zm0 7.672a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1z"/></g>
        <g id="down"><path d="M7 0v12.242L2.44 7.748 1.034 9.172 7.963 16l7.002-6.9-1.404-1.424L9 12.17V0H7z"/></g>
    </defs>
</svg>
`);
