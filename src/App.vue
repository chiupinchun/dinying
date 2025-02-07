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
    tags: ['求職', '勵志', '感人'],
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
    tags: ['求職', '勵志', '感人'],
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
  <NewsCard v-for="card in newsCardData" :key="card.id" :data="card" />
</template>

<style scoped></style>
