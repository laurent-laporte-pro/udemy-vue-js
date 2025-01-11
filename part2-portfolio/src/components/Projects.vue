<script setup lang="ts">
import Project from './Project.vue'

const projects = [
  {
    name: 'Projet 1',
    image: 'antares.png',
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'React'],
    description: 'Description du projet 1',
    tasks: 'Tâches réalisées sur le projet 1',
  },
  {
    name: 'Projet 2',
    image: 'projet1.svg',
    tags: ['Python', 'Django', 'Angular'],
    description: 'Description du projet 2',
    tasks: 'Tâches réalisées sur le projet 2',
  },
  {
    name: 'Projet 3',
    image: 'projet1.svg',
    tags: ['Python', 'Flask'],
    description: 'Description du projet 3',
    tasks: 'Tâches réalisées sur le projet 3',
  },
]
</script>

<template>
  <div id="projects">
    <h2 class="text-highlight-1 section-title">Mes projets</h2>
    <p class="default-text">
      Voici quelques-un des projets sur lesquels j'ai travaillé :
    </p>
    <Project v-for="project in projects" :key="project.name" v-bind="project" />
  </div>
</template>

<style scoped>

#projects {
  display: inline-block;
  margin-top: 20px;
}

#projects p {
  margin-bottom: 1em;
}

</style>