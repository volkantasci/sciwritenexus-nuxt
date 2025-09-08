<template>
  <div>
    <div class="language-redirect">
      <div class="redirect-content">
        <h1>Scientific Writing Nexus</h1>
        <p>Redirecting to your preferred language...</p>
        <div class="language-options">
          <button @click="redirectTo('en')" class="language-btn">English</button>
          <button @click="redirectTo('tr')" class="language-btn">Türkçe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageRedirect',
  mounted() {
    // Default to English after a brief delay
    setTimeout(() => {
      this.redirectTo('en');
    }, 2000);
  },
  methods: {
    redirectTo(language) {
      this.$router.push(`/${language}`);
    }
  }
}
</script>

<style scoped>
.language-redirect {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.redirect-content {
  max-width: 500px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.language-options {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.language-btn {
  padding: 1rem 2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.language-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .language-options {
    flex-direction: column;
  }
  
  .language-btn {
    width: 100%;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  p {
    font-size: 1rem;
  }
}
</style>