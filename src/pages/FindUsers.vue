<template>
    <article class="find-users-page">
        <h1>Find Users</h1>
        <h4 v-if="loading">Loading....</h4>
        <v-container v-if="!loading" grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs6 md3 v-for="user in usersList" :key="user.id.value">
                    <user-card :user="user">
                    </user-card>
                </v-flex>
            </v-layout>
        </v-container>
    </article>
</template>

<script>
import UserCard from '@/components/users/UserCard'

export default {
  data () {
    return {
      loading: true,
      usersList: []
    }
  },
  created: function () {
    this.getUserData()
  },
  methods: {
    getUserData () {
      this.$http.get('https://randomuser.me/api/?results=50')
        .then(userResponse => {
          this.loading = false
          this.usersList = userResponse.data.results
        })
    }
  },
  components: {
    UserCard
  }
}
</script>

<style>
.find-users-page {
    width: 100%;
}
</style>