import "clsx";
import { T as Tweet } from "../../../chunks/tweet.js";
function _page($$payload) {
  $$payload.out += `<div class="min-h-screen font-[Helvetica] md:text-2xl text-center flex flex-col pt-[2%]" style="background: rgb(104,169,138); background: linear-gradient(90deg, rgba(104,169,138,1) 0%, rgba(156,183,116,1) 50%, rgba(219,183,78,1) 100%);"><p class="rounded-xl p-5 mx-20 md:mx-5 shadow-2xl" style="background-color: #e3dfcc;">Hoomans initiated "Project :D" to display a 30-second video of messages and fan-art dedicated to Mumei on a billboard in Kuala Lumpur. <br> Check out their <a href="https://x.com/Fan_Project_MY" target="_blank" class="underline italic">Twitter/X</a> and <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzEExt06ameWNjkDhQQaMUNTmlDcgsA1AkD42DoixWseTZw/viewform?fbzx=6445253454214006717" class="underline italic" target="_blank">form</a> for the project.</p> <div class="flex flex-col justify-center items-center"><p class="w-7/10 md:w-1/2 mt-5 mx-2 md:mx-32 mb-10 py-58 px-5 rounded-xl" style="border: 4px solid #e3dfcc;">Pics/vids of the project will be shared when it's happening</p> <div class="ml-5 md:ml-0 max-w-80 md:max-w-full">`;
  Tweet($$payload, {
    tweetLink: "Keithdosumthin/status/1907365973092442291",
    theme: "dark"
  });
  $$payload.out += `<!----></div></div></div>`;
}
export {
  _page as default
};
