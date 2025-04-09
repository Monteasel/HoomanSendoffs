<style>
    .formsButton {
        border-image: url("ripped.png") 30 round;
        font-family: "Indie Flower", cursive;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        display: block;
    }

    .formsButtonDesc {
        border-image: url("ripped.png") 30 round;
        font-weight: 500;
        font-size: 1.8rem;
        font-family: "Indie Flower", cursive;
        letter-spacing: 0.5px;
    }

    .paper0 {
        border-image-source: url("/img/paper0.webp");
        background-size: cover;
        border-image-slice: 8 4 8 16 fill;
        border-image-width: 4px 4px 4px 20px;
        border-image-outset: 0;
        border-image-repeat: stretch;
        filter: 
            brightness(0.5)       /* Darkens */
            sepia(0.4)              /* Base tint */
            hue-rotate(-12deg)    /* Changes color (adjust degrees) */
            saturate(5);     
    }

    .paper1 {
        border-image-source: url("/img/paper1.webp");
        background-size: cover;
        border-image-slice: 30 4 20 4 fill;
        border-image-width: 30px 4px 20px 4px;
        border-image-outset: 0;
        border-image-repeat: stretch;
        filter: 
            brightness(0.5)       /* Darkens */
            sepia(0.4)              /* Base tint */
            hue-rotate(-12deg)    /* Changes color (adjust degrees) */
            saturate(5);     
    }

    .green_sticky {
        background-image: url("/img/green_sticky.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .purple_sticky {
        background-image: url("/img/purple_sticky.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .yellow_sticky {
        background-image: url("/img/yellow_sticky.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
</style>

<div class="md:flex text-center md:justify-between w-full px-10 md:pl-70 md:gap-8">
    <div class="relative w-full">
        <div class="rotate-4">
            <img src="pin.webp" alt="pin" class="absolute w-10 left-1/2 top-2/30 z-70" style="transform: translate(-50%, -30%);">
            <p class="paper0 formsButtonDesc pt-8" style="padding: 2.3rem 2rem 2rem 2rem;">
                Take a photo/video with a sign of you saying "oh hi from ___" like proposed <a href="https://x.com/edgy_tt/status/1905505125520539910" class="underline italic" target="_blank">here</a>.
            </p>
        </div>
        <a href="" class="green_sticky py-30 formsButton underline -rotate-8 md:-translate-x-16 md:translate-y-14 transition-all duration-200 hover:scale-110">
            Share your oh hi
        </a>
    </div>
    <div class="relative w-full">
            <p class="formsButtonDesc purple_sticky sm:text-lg md:text-lg pr-2 md:px-10 xl:px-16 py-20 rotate-2 text-nowrap">
                Plan on organizing<br>a meetup? Share<br>it here!
            </p>
        <div class="rotate-6 transition-all duration-200 hover:scale-110 md:translate-y-18 translate-x-12">
            <a href="" class="paper0 formsButton underline rotate-3 -translate-x-8 translate-y-4" style="padding: 3rem;">
                Share your planned meetup
            </a>
        </div>
    </div>
</div>

<div class="rotate-2">
    <p class="mt-40 md:mx-40 p-10 text-center font-semibold font-[Indie_Flower] text-5xl paper0">
        Planned meetups.
        <br>
        Go attend one if you can!
    </p>
</div>

<div class="mt-14 ml-[50%] md:ml-[70%] mr-[6%] ">
    <a href="https://discord.gg/f5bA6w2zkn" target="_blank" class="underline">
        <p class="md:px-3 py-30 scale-150 md:scale-100
            text-center font-medium font-[Indie_Flower] text-xs sm:xl md:text-2xl text-nowrap yellow_sticky
            rotate-2 transition-all duration-200 hover:scale-110">
            Lots of meetups are<br>being planned in this<br>discord server here as<br>well (mainly US)!
        </p>
    </a>
</div>