<script>
    import {toggleProjectSidebar} from "$lib/projectSidebar.svelte";
    let {projectThumbnail, projectTitle} = $props();
</script>

<style>
    .projectTitle {
        text-align: center;
        font-family: "Helvetica";
        font-style: italic;
        padding: 10px 0px 0px 0px;
    }
</style>

<a onclick={toggleProjectSidebar} href={`/${projectTitle}`} class="transition-all hover:scale-110 px-20">
    <div class="flex flex-col items-center justify-center">
        <img 
            class="rounded-xl w-60 h-60"
            src={projectThumbnail} alt="Project Thumbnail">
        <h3 class="projectTitle">
            {projectTitle}
        </h3>
    </div>
</a>