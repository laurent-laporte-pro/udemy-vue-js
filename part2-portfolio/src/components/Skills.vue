<script setup lang="ts">

</script>

<template>
  <div id="skills">
    <h2 class="text-highlight-1 section-title">Mes compétences techniques</h2>
    <p class="default-text">
      Voici quelques-uns des outils et technologies que j’utilise régulièrement :
    </p>
    <ul id="icon-list">
      <li class="techno-container"><i class="devicon-python-plain"></i><span>Python</span></li>
      <li class="techno-container"><i class="devicon-fastapi-plain"></i><span>FastAPI</span></li>
      <li class="techno-container"><i class="devicon-django-plain"></i><span>Django</span></li>
      <li class="techno-container"><i class="devicon-vuejs-plain"></i><span>Vue.js</span></li>
      <li class="techno-container"><i class="devicon-typescript-plain"></i><span>TypeScript</span></li>
      <li class="techno-container"><i class="devicon-docker-plain"></i><span>Docker</span></li>
      <li class="techno-container"><i class="devicon-github-plain"></i><span>GitHub</span></li>
      <li class="techno-container"><i class="devicon-jenkins-plain"></i><span>Jenkins</span></li>
    </ul>
  </div>
</template>

<style scoped>
#skills {
  margin-top: 20px;
}

#skills p {
  margin-bottom: 1em;
}

#icon-list {
  list-style-type: none;
  padding-left: 0;
}

.techno-container {
  display: inline;
  margin-right: 20px;
}

.techno-container i {
  margin-right: 10px;
  font-size: 2em;
}

.techno-container span {
  font-weight: bold;
  font-size: 1.2em;
}

</style>