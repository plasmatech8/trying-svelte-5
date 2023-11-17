<script runes lang="ts">
	import type { HTMLButtonAttributes } from "svelte/elements";


    let { ...btnAttrs} = $props<{  } & HTMLButtonAttributes>()

</script>

<button>
    <slot></slot>
</button>