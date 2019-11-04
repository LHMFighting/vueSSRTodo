<template>
  <div id="app">
    <div id="cover" />
    <Header />
    <p>{{ fullName }} {{ count }}</p>
    <!-- <Todo /> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  metaInfo: {
    title: 'Jokcy\'s Todo App'
  },
  components: {
    Header,
    Footer
    // Todo
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['fullName'])
    // fullName () {
    //   console.log('fullName')
    //   console.log(this.$store)
    //   return this.$store.getters.fullName
    // }
  },
  mounted () {
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // let i = 0
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++
    //   })
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  }
}
</script>

<style lang="stylus" scoped>
#app {
    position absolute
    left 0
    right 0
    top 0
    bottom 0
}
#cover {
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color #999
    opacity .9
    z-index -1
}
</style>
