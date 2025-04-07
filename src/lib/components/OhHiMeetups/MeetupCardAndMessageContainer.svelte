<script>
    import MeetupCard from "$lib/components/OhHiMeetups/MeetupCard.svelte"
    import MeetupMessage from "$lib/components//OhHiMeetups/MeetupMessage.svelte"
    let {pic, vid, picPlacement, message} = $props();
</script>

<div class="mb-24">
    <div class="flex justify-center items-center">
        {#if picPlacement === "left"}
            <MeetupCard pic={pic} vid={vid} picPlacement={picPlacement}/>
        {:else if picPlacement === "right"}
            <MeetupCard pic={pic} vid={vid} picPlacement={picPlacement}/>
        {/if}
    </div>
</div>