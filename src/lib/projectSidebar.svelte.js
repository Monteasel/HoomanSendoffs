export let isProjectSidebarOpen = $state({
    isOpen: true,
});

export let visitedSiteOnce = $state({
    visitedOnce: false
});

export function toggleProjectSidebar() {
    isProjectSidebarOpen.isOpen = !isProjectSidebarOpen.isOpen;
    if(!visitedSiteOnce.visitedOnce)
        visitedSiteOnce.visitedOnce = true;
}