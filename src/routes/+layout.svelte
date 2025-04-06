<script lang="ts">
	import '../app.css';
	import ProjectSelection from "$lib/components/ProjectSelection/ProjectSelection.svelte"
	let { children } = $props();

	export const prerender = true;
</script>

<div class="flex">
	<div class="mr-[5%] flex-1">
		{@render children()}
	</div>
	<ProjectSelection />
</div>
