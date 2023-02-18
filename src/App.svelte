<script lang="ts">
	import TailwindCSS from "./components/Tailwind.svelte";

	export let name: String;

	const myFunction = (str: String) => {
		console.log(str);
	}
	myFunction("hi");
</script>

<!-- load global tailwind styles -->
<TailwindCSS />

<h1 class="text-9xl">Hello {name}!</h1>

<style>
	h1 {color: red;}
</style>