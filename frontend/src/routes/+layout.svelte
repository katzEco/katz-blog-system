<script lang="ts">
  import './main.css'

  import Header from '../components/navbar.svelte';
  import Footer from '../components/footer.svelte';
</script>

<div class="text-whitesmoke w-full bg-pastel-black min-h-screen">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	
</style>