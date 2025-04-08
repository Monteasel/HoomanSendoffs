import "clsx";
import { T as Tweet } from "../../../chunks/tweet.js";
function Header($$payload) {
  $$payload.out += `<header class="paper0 flex flex-col justify-center items-center text-center font-semibold font-[Helvetica] tracking-wide ml-2 mr-0 mb-20 pt-4 px-10 pb-6 w-full md:mx-[15%] svelte-oyymiz"><p class="text-md md:text-5xl" style="color: #ad603d;">Nanashi Mumei oh hi meetups</p> <p class="pt-3 text-sm md:text-3xl italic">Oh hi's from around the world</p></header>`;
}
function InfoAndFormsButtons($$payload) {
  $$payload.out += `<div class="md:flex text-center md:justify-between w-full px-10 md:px-60 md:gap-8"><div class="relative w-full"><div class="rotate-4"><img src="pin.webp" alt="pin" class="absolute w-10 left-1/2 z-70" style="transform: translate(-50%, -30%);"> <p class="paper0 formsButtonDesc pt-8 svelte-76v5g4">Take a photo/video greeting</p></div> <a href="" class="paper1 formsButton underline -rotate-3 -translate-x-16 translate-y-14 transition-all duration-200 hover:scale-110 svelte-76v5g4">Share your oh hi</a></div> <div class="relative w-full"><p class="formsButtonDesc paper1 svelte-76v5g4">Plan on organizing a meetup? Share it here!</p> <div class="rotate-6 transition-all duration-200 hover:scale-110 translate-y-18 translate-x-16"><img src="pin.webp" alt="pin" class="absolute w-10 left-1/40 top-2/16 z-70" style="transform: translate(-25%, -10%);"> <img src="pin.webp" alt="pin" class="absolute w-10 left-31/40 top-5/16 z-70" style="transform: translate(-25%, -10%);"> <a href="" class="paper0 formsButton underline rotate-3 -translate-x-8 translate-y-4 svelte-76v5g4">Share your meetup</a></div></div></div> <p class="mt-50 md:mx-40 p-10 text-center font-semibold font-[Indie_Flower] text-5xl paper0 rotate-2 svelte-76v5g4">Planned meetups. <br> Go attend one if you can!</p> <div class="mt-14 ml-[50%] md:ml-[70%] mr-[6%]"><a href="https://discord.gg/f5bA6w2zkn" target="_blank" class="underline"><p class="p-10 text-center font-medium font-[Indie_Flower] texst-2xl md:text-4xl paper1 rotate-2 transition-all duration-200 hover:scale-110 svelte-76v5g4">Lots of meetups are being planned in this discord server here as well (mainly US)!</p></a></div>`;
}
function PlannedMeetups($$payload) {
  $$payload.out += `<div class="max-w-100 md:max-w-full"><div class="relative rotate-2 lg:-translate-x-[20%]"><img src="pin.webp" alt="pin" class="absolute w-10 left-1/2 z-70" style="transform: translate(-50%, 0%);"> `;
  Tweet($$payload, {
    tweetLink: "Whathekyle/status/1906946867189129549",
    theme: "dark"
  });
  $$payload.out += `<!----></div> <div class="relative -rotate-2 lg:translate-x-[20%] lg:-translate-y-[40%]"><img src="pin.webp" alt="pin" class="absolute w-10 left-1/2 z-70" style="transform: translate(-50%, 0%);"> `;
  Tweet($$payload, {
    tweetLink: "TiAineko/status/1906808953511539100",
    theme: "dark"
  });
  $$payload.out += `<!----></div> <div class="relative rotate-3 lg:-translate-x-[20%] lg:-translate-y-[60%]"><img src="pin.webp" alt="pin" class="absolute w-10 left-1/2 z-70" style="transform: translate(-50%, 0%);"> `;
  Tweet($$payload, {
    tweetLink: "NightBunnyKJE26/status/1906355894637703453",
    theme: "dark"
  });
  $$payload.out += `<!----></div></div>`;
}
function _page($$payload) {
  $$payload.out += `<div class="min-h-screen w-[85.5%] mr-[2%]">`;
  Header($$payload);
  $$payload.out += `<!----> `;
  InfoAndFormsButtons($$payload);
  $$payload.out += `<!----> `;
  PlannedMeetups($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
