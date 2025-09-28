
<template>
  <div class="contact-form">
    <div class="form-header">
      <h3>{{ getFormTitle() }}</h3>
      <button class="close-button" @click="closeForm">×</button>
    </div>
    
    <form @submit.prevent="submitForm" class="form-content">
      <!-- Birinci Aşamadan Gelen Bilgiler -->
      <div class="form-section">
        <h4>{{ language === 'tr' ? 'Temel Bilgiler' : 'Basic Information' }}</h4>
        <div class="form-row">
          <div class="form-group">
            <label>{{ language === 'tr' ? 'Akademik Destek Talebi' : 'Academic Support Request' }}</label>
            <select v-model="formData.supportType" required>
              <option value="">{{ language === 'tr' ? 'Destek İstek Tipi Seçiniz' : 'Select Support Type' }}</option>
              <option value="writing">{{ language === 'tr' ? 'Akademik Yazım Danışmanlığı' : 'Academic Writing Consultancy' }}</option>
              <option value="analysis">{{ language === 'tr' ? 'Veri Analizi ve Raporlama' : 'Data Analysis and Reporting' }}</option>
              <option value="english">{{ language === 'tr' ? 'İngilizce Yazım Geliştirme' : 'English Writing Skills Development' }}</option>
              <option value="publication">{{ language === 'tr' ? 'Yayın Süreci Danışmanlığı' : 'Publication Process Consultancy' }}</option>
              <option value="other">{{ language === 'tr' ? 'Diğer' : 'Other' }}</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>{{ language === 'tr' ? 'Adı Soyadı' : 'Full Name' }}</label>
            <input type="text" v-model="formData.fullName" required>
          </div>
          <div class="form-group">
            <label>{{ language === 'tr' ? 'E-posta Adresi' : 'Email Address' }}</label>
            <input type="email" v-model="formData.email" required>
          </div>
        </div>

        <div class="form-group">
          <label>{{ language === 'tr' ? 'Adres' : 'Address' }}</label>
          <textarea v-model="formData.address" rows="3"></textarea>
        </div>

        <div class="form-group">
          <label>{{ language === 'tr' ? 'Destek Konusu' : 'Support Topic' }}</label>
          <textarea 
            v-model="formData.supportTopic" 
            :placeholder="language === 'tr' ? 'Bu alana talebinizi yazınız...' : 'Please write your request here...'" 
            rows="4" 
            required
          ></textarea>
        </div>
      </div>

      <!-- Detaylı Bilgiler -->
      <div class="form-section">
        <h4>{{ language === 'tr' ? 'Detaylı Bilgiler' : 'Detailed Information' }}</h4>
        
        <div class="form-group">
          <label>{{ language === 'tr' ? 'Destek Konusu Detayları' : 'Support Topic Details' }}</label>
          <textarea 
            v-model="formData.supportDetails" 
            :placeholder="language === 'tr' ? 'Talebinizle ilgili detaylı açıklamalar...' : 'Detailed explanations about your request...'" 
            rows="6" 
            required
          ></textarea>
        </div>

        <div class="form-group">
          <label>{{ language === 'tr' ? 'Hedeflenen Esere Benzer Yayınlar' : 'Publications Similar to Target Work' }}</label>
          <div class="file-upload">
            <input 
              type="file" 
              ref="similarPublicationsInput" 
              @change="handleSimilarPublicationsUpload" 
              multiple
              accept=".pdf,.doc,.docx,.txt"
            >
            <button type="button" @click="triggerSimilarPublicationsUpload" class="upload-button">
              {{ language === 'tr' ? 'Dosya Seç' : 'Choose Files' }}
            </button>
            <div class="file-list" v-if="formData.similarPublications.length > 0">
              <div v-for="(file, index) in formData.similarPublications" :key="index" class="file-item">
                <span>{{ file.name }}</span>
                <button type="button" @click="removeSimilarPublication(index)" class="remove-file">×</button>
              </div>
            </div>
          </div>
          <small>{{ language === 'tr' ? 'Varsa upload ediniz' : 'Upload if available' }}</small>
        </div>

        <div class="form-group">
          <label>{{ language === 'tr' ? 'Yayında Sunulacak Veri Dosyası' : 'Data File for Publication' }}</label>
          <div class="file-upload">
            <input 
              type="file" 
              ref="dataFileInput" 
              @change="handleDataFileUpload" 
              multiple
              accept=".xls,.xlsx,.csv,.sav,.dta,.rdata"
            >
            <button type="button" @click="triggerDataFileUpload" class="upload-button">
              {{ language === 'tr' ? 'Dosya Seç' : 'Choose Files' }}
            </button>
            <div class="file-list" v-if="formData.dataFiles.length > 0">
              <div v-for="(file, index) in formData.dataFiles" :key="index" class="file-item">
                <span>{{ file.name }}</span>
                <button type="button" @click="removeDataFile(index)" class="remove-file">×</button>
              </div>
            </div>
          </div>
          <small>{{ language === 'tr' ? 'Varsa upload ediniz' : 'Upload if available' }}</small>
        </div>

        <div class="form-group">
          <label>{{ language === 'tr' ? 'Yayında Sunulacak Resimler' : 'Images for Publication' }}</label>
          <div class="file-upload">
            <input 
              type="file" 
              ref="imagesInput" 
              @change="handleImagesUpload" 
              multiple
              accept=".jpg,.jpeg,.png,.tiff,.bmp,.svg"
            >
            <button type="button" @click="triggerImagesUpload" class="upload-button">
              {{ language === 'tr' ? 'Dosya Seç' : 'Choose Files' }}
            </button>
            <div class="file-list" v-if="formData.images.length > 0">
              <div v-for="(file, index) in formData.images" :key="index" class="file-item">
                <span>{{ file.name }}</span>
                <button type="button" @click="removeImage(index)" class="remove-file">×</button>
              </div>
            </div>
          </div>
          <small>{{ language === 'tr' ? 'Varsa upload ediniz' : 'Upload if available' }}</small>
        </div>

        <div class="form-group">
          <label>{{ language === 'tr' ? 'Sizin Sorularınız' : 'Your Questions' }}</label>
          <textarea 
            v-model="formData.questions" 
            :placeholder="language === 'tr' ? 'Bizimle paylaşmak istediğiniz sorularınız...' : 'Your questions you want to share with us...'" 
            rows="4"
          ></textarea>
        </div>
      </div>

      <div class="form-actions">
        <button type="submit" class="submit-button" :disabled="submitting">
          {{ submitting ? (language === 'tr' ? 'Gönderiliyor...' : 'Submitting...') : (language === 'tr' ? 'Talep Gönder' : 'Submit Request') }}
        </button>
        <button type="button" @click="closeForm" class="cancel-button">
          {{ language === 'tr' ? 'İptal' : 'Cancel' }}
        </button>
      </div>

      <div class="form-notice">
        <p>{{ language === 'tr' ? 'Talebiniz hizmet kapsamımıza uygunluk açısından değerlendirilerek size iki gün içinde e-posta yolu ile cevap verilecektir.' : 'Your request will be evaluated for service suitability and you will receive a response via email within two days.' }}</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    language: {
      type: String,
      default: 'tr'
    }
  },
  data() {
    return {
      formData: {
        supportType: '',
        fullName: '',
        email: '',
        address: '',
        supportTopic: '',
        supportDetails: '',
        similarPublications: [],
        dataFiles: [],
        images: [],
        questions: ''
      },
      submitting: false
    }
  },
  methods: {
    getFormTitle() {
      return this.language === 'tr' ? 'Detaylı İletişim Formu' : 'Detailed Contact Form'
    },
    
    closeForm() {
      this.$emit('close')
      this.resetForm()
    },
    
    // File upload methods for different file types
    triggerSimilarPublicationsUpload() {
      this.$refs.similarPublicationsInput.click()
    },
    
    handleSimilarPublicationsUpload(event) {
      const files = Array.from(event.target.files)
      this.formData.similarPublications = [...this.formData.similarPublications, ...files]
      event.target.value = ''
    },
    
    removeSimilarPublication(index) {
      this.formData.similarPublications.splice(index, 1)
    },
    
    triggerDataFileUpload() {
      this.$refs.dataFileInput.click()
    },
    
    handleDataFileUpload(event) {
      const files = Array.from(event.target.files)
      this.formData.dataFiles = [...this.formData.dataFiles, ...files]
      event.target.value = ''
    },
    
    removeDataFile(index) {
      this.formData.dataFiles.splice(index, 1)
    },
    
    triggerImagesUpload() {
      this.$refs.imagesInput.click()
    },
    
    handleImagesUpload(event) {
      const files = Array.from(event.target.files)
      this.formData.images = [...this.formData.images, ...files]
      event.target.value = ''
    },
    
    removeImage(index) {
      this.formData.images.splice(index, 1)
    },
    
    resetForm() {
      this.formData = {
        supportType: '',
        fullName: '',
        email: '',
        address: '',
        supportTopic: '',
        supportDetails: '',
        similarPublications: [],
        dataFiles: [],
        images: [],
        questions: ''
      }
      this.submitting = false
    },
    
    async submitForm() {
      if (this.submitting) return
      
      this.submitting = true
      
      try {
        // Form validation
        if (!this.validateForm()) {
          this.submitting = false
          return
        }
        
        // Simulate form submission
        await this.submitFormData()
        
        // Show success message
        this.showSuccessMessage()
        
        // Close form after delay
        setTimeout(() => {
          this.closeForm()
        }, 2000)
        
      } catch (error) {
        console.error('Form submission error:', error)
        this.showErrorMessage()
        this.submitting = false
      }
    },
    
    validateForm() {
      const requiredFields = ['supportType', 'fullName', 'email', 'supportTopic', 'supportDetails']
      for (const field of requiredFields) {
        if (!this.formData[field] || this.formData[field].trim() === '') {
          alert(this.language === 'tr' ? 'Lütfen tüm zorunlu alanları doldurunuz.' : 'Please fill in all required fields.')
          return false
        }
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.formData.email)) {
        alert(this.language === 'tr' ? 'Lütfen geçerli bir e-posta adresi giriniz.' : 'Please enter a valid email address.')
        return false
      }
      
      return true
    },
    
    async submitFormData() {
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true })
        }, 1000)
      })
    },
    
    showSuccessMessage() {
      alert(this.language === 'tr' 
        ? 'Talebiniz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.' 
        : 'Your request has been submitted successfully. We will get back to you soon.'
      )
    },
    
    showErrorMessage() {
      alert(this.language === 'tr' 
        ? 'Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.' 
        : 'An error occurred. Please try again later.'
      )
    }
  }
}
</script>

<style scoped>
.contact-form {
  background: white;
  border-radius: 15px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  border-radius: 15px 15px 0 0;
}

.form-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.close-button {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.form-content {
  padding: 2rem;
}

.form-section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #f8f9fa;
}

.form-section:last-of-type {
  border-bottom: none;
}

.form-section h4 {
  margin: 0 0 1.5rem 0;
  color: #2c3e50;
  font-size: 1.1rem;
  border-left: 4px solid #e74c3c;
  padding-left: 0.8rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #e74c3c;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

.file-upload {
  border: 2px dashed #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

.file-upload input[type="file"] {
  display: none;
}

.upload-button {
  background: #f8f9fa;
  border: 2px solid #e74c3c;
  color: #e74c3c;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.upload-button:hover {
  background: #e74c3c;
  color: white;
}

.file-list {
  margin-top: 1rem;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.remove-file {
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 0.8rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.submit-button,
.cancel-button {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-button {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(231, 76, 60, 0.4);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cancel-button {
  background: #95a5a6;
  color: white;
}

.cancel-button:hover {
  background: #7f8c8d;
  transform: translateY(-2px);
}

.form-notice {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
}

.form-notice p {
  margin: 0;
  font-size: 0.9rem;
  color: #7f8c8d;
  line-height: 1.4;
}

/* Animations */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .contact-form {
    width: 95%;
    margin: 1rem;
  }
  
  .form-content {
    padding: 1.5rem;
  }
  
  .form-header {
    padding: 1rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .form-content {
    padding: 1rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
}
</style>