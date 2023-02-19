<!-- <script>
  import Blob from "../../components/Blob.svelte";
</script>


<Blob /> -->

<!-- <script>
  const blob = document.getElementById("blob")

  document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.style.left = `${clientX}px`;
    blob.style.top = `${clientY}px`;
  }
</script> -->


<div id="blob" class="">
</div>

<style>
  #blob {
    @apply bg-primary-300 aspect-square absolute h-96
  }
</style>