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
    <p class="rounded-xl p-5 mx-2 mt-5 md:mx-20 shadow-2xl opacity-90 mb-20" style="background-color: #6a6255;">
        Hoomans made an exhibition of fanart at Sharetea Fullerton !!!
        <br>
        Check out their <a href="https://x.com/ChuubaCafes" target="_blank" class="underline italic">Twitter/X</a> for the project !!!
    </p>

    <div class="md:flex justify-center items-center gap-5 md:mx-5 mb-20">
        <div class="px-8 md:px-0 -translate-y-10">
            <img src="https://hoomansendoffs.b-cdn.net/fanart_gallery/GpgTrvgbEAE4QKR.jpg" alt="Moom shrine"
                class="rounded-xl">
            <a href="https://x.com/ChuubaCafes/status/1916303290553499806" class="underline italic" target="_blank">
                <p class="visitSiteButton mt-5 mx-2 md:mx-32 py-8 px-5 rounded-xl transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105">
                    View Original
                </p>
            </a>
        </div>
        <div class="px-8 md:px-0">
            <img src="https://hoomansendoffs.b-cdn.net/fanart_gallery/GpgTrvga0AA3dDl.jpg" alt="Moom shrine"
                class="rounded-xl">
            <a href="https://x.com/ChuubaCafes/status/1916303290553499806" class="underline italic" target="_blank">
                <p class="visitSiteButton mt-5 mx-2 md:mx-32 py-8 px-5 rounded-xl transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105">
                    View Original
                </p>
            </a>
        </div>
    </div>

    <div class="ml-5 md:ml-0 max-w-80 md:max-w-full mb-10">
        <Tweet tweetLink="ChuubaCafes/status/1910828205533188218" theme="dark"/>
    </div>
</div>