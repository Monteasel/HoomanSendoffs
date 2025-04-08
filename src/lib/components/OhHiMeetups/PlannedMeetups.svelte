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

<div class="ml-10 max-w-100 md:max-w-full">
    <div class="relative rotate-2 lg:-translate-x-[20%]">
        <img src="pin.webp" alt="pin" class="absolute w-10 left-1/2 top-1/60 z-70" style="transform: translate(-50%, 0%);">
        <Tweet tweetLink="Whathekyle/status/1906946867189129549" theme="dark"/>
    </div>
    <div class="md:ml-80 relative -rotate-2 lg:translate-x-[20%] lg:-translate-y-[40%]">
        <img src="pin.webp" alt="pin" class="absolute w-10 left-1/2 top-1/60 z-70" style="transform: translate(-50%, 0%);">
        <Tweet tweetLink="TiAineko/status/1906808953511539100" theme="dark"/>
    </div>
    <div class="relative rotate-3 lg:-translate-x-[20%] lg:-translate-y-[60%]">
        <img src="pin.webp" alt="pin" class="absolute w-10 left-1/2 top-1/60 z-70" style="transform: translate(-50%, 0%);">
        <Tweet tweetLink="NightBunnyKJE26/status/1906355894637703453" theme="dark"/>
    </div>
</div>
