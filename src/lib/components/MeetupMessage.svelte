<script>
    let {message} = $props();
    let maxRot = 4;
    let rotateAmount = ((Math.random() - 0.5) * 2) * maxRot;
</script>

<div class="
    flex justify-center items-center
    bg-center bg-contain bg-no-repeat text-center mx-24"
        style="
        border-image: url('paper.png') 50 40 30 40 fill / auto;
        rotate: {rotateAmount}deg;">
        <h1 style="font-family: 'Caveat'; font-size: 1.3rem" class="pt-14 pr-8 pb-16 pl-5">
            {message}
        </h1>
</div>