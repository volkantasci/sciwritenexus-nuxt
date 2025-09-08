export const useTheme = () => {
  // SSR için her zaman false döndür, hydration mismatch'i önle
  const isDarkMode = useState('theme', () => false);

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    
    // Client tarafında localStorage'a kaydet ve body class'ını güncelle
    if (process.client) {
      localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
      updateBodyTheme();
    }
  };

  const updateBodyTheme = () => {
    if (process.client) {
      if (isDarkMode.value) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  };

  // Sadece client tarafında çalışacak mounted efekti
  if (process.client) {
    onMounted(() => {
      // Client tarafında localStorage'dan tema durumunu oku
      const savedTheme = localStorage.getItem('theme');
      isDarkMode.value = savedTheme === 'dark';
      updateBodyTheme();
    });
  }

  return {
    isDarkMode: readonly(isDarkMode),
    toggleTheme,
    updateBodyTheme
  };
};