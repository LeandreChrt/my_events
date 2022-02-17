<script>
  import { loop_guard } from "svelte/internal";

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
    <div class="event">
      <h3>{value.fields.title}</h3>
      <p>{value.fields.description}</p>
      <p>du {value.fields.date_start} jusqu'au {value.fields.date_end}</p>
      <button class="goTo">En savoir +</button>
    </div>
  {/each}
{:catch error}
  <p>An error occurred!</p>
{/await}

<style>
  .event {
    position: relative;
    margin: 1px;
    background-color: brown;
  }

  .goTo {
    position: absolute;
    right: 5%;
    bottom: -20%;
  }
</style>
