import "clsx";
import { T as Tweet } from "../../../chunks/tweet.js";
function _page($$payload) {
  $$payload.out += `<div class="min-h-screen w-full font-[Helvetica] md:text-2xl text-center flex flex-col pt-[2%]" style="background-color: #674d46;"><p class="rounded-xl p-5 mx-20 md:mx-5 shadow-2xl" style="background-color: #e3dfcc;">Some Hoomans are planning on covering 'mumei'. <br> Go support them and join their <a href="https://discord.gg/bx4aRNV8mD" class="underline italic">Discord</a> if you're interested in participating!</p> <div class="flex flex-col justify-center items-center"><div class="w-1/3 pr-10 px-3 md:px-20">`;
  Tweet($$payload, {
    tweetLink: "eln_ight/status/1905590069119123743",
    theme: "dark"
  });
  $$payload.out += `<!----></div> <div class="flex justify-center items-center"><a href="https://discord.gg/bx4aRNV8mD" target="_blank" class="transition-all duration-100 hover:scale-110 w-[50%]"><img src="discord_logo.webp"></a></div> <p class="w-7/10 md:w-1/2 mt-10 mx-2 md:mx-32 mb-10 py-58 px-5 rounded-xl" style="border: 4px solid #e3dfcc;">Watch their cover when it's finished!</p></div></div>`;
}
export {
  _page as default
};
