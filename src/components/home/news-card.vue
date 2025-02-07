<template>
  <div>
    <h3>{{ data.title }}</h3>
    <div class="card-body" :style="{ display: isOneLine ? 'flex' : '' }">
      <div class="card-content">
        <div class="author-block">
          <img :src="data.author.avatar" alt="" width="25" height="25" class="avatar">
          <div class="name">{{ data.author.name }}</div>
          <div class="date">{{ data.date }}</div>
        </div>
        <p class="article">{{ data.content }}</p>
      </div>
      <figure>
        <img v-for="(img, index) in data.imgs" :src="img" :key="index" alt="" width="100" height="100">
      </figure>
    </div>
    <div class="card-footer">
      <ul>
        <li v-for="(tag, index) in data.tags" :key="index">{{ tag }}</li>
      </ul>
      <ul>
        <li>點讚 {{ data.good }}</li>
        <li>收藏 {{ data.collected }}</li>
        <li>評論 {{ data.comments.length }}</li>
        <li>觀看 {{ data.view }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type News } from '../../types/news'
import { computed } from 'vue'
interface Props {
  data: News
}
const props = defineProps<Props>()
const isOneLine = computed(() => props.data.imgs.length <= 1)
</script>

<style lang="less" scoped>
.avatar {
  border-radius: 100%;
}

.card-body {
  .card-content {
    width: 100%;

    .author-block {
      display: flex;
      align-items: center;
      gap: 5px;

      .name {
        font-weight: bold;
      }

      .date {
        color: slategray;
      }
    }

    .article {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.card-footer {
  display: flex;
}
</style>