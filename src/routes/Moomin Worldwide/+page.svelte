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
        background-color: #54b3a1;
    }

    .visitSiteButton:hover {
        background-color: #30a18d;
    }
</style>

<div class="min-h-screen font-[Helvetica] md:text-2xl text-center flex flex-col pt-[2%] text-white"
    style="background: rgb(220,194,169); background: linear-gradient(90deg, rgba(220,194,169,1) 25%, rgba(236,213,184,1) 50%, rgba(234,218,194,1) 75%);">
    <div class="flex justify-center items-center">
        <video src="img/moomin_worldwide_thumb_anim.mp4" loop autoplay class="w-80 md:w-140 rounded-xl"></video>
    </div>
    <p class="rounded-xl p-5 mx-2 mt-5 md:mx-20 shadow-2xl opacity-90" style="background-color: #7b5f4c;">
        Moomin' Worldwide intends to put Mumei on a spherical digital billboard in the Phillipines together with art by the Hoomans.
        <br>
        Check out their <a href="https://x.com/MoominManila" target="_blank" class="underline italic">Twitter/X</a> and <a href="https://moominworldwide.org/" class="underline italic" target="_blank">website</a> for the project.
    </p>
    <a href="https://moominworldwide.org/" target="_blank">
        <p class="visitSiteButton rounded-xl p-5 mt-7 mb-5 mx-5 md:mx-60 shadow-2xl underline italic transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105">
            Visit the "Moomin' Worldwide" website
        </p>
    </a>
    <div class="ml-5 md:ml-0 max-w-80 md:max-w-full">
        <Tweet tweetLink="MoominManila/status/1907644242429915140" theme="dark"/>
    </div>
    <div class="flex flex-col justify-center items-center">
        <p class="w-7/10 md:w-1/2 mt-5 mx-2 md:mx-32 mb-10 py-58 px-5 rounded-xl" style="color: #453d39; border: 4px solid #453d39; background-color: #f6f0e5;">
            Look out for when the project's happening under #MoominWorldwide on Twitter/X!
            <br>
            A few pics/vids will also be able to be found here
        </p>
    </div>
</div>