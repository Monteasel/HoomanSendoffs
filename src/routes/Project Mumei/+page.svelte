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

<div class="min-h-screen w-full
    font-[Helvetica] md:text-2xl text-center flex flex-col pt-[2%]" style="background-color: #2a2b2f;">
    <p class="rounded-xl p-5 mx-2 md:mx-20 shadow-2xl" style="color: #1f1f1f; border: 4px solid #1f1f1f; background-color: #e3dfcc;">
        Some Hoomans are planning on covering 'mumei'.
        <br>
        Go support them and join their <a href="https://discord.gg/bx4aRNV8mD" class="underline italic" target="_blank">Discord</a> if you're interested in participating!
    </p>
    <div class="flex flex-col justify-center items-center mt-2">
        <div class="flex justify-center items-center">
            <a href="https://discord.gg/bx4aRNV8mD" target="_blank" class="transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 w-[50%] ">
                <img src="discord_logo.webp">
            </a>
        </div>
    </div>
    <div class="ml-5 md:ml-0 max-w-80 md:max-w-full">
        <Tweet tweetLink="eln_ight/status/1905590069119123743" theme="dark"/>
    </div>
    <div class="flex flex-col justify-center items-center">
        <p class="w-7/10 md:w-1/2 mt-6 mx-2 md:mx-32 mb-10 py-58 px-5 rounded-xl" style="color: #e3dfcc; border: 4px solid #e3dfcc; background-color: #444446;">
            Watch their cover when it's finished!
        </p>
    </div>
</div>