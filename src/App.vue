<template>
  <div id="app">
    <nav>
      <router-link :to="{name: 'inicio'}">Inicio</router-link> |
      <router-link :to="{name: 'sobremi'}">Sobre Mi</router-link> |
      <router-link :to="{name: 'contacto'}">Contacto</router-link> |
      <router-link to="/post/1">Ultimo Post</router-link>
    </nav>
    <transition name='mi-transicion'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.mi-transicion-enter-active, .mi-transicion-leave-active { 
  transition: opacity 0.1s, padding 0.1s;
}
.mi-transicion-enter, .mi-transicion-leave-to { 
  opacity: 0;
  padding: 10px; 
}
.mi-transicion-enter-to, .mi-transicion-leave { 
  opacity: 1;
  padding: 0px; 
}

</style>
