<template>
    <section class="user-card">
        <v-card>
        <transition name="slide">
        <v-card-media v-if="!moreInfo" :src="user.picture.large" height="200px" transition="slide-y-transition">
        </v-card-media>
        </transition>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" @click="showUserInfo">Share</v-btn>
          <v-btn flat color="orange" @click="toggleMoreInfo"><v-icon>add</v-icon>&nbsp;More Info</v-btn>
        </v-card-actions>
      </v-card>
    </section>
</template>

<script>
export default {
  props: ['user'],
  data () {
    return {
      moreInfo: false
    }
  },
  methods: {
    toggleMoreInfo: function () {
      this.moreInfo = !this.moreInfo
    },
    showUserInfo: function () {
      alert(this.user)
    }
  }
}
</script>

<style scoped>
.card {
  height: 387px !important;
}
.slide-leave-active {
  transition: max-height .5s;
  max-height: 0;
}
</style>
