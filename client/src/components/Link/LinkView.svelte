<script lang="ts">
    import Link from './Link.svelte'

    export let href = '#';
    export let disabled = false;
    export let target = '_blank';
    export let rel = 'noopener noreferrer';
</script>

<Link {href} {disabled} {target} {rel}>
    Start new game
</Link>