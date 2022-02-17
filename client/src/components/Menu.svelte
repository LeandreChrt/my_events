<script></script>

<div class="sidebar">
  <div class="content">
    <h3>Filtres</h3>
    <select>
      <option value="Catégories" default />
      <option value="test1">Test1</option>
      <option value="test2">Test2</option>
      <option value="test3">Test3</option>
    </select>
    <input type="text" placeholder="Lieu" />
  </div>
</div>

<style>
  .sidebar {
    background-color: green;
    border: solid 1px black;
    width: 30%;
    height: 90%;
    margin: 1em 0px;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
</style>
