<template id="test">
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable width="300px" collapse="" side="left"
      :open.sync="openSide">
      <v-ons-page>
        <v-ons-toolbar>
          <div class="center">功能表</div>
        </v-ons-toolbar>
        <v-ons-list>
          <v-ons-list-item tappable @click="redirTo('somewhat')">
            somewhat
          </v-ons-list-item>
          <v-ons-list-item tappable @click="redirTo('')">
            eprice News
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <div style="background:white;width:100%;height:100%;padding-top:50%;" v-show="this.$store.state.isBusy">
        <v-ons-progress-circular indeterminate ></v-ons-progress-circular>
      </div>
      <v-ons-toolbar>
        <div class="center">{{ title }}</div>
        <div class="left">
          <v-ons-toolbar-button>
            <v-ons-icon icon="ion-navicon, material: md-menu" @click="openSide = !openSide"></v-ons-icon>
          </v-ons-toolbar-button>
        </div>
      </v-ons-toolbar>
      <div style="overflow:auto;height:100%;">
        <div style="margin:50px;" v-for="item in this.$store.state.epriceNewsArray" v-bind:key="item.url">
          <div class='news'>
            <a v-bind:href="item.url">
              {{item.title}}
            </a><br>
            <img v-bind:src="'http:/' + item.imgUrl.substring(1, item.imgUrl.length)">
            <br>
            <div>
              {{item.postDate}}
            </div>
          </div>
        </div>
      </div>
      <router-view />
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      currentPage:this,
      openSide: false,
      title: 'test',
    }
  },
  methods: {
    redirTo (str) {
      this.$router.push('/'+str);
      this.openSide = !this.openSide;
    }
  },
  mounted () {
    this.$store.dispatch("getEpriceNews");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
