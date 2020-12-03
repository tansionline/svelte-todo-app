<script>
  let todos = "";
  let item;
  let list = [
    { id: 0, text: "Wash Your Hands" },
    { id: 1, text: "Buy Breed" },
  ];

  const addTodo = async () => {
    if (!todos) {
      alert("Please Enter Your TODO!");
      return;
    }

    try {
      const newId = list.length
        ? Math.max.apply(
            null,
            list.map((t) => t.id)
          ) + 1
        : 1;
      list = [...list, { id: newId, text: todos }];
      todos = "";
    } catch (err) {
      console.log(err);
    }
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  h1 {
    color: rgb(32, 168, 123);
  }
</style>

<main>
  <div>
    <input
      type="text"
      class="todos"
      placeholder="Your Todo"
      bind:value={todos} />
    <button class="ToDo-Add" on:click={addTodo}>Add TODO</button>
  </div>
  {#each list as item, i (item)}
    <h1>{item.text}</h1>
  {/each}
  <div />
</main>
