<script>
  import Navbar from "./Navbar.svelte";
  let todos = "";
  let list = [
    { id: 0, text: "Wash Your Hands", checked: false },
    { id: 1, text: "Buy Breed", checked: true },
  ];

  const addTodo = async () => {
    if (!todos) {
      alert("Your Todo Empty");
      return;
    }

    try {
      const newId = list.length
        ? Math.max.apply(
            null,
            list.map((t) => t.id)
          ) + 1
        : 1;
      list = [...list, { id: newId, text: todos, checked: false }];
      todos = "";
    } catch (err) {
      console.log(err);
    }
  };

  const checkTodo = () => {
    todos.checked ? "done" : "";
  };

  const deleteTodo = (id) => {
    list = list.filter((item) => item.id !== id);
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

  .all-todos {
    color: rgb(27, 26, 26);
    font-family: "Nerko One", cursive;
    font-size: 35px;
  }

  button.delete-todo {
    color: rgb(23, 31, 31);
    background-color: rgb(255, 0, 0);
    font-size: 25px;
    width: 45%;
  }

  button.delete-todo:active {
    background-color: black;
  }
  button.check-button {
    color: rgb(23, 31, 31);
    background-color: rgb(8, 80, 139);
    font-size: 25px;
    width: 45%;
  }

  .todo {
    display: inline;
  }

  .todos-input {
    padding: 1% 1%;
    width: 80%;
    background-color: rgb(8, 134, 82);
  }

  .todos-input:focus {
    background-color: rgb(137, 173, 128);
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
  <Navbar />
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
      <h1 class="all-todos">{item.text}</h1>

      <button class="delete-todo" on:click={() => deleteTodo(item.id)}><i
          class="fas fa-trash" /></button>

      <button class="check-button" on:click={() => checkTodo(item.id)}><i
          class="fas fa-check-square" /></button>
    {/each}

    <div />
  </div>
</main>
