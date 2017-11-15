<template>
  <div id="app">
    <v-app>
      <app-nav></app-nav>
    <header>
      <app-header></app-header>
    </header>
    <main @click="onBodyClick">
      <router-view></router-view>
    </main>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header'
import NavDrawer from './components/nav/NavDrawer'

export default {
  name: 'app',
  components: {
    appNav: NavDrawer,
    appHeader: Header
  },
  data () {
    return {
    }
  },
  methods: {
    onBodyClick: function () {
      this.$store.dispatch('toggleNavDrawer')
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

</style>
