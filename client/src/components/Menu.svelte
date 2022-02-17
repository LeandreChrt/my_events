<script></script>

<div class="sidebar">
  <div class="content">
    <h3>Filtres</h3>
    <select>
      <option value="" disabled selected hidden>Catégories</option>
      <option value="test1">Test1</option>
      <option value="test2">Test2</option>
      <option value="test3">Test3</option>
    </select>
    <input type="text" placeholder="Lieu" />
  </div>
</div>

<style>
  .sidebar {
    display: flex;
    justify-content: center;
    background-color: green;
    border: solid 1px black;
    width: 25%;
    height: 100%;
    margin: 0em 0px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
