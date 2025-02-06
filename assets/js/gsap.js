// Sayfanın yüklenmesini bekle
document.addEventListener("DOMContentLoaded", function() {
    // GSAP ve ScrollTrigger'ı başlat
    gsap.registerPlugin(ScrollTrigger);

    // Services Section
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
        // Grid içindeki tüm itemları seç (düzeltilmiş selector)
        const serviceItems = servicesSection.querySelectorAll('.grid-cols-1.md\\:grid-cols-3 > div');
        
        serviceItems.forEach((item, index) => {
            gsap.set(item, { opacity: 0, y: 50 }); // Başlangıç durumu
            
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom-=100",
                    toggleActions: "play none none none",
                    once: true
                },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                delay: index * 0.2,
            });
        });

        // Başlık animasyonu
        const title = servicesSection.querySelector('.animate-subtitle');
        if (title) {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: "top bottom-=100",
                    toggleActions: "play none none none",
                    once: true
                },
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power2.out"
            });
        }

        // Açıklama metni animasyonu
        const description = servicesSection.querySelector('.animate-text');
        if (description) {
            gsap.from(description, {
                scrollTrigger: {
                    trigger: description,
                    start: "top bottom-=100",
                    toggleActions: "play none none none",
                    once: true
                },
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.2,
                ease: "power2.out"
            });
        }
    }

    const projectsSection = document.querySelector('.projects-section');
    
    if (projectsSection) {
        // Başlık animasyonları
        const titles = projectsSection.querySelectorAll('.animate-subtitle, .animate-title');
        titles.forEach((title, index) => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: "top bottom-=100",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                x: -50,
                duration: 1,
                delay: index * 0.2,
                ease: "power2.out"
            });
        });

        // Açıklama metni animasyonu
        const description = projectsSection.querySelector('.text-gray-700');
        if (description) {
            gsap.from(description, {
                scrollTrigger: {
                    trigger: description,
                    start: "top bottom-=100",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.4,
                ease: "power2.out"
            });
        }

        // "Tüm Projeler" butonu animasyonu
        const button = projectsSection.querySelector('.animate-button');
        if (button) {
            gsap.from(button, {
                scrollTrigger: {
                    trigger: button,
                    start: "top bottom-=100",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                x: 50,
                duration: 1,
                delay: 0.6,
                ease: "power2.out"
            });
        }

        // Slider içindeki itemler için animasyon
        const slides = projectsSection.querySelectorAll('.swiper-slide');
        slides.forEach((slide, index) => {
            gsap.from(slide, {
                scrollTrigger: {
                    trigger: slide,
                    start: "top bottom-=100",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 0.8 + (index * 0.2), // Her slide için kademeli gecikme
                ease: "power2.out"
            });
        });

        // Ayırıcı çizgi animasyonu
        const divider = projectsSection.querySelector('div[class*="h-[1px]"]');
        if (divider) {
            gsap.from(divider, {
                scrollTrigger: {
                    trigger: divider,
                    start: "top bottom-=100",
                    toggleActions: "play none none none",
                },
                scaleX: 0,
                duration: 1.5,
                delay: 0.6,
                ease: "power2.out"
            });
        }

        // Slider kontrol butonları animasyonu
        const controls = projectsSection.querySelectorAll('.swiper-button-next, .swiper-button-prev');
        controls.forEach((control, index) => {
            gsap.from(control, {
                scrollTrigger: {
                    trigger: control,
                    start: "top bottom-=100",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                x: index === 0 ? 20 : -20,
                duration: 1,
                delay: 1,
                ease: "power2.out"
            });
        });
    }

    // About section'ı seç
    const aboutSection = document.querySelector('.about-section');
    
    if (aboutSection) {
        // Timeline oluştur
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutSection,
                start: "top center+=200", // Scroll başlangıç noktasını aşağı çektik
                toggleActions: "play none none none",
                once: true
            }
        });

        // Elementleri seç
        const images = aboutSection.querySelectorAll('.parallax-image');
        const title = aboutSection.querySelector('.animate-title');
        const subtitle = aboutSection.querySelector('.animate-subtitle');
        const text = aboutSection.querySelector('.animate-text');
        const button = aboutSection.querySelector('.animate-button');

        // Başlangıç durumları
        gsap.set([title, subtitle], { 
            opacity: 0, 
            x: -50 
        });
        
        gsap.set([text, button], { 
            opacity: 0, 
            y: 30 
        });
        
        gsap.set(images, { 
            opacity: 0
        });

        // Animasyonları başlat
        tl.to(images, {
            opacity: 1,
            duration: 1,
            stagger: 0.2
        })
        .to(title, {
            opacity: 1,
            x: 0,
            duration: 0.8
        })
        .to(subtitle, {
            opacity: 1,
            x: 0,
            duration: 0.8
        }, "-=0.6")
        .to(text, {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, "-=0.6")
        .to(button, {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, "-=0.6");

        // Parallax efekti
        images.forEach(img => {
            gsap.to(img, {
                y: () => img.dataset.speed * 100,
                ease: "none",
                scrollTrigger: {
                    trigger: aboutSection,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });
    }

    const statsSection = document.querySelector('.stats-section');
    
    if (statsSection) {
        // Her bir istatistik item'ı için animasyon
        const statItems = statsSection.querySelectorAll('.flex.gap-2.items-center');
        
        statItems.forEach((item, index) => {
            // Başlangıç durumu
            gsap.set(item, { 
                opacity: 0,
                y: 30
            });

            // Animasyon
            gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2 + (index * 0.2), // Her item için kademeli gecikme
                ease: "power2.out",
                onComplete: () => {
                    // Sayaç animasyonunu başlat
                    const counter = item.querySelector('.purecounter');
                    if (counter && typeof PureCounter === 'function') {
                        new PureCounter({
                            selector: counter,
                            duration: 2,
                            once: true
                        });
                    }
                }
            });
        });
    }

    // Footer Section
    const footerSection = document.querySelector('.footer-section');
    if (footerSection) {
        const title = footerSection.querySelector('.animate-title');
        const button = footerSection.querySelector('.animate-button');
        const columns = footerSection.querySelectorAll('.lg\\:w-1\\/4');
        const socialLinks = footerSection.querySelectorAll('.flex.items-center.gap-4 a');
        const logo = footerSection.querySelector('svg');

        gsap.set([title, button], { opacity: 0, y: 30 });
        gsap.set(columns, { opacity: 0, y: 30 });
        gsap.set(socialLinks, { opacity: 0, scale: 0 });
        gsap.set(logo, { opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerSection,
                start: "top bottom-=100",
                toggleActions: "play none none none",
                once: true
            }
        });

        tl.to(title, {
            opacity: 1,
            y: 0,
            duration: 0.8
        })
        .to(button, {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, "-=0.6")
        .to(columns, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2
        }, "-=0.6")
        .to(socialLinks, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1
        }, "-=0.4")
        .to(logo, {
            opacity: 1,
            duration: 0.8
        }, "-=0.4");
    }


      // GSAP Paralaks efekti
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.utils.toArray('.parallax-image').forEach(image => {
        const speed = image.dataset.speed;
        
        gsap.to(image, {
          yPercent: () => speed * 15,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        });
      });

      gsap.fromTo("#scrollingText", 
        {
          x: 0, // Başlangıç pozisyonu
        },
        {
          x: -500, // Bitiş pozisyonu (sola doğru)
          ease: "none",
          scrollTrigger: {
            trigger: "#scrollingText",
            start: "top center", // Animasyon başlangıç noktası
            end: "bottom top", // Animasyon bitiş noktası
            scrub: 1, // Scroll ile senkronize hareket için
            markers: false // Geliştirme sırasında true yapabilirsiniz
          }
        }
      );


});