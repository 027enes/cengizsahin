// Fonksiyonu global scope'a taşı
function toggleDropdown(button) {
    // Mobil kontrolü
    if (window.innerWidth < 1024) { // lg breakpoint
        const dropdownMenu = button.nextElementSibling;
        const arrow = button.querySelector('svg');
        
        // Diğer açık dropdownları kapat
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== dropdownMenu && menu.classList.contains('show-dropdown')) {
                menu.classList.remove('show-dropdown');
                menu.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
            }
        });

        // Tıklanan dropdownı aç/kapat
        dropdownMenu.classList.toggle('show-dropdown');
        arrow.classList.toggle('rotate-180');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new PureCounter();

    // Sayfa yüklendiğinde ve resize olduğunda kontrol et
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.classList.remove('show-dropdown');
          menu.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
        });
      }
    });

    // Scroll çubuğu genişliğini hesapla ve CSS değişkeni olarak kaydet
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

    // Menü toggle işlemini güncelle
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const overlay = document.querySelector('.mobile-menu-overlay');

    menuToggle.addEventListener('change', function() {
      if (this.checked) {
        menu.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('menu-open'); // body'e class ekle
      } else {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open'); // body'den class'ı kaldır
      }
    });

    // Overlay'e tıklandığında menüyü kapat
    overlay.addEventListener('click', function() {
      menuToggle.checked = false;
      menu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    });






  // Header scroll effect
  const header = document.querySelector('header');
  const whiteLogo = header.querySelector('img.hidden.lg\\:block');
  const coloredLogo = header.querySelector('img.lg\\:hidden');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-white', 'shadow-md');
      // Change logo visibility
      whiteLogo.classList.remove('lg:block');
      coloredLogo.classList.remove('lg:hidden');
      // Change menu text color
      const menuItems = header.querySelectorAll('.lg\\:text-white');
      menuItems.forEach(item => {
        item.classList.remove('lg:text-white');
        item.classList.add('lg:text-black');
      });
    } else {
      header.classList.remove('bg-white', 'shadow-md');
      // Restore logo visibility
      whiteLogo.classList.add('lg:block');
      coloredLogo.classList.add('lg:hidden');
      // Restore menu text color
      const menuItems = header.querySelectorAll('nav a, nav button');
      menuItems.forEach(item => {
        if (!item.classList.contains('lg:text-white')) {
          item.classList.remove('lg:text-black');
          item.classList.add('lg:text-white');
        }
      });
    }
  });
});
