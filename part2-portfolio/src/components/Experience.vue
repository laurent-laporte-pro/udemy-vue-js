<script setup lang="ts">

// Gestion de l'affichage sélectif des sociétés
import { ref } from 'vue'

const activeBlock = ref(0)

const experiences = ref([
  {
    role: 'Consultant Engineer — Technical Leader',
    date: 'de janvier 2023 à août 2024',
    details: [
      'En intervention chez RTE (Réseau de Transport d’Électricité) pour le compte de Meritis Technologies, société de conseil en ingénierie logicielle.',
      'Évolution, amélioration et maintenance d’Antares Web, une application de simulation des études sur la consommation et la production d’électricité en France et en Europe à court, moyen et long terme (jusqu’en 2050).'
    ]
  },
  {
    role: 'Ingénieur Logiciel Sénior – NF544',
    date: 'de septembre 2021 à décembre 2022',
    details: [
      'Au sein du service Outils Généraux, j’ai participé au développement des workflows et des webservices génériques permettant de mettre en œuvre la norme NF 544 (Numérisation conforme à l’original) au sein des workflow BPO (développement d’un modèle de workflow générique).',
      'Sous la direction d’un technical leader : - Développement des modules batch du workflow générique en Python. - Développement des webservices Python avec Django REST framework. - Développement des scripts de migration de la base de données PostgreSQL. - Rédaction et mise à jour de la documentation technique en Sphinx. - Formation des développeurs pour la mise en place d’un workflow de dématérialisation permettant de respecter la norme NF 544. - Méthodologie Agile sous la direction d’un Scrum Master (iceScrum).'
    ]
  },
  {
    role: 'Ingénieur Logiciel Sénior – USPTO',
    date: 'de janvier 2019 à août 2021',
    details: [
      'Pour le compte de l’Office des Brevets Américain (USPTO) à Omaha (Nebraska).',
      'Rôle de technical leader : pilotage de l’équipe de développement aux États-Unis et en Roumanie.'
    ]
  },
  {
    role: 'Ingénieur Logiciel Sénior – LexisNexis (Codes Bleus)',
    date: 'de janvier 2016 à décembre 2018',
    details: [
      'Pour le compte des éditions LexisNexis à Paris.',
      'Conception et développement d’un workflow de mise en page des publications juridiques (Codes Bleus).'
    ]
  }
])

const showExperience = (index: number) => {
  activeBlock.value = index
}
</script>

<template>
  <div id="experience">
    <h2 class="text-highlight-1 section-title">Mon expérience professionnelle</h2>
    <!-- Système à onglets, sur deux colonnes -->
    <section id="left">
      <p class="company" @click="showExperience(0)" :class="{ active: activeBlock === 0 }">Meritis Technologies</p>
      <p class="company" @click="showExperience(1)" :class="{ active: activeBlock === 1 }">Luminess</p>
      <p class="company" @click="showExperience(2)" :class="{ active: activeBlock === 2 }">Luminess</p>
      <p class="company" @click="showExperience(3)" :class="{ active: activeBlock === 3 }">Luminess</p>
    </section>
    <section id="right">
      <article v-for="(experience, index) in experiences">
        <div v-if="activeBlock === index">
          <h3>{{ experience.role }}</h3>
          <p><em>{{ experience.date }}</em></p>
          <ul>
            <li v-for="detail in experience.details">{{ detail }}</li>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
#experience {
  margin-top: 20px;
}

#experience p {
  margin-bottom: 1em;
}

#left {
  float: left;
  width: 25%;
}

#right {
  float: right;
  width: 75%;
}

.company {
  cursor: pointer;
  font-weight: bold;
}

#right h3 {
  margin-top: 0;
  font-weight: bold;
  color: var(--vt-c-custom-text-2);
}

#right p {
  margin-top: 0;
  color: var(--vt-c-custom-text-1);
}

#right ul {
  list-style-type: none;
  padding-left: 0;
}

#right ul li {
  margin-bottom: 1em;
}

.active {
  border-left: 4px solid var(--vt-c-custom-text-2);
  line-height: 30px;
  padding-left: 10px;
}

</style>