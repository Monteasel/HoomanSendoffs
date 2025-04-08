import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CO_XI0G2.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DfInXZzZ.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Cx2Jx60Y.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/XPpTCXvS.js","_app/immutable/chunks/8XFFV-5E.js","_app/immutable/chunks/Dcdmj8h8.js","_app/immutable/chunks/NzEKFVuu.js"];
export const stylesheets = ["_app/immutable/assets/0.CrSx0SB2.css"];
export const fonts = [];
