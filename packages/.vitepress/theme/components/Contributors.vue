<script setup lang="ts">
// import { computed } from 'vue';

const props = defineProps<{ id: string }>();
console.log('😊props:', props);
const contributors = [
  {
    hash: '123',
    login: 'log1997',
    avatar:
      'https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/11/15/167161416e6af0ea~tplv-t2oaga2asx-no-mark:180:180:180:180.awebp',
    name: 'log1997',
  },
  {
    hash: '123',
    login: 'log1997',
    avatar: 'http://10.12.3.86/assets/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png',
    name: 'log1997',
  },
  {
    hash: '123',
    login: 'log1997',
    avatar: 'http://10.12.3.86/assets/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png',
    name: 'log1997',
  },
  {
    hash: '123',
    login: 'log1997',
    avatar: 'http://10.12.3.86/assets/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png',
    name: 'log1997',
  },
  {
    hash: '123',
    login: 'log1997',
    avatar: 'http://10.12.3.86/assets/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png',
    name: 'log1997',
  },
  {
    hash: '123',
    login: 'log1997',
    avatar: 'http://10.12.3.86/assets/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png',
    name: 'log1997',
  },
  {
    hash: '123',
    login: 'log1997',
    avatar: 'http://10.12.3.86/assets/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png',
    name: 'log1997',
  },
];
</script>

<template>
  <div class="contributors-container">
    <h2>贡献者</h2>
    <div class="contributors-list">
      <div v-for="c of contributors" :key="c.hash">
        <a :href="`https://github.com/${c.login}`" class="link" no-icon>
          <img :src="c.avatar" class="w-8 h-8 rounded-full" />
          <span>{{ c.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contributors-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.contributors-container h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
.contributors-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.link {
  color: var(--text-color-light);
  display: flex;
  align-items: center;
}
.link img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.link span {
  margin-left: 0.5rem;
}
</style>
