// apiService.ts
export async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
