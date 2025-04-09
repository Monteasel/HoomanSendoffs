<style>
    .formsButton {
        border-image: url("ripped.png") 30 round;
        font-family: "Indie Flower", cursive;
        font-weight: 600;
        letter-spacing: 0.5px;
        display: block;
    }

    .formsButtonDesc {
        border-image: url("ripped.png") 30 round;
        font-weight: 600;
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
            brightness(0.8)       /* Darkens */
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
</style>

<div class="md:flex text-center md:justify-between w-full px-4 md:pl-70 md:gap-8">
    <div class="relative w-full">
        <div class="">
            <p class="paper0 formsButtonDesc text-lg md:text-3xl p-1 pt-6 md:p-8 md:pt-10" style="">
                Take a photo/video with a sign of you saying "oh hi from ___" like proposed <a href="https://x.com/edgy_tt/status/1905505125520539910" class="underline italic" target="_blank">here</a>.
            </p>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScdsI-Ny4u_MqfYrBKAb_vZNw6FTNjqtJmhRlEcKqTa_eUC0w/viewform?usp=sharing"
            class="green_sticky py-30 text-2xl md:text-3xl formsButton underline -rotate-8 md:-translate-x-16 md:translate-y-14 transition-all duration-200 hover:scale-110" target="_blank">
            Share your oh hi
        </a>
    </div>
    <div class="relative w-full">
            <p class="formsButtonDesc purple_sticky text-xl md:text-3xl pr-2 md:px-10 xl:px-16 py-20 rotate-2 text-nowrap">
                Plan or know<br>a meetup? Share<br>it here!
            </p>
        <div class="rotate-6 transition-all duration-200 hover:scale-110 md:translate-y-18 translate-x-12">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLEYcTJ5XHeCTUCUWq5p2eK5zNQkqPQXWtCyNCcUi-840Fyw/viewform?usp=sharing"
                class="paper0 formsButton underline rotate-3 text-2xl md:text-3xl -translate-x-8 translate-y-4" style="padding: 3rem;" target="_blank">
                Share a planned meetup
            </a>
        </div>
    </div>
</div>