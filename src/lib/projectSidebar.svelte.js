export let isProjectSidebarOpen = $state({
    isOpen: false,
});

export function toggleProjectSidebar() {
    isProjectSidebarOpen.isOpen = !isProjectSidebarOpen.isOpen;
}