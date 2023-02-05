<template>
  <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <div>
              <h2>Home组件内容</h2>
              <div>
                <ul class="nav nav-tabs">
                  <li>
                    <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                  </li>
                  <li>
                    <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                  </li>
                </ul>
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name:'Home',
    mounted() {
      // console.log('Home组件挂载完成',this)
      window.homeRoute = this.$route
      window.homeRouter = this.$router
    },
    beforeDestroy() {
      console.log('Home组件即将销毁')
    },
}
</script>

<style>

</style>