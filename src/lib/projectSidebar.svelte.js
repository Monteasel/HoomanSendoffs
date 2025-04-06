export let isProjectSidebarOpen = $state({
    isOpen: true,
});

export function toggleProjectSidebar() {
    isProjectSidebarOpen.isOpen = !isProjectSidebarOpen.isOpen;
}