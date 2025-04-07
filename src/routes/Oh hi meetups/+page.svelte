<script lang="ts">
    import Header from "$lib/components/OhHiMeetups/Header.svelte"
    import MainContainer from "$lib/components/OhHiMeetups/MainContainer.svelte";
    import InfoAndFormsButtons from "$lib/components/OhHiMeetups/InfoAndFormsButtons.svelte";
    import PlannedMeetups from "$lib/components/OhHiMeetups/PlannedMeetups.svelte";
</script>

<div class="min-h-screen w-auto">
    <Header/>
    <InfoAndFormsButtons/>
    <PlannedMeetups/>
</div>