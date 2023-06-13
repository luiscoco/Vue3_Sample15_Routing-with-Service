<!-- PostListView.vue -->
<template>
  <div>
    <h1>List of Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fetchPosts } from "../services/apiService";

const posts = ref([]);
const router = useRouter();

// Fetch posts from the API
onMounted(async () => {
  posts.value = await fetchPosts();
});
</script>
