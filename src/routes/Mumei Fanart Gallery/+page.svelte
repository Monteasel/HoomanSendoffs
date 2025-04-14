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
        background-color: #d94438;
    }

    .visitSiteButton:hover {
        background-color: #d64d43;
    }
</style>

<div class="min-h-screen font-[Helvetica] md:text-2xl text-center flex flex-col pt-[2%] text-white"
    style="background: linear-gradient(140deg,rgba(92, 57, 38, 1) 50%, rgba(143, 98, 70, 1) 100%);">
    <p class="rounded-xl p-5 mx-2 mt-5 md:mx-20 shadow-2xl opacity-90" style="background-color: #6a6255;">
        Hoomans want to make an exhibition of fanart at Sharetea Fullerton. All skill levels and art media are welcome!
        <br>
        So be sure to check out their <a href="https://docs.google.com/forms/d/e/1FAIpQLScrbx8OJwpEOHXrs9poypJIKty9NgDy4yKwEP-nRp-0JwZfaQ/viewform" target="_blank" class="underline italic">form</a> if you want to submit some art of Mumei you made as well as their <a href="https://x.com/ChuubaCafes" target="_blank" class="underline italic">Twitter/X</a> for the project!
    </p>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScrbx8OJwpEOHXrs9poypJIKty9NgDy4yKwEP-nRp-0JwZfaQ/viewform" target="_blank">
        <p class="visitSiteButton rounded-xl p-5 mt-7 mb-5 mx-5 md:mx-60 shadow-2xl underline italic transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105">
            Submit your art here
        </p>
    </a>
    <div class="ml-5 md:ml-0 max-w-80 md:max-w-full">
        <Tweet tweetLink="ChuubaCafes/status/1910828205533188218" theme="dark"/>
    </div>
    <div class="flex flex-col justify-center items-center">
        <p class="w-7/10 md:w-1/2 mt-5 mx-2 md:mx-32 mb-10 py-58 px-5 rounded-xl" style="color: #453d39; border: 4px solid #453d39; background-color: #f6f0e5;">
            The event will be held on the 26th of April.
            <br>
            Check out their Twitter/X for when it's happening!
        </p>
    </div>
</div>