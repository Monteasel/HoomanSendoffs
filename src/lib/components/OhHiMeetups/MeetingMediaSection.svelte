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
            sepia(0.2)              /* Base tint */
            hue-rotate(160deg)    /* Changes color (adjust degrees) */
            saturate(5);     
    }

    .paper1 {
        border-image-source: url("/img/paper0.webp");
        background-size: cover;
        border-image-slice: 8 4 8 16 fill;
        border-image-width: 4px 4px 4px 20px;
        border-image-outset: 0;
        border-image-repeat: stretch;
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
        border-radius: 2px;
        box-shadow: 5px 5px 12px;
        border: 5px solid white;
    }

    .polaroidWithText {
        background-color: white;
        border-radius: 2px;
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

<div class="rotate-2">
    <p class="mt-40 ml-10 md:ml-40 md:mx-40 p-10 text-center font-semibold font-[Indie_Flower] text-2xl md:text-3xl paper0">
        Moments from the Hooman's meetups
    </p>
</div>

<div class="md:flex justify-around items-center gap-12 w-full ml-5 md:ml-30 mt-5">
    <div class="md:flex flex-col justify-center items-center gap-10" style="">
        <video src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/reyes/Oh_hi_lightsticks.mp4?updatedAt=1744594706505" loop autoplay
            class="polaroid rotate-4 mb-12 md:mb-0 scale-110"></video>
        <img src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/reyes/Mumei_at_ocean.jpg?updatedAt=1744594738281" alt="Moom plush at ocean"
            class="polaroid modalable scale-100" onclick={displayModal}>:
    </div>
    <div class="rotate-3 modalable mb-12 md:mb-0" style="flex: 0 0 38%;">
        <img src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/reyes/Mumei_Shrine_Tribute.jpg?updatedAt=1744594704681" alt="Moom Shrine Meetup"
            class="polaroidWithText" onclick={displayModal}>
        <p class="polaroidText -translate-y-10 text-md md:text-2xl">
            Oh hi from SoCal !!
        </p>
    </div>
    <div class="-rotate-6 mb-12 md:mb-0" style="flex: 0 0 30%">
        <video src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/reyes/We_love_Mumei_lightsticks.mp4?updatedAt=1744594709104" loop autoplay class="polaroid"></video>
    </div>
</div>



<a href="https://x.com/reyes_the_only1/status/1909031049272988123" target="_blank" class="w-[50%] ">
    <div class="ml-[30%] rounded-xl font-bold p-3 h-1/3 flex justify-center items-center
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 paper1" style="">
        <span class="text-center underline font-[Indie_Flower] font-semibold">
            Original by<br>@reyes_the_only1
        </span>
        <div class="flex justify-center items-center">
            <div class="w-[50%]">
                <img src="twitter_logo.webp" class="w-20">
            </div>
        </div>
    </div>
</a>




<div class="md:flex flex-col justify-around items-center gap-12 w-full ml-5 md:ml-30 mt-20">
    <div class="md:flex justify-center items-center gap-10">
        <img src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/berry/HoomanGroupPhoto%20(silly).png?updatedAt=1744593295787" alt="Hooman group photo"
            class="polaroid modalable md:w-1/2 rotate-3" onclick={displayModal}>:
        <img src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/berry/MoomShrine.jpg?updatedAt=1744593286851" alt="Moom shrine"
            class="polaroid modalable md:w-1/2 -rotate-2 md:-translate-y-10" onclick={displayModal}>:
    </div>

    <div class="md:flex justify-center items-center gap-10">
        <div class="-rotate-3 md:-translate-x-20">
            <video src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/berry/OhHiMumei.mp4?updatedAt=1744593286891" controls
                class="polaroidWithText"></video>
            <p class="polaroidText -translate-y-10 text-md md:text-2xl">
                Oh hi from Singapore !!
            </p>
        </div>
        <video src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/berry/MooMerchShrine.mp4?updatedAt=1744594435281" controls
            class="polaroid -rotate-2 md:w-1/3"></video>
    </div>
</div>

<a href="https://x.com/myrthre/status/1906617604523045126" target="_blank" class="w-[50%] ">
    <div class="ml-[30%] rounded-xl font-bold p-3 h-1/3 mt-10 flex justify-center items-center
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 paper1" style="">
        <span class="text-center underline font-[Indie_Flower] font-semibold">
            Original by<br>berry
        </span>
        <div class="flex justify-center items-center">
            <div class="w-[50%]">
                <img src="twitter_logo.webp" class="w-20">
            </div>
        </div>
    </div>
</a>







<div class="md:flex flex-col justify-around items-center gap-12 w-full ml-5 md:ml-30 mt-20">
    <div class="rotate-3 modalable">
        <img src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/george/GodZmheWYAABRBJ.jpg?updatedAt=1744681460787" alt="Hooman group photo"
            class="polaroidWithText" onclick={displayModal}>:
        <p class="polaroidText -translate-y-16 text-md md:text-2xl">
            Oh hi from Boston !!
        </p>
    </div>
</div>

<a href="https://x.com/LordGeorgeXVI/status/1911596389944996113" target="_blank" class="w-[50%] ">
    <div class="ml-[30%] rounded-xl font-bold p-3 h-1/3 mt-10 flex justify-center items-center
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 paper1" style="">
        <span class="text-center underline font-[Indie_Flower] font-semibold">
            Original by<br>LordGeorgeXVI
        </span>
        <div class="flex justify-center items-center">
            <div class="w-[50%]">
                <img src="twitter_logo.webp" class="w-20">
            </div>
        </div>
    </div>
</a>










<div class="md:flex flex-col justify-around items-center gap-12 w-full ml-5 md:ml-30 mt-20">
    <div class="md:flex justify-center items-center gap-10">
        <img src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/sandvich/GofRkVdXEAAAb3R.jpg?updatedAt=1744680052455" alt="Hooman group photo"
            class="polaroid modalable md:w-1/2 rotate-3" onclick={displayModal}>:
        <img src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/sandvich/GofRX5fWMAEqLh9.jpg?updatedAt=1744680052247" alt="Moom shrine"
            class="polaroid modalable md:w-1/2 -rotate-2 md:-translate-y-10" onclick={displayModal}>:
    </div>
    <div class="modalable -rotate-3">
        <img src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/sandvich/GofTCPuXMAA3mpK.jpg?updatedAt=1744680050315" alt="Hooman group photo"
            class="polaroidWithText" onclick={displayModal}>:
        <p class="polaroidText -translate-y-16 text-md md:text-2xl">
            Oh hi from London !!
        </p>
    </div>
    <div class="md:flex justify-center items-center gap-10">
        <img src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/sandvich/GofPmW2XEAArcss.jpg?updatedAt=1744680052336" alt="Hooman group photo"
            class="polaroid modalable md:w-1/2 rotate-3" onclick={displayModal}>:
        <img src="https://ik.imagekit.io/anh3wcfln/HoomanMeetups/sandvich/GofRX5fWMAEqLh9.jpg?updatedAt=1744680052247" alt="Moom shrine"
            class="polaroid modalable md:w-1/2 -rotate-2 md:-translate-y-6" onclick={displayModal}>:
    </div>
</div>

<a href="https://x.com/Sandysandvich/status/1911728609204613515" target="_blank" class="w-[50%] ">
    <div class="ml-[30%] rounded-xl font-bold p-3 h-1/3 mt-10 flex justify-center items-center
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110 paper1" style="">
        <span class="text-center underline font-[Indie_Flower] font-semibold">
            Original by<br>Sandvich
        </span>
        <div class="flex justify-center items-center">
            <div class="w-[50%]">
                <img src="twitter_logo.webp" class="w-20">
            </div>
        </div>
    </div>
</a>






{#if showModal}
  <div id="myModal" class="modal" onclick={closeModal}>
    <img src={modalImgSource} class="modal-content" alt="oh hi meetup" id="img01">
  </div>
{/if}