import Notification from './notification.vue'
import notif from './function'

export default (Vue) => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notif
}
