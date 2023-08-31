<script lang="ts">
  import { page } from "$app/stores";
  import TW_CLASS from "../constants/tailwind";
</script>

{#if $page.url.pathname === '/'}
  <footer class="w-full py-5 fixed bottom-0 text-center bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]">
    <p>
      &copy; 2023 
      <a 
        href="https://suphakit.net" 
        target="_blank" 
        class={TW_CLASS.link}
      >
        Suphakit P.
      </a> 
      All Right Reserved.
    </p>
  </footer>
{:else}
  <footer class="w-full py-5 text-center bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]">
    <p>
      &copy; 2023 
      <a 
        href="https://suphakit.net" 
        target="_blank" 
        class={TW_CLASS.link}
      >
        Suphakit P.
      </a> 
      All Right Reserved.
    </p>
  </footer>
{/if}