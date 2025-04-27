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
  <p class="rounded-xl p-5 mx-2 md:mx-20 shadow-2xl mb-10" style="background-color: #AD9BAA; border: 4px solid #4C3B4D;">
    The Hoomans of "Project :D" organized a video of messages and fan-art dedicated to Mumei to put on a billboard in Kuala Lumpur.
    <br>
    Be sure to check out their <a href="https://x.com/Fan_Project_MY" target="_blank" class="underline italic">Twitter/X</a> for the project !!!
  </p>
  <div class="md:flex justify-center items-center gap-5 md:mx-5 mb-30">
      <div class="px-8 md:px-0">
          <video src="https://hoomansendoffs.b-cdn.net/project_colonD/Mumei_Billboard_fixed_BGM_Credits_-_High_Bitrate_Export.mp4" controls
              class="rounded-xl"></video>
          <a href="https://x.com/Fan_Project_MY/status/1916365841576431930" class="underline italic" target="_blank">
              <p class="mt-5 mx-2 md:mx-32 py-8 px-5 rounded-xl transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105" style="background-color: #AD9BAA; border: 4px solid #4C3B4D;">
                  View Original
              </p>
          </a>
      </div>
      <div class="px-8 md:px-0 translate-y-20">
          <video src="https://hoomansendoffs.b-cdn.net/project_colonD/project_colonD_street_view.mp4" controls
              class="rounded-xl"></video>
          <a href="https://x.com/MYholoMeetup/status/1916507050349301935" class="underline italic" target="_blank">
              <p class="mt-5 mx-2 md:mx-32 py-8 px-5 rounded-xl transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105" style="background-color: #AD9BAA; border: 4px solid #4C3B4D;">
                  View Original
              </p>
          </a>
      </div>
  </div>
  <div class="md:flex justify-center items-center gap-5 md:mx-5 mb-30">
      <div class="px-8 md:px-0 translate-y-20">
          <img src="https://hoomansendoffs.b-cdn.net/project_colonD/GphIFOpbEAAISyv.jpg" alt="Moom shrine"
              class="rounded-xl md:-translate-y-6">
          <a href="https://x.com/Fan_Project_MY/status/1916360912421982719" class="underline italic" target="_blank">
              <p class="mt-5 mx-2 md:mx-32 py-8 px-5 rounded-xl transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105" style="background-color: #AD9BAA; border: 4px solid #4C3B4D;">
                  View Original
              </p>
          </a>
      </div>
      <div class="px-8 md:px-0 -translate-y-20">
          <img src="https://hoomansendoffs.b-cdn.net/project_colonD/GphIFFLbEAArF-H.jpg" alt="Moom shrine"
              class="rounded-xl md:-translate-y-6">
          <a href="https://x.com/Fan_Project_MY/status/1916360912421982719" class="underline italic" target="_blank">
              <p class="mt-5 mx-2 md:mx-32 py-8 px-5 rounded-xl transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105" style="background-color: #AD9BAA; border: 4px solid #4C3B4D;">
                  View Original
              </p>
          </a>
      </div>
  </div>
  <div class="ml-5 md:ml-0 max-w-80 md:max-w-full">
    <Tweet tweetLink="Keithdosumthin/status/1907365973092442291" theme="dark"/>
  </div>
</div>