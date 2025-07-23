window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            const container = document.querySelector('.container');
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.getElementById('main-content');
            
            if (preloader) {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }

            document.body.style.overflow = 'auto';
            
            if (container) {
                container.classList.add('loaded');
            }

            if (sidebar && mainContent && window.innerWidth >= 992) { 
               
                requestAnimationFrame(() => {
                   
                    const viewportCenterX = window.innerWidth / 2;
                    const viewportCenterY = window.innerHeight / 2;

                    const sidebarRect = sidebar.getBoundingClientRect();
                    const sidebarCenterX = sidebarRect.left + sidebarRect.width / 2;
                    const sidebarCenterY = sidebarRect.top + sidebarRect.height / 2;

                    const translateX = viewportCenterX - sidebarCenterX;
                    const translateY = viewportCenterY - sidebarCenterY;

                    
                    sidebar.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.1)`;
                    sidebar.style.opacity = '0';
                    mainContent.style.opacity = '0';

                   
                    setTimeout(() => {
                        sidebar.style.transform = 'translate(0, 0) scale(1)';
                        sidebar.style.opacity = '1';
                        mainContent.style.opacity = '1';
                    }, 100);
                });
            } else if (sidebar && mainContent) {
                sidebar.style.opacity = '1';
                mainContent.style.opacity = '1';
            }


            
            const tabButtons = document.querySelectorAll('.nav-tab');
            const tabContents = document.querySelectorAll('.tab-content');
            
            function switchTab(targetTab) {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                const activeButton = document.querySelector(`[data-tab="${targetTab}"]`);
                const activeContent = document.getElementById(targetTab);
                
                if (activeButton && activeContent) {
                    activeButton.classList.add('active');
                    activeContent.classList.add('active');
                }
            }

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const targetTab = button.getAttribute('data-tab');
                    switchTab(targetTab);
                });
            });
            
            
            switchTab('about');
        });