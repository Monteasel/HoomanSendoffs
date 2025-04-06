<script>
    import Header from "$lib/components/ProjectSelection/Header.svelte"
    import ToggleButton from "$lib/components/ProjectSelection/ToggleButton.svelte"
    import ProjectPreview from "$lib/components/ProjectSelection/ProjectPreview.svelte"
	import { isProjectSidebarOpen } from "$lib/projectSidebar.svelte";
</script>

<style>
    .projectsContainer {
        background-color: #ac9b77;
    }
</style>

<div class={`
    projectSelectionContainer
    flex h-screen fixed z-100
    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
    ${isProjectSidebarOpen.isOpen ? '' : 'translate-x-[86%]'}`}>
    <ToggleButton />
    <div>
        <Header />
        <div class="projectsContainer mt-0 flex justify-around items-center flex-wrap pb-50 pl-32 pr-50 h-full">
            <ProjectPreview projectThumbnail="thumb_oh_hi_meetups.jpg" projectTitle="Oh hi meetups" projectRoute="Oh hi meetups" />
            <ProjectPreview projectThumbnail="thumb_project_mumei.webp" projectTitle="Project Mumei" projectRoute="Project Mumei" />
            <ProjectPreview projectThumbnail="thumb_project_colon_d.webp" projectTitle="Project :D" projectRoute="Project Colon D"/>
        </div>
    </div>
</div>