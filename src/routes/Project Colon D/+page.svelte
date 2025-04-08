<script>
  import {Tweet} from "sveltekit-embed";

  // makes twitter embeds work no touchy
  import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte';
  
  function reloadTwitter() {
    if (window.twttr?.widgets?.load) {
      window.twttr.widgets.load();
    }
  }
  
  onMount(reloadTwitter);
  
  afterNavigate(() => {
    setTimeout(() => {
      reloadTwitter();
    }, 50);
  });
</script>

<style>
  .visitSiteButton {
      background-color: #773344;
  }

  .visitSiteButton:hover {
      background-color: #9c3851;
  }
</style>

<div class="min-h-screen font-[Helvetica] md:text-2xl text-center flex flex-col pt-[2%]"
    style="background: rgb(104,169,138); background: linear-gradient(90deg, rgba(104,169,138,1) 0%, rgba(156,183,116,1) 50%, rgba(219,183,78,1) 100%);">
  <p class="rounded-xl p-5 mx-20 md:mx-5 shadow-2xl" style="background-color: #AD9BAA; border: 4px solid #4C3B4D;">
    Hoomans initiated "Project :D" to display a 30-second video of messages and fan-art dedicated to Mumei on a billboard in Kuala Lumpur.
    <br>
    Check out their <a href="https://x.com/Fan_Project_MY" target="_blank" class="underline italic">Twitter/X</a> and <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzEExt06ameWNjkDhQQaMUNTmlDcgsA1AkD42DoixWseTZw/viewform?fbzx=6445253454214006717" class="underline italic" target="_blank">form</a> for the project.
  </p>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDzEExt06ameWNjkDhQQaMUNTmlDcgsA1AkD42DoixWseTZw/viewform?fbzx=6445253454214006717" target="_blank">
      <p class="visitSiteButton text-white rounded-xl p-5 mt-7 mb-5 mx-20 md:mx-20 shadow-2xl underline italic transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105">
        Check out their form
      </p>
  </a>
  <div class="ml-5 md:ml-0 max-w-80 md:max-w-full">
    <Tweet tweetLink="Keithdosumthin/status/1907365973092442291" theme="dark"/>
  </div>
  <div class="flex flex-col justify-center items-center">
    <p class="w-7/10 md:w-1/2 mt-2 mx-2 md:mx-32 mb-10 py-58 px-5 rounded-xl" style="background-color: #AD9BAA; border: 4px solid #4C3B4D;">
      Take a look at their Twitter/X on 27/4 and 28/4 to see Mumei on the billboard!
      <br>
      A few pics/vids will also be able to be found here
    </p>
  </div>
</div>