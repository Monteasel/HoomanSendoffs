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
    .paper0 {
        border-image-source: url("/img/paper0.webp");
        background-size: cover;
        border-image-slice: 8 4 8 16 fill;
        border-image-width: 4px 4px 4px 20px;
        border-image-outset: 0;
        border-image-repeat: stretch;
        filter: 
            brightness(0.8)       /* Darkens */
            sepia(0.2)              /* Base tint */
            hue-rotate(160deg)    /* Changes color (adjust degrees) */
            saturate(5);     
    }

    .yellow_sticky {
        background-image: url("/img/yellow_sticky.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
</style>

<div class="rotate-2">
    <p class="mt-40 ml-10 md:ml-40 px-5 py-10 text-center font-semibold font-[Indie_Flower] text-2xl md:text-3xl paper0">
        Planned meetups.
        <br>
        Go attend one if you can!
    </p>
</div>

<div class="mt-4 ml-[30%] md:ml-[60%] mr-[6%] ">
    <a href="https://discord.gg/f5bA6w2zkn" target="_blank" class="underline">
        <p class="md:px-3 py-30 md:scale-100
            text-center font-medium font-[Indie_Flower] text-lg md:text-xl text-nowrap yellow_sticky
            rotate-2 transition-all duration-200 hover:scale-110">
            Lots of meetups are<br>being planned in this<br>discord server here as<br>well (mainly US)!
        </p>
    </a>
</div>


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
    <div class="md:ml-80 relative -rotate-2 lg:translate-x-[20%] lg:-translate-y-[150%]">
        <img src="pin.webp" alt="pin" class="absolute w-10 left-1/2 top-1/60 z-70" style="transform: translate(-50%, 0%);">
        <Tweet tweetLink="Sandysandvich/status/1909993851051204876" theme="dark"/>
    </div>
    <div class="relative rotate-3 lg:-translate-x-[20%] lg:-translate-y-[160%]">
        <img src="pin.webp" alt="pin" class="absolute w-10 left-1/2 top-1/60 z-70" style="transform: translate(-50%, 0%);">
        <Tweet tweetLink="m0nteasel/status/1910032015681892487" theme="dark"/>
    </div>
</div>
