<style>
    .formsButton {
        border-image: url("ripped.png") 30 round;
        padding: 3rem;
        font-family: "Indie Flower", cursive;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        display: block;
    }

    .formsButtonDesc {
        padding: 1.5rem 2rem 2rem 2rem;
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
</style>

<div class="md:flex text-center md:justify-between w-full px-10 md:px-60 md:gap-8">
    <div class="relative w-full">
        <div class="rotate-4">
            <img src="pin.webp" alt="pin" class="absolute w-10 left-1/2 z-70" style="transform: translate(-50%, -30%);">
            <p class="paper0 formsButtonDesc pt-8">
                Take a photo/video greeting
            </p>
        </div>
        <a href="" class="paper1 formsButton underline -rotate-3 -translate-x-16 translate-y-14 transition-all duration-200 hover:scale-110">
            Share your oh hi
        </a>
    </div>
    <div class="relative w-full">
            <p class="formsButtonDesc paper1">
                Plan on organizing a meetup? Share it here!
            </p>
        <div class="rotate-6 transition-all duration-200 hover:scale-110 translate-y-18 translate-x-16">
            <img src="pin.webp" alt="pin" class="absolute w-10 left-1/40 top-2/16 z-70" style="transform: translate(-25%, -10%);">
            <img src="pin.webp" alt="pin" class="absolute w-10 left-31/40 top-5/16 z-70" style="transform: translate(-25%, -10%);">
            <a href="" class="paper0 formsButton underline rotate-3 -translate-x-8 translate-y-4">
                Share your meetup
            </a>
        </div>
    </div>
</div>

<p class="mt-50 md:mx-40 p-10 text-center font-semibold font-[Indie_Flower] text-5xl paper0 rotate-2">
    Planned meetups.
    <br>
    Go attend one if you can!
</p>

<div class="mt-14 ml-[50%] md:ml-[70%] mr-[6%] ">
    <a href="https://discord.gg/f5bA6w2zkn" target="_blank" class="underline">
        <p class="p-10
            text-center font-medium font-[Indie_Flower] texst-2xl md:text-4xl paper1
            rotate-2 transition-all duration-200 hover:scale-110">
            Lots of meetups are being planned in this discord server here as well (mainly US)!
        </p>
    </a>
</div>