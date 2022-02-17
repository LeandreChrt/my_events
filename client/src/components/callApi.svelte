<script>
  const fetchAPI = (async () => {
    const response = await fetch(
      "https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul"
    );
    return await response.json();
  })();
</script>

{#await fetchAPI}
  <p>...waiting</p>
{:then data}
  {console.log(data)}
  {#each data.records as value}
    <p>{value.datasetid}</p>
  {/each}
  <p>Bonjour</p>
{:catch error}
  <p>An error occurred!</p>
{/await}
