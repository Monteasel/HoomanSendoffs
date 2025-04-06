<script>
    import {toggleProjectSidebar} from "$lib/projectSidebar.svelte";
</script>

<style>
    .toggleSidebarButton {
        background-color: #3c5c66;
    }

    .toggleSidebarButton:hover {
        background-color: #4e8285;
    }
</style>

<div
    onclick={toggleProjectSidebar}
    class="toggleSidebarButton
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        bg-center bg-contain bg-no-repeat
        hover:scale-110 w-45"
    style="background-image: url('left_arrow.svg');">
</div>