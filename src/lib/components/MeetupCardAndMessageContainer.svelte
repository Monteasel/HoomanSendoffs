<script>
    import MeetupCard from "$lib/components/MeetupCard.svelte"
    import MeetupMessage from "$lib/components/MeetupMessage.svelte"
    let {pic, vid, picPlacement, message} = $props();
</script>

<div class="mb-24">
    <div class="flex justify-center items-center">
        {#if picPlacement === "left"}
            <MeetupCard pic={pic} vid={vid} picPlacement={picPlacement}/>
            <MeetupMessage message={message} />
        {:else if picPlacement === "right"}
            <MeetupMessage message={message} />
            <MeetupCard pic={pic} vid={vid} picPlacement={picPlacement}/>
        {/if}
    </div>
</div>