export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["colonD.png","favicon.png","left_arrow.svg","moomtest.jpg","moomtest.webp","moom_nightmare.webp","moom_spin.gif","moom_spin.mp4","oh_hi.mp4","paper.png","pinboard.jpg","rainbow.png","right-arrow.svg","ripped_note.png","thumb_a_new_start.jpg","thumb_mumei_song.jpg","thumb_oh_hi_meetups.jpg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".webp":"image/webp",".gif":"image/gif",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.DGvSyZLK.js",app:"_app/immutable/entry/app.jejjgrdf.js",imports:["_app/immutable/entry/start.DGvSyZLK.js","_app/immutable/chunks/VpZTEO20.js","_app/immutable/chunks/2jGIKJXQ.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/D_Of0FNA.js","_app/immutable/entry/app.jejjgrdf.js","_app/immutable/chunks/2jGIKJXQ.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/B7eQw6o7.js","_app/immutable/chunks/BgPh7pK9.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CRQsTqHm.js","_app/immutable/chunks/D_Of0FNA.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
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
				id: "/A New Start Fan Cover",
				pattern: /^\/A New Start Fan Cover\/?$/,
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
