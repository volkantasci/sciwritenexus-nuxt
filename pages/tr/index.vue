<template>
  <div>
    <Header :language="currentLanguage" @toggle-language="toggleLanguage" />
    <MainSection :language="currentLanguage" />
    <Services :language="currentLanguage" />
    <Process :language="currentLanguage" />
    <Contact :language="currentLanguage" />
    <Footer :language="currentLanguage" />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import MainSection from '../../components/MainSection.vue'
import Services from '../../components/Services.vue'
import Process from '../../components/Process.vue'
import Contact from '../../components/Contact.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: 'HomePageTR',
  components: {
    Header,
    MainSection,
    Services,
    Process,
    Contact,
    Footer
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