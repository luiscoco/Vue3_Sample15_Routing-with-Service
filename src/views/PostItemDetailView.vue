<!-- PostItemDetailView.vue -->
<template>
  <div v-if="selectedPost">
    <h1>Post Details</h1>
    <h2>{{ selectedPost.title }}</h2>
    <p>{{ selectedPost.body }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
  <div>
    <router-link to="/">Go Back to List</router-link>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { fetchPosts } from "../services/apiService";

const selectedPost = ref(null);
const route = useRoute();

// Fetch selected post based on route param
onMounted(async () => {
  const postId = Number(route.params.id);
  const posts = await fetchPosts();
  selectedPost.value = posts.find((post: any) => post.id === postId);
});
</script>
