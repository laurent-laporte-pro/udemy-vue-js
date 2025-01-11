<script setup lang="ts">

interface ProjectType {
  name: string
  image: string
  tags: string[]
  description: string
  tasks: string
}

const props: ProjectType = defineProps<ProjectType>()
</script>

<template>
  <article id="project">
    <h3 class="name">{{ props.name }}</h3>
    <img :src="`/src/assets/projects/${props.image}`" alt="Image du projet" />
    <p class="description">{{ props.description }}</p>
    <p class="tasks">{{ props.tasks }}</p>
    <ul>
      <li v-for="tag in props.tags" :key="tag">{{ tag }}</li>
    </ul>
  </article>

</template>

<style scoped>

#project {
  display: inline-block;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

#project img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

#project p {
  margin-bottom: 10px;
}

#project ul {
  list-style-type: none;
  padding-left: 0;
}

#project li {
  display: inline;
  margin-right: 10px;
}

#project .name {
  font-size: 1.5em;
  margin-bottom: 10px;
}

#project .description {
  font-style: italic;
}

#project .tasks {
  font-weight: bold;
}

</style>