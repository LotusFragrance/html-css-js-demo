<script setup lang="ts">
import { ArticleItem, ArticleResData } from '../types/data'
import { ref, watch } from 'vue'
import axios from 'axios'
const props = defineProps<{ channelId: number }>()
const articles = ref<ArticleItem[]>([])
watch(() => props.channelId, async () => {
  const res = await axios.request<ArticleResData>({
    url: 'http://geek.itheima.net/v1_0/articles',
    params: {
      channel_id: props.channelId,
      timestamp: Date.now()
    }
  })
  articles.value = res.data.data.results
}, { immediate: true })
</script>

<template>
  <div class="article-list">
    <div class="article-item" v-for="obj in articles" :key="obj.art_id">
      <p class="title">{{ obj.title }}</p>
      <img class="img" :src="imgUrl" alt="" v-for="(imgUrl, i) in obj.cover.images" :key="i">
      <div class="info">
        <span>{{ obj.aut_name }}</span>
        <span>{{ obj.comm_count }}评论</span>
        <span>{{ obj.pubdate }}</span>
      </div>
    </div>
  </div>
</template>
