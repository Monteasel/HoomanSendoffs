export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["colonD.png","discord_logo.webp","favicon.png","img/paper0.webp","img/paper1.webp","img/thumb_moomin_worldwide.webp","img/thumb_oh_hi_meetups.webp","img/thumb_project_colon_d.webp","img/thumb_project_mumei.webp","left_arrow.svg","pin.webp","pinboard.webp","right-arrow.svg"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.COf_KA8r.js",app:"_app/immutable/entry/app.CXFGtQtj.js",imports:["_app/immutable/entry/start.COf_KA8r.js","_app/immutable/chunks/DIaWD_ox.js","_app/immutable/chunks/DfInXZzZ.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DpeACfGp.js","_app/immutable/entry/app.CXFGtQtj.js","_app/immutable/chunks/DfInXZzZ.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Dcdmj8h8.js","_app/immutable/chunks/8XFFV-5E.js","_app/immutable/chunks/Cx2Jx60Y.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C2DM4zEo.js","_app/immutable/chunks/DpeACfGp.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js'))
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
				id: "/Moomin Worldwide",
				pattern: /^\/Moomin Worldwide\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Oh hi meetups",
				pattern: /^\/Oh hi meetups\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Project Colon D",
				pattern: /^\/Project Colon D\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Project Mumei",
				pattern: /^\/Project Mumei\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
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
