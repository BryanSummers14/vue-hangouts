<template>
  <v-navigation-drawer dark absolute hide-overlay v-model="navDrawer">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar v-if="hasUser">
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content v-if="hasUser" @click="handleClick">
            <v-list-tile-title>Hangouts</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action class="nav-back-icon">
            <v-btn icon @click.native.stop="closeNav">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in items" :key="item.title" :to="item.nav">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      mini: false,
      drawer: true,
      isClipped: true,
      hasUser: true,
      items: [
        {
          title: 'title1',
          nav: 'login',
          icon: 'chevron_right'
        },
        {
          title: 'users',
          nav: 'find-users',
          icon: 'chevron_right'
        },
        {
          title: 'Demo',
          nav: 'demo',
          icon: 'chevron_right'
        }
      ]
    }
  },
  computed: {
    navDrawer: {
      get: function () {
        return this.$store.state.navOpen
      },
      set: function () {
      }
    }
  },
  methods: {
    closeNav: function () {
      this.$store.dispatch('closeNavDrawer')
    },
    handleClick: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
li {
  margin: 0;
  width: 100%;
}
.nav-back-icon {
    position: absolute;
    right: 24px;
}
.list__tile__title {
  cursor: pointer;
}
</style>