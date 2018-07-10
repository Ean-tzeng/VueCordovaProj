<template id="main">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">SomeWhat</div>
    </v-ons-toolbar>

    <v-ons-tabbar swipeable position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import SomeWhatTest from '@/components/SomeWhat/SomeWhatTest'
import SomeWhatAB from '@/components/SomeWhat/SomeWhatAB'

export default {
  template: '#main',
  data() {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : 'ion-home',
          label: 'Home',
          page: SomeWhatTest,
          props: {
            myProp: 'This is a page prop!'
          },
        },
        {
          icon: this.md() ? null : 'ion-ios-bell',
          label: 'News',
          page: SomeWhatAB,
          badge: 7,
        }
      ]
    };
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    }
  }
}
</script>

<style>

</style>
