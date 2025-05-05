document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-header nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                header.style.padding = '0.7rem 2rem';
            } else {
                header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                header.style.padding = '1rem 2rem';
            }
        });
    }

    const filterBtn = document.getElementById('filter-btn');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            const region = document.getElementById('region-select').value;
            const displayDiv = document.getElementById('filtered-data-display');
            
            if (region === 'all') {
                displayDiv.innerHTML = '<p>显示所有地区数据</p>';
            } else {
                let regionName, income, gymCount, density, population, gymTypes;
                
                switch(region) {
                    case 'upper-east':
                        regionName = '上东区 (Upper East Side)';
                        income = '120,000';
                        gymCount = '85';
                        density = '42.5';
                        population = '200,000';
                        gymTypes = '高端健身俱乐部、精品工作室';
                        break;
                    case 'upper-west':
                        regionName = '上西区 (Upper West Side)';
                        income = '105,000';
                        gymCount = '72';
                        density = '36.0';
                        population = '200,000';
                        gymTypes = '高端健身俱乐部、社区健身中心';
                        break;
                    case 'midtown':
                        regionName = '中城 (Midtown)';
                        income = '95,000';
                        gymCount = '110';
                        density = '55.0';
                        population = '200,000';
                        gymTypes = '办公楼健身房、连锁健身房';
                        break;
                    case 'downtown':
                        regionName = '下城 (Downtown)';
                        income = '90,000';
                        gymCount = '65';
                        density = '32.5';
                        population = '200,000';
                        gymTypes = '中档连锁健身房、精品工作室';
                        break;
                    case 'chinatown':
                        regionName = '唐人街 (Chinatown)';
                        income = '45,000';
                        gymCount = '18';
                        density = '9.0';
                        population = '200,000';
                        gymTypes = '经济型健身房、社区健身中心';
                        break;
                }
                
                displayDiv.innerHTML = `
                    <h3>${regionName} 详细数据</h3>
                    <div class="region-data">
                        <p><strong>人均年收入:</strong> ${income} 美元</p>
                        <p><strong>健身房数量:</strong> ${gymCount} 家</p>
                        <p><strong>每10万人口健身房数:</strong> ${density} 家</p>
                        <p><strong>估计人口:</strong> ${population} 人</p>
                        <p><strong>主要健身房类型:</strong> ${gymTypes}</p>
                    </div>
                `;
            }
        });
    }

    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('请填写所有必填字段！');
                return;
            }
            
            alert('感谢您的留言！我们会尽快回复。');
            contactForm.reset();
        });
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#fff9f9';
        });
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
        });
    });

    const regionCards = document.querySelectorAll('.region-card');
    if (regionCards.length > 0) {
        regionCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.querySelector('.card-link i').style.transform = 'translateX(5px)';
            });
            card.addEventListener('mouseleave', function() {
                this.querySelector('.card-link i').style.transform = 'translateX(0)';
            });
        });
    }

    function createPlaceholders() {
        const correlationGraph = document.getElementById('correlation-graph');
        if (correlationGraph) {
            correlationGraph.innerHTML = `
                <div class="placeholder-text">
                    <p>收入与健身房数量散点图</p>
                    <p>皮尔逊相关系数: 0.87</p>
                </div>
            `;
        }
        
        const regressionGraph = document.getElementById('regression-graph');
        if (regressionGraph) {
            regressionGraph.innerHTML = `
                <div class="placeholder-text">
                    <p>线性回归模型图</p>
                    <p>每增加1万美元收入，健身房数量增加3.2个</p>
                </div>
            `;
        }
        
        const incomeGymChart = document.getElementById('income-gym-chart');
        if (incomeGymChart) {
            incomeGymChart.innerHTML = `
                <div class="placeholder-text">
                    <p>各地区收入与健身房对比柱状图</p>
                </div>
            `;
        }
    }
    
    createPlaceholders();

    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-header nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const header = document.querySelector('.main-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

const subscribeForm = document.getElementById('subscribeForm');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            topic: document.getElementById('interest').value,
            suggestion: document.getElementById('message').value
        };

        const btn = this.querySelector('button[type="submit"]');
        const btnText = btn.querySelector('.btn-text');
        const btnLoading = btn.querySelector('.btn-loading');
        
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        
        try {
            const response = await fetch('http://localhost:8080/api/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('网络请求失败');
            }

            const result = await response.json();
            
            this.style.display = 'none';
            
            const successDiv = document.getElementById('formSuccess');
            successDiv.style.display = 'block';
            
            this.reset();
            
        } catch (error) {
            console.error('提交失败:', error);
            alert('抱歉，提交失败，请稍后重试！');
        } finally {
            btnText.style.display = 'inline-block';
            btnLoading.style.display = 'none';
        }
    });

    const inputs = subscribeForm.querySelectorAll('input[required]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateInput(this);
        });
        input.addEventListener('blur', function() {
            validateInput(this);
        });
    });
}

function validateInput(input) {
    const validationMessage = input.nextElementSibling;
    if (input.validity.valid) {
        validationMessage.textContent = '';
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        validationMessage.textContent = input.title;
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

document.querySelectorAll('a[href="#subscribe"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#subscribe').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.finding-card, .area-card, .highlight-item').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.footer-bottom').forEach(footer => {
    const year = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace('2023', year);
}); 