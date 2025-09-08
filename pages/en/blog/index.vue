<template>
  <div class="blog-container">
    <Header :language="currentLanguage" @toggle-theme="handleThemeToggle" />
    
    <main class="blog-main">
      <div class="blog-header">
        <h1 class="blog-title">Blog</h1>
        <p class="blog-description">Latest insights and tips about academic writing and publication processes</p>
      </div>

      <div class="blog-grid">
        <div 
          v-for="post in blogPosts" 
          :key="post.id" 
          class="blog-card"
          @click="$router.push(`/en/blog/${post.slug}`)"
        >
          <div class="blog-card-content">
            <h3 class="blog-card-title">{{ post.title }}</h3>
            <p class="blog-card-excerpt">{{ post.excerpt }}</p>
            <div class="blog-card-meta">
              <span class="blog-card-date">{{ formatDate(post.date) }}</span>
              <span class="blog-card-read-time">{{ post.readTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer :language="currentLanguage" />
  </div>
</template>

<script>
import Header from '../../../components/Header.vue'
import Footer from '../../../components/Footer.vue'

export default {
  name: 'BlogPageEN',
  components: {
    Header,
    Footer
  },
  data() {
    // Initialize theme from localStorage if available, otherwise default to false
    let initialDarkMode = false;
    if (process.client) {
      const savedTheme = localStorage.getItem('theme');
      initialDarkMode = savedTheme === 'dark';
    }
    
    return {
      currentLanguage: 'en',
      isDarkMode: initialDarkMode,
      blogPosts: [
        {
          id: 1,
          slug: 'scientific-writing-platform-launch',
          title: 'Scientific Writing Platform Launch',
          excerpt: 'Announcing the launch of our comprehensive scientific writing platform designed for researchers and academics.',
          image: '/images/placeholder-blog.jpg',
          date: '2024-01-15',
          readTime: '5 min read'
        },
        {
          id: 2,
          slug: 'research-paper-structure-guide',
          title: 'Research Paper Structure Guide',
          excerpt: 'Learn the essential structure of academic research papers and best practices for each section.',
          image: '/images/placeholder-blog.jpg',
          date: '2024-01-20',
          readTime: '8 min read'
        },
        {
          id: 3,
          slug: 'academic-translation-services',
          title: 'Academic Translation Services',
          excerpt: 'How our professional translation services help researchers publish in international journals.',
          image: '/images/placeholder-blog.jpg',
          date: '2024-01-25',
          readTime: '6 min read'
        },
        {
          id: 4,
          slug: 'plagiarism-check-tools',
          title: 'Plagiarism Check Tools',
          excerpt: 'Overview of advanced plagiarism detection tools integrated into our platform.',
          image: '/images/placeholder-blog.jpg',
          date: '2024-02-01',
          readTime: '5 min read'
        },
        {
          id: 5,
          slug: 'journal-selection-strategies',
          title: 'Journal Selection Strategies',
          excerpt: 'Expert tips for choosing the right academic journal for your research paper.',
          image: '/images/placeholder-blog.jpg',
          date: '2024-02-10',
          readTime: '7 min read'
        },
        {
          id: 6,
          slug: 'citation-management-systems',
          title: 'Citation Management Systems',
          excerpt: 'Comparison of popular citation management tools and integration with our platform.',
          image: '/images/placeholder-blog.jpg',
          date: '2024-02-15',
          readTime: '6 min read'
        },
        {
          id: 7,
          slug: 'peer-review-process',
          title: 'Peer Review Process',
          excerpt: 'Understanding the peer review process and how to prepare for publication.',
          image: '/images/placeholder-blog.jpg',
          date: '2024-02-20',
          readTime: '9 min read'
        },
        {
          id: 8,
          slug: 'academic-english-writing',
          title: 'Academic English Writing',
          excerpt: 'Tips for improving academic writing skills for non-native English speakers.',
          image: '/images/placeholder-blog.jpg',
          date: '2024-02-25',
          readTime: '6 min read'
        },
        {
          id: 9,
          slug: 'data-visualization-techniques',
          title: 'Data Visualization Techniques',
          excerpt: 'Best practices for creating effective data visualizations in research papers.',
          image: '/images/placeholder-blog.jpg',
          date: '2024-03-01',
          readTime: '7 min read'
        },
        {
          id: 10,
          slug: 'open-access-publishing',
          title: 'Open Access Publishing',
          excerpt: 'Benefits and considerations of open access publishing for researchers.',
          image: '/images/placeholder-blog.jpg',
          date: '2024-03-05',
          readTime: '6 min read'
        }
      ]
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.updateBodyTheme();
    },
    handleThemeToggle(isDark) {
      this.isDarkMode = isDark;
      this.updateBodyTheme();
    },
    updateBodyTheme() {
      if (process.client) {
        if (this.isDarkMode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  },
  created() {
    // Sync theme from localStorage on create
    if (process.client) {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
    }
    this.updateBodyTheme();
  },
  mounted() {
    // Sync theme from localStorage on mount
    if (process.client) {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
    }
    this.updateBodyTheme();
  }
}
</script>

<style>
.blog-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  transition: all 0.3s ease;
}

body.dark .blog-container {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
}

.blog-main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem 6rem;
}

.blog-header {
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 1rem;
}

.blog-title {
  font-family: 'Inter', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #1e293b;
  letter-spacing: -0.025em;
  line-height: 1.1;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

body.dark .blog-title {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blog-description {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 450;
}

body.dark .blog-description {
  color: #94a3b8;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.blog-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.08),
    0 5px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.blog-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 10px 20px rgba(0, 0, 0, 0.1);
}

body.dark .blog-card {
  background: rgba(30, 41, 59, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.3),
    0 5px 10px rgba(0, 0, 0, 0.2);
}

body.dark .blog-card:hover {
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 10px 20px rgba(0, 0, 0, 0.3);
}

.blog-card-content {
  padding: 2rem;
  position: relative;
  text-align: center;
}

.blog-card-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

body.dark .blog-card-title {
  color: #f1f5f9;
}

.blog-card-excerpt {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

body.dark .blog-card-excerpt {
  color: #94a3b8;
}

.blog-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #64748b;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

body.dark .blog-card-meta {
  color: #64748b;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.blog-card-date {
  font-weight: 500;
  color: #3b82f6;
}

body.dark .blog-card-date {
  color: #60a5fa;
}

.blog-card-read-time {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

body.dark .blog-card-read-time {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
}

/* Featured post styling */
.blog-card:first-child {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.blog-card:first-child .blog-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blog-card:first-child .blog-card-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.blog-card:first-child .blog-card-excerpt {
  font-size: 1.1rem;
  -webkit-line-clamp: 4;
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
  }
  
  .blog-main {
    padding: 3rem 1.5rem 4rem;
  }
  
  .blog-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .blog-card:first-child {
    grid-template-columns: 1fr;
  }
  
  .blog-title {
    font-size: 2.5rem;
  }
  
  .blog-description {
    font-size: 1.1rem;
  }
  
  .blog-main {
    padding: 2rem 1rem 3rem;
  }
  
  .blog-card-content {
    padding: 1.5rem;
  }
  
  .blog-card-title {
    font-size: 1.3rem;
  }
  
  .blog-card:first-child .blog-card-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .blog-title {
    font-size: 2rem;
  }
  
  .blog-description {
    font-size: 1rem;
  }
  
  .blog-card-content {
    padding: 1.25rem;
  }
}
</style>