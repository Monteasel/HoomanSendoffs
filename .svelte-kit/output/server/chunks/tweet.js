import { a as attr } from "./attributes.js";
function Tweet($$payload, $$props) {
  let { tweetLink = "", theme = "light" } = $$props;
  let twitter_widgets_script = null;
  $$payload.out += `<div class="tweet-wrapper svelte-jjews4"${attr("data-theme", theme)}${attr("data-loaded", twitter_widgets_script != null)}><blockquote class="twitter-tweet svelte-jjews4"${attr("data-theme", theme)}><a${attr("href", `https://twitter.com/${tweetLink}`)} class="svelte-jjews4">Loading Tweet...</a></blockquote></div>`;
}
export {
  Tweet as T
};
