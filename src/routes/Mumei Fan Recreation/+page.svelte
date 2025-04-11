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
        Hoomans want to recreate the MV of 'mumei' using different forms of art to do the scenes!
        <br>
        For details check the posts below and <a href="https://x.com/search?q=%23MumeiFanRecreation&src=typed_query" class="underline italic" target="_blank">#MumeiFanRecreation</a> on Twitter/X.
        <br>
        If you're interested take a look at the available scenes <a href="https://docs.google.com/spreadsheets/d/10uDoY0i2tbDO82s8mo4woXjfQ--JiqovsIrnvT9MUsI/edit" class="underline italic" target="_blank">here</a> and join their <a href="https://t.co/l9jV3Kq6p2" class="underline italic" target="_blank">Discord</a>! 
    </p>
    <div class="flex flex-col justify-center items-center mt-2">
        <div class="flex justify-center items-center">
            <a href="https://t.co/l9jV3Kq6p2" target="_blank" class="transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 w-[50%] ">
                <img src="discord_logo.webp">
            </a>
        </div>
    </div>
    <div class="lg:flex justify-center items-center">
        <img src="img/mumei_fan_recreation_info.webp" alt="Mumei Fan Recreation Info" class="h-150 rounded-xl ml-[50%] lg:ml-50 lg:translate-x-0 -translate-x-[50%] mt-3 lg:mt-0">
        <div class="ml-5 md:ml-0 max-w-80 md:max-w-full flex-2 mt-3 lg:mt-0">
            <Tweet tweetLink="jake33w0/status/1905718504155959334" theme="dark"/>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center">
        <p class="w-7/10 md:w-1/2 mt-6 mx-2 md:mx-32 mb-10 py-58 px-5 rounded-xl" style="color: #e3dfcc; border: 4px solid #e3dfcc; background-color: #444446;">
            Go watch their recreation when it's finished!
        </p>
    </div>
</div>