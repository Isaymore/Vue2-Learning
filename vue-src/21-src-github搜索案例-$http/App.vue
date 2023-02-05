<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Title</title>
    </head>
    <body>
      <div class="container">
        <Search />
        <List />
      </div>
    </body>
  </html>
</template>

<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  name: "App",
  components: {
    Search,
    List,
  },
};
</script>

