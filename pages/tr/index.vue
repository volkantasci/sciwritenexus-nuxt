<template>
  <div>
    <Header :language="currentLanguage" @toggle-language="toggleLanguage" />
    <MainSection :language="currentLanguage" />
    <StatsSection :language="currentLanguage" />
    <Services :language="currentLanguage" />
    <Process :language="currentLanguage" />
    <About :language="currentLanguage" />
    <Contact :language="currentLanguage" />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import MainSection from '../../components/MainSection.vue'
import StatsSection from '../../components/StatsSection.vue'
import Services from '../../components/Services.vue'
import Process from '../../components/Process.vue'
import About from '../../components/About.vue'
import Contact from '../../components/Contact.vue'

export default {
  name: 'HomePageTR',
  components: {
    Header,
    MainSection,
    StatsSection,
    Services,
    Process,
    About,
    Contact
  },
  data() {
    return {
      currentLanguage: 'tr'
    }
  },
  methods: {
    toggleLanguage() {
      const newLang = this.currentLanguage === 'tr' ? 'en' : 'tr';
      this.currentLanguage = newLang;
      this.$router.push(`/${newLang}`);
    }
  }
}
</script>

<style scoped>
/* Home page specific styles can be added here */
</style>