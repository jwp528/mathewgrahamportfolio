<template>
    <v-carousel height="700" class="mt-3">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
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
      items: [
          {
            src: require('@/assets/header.jpg')
          },
          {
            src: require('@/assets/carousel2.jpg')
          },
          {
            src: require('@/assets/carousel3.jpg')
          },
          {
            src: require('@/assets/carousel4.jpg')
          }
        ]
    }
  }
}
</script>
