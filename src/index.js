const themeToggle = document.getElementById('theme-toggle');

// Função para alternar a classe 'dark'
function toggleTheme() {
  if (themeToggle.checked) {
    document.documentElement.classList.add('dark');
    // Opcional: salva a preferência no localStorage
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

// Adiciona um listener ao checkbox
themeToggle.addEventListener('change', toggleTheme);

// Ao carregar a página, verifica se há uma preferência salva
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    themeToggle.checked = true;
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    themeToggle.checked = false;
  } else {
    // Se não houver preferência, verifica a preferência do sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
    themeToggle.checked = prefersDark;
  }
});