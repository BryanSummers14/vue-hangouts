<template>
  <div id="app">
    <v-app>
      <app-nav></app-nav>
    <header>
      <app-header></app-header>
    </header>
    <main>
      <transition name="view-change" mode="out-in">
      <router-view></router-view>
      </transition>
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
      this.$store.dispatch('closeNavDrawer')
    }
  },
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('closeNavDrawer')
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

.view-change-enter-active, .view-change-leave-active {
  transition: opacity .5s
}
.view-change-enter, .view-change-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

</style>
