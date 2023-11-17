<script>
	import '../app.postcss';
</script>

<header class="flex gap-5 prose p-3 mx-auto justify-center">
    <a href="stores">Stores Example</a>
    <a href="slots">Slots Example</a>
    <a href="bigexample">Big Example</a>
</header>

<hr class="my-5">

<main class="prose container mx-auto">
    <slot />
</main>
