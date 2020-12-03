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
  /* Google Fonts */
  @import url("https://fonts.googleapis.com/css2?family=Nerko+One&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Sansita+Swashed&display=swap");

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    max-width: none;
  }

  @media (max-width: 640px) {
    main {
      max-width: none;
    }
  }

  .color-1 {
    color: rgb(27, 26, 26);
    font-family: "Nerko One", cursive;
    font-size: 35px;
  }

  button.color-2 {
    color: rgb(23, 31, 31);
    background-color: rgb(8, 134, 82);
    font-size: 25px;
  }

  button.color-2:active {
    background-color: black;
  }

  .todo {
    display: grid;
  }

  .todos-input {
    padding: 1% 1%;
    width: 80%;
  }

  .todos-input:focus {
    background-color: rgb(8, 134, 82);
  }

  .todo-button {
    background-color: rgb(8, 134, 82);
    width: 10%;
    padding: 1%;
    font-family: "Sansita Swashed", cursive;
  }
</style>

<link
  rel="stylesheet"
  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
  crossorigin="anonymous" />
<main>
  <div>
    <input
      type="text"
      class="todos-input"
      placeholder="Your Todo"
      bind:value={todos} />

    <button class="todo-button" on:click={addTodo}>Add</button>
  </div>

  <div class="todo">
    {#each list as item, i (item)}
      <h1 class="color-1">{item.text}</h1>

      <button class="color-2"><i class="fas fa-trash" /></button>
    {/each}

    <div />
  </div>
</main>
