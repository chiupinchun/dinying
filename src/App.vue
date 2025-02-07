<script setup lang="ts">
import Header from './components/header.vue'
import NewsCard from './components/home/news-card.vue'
import { type News } from './types/news'

const newsCardData: News[] = [
  {
    id: 1,
    title: '我好像為什麼事情很悲哀，我想起"生命"',
    author: {
      name: '章節公',
      avatar: 'https://chiupinchun.github.io/stelland/assets/prairie-dog-DjFh2T6P.webp'
    },
    date: '2025/2/7',
    content: '我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作',
    tags: [
      { name: '求職', color: 'yellow' },
      { name: '勵志', color: 'pink' },
      { name: '感人', color: 'orange' },
    ],
    good: 231,
    collected: 34,
    comments: ['', '', ''],
    view: 786,
    imgs: ['https://chiupinchun.github.io/stelland/assets/spirits-B0Buok9G.webp']
  },
  {
    id: 2,
    title: '我好像為什麼事情很悲哀，我想起"生命"',
    author: {
      name: '梁實秋',
      avatar: 'https://chiupinchun.github.io/stelland/assets/prairie-dog-DjFh2T6P.webp'
    },
    date: '2025/2/7',
    content: '我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作我想要工作',
    tags: [
      { name: '求職', color: 'yellow' },
      { name: '勵志', color: 'pink' },
      { name: '感人', color: 'orange' },
    ],
    good: 231,
    collected: 34,
    comments: ['', '', ''],
    view: 786,
    imgs: [
      'https://chiupinchun.github.io/stelland/assets/spirits-B0Buok9G.webp',
      'https://chiupinchun.github.io/stelland/assets/spirits-B0Buok9G.webp',
      'https://chiupinchun.github.io/stelland/assets/spirits-B0Buok9G.webp'
    ]
  }
]
</script>

<template>
  <Header></Header>
  <main>
    <NewsCard v-for="card in newsCardData" :key="card.id" :data="card" class="news-card" />
  </main>
</template>

<style lang="less" scoped>
main {
  background-color: lightgray;
  min-height: 100vh;

  .news-card {
    overflow: hidden;
    margin-bottom: 5px;
    background-color: white;
  }
}
</style>
