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

    .shareProjButton {
        background-color: #e3dfcc;
    }

    .shareProjButton:hover {
        background-color: #ccc8b4;
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
            pt-1 md:pt-10 pb-150 md:pb-50 min-h-screen">
            <div class="flex justify-around items-center flex-wrap gap-0 md:gap-5">
                <ProjectPreview projectThumbnail="img/thumb_oh_hi_meetups.webp" projectTitle="Oh hi meetups" projectRoute="Oh hi meetups" />
                <ProjectPreview projectThumbnail="img/thumb_project_mumei.webp" projectTitle="Project Mumei" projectRoute="Project Mumei" />
                <ProjectPreview projectThumbnail="img/thumb_project_colon_d.webp" projectTitle="Project :D" projectRoute="Project Colon D"/>
                <ProjectPreview projectThumbnail="img/thumb_moomin_worldwide.webp" projectTitle="Moomin' Worldwide" projectRoute="Moomin Worldwide"/>
            </div>
            <div class="flex flex-col justify-center items-center mt-20 mx-20 text-center">
                <p class="rounded-xl p-4 mb-2" style="background-color: #af9586; border: 3px solid #674d46;">
                    Need help with or wanna share your project to show Mumei your support?
                </p>
                <a href="" target="_blank">
                    <p class="shareProjButton rounded-xl p-5 shadow-2xl underline italic transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-105">
                        Share your project for the site
                    </p>
                </a>
            </div>
        </div>
    </div>
</div>