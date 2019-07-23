<template>
  <v-layout column justify-center>
    <v-flex xs12>
      <v-img
        :src="require('@/assets/header.jpg')"
        max-height="60vh"
        class="mb-3"
      >
        <v-layout align-center justify-center column fill-height style="background:rgba(0,0,0,0.5);">
          <h1 :class="{'display-4':$vuetify.breakpoint.mdAndUp, 'display-1': $vuetify.breakpoint.smAndDown, 'white--text': true}">Mathew Graham</h1>
          <h2 :class="{'display-3':$vuetify.breakpoint.mdAndUp, 'display-1': $vuetify.breakpoint.smAndDown, 'white--text': true}">Freelance Contractor</h2>
          <h2 class="white--text subheading"><v-icon class="white--text">alternate_email</v-icon> grahamm12@hotmail.com</h2>
          <h2 class="white--text subheading"><v-icon class="white--text">call</v-icon> 647-609-4257</h2>
        </v-layout>
      </v-img>
    </v-flex>
    <v-flex xs12 class="text-xs-center">
      <h1 :class="{'display-4': $vuetify.breakpoint.lgAndUp, 'display-3': $vuetify.breakpoint.mdAndDown}">My Work</h1>
    </v-flex>
    <v-flex xs12  class="mb-5">
      <v-container :class="{'pa-0 ma-0': $vuetify.breakpoint.smAndDown}">
        <v-expansion-panel v-for="project, key in projects" :key="key">
          <v-expansion-panel-content>
              <template v-slot:header>
                <h1 :class="{'display-1':$vuetify.breakpoint.mdAndUp, 'heading':$vuetify.breakpoint.smAndDown}">{{project.title}} ({{project.images.length}}) images</h1>
              </template>
              <v-layout row wrap justify-space-between class="mb-5">
                <v-flex xs12 md3 v-for="img, idx in project.images" :key="idx">
                  <v-card hover class="mx-3 my-3">
                    <v-img :src="img" />
                  </v-card>
                </v-flex>
              </v-layout>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {
    CoreFooter: () => import('@/components/core/Footer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
    CoreView: () => import('@/components/core/View')
  },
  data: () => {
    return {
      projects:[
       {
        title: 'Stand',
        images: [
          require('@/assets/stand/1.jpg'),
          require('@/assets/stand/2.jpg'),
          require('@/assets/stand/3.jpg'),
          require('@/assets/stand/4.jpg'),
        ]
       },
       {
        title: 'Steps',
        images: [
          require('@/assets/steps/1.jpg'),
          require('@/assets/steps/2.jpg'),
          require('@/assets/steps/3.jpg'),
          require('@/assets/steps/4.jpg'),
          require('@/assets/steps/5.jpg'),
          require('@/assets/steps/6.jpg'),
          require('@/assets/steps/7.jpg'),
          require('@/assets/steps/8.jpg'),
          require('@/assets/steps/9.jpg'),
        ]
       },
       {
        title: 'Decks',
        images: [
          require('@/assets/deck/3.jpg'),
          require('@/assets/deck/4.jpg'),
          require('@/assets/deck/6.jpg'),
          require('@/assets/deck/7.jpg'),
          require('@/assets/deck/1.jpg'),
          require('@/assets/deck/2.jpg'),
          require('@/assets/deck/9.jpg'),
          require('@/assets/deck/10.jpg'),
          require('@/assets/deck/11.jpg'),
          require('@/assets/deck/12.jpg'),
          require('@/assets/deck/13.jpg'),
          require('@/assets/deck/14.jpg'),
          require("@/assets/deck/15.jpg"),
          require("@/assets/deck/16.jpg"),
          require("@/assets/deck/17.jpg"),
          require("@/assets/deck/18.jpg"),
          require("@/assets/deck/19.jpg"),
          require("@/assets/deck/20.jpg"),
          require("@/assets/deck/21.jpg"),
          require("@/assets/deck/22.jpg"),
          require("@/assets/deck/23.jpg"),
          require("@/assets/deck/24.jpg"),
          require("@/assets/deck/25.jpg"),
          require("@/assets/deck/26.jpg"),
          require("@/assets/deck/27.jpg"),
          require("@/assets/deck/28.jpg"),
          require("@/assets/deck/29.jpg"),
          require("@/assets/deck/30.jpg"),
        ]
       }   
      ]    
    }
  }
}
</script>
