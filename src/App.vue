<template>
  <div id="app">
    <header>
      <h1>Elasticsearch Visualizations</h1>
    </header>
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
:root {
  --primary-color: #4682B4;
  --text-color: #333;
  --background-color: #f5f7fa;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  text-align: center;
}

main {
  flex: 1;
  padding: 1rem;
}

h1, h2, h3 {
  margin-bottom: 1rem;
}

select, button {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>