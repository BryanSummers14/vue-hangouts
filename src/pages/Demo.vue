<template>
    <section class="demo-page">
        <div class="demo-content">
            <h1>Demo</h1>
        </div>
    </section>
</template>

<script>
import UserCard from '@/components/users/UserCard'

export default {
  components: {
    UserCard
  }
}
</script>

<style scoped>
.demo-page {
  width: 100%;
}
.demo-content {
  width: 300px;
  margin: auto;
}
</style>

