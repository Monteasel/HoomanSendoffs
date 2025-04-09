<script lang="ts">
    let showModal = $state(false);
    let modalImgSource = $state("");

    function displayModal(e: MouseEvent) {
        showModal = true;
        modalImgSource = (e.target as HTMLImageElement).src;
    }

    function closeModal() {
        showModal = false;
    }
</script>

<style>
    .paper0 {
        border-image-source: url("/img/paper0.webp");
        background-size: cover;
        border-image-slice: 8 4 8 16 fill;
        border-image-width: 4px 4px 4px 20px;
        border-image-outset: 0;
        border-image-repeat: stretch;
        filter: 
            brightness(0.8)       /* Darkens */
            sepia(0.4)              /* Base tint */
            hue-rotate(-12deg)    /* Changes color (adjust degrees) */
            saturate(5);     
    }

    .modal {
        display: flex; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 30; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
    }

    .modal-content {
        position: relative;
        margin: auto;
        display: block;
        width: 100%;
        max-width: 400px;
        animation-name: animatetop;
        animation-duration: 0.4s
    }

    @keyframes animatetop {
        from { transform: translateY(-300px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }

    .polaroid {
        background-color: white;
        border-radius: 10px;
        box-shadow: 5px 5px 12px;
        border: 5px solid white;
    }

    .polaroidWithText {
        background-color: white;
        border-radius: 10px;
        box-shadow: 5px 5px 12px;
        border: 5px solid white;
        border-bottom: 50px solid white;
    }

    .polaroidText {
        color: black;
        text-align: center;
        font-weight: 600;
        font-family: "Indie Flower";
        letter-spacing: 0.5rem;
        z-index: 20;
    }

    .modalable {
        transition-duration: 150ms;
        cursor: pointer;
    }
    .modalable:hover {
        scale: 105%;
    }
</style>

<div class="rotate-2 -translate-y-30 lg:-translate-y-170">
    <p class="mt-40 md:mx-40 p-10 text-center font-semibold font-[Indie_Flower] text-2xl md:text-5xl paper0">
        Moments from the Hooman's meetups
    </p>
</div>

<div class="md:flex justify-around items-center gap-12 w-full ml-5 md:ml-30 mt-5 mb-20 -translate-y-30 lg:-translate-y-170">
    <div class="md:flex flex-col justify-center items-center gap-10" style="">
        <video src="img/reyes/reyes0.mp4" loop autoplay
            class="polaroid rotate-4 mb-12 md:mb-0 scale-110"></video>
        <img src="img/reyes/reyes3.webp" alt="Moom plush at sea"
            class="polaroid modalable scale-100" onclick={displayModal}>:
    </div>
    <div class="rotate-3 modalable mb-12 md:mb-0" style="flex: 0 0 38%;">
        <img src="img/reyes/reyes2.webp" alt="Moom Shrine Meetup"
            class="polaroidWithText" onclick={displayModal}>
        <p class="polaroidText -translate-y-10 text-md md:text-2xl">
            Oh hi from SoCal !!
        </p>
    </div>
    <div class="-rotate-6 mb-12 md:mb-0" style="flex: 0 0 30%">
        <video src="img/reyes/reyes1.mp4" loop autoplay class="polaroid"></video>
    </div>
</div>




{#if showModal}
  <div id="myModal" class="modal" onclick={closeModal}>
    <img src={modalImgSource} class="modal-content" alt="oh hi meetup" id="img01">
  </div>
{/if}