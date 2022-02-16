<script>
    import { onMount } from "svelte";
    let test;

    onMount(async () => {
        const res = await fetch(
            "https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul"
        );
        const response = await res.json();
        console.log(response);
        test = response;
    });
</script>

{#if test !== undefined}
    <div>
        {#each test.records as record}
            <p>{record.fields.title}</p>
        {/each}
    </div>
{/if}
