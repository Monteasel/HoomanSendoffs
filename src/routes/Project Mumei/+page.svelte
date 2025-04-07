<script>
    import {Tweet} from "sveltekit-embed";
</script>

<style>
    .thumb {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0%);
    }
</style>

<div class="min-h-screen w-full font-[Helvetica] md:text-2xl flex flex-col pt-[7%]" style="background-color: #674d46;">
    <p class="text-center rounded-xl p-5 shadow-2xl" style="background-color: #e3dfcc;">
        Some Hoomans are planning on covering 'mumei'.
        <br>
        Go support them and join their <a href="https://discord.gg/bx4aRNV8mD" class="underline">Discord</a> if you're interested in participating!
    </p>
    <div class="flex justify-around items-center mt-[3%] mb-[5%]  px-20 gap-40">
        <div class="">
            <Tweet tweetLink="eln_ight/status/1905590069119123743" theme="dark"/>
        </div>
        <a href="https://discord.gg/bx4aRNV8mD" target="_blank" class="hover:scale-110 w-[70%] thumb">
            <img src="discord_logo.webp"
                class="">
        </a>

    </div>
    <img src="thumb_project_mumei.webp" alt="Project Mumei Thumbnail" class="thumb rounded-xl">
</div>