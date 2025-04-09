<script>
    import Header from "$lib/components/ProjectSelection/Header.svelte"
    import ToggleButton from "$lib/components/ProjectSelection/ToggleButton.svelte"
    import ProjectPreview from "$lib/components/ProjectSelection/ProjectPreview.svelte"
	import { isProjectSidebarOpen } from "$lib/projectSidebar.svelte";
    import {visitedSiteOnce} from "$lib/projectSidebar.svelte";
</script>

<style>
    .projectsContainer {
        background-color: #ac9b77;
    }
</style>

<div class={`
    projectSelectionContainer
    flex h-screen fixed z-100 w-full
    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
    ${isProjectSidebarOpen.isOpen ? '' : 'translate-x-[87.5%]'}`}>
    {#if visitedSiteOnce.visitedOnce}
        <ToggleButton />
    {/if}
    <div class="grow-1">
        <Header />
        <div class="projectsContainer
            pt-0 md:pt-10 pb-150 md:pb-50 min-h-screen
            flex justify-around items-center flex-wrap gap-0 md:gap-5">
            <ProjectPreview projectThumbnail="img/thumb_oh_hi_meetups.webp" projectTitle="Oh hi meetups" projectRoute="Oh hi meetups" />
            <ProjectPreview projectThumbnail="img/thumb_project_mumei.webp" projectTitle="Project Mumei" projectRoute="Project Mumei" />
            <ProjectPreview projectThumbnail="img/thumb_project_colon_d.webp" projectTitle="Project :D" projectRoute="Project Colon D"/>
            <ProjectPreview projectThumbnail="img/thumb_moomin_worldwide.webp" projectTitle="Moomin' Worldwide" projectRoute="Moomin Worldwide"/>
        </div>
    </div>
</div>