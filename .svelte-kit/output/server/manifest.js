export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["colonD.png","discord_logo.webp","favicon.png","img/paper0.webp","img/paper1.webp","img/thumb_oh_hi_meetups.webp","img/thumb_project_colon_d.webp","img/thumb_project_mumei.webp","left_arrow.svg","pin.webp","pinboard.webp","right-arrow.svg"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BqLbnMJf.js",app:"_app/immutable/entry/app.6xa1TJF9.js",imports:["_app/immutable/entry/start.BqLbnMJf.js","_app/immutable/chunks/DT4QXLs0.js","_app/immutable/chunks/BlcRBTap.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CUHNKxdP.js","_app/immutable/entry/app.6xa1TJF9.js","_app/immutable/chunks/BlcRBTap.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/-knDNOq3.js","_app/immutable/chunks/Bh7AO1rM.js","_app/immutable/chunks/BoL_NLux.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BtwOXLK7.js","_app/immutable/chunks/CUHNKxdP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Oh hi meetups",
				pattern: /^\/Oh hi meetups\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Project Colon D",
				pattern: /^\/Project Colon D\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Project Mumei",
				pattern: /^\/Project Mumei\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
