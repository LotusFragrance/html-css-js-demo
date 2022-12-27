<script setup lang="ts">
import axios from 'axios'
import { ChannelItem, ChannelResData } from '../types/data'
import { ref, onMounted } from 'vue'
const channels = ref<ChannelItem[]>([])
onMounted(async () => {
  const res = await axios.request<ChannelResData>({
    url: 'http://geek.itheima.net/v1_0/channels'
  })
  channels.value = res.data.data.channels
})
defineProps<{ channelId: number }>()
defineEmits<{ (e: 'changeChannel', id: number): void }>()
</script>

<template>
  <div class="channel-nav">
    <nav class="list">
      <a class="item" href="javascript:;" v-for="(item) in channels" :key="item.id"
        :class="{ active: channelId === item.id }" @click="$emit('changeChannel', item.id)">
        {{ item.name }}
      </a>
    </nav>
  </div>
</template>
