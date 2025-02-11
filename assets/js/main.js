function toggleDropdown(button) {
    if (window.innerWidth < 1024) {
        const dropdownMenu = button.nextElementSibling;
        const arrow = button.querySelector('svg');
        
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== dropdownMenu && menu.classList.contains('show-dropdown')) {
                menu.classList.remove('show-dropdown');
                menu.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
            }
        });

        dropdownMenu.classList.toggle('show-dropdown');
        arrow.classList.toggle('rotate-180');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new PureCounter({
        selector: '.purecounter', 
        start: 0, 
        end: 100,
        duration: 2,
        delay: 10,
        once: true,
        repeat: false,
        decimals: 0,
        legacy: true,
        filesizing: false,
        currency: false,
        separator: false,
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.classList.remove('show-dropdown');
          menu.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
        });
      }
    });

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const overlay = document.querySelector('.mobile-menu-overlay');

    menuToggle.addEventListener('change', function() {
      if (this.checked) {
        menu.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('menu-open'); 
      } else {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });

    overlay.addEventListener('click', function() {
      menuToggle.checked = false;
      menu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    });

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

    const header = document.querySelector('header');
    const menuItems = header.querySelectorAll('nav a, nav button');
    const whiteLogo = header.querySelector('img.hidden.lg\\:block');
    const coloredLogo = header.querySelector('img.lg\\:hidden');

    if (window.innerWidth >= 1024) {
      menuItems.forEach(item => {
        item.classList.add('lg:text-white');
      });
    }

    window.addEventListener('scroll', throttle(() => {
      if (window.innerWidth >= 1024) {
        if (window.scrollY > 75) {
          header.classList.add('bg-white', 'shadow-md');
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

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && window.scrollY <= 150) {
        menuItems.forEach(item => {
          item.classList.remove('lg:text-black');
          item.classList.add('lg:text-white');
        });
      }
    });

    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
    const menuLinks = document.querySelectorAll("a[href*='projeler.html?tab=']");
    
    function setActiveTab(tabId) {
        // Tüm butonları ve içerikleri sıfırla
        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.style.display = 'none');
        
        // İlgili butonu ve içeriği aktif yap
        const targetTab = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
        const targetContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
        
        if (targetTab) {
            targetTab.classList.add('active');
        }
        
        if (targetContent) {
            targetContent.style.display = 'block';
        }
    }

    // Sayfa yüklendiğinde URL'den tab'ı kontrol et
    const urlParams = new URLSearchParams(window.location.search);
    const activeTabParam = urlParams.get('tab');
    
    if (activeTabParam) {
        setActiveTab(activeTabParam);
    } else if (tabs.length > 0) {
        // URL'de parametre yoksa ilk tab'ı göster
        const firstTabId = tabs[0].getAttribute('data-tab');
        setActiveTab(firstTabId);
    }

    // Menü linklerine tıklama olayı
    menuLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const url = new URL(this.href);
            const tabId = url.searchParams.get('tab');
            
            window.history.pushState({}, '', this.href);
            setActiveTab(tabId);
        });
    });

    // Tab butonlarına tıklama olayı
    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const tabId = this.getAttribute('data-tab');
            
            const newUrl = `projeler.html?tab=${tabId}`;
            window.history.pushState({}, '', newUrl);
            setActiveTab(tabId);
        });
    });
});
