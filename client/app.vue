<template>
  <div id="app">
    <div id="cover" />
    <div
      id="loading"
      v-show="loading"
    >
      <loading />>
    </div>
    <Header />
    <!-- <Todo /> -->
    <router-view />
    <button
      @click="notify"
    >
      click me
    </button>
    <!-- <notification content="test notify" />> -->
    <Footer />
  </div>
</template>

<script>
import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
import Loading from './components/loading/loading.vue'

export default {
  metaInfo: {
    title: 'Jokcy\'s Todo App'
  },
  components: {
    Header,
    Footer,
    Loading
    // Todo
  },
  computed: {
    ...mapState(['loading'])
    // ...mapGetters(['fullName'])
    // fullName () {
    //   console.log('fullName')
    //   console.log(this.$store)
    //   return this.$store.getters.fullName
    // }
  },
  mounted () {
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // let i = 0
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++
    //   })
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount']),
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
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
#loading{
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(255,255,255,.3)
  z-index 99
  display flex
  align-items center
  justify-content center
}
</style>
