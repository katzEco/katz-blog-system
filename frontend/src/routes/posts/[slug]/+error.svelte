<script lang="ts">
  import { page } from "$app/stores";
</script>

<section class="flex flex-row items-center justify-center text-center min-h-screen">
  <div>
    <h1 class="text-8xl">
      {$page.status}
    </h1>
    <p class="text-2xl">
      {$page.error?.message}
    </p>
  </div>
</section>

<style>
  @import url(https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Thai:100,200,300,regular,500,600,700);

  * {
    font-family: 'IBM Plex Sans Thai', sans-serif;
  }
</style>