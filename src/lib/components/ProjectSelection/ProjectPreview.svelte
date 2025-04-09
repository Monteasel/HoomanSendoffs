<script>
    import {toggleProjectSidebar} from "$lib/projectSidebar.svelte";
    let {projectThumbnail, projectTitle, projectRoute} = $props();
</script>

<a onclick={toggleProjectSidebar} href={`/${projectRoute}`} class="transition-all hover:scale-110">
    <div class="flex flex-col items-center justify-center">
        <img 
            class="rounded-xl
            w-18 h-18
            sm:w-30 sm:h-30
            md:w-60 md:h-60"
            style="border: 3px solid #674d46; background-color: #eadac2;"
            src={projectThumbnail} alt="Project Thumbnail">
        <h3 class="rounded-xl px-2 py-1 font-[Helvetica] text-xs md:text-lg text-center max-w-1/2 md:max-w-3/4 hidden sm:block"
            style="background-color: #4e8285;
                border-radius: 0px 0px 9px 9px; border-color: #674d46; border-style: solid; border-width: 3px; border-top-style: none;">
            {projectTitle}
        </h3>
        <p class="text-sm block sm:hidden">
            {projectTitle}
        </p>
    </div>
</a>