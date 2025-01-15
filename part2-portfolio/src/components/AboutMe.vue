<script lang="ts" setup>
</script>

<template>
  <div id="about-me">
    <h2 class="text-highlight-1 section-title">Qui suis-je ?</h2>
    <p class="default-text">
      Fort de plusieurs années d’expérience en tant que <em class="text-highlight-2">développeur sénior fullstack</em>
      et <em class="text-highlight-2">leader technique</em>, j’ai développé des applications complexes pour des clients
      internationaux. J’ai travaillé dans des environnements multiculturels, en France, aux États-Unis, en Roumanie…
      J’ai dirigé des équipes de développement, recruté et formé de nouveaux développeurs.</p>
    <p class="default-text">
      Spécialisé en développement backend (<em class="text-highlight-2">Python</em>, <em
        class="text-highlight-2">Django</em>, <em class="text-highlight-2">FastAPI</em>), je suis également compétent en
      développement frontend. Je travaille habituellement en environnement Agile et je maîtrise les outils de <em
        class="text-highlight-2">CI/CD</em> (GitHub Actions,
      Jenkins). Mes compétences couvrent tout le cycle de vie d’un projet logiciel : conception, développement, tests
      unitaires et fonctionnels, qualité logicielle, documentation technique, conteneurisation (Docker), mise en
      production, maintenance corrective et évolutive.</p>
    <p class="default-text">
      Autonome et capable de communiquer efficacement avec les clients et les équipes, je suis mobile sur <em
        class="text-highlight-2">Laval</em>, <em class="text-highlight-2">Rennes</em> et
      <em class="text-highlight-2">Paris</em>, et ouvert au télétravail.
    </p>
    <nav>
      <router-link to="/contact/me" class="contact-link">Contactez moi&nbsp;!</router-link>
      <router-link to="/contact/webmaster" class="contact-link">Web master</router-link>
      <router-link to="/contact/sav" class="contact-link">SAV</router-link>
    </nav>
  </div>
</template>

<style scoped>
#about-me {
  margin-top: 20px;
}

#about-me p {
  margin-bottom: 1em;
}

nav {
  display: flex;
  gap: 1em;
  margin-top: 1em;
}

.contact-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--vt-c-custom-text-1);
  color: white;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  text-decoration: none;
}
.contact-link:hover {
  background-color: var(--vt-c-custom-text-2);
}
</style>