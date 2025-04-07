<script>
    import {toggleProjectSidebar} from "$lib/projectSidebar.svelte";
    let {projectThumbnail, projectTitle, projectRoute} = $props();
</script>

<style>
    .projectTitle {
        text-align: center;
        font-family: "Helvetica";
        font-style: italic;
        padding: 10px 0px 0px 0px;
    }
</style>

<a onclick={toggleProjectSidebar} href={`/${projectRoute}`} class="transition-all hover:scale-110">
    <div class="flex flex-col items-center justify-center">
        <img 
            class="rounded-xl
            w-30 h-30
            md:w-60 md:h-60"
            src={projectThumbnail} alt="Project Thumbnail">
        <h3 class="projectTitle">
            {projectTitle}
        </h3>
    </div>
</a>