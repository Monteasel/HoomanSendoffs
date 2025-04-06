<script lang="ts">
  let videoInFront = $state(false);
  let {pic, vid, picPlacement} = $props();
  
  const toggleLayers = () => {
    videoInFront = !videoInFront;
  };

  let imgWidth = $state(0);
  let imgHeight = $state(0);

  let vidWidth = $state(0);
  let vidHeight = $state(0);

  let biggestWidth = $derived.by(() => {
    let biggestMediaWidth = Math.max(imgWidth, vidWidth);
    return biggestMediaWidth > 600 ? 600 : biggestMediaWidth;
  })
  
  let biggestHeight = $derived.by(() => {
      let biggestMediaHeight = Math.max(imgHeight, vidHeight);
      return biggestMediaHeight;
    })

  function handleImageLoad(e) {
    imgWidth = e.target.naturalWidth;
    imgHeight = e.target.naturalHeight;
  }

  function handleVideoLoad(e) {
    vidWidth = e.target.videoWidth;
    vidHeight = e.target.videoHeight;
  }

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
  .cycleMediaButton {
    background-color: #694c44;
  }

  .cycleMediaButton:hover {
    background-color: #835f55;
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
</style>

<div class="flex-3">
  <div class="flex">
    {#if picPlacement==="right"}
    <!-- cycle button -->
      <div class="flex justify-end mb-2" style="margin-left: {biggestWidth/25}px;">
        <button 
              onclick={toggleLayers} class="cycleMediaButton w-20 h-12 mb-22 shadow-lg 
                    rounded-full bg-cover bg-center 
                    transition-all opacity-90 cursor-pointer hover:scale-110" 
                style="background-image: url('right-arrow.svg');"
                aria-label="Cycle to next media">
        </button>
      </div>
    {/if}
    <div class="relative" style="width: {biggestWidth}px; height: {biggestHeight/3}px">
      <!-- Image card -->
      <div class={`absolute transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${videoInFront ? 'z-10 -translate-y-2 translate-x-2' : 'z-20'} -rotate-4`}
        style="width: {imgWidth}px; height: {imgHeight}px; max-width: 300px; max-height: 30px;
        left: 50%; top: 50%;">
          <img 
            src={pic}
            alt="Hooman Meetup"
            onload={handleImageLoad} 
            onclick={displayModal}
            class="bg-white rounded-lg shadow-xl border-4 border-white cursor-pointer hover:scale-110 transition-all"
            style="margin: auto; width: 100%; transform: translate(-50%, -50%);" />
        </div>
      
      <!-- Video card -->
      <div class={`absolute transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${videoInFront ? 'z-20' : 'z-10 translate-y-4 translate-x-4'} rotate-2`}
        style="width: {vidWidth}px; height: {vidHeight}px; max-width: 700px; max-height: 100px;
        left: 50%; top: 50%;">
          <video 
            src={vid}
            controls
            loop
            onloadedmetadata={handleVideoLoad}
            class="bg-white rounded-lg shadow-xl border-4 border-white"
            style="transform: translate(-50%, -50%);">
        </video>
      </div>
    </div>
    {#if picPlacement==="left"}
    <!-- cycle button -->
      <div class="flex justify-end mb-2" style="margin-left: {biggestWidth/8}px;">
        <button 
              onclick={toggleLayers} class="cycleMediaButton w-20 h-12 mb-22 shadow-lg 
                    rounded-full bg-cover bg-center 
                    transition-all opacity-90 cursor-pointer hover:scale-110" 
                style="background-image: url('right-arrow.svg');"
                aria-label="Cycle to next media">
        </button>
      </div>
    {/if}
  </div>
</div>

{#if showModal}
  <div id="myModal" class="modal" onclick={closeModal}>
    <img src={modalImgSource} class="modal-content" alt="oh hi meetup" id="img01">
  </div>
{/if}