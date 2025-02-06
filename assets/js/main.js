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

    // Throttle fonksiyonu
    function throttle(func, limit) {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      }
    }

    // Sadece masaüstü için scroll efekti
    const header = document.querySelector('header');
    const menuItems = header.querySelectorAll('nav a, nav button');
    const whiteLogo = header.querySelector('img.hidden.lg\\:block');
    const coloredLogo = header.querySelector('img.lg\\:hidden');

    // Başlangıçta menü öğelerine beyaz renk ekle
    if (window.innerWidth >= 1024) {
      menuItems.forEach(item => {
        item.classList.add('lg:text-white');
      });
    }

    window.addEventListener('scroll', throttle(() => {
      // Sadece masaüstünde çalış
      if (window.innerWidth >= 1024) {
        if (window.scrollY > 75) {
          header.classList.add('bg-white', 'shadow-md');
          // Logo ve menü renk değişimleri
          whiteLogo.classList.remove('lg:block');
          coloredLogo.classList.remove('lg:hidden');
          
          menuItems.forEach(item => {
            if (item.classList.contains('lg:text-white')) {
              item.classList.remove('lg:text-white');
              item.classList.add('lg:text-black');
            }
          });
        } else {
          header.classList.remove('bg-white', 'shadow-md');
          // Logo ve menü renklerini geri al
          whiteLogo.classList.add('lg:block');
          coloredLogo.classList.add('lg:hidden');
          
          menuItems.forEach(item => {
            if (item.classList.contains('lg:text-black')) {
              item.classList.remove('lg:text-black');
              item.classList.add('lg:text-white');
            }
          });
        }
      }
    }, 100));

    // Resize olayında da kontrol et
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && window.scrollY <= 150) {
        menuItems.forEach(item => {
          item.classList.remove('lg:text-black');
          item.classList.add('lg:text-white');
        });
      }
    });
});
