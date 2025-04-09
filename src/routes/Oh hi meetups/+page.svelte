<script lang="ts">
    import Header from "$lib/components/OhHiMeetups/Header.svelte"
    import MainContainer from "$lib/components/OhHiMeetups/MainContainer.svelte";
    import InfoAndFormsButtons from "$lib/components/OhHiMeetups/InfoAndFormsButtons.svelte";
    import PlannedMeetups from "$lib/components/OhHiMeetups/PlannedMeetups.svelte";
    import MeetingMediaSection from "$lib/components/OhHiMeetups/MeetingMediaSection.svelte";
</script>

<div class="min-h-screen w-[85.5%] mr-[2%]">
    <Header/>
    <InfoAndFormsButtons/>
    <PlannedMeetups/>
    <MeetingMediaSection/>
</div>