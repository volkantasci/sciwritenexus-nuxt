<template>
  <section class="stats-section">
    <div class="stats-container">
      <div class="stat-item" v-for="stat in stats" :key="stat.id">
        <div class="stat-number">{{ stat.number }}</div>
        <div class="stat-label">{{ getStatLabel(stat) }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatsSection',
  props: {
    language: {
      type: String,
      default: 'tr'
    }
  },
  data() {
    return {
      stats: [
        {
          id: 1,
          number: '500+',
          label: {
            tr: 'Başarılı Yayın',
            en: 'Successful Publications'
          }
        },
        {
          id: 2,
          number: '95%',
          label: {
            tr: 'Kabul Oranı',
            en: 'Acceptance Rate'
          }
        },
        {
          id: 3,
          number: '50+',
          label: {
            tr: 'Q1 Dergileri',
            en: 'Q1 Journals'
          }
        },
        {
          id: 4,
          number: '24/7',
          label: {
            tr: 'Destek Mevcut',
            en: 'Support Available'
          }
        }
      ]
    }
  },
  methods: {
    getStatLabel(stat) {
      return this.language === 'tr' ? stat.label.tr : stat.label.en;
    }
  }
}
</script>

<style scoped>
.stats-section {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  padding: 4rem 0;
  color: white;
}

.stats-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
}

.stat-item {
  text-align: center;
  animation: fadeInUp 0.6s ease both;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 500;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Dark mode styles */
body.dark .stats-section {
  background: linear-gradient(135deg, var(--dark-bg), var(--dark-bg-surface));
}

/* Responsive design */
@media (max-width: 768px) {
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .stat-label {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .stats-section {
    padding: 3rem 0;
  }
  
  .stats-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .stat-number {
    font-size: 2.2rem;
  }
  
  .stat-label {
    font-size: 0.95rem;
  }
}
</style>