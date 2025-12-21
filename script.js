/* JavaScript Document

TemplateMo 602 Graph Page

https://templatemo.com/tm-602-graph-page

*/
// Navbar scroll effect
window.addEventListener('scroll', function () {
   const navbar = document.getElementById('navbar');
   if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
   } else {
      navbar.classList.remove('scrolled');
   }
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const mobileNavLinks = document.querySelectorAll('.nav-links-mobile a');

function updateActiveNav() {
   const scrollY = window.pageYOffset;

   sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
               link.classList.add('active');
            }
         });

         mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
               link.classList.add('active');
            }
         });
      }
   });
}

window.addEventListener('scroll', updateActiveNav);

// Smooth scrolling
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

// Mini charts animation
function drawMiniChart(canvasId, color) {
   const canvas = document.getElementById(canvasId);
   if (!canvas) return;

   const ctx = canvas.getContext('2d');
   canvas.width = canvas.offsetWidth;
   canvas.height = canvas.offsetHeight;

   // Generate random data points
   const points = [];
   for (let i = 0; i < 10; i++) {
      points.push(Math.random() * canvas.height);
   }

   // Draw line
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = 2;

   points.forEach((point, index) => {
      const x = (canvas.width / (points.length - 1)) * index;
      const y = point;

      if (index === 0) {
         ctx.moveTo(x, y);
      } else {
         ctx.lineTo(x, y);
      }
   });

   ctx.stroke();

   // Draw gradient fill
   const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
   gradient.addColorStop(0, color + '40');
   gradient.addColorStop(1, color + '00');

   ctx.lineTo(canvas.width, canvas.height);
   ctx.lineTo(0, canvas.height);
   ctx.closePath();
   ctx.fillStyle = gradient;
   ctx.fill();
}

// Initialize mini charts
setTimeout(() => {
   drawMiniChart('miniChart1', '#00ffcc');
   drawMiniChart('miniChart2', '#ff0080');
   drawMiniChart('miniChart3', '#00ccff');
   drawMiniChart('miniChart4', '#ffcc00');
   drawMiniChart('miniChart5', '#ff6b6b');
   drawMiniChart('miniChart6', '#4ecdc4');
}, 100);

// Animate stats on scroll
const observerOptions = {
   threshold: 0.5,
   rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         const bars = entry.target.querySelectorAll('.bar');
         bars.forEach((bar, index) => {
            setTimeout(() => {
               bar.style.animation = 'slideUp 0.5s ease-out forwards';
            }, index * 100);
         });
      }
   });
}, observerOptions);

document.querySelectorAll('.bar-chart').forEach(chart => {
   observer.observe(chart);
});

// Add slide up animation
const style = document.createElement('style');
style.textContent = `
            @keyframes slideUp {
                from {
                    transform: scaleY(0);
                    transform-origin: bottom;
                }
                to {
                    transform: scaleY(1);
                    transform-origin: bottom;
                }
            }
        `;
document.head.appendChild(style);

// Chart options interaction
document.querySelectorAll('.chart-options').forEach(optionGroup => {
   const options = optionGroup.querySelectorAll('.chart-option');
   options.forEach(option => {
      option.addEventListener('click', function () {
         options.forEach(opt => opt.classList.remove('active'));
         this.classList.add('active');
      });
   });
});
// Add hover effect to contact form inputs
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
   input.addEventListener('focus', function () {
      this.style.borderColor = 'rgba(0, 255, 204, 0.5)';
      this.style.background = 'rgba(255, 255, 255, 0.08)';
      this.style.boxShadow = '0 0 20px rgba(0, 255, 204, 0.1)';
   });

   input.addEventListener('blur', function () {
      this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      this.style.background = 'rgba(255, 255, 255, 0.05)';
      this.style.boxShadow = 'none';
   });
});

// Metrics animation on scroll
const metricsObserver = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         const metrics = entry.target.querySelectorAll('.metric-item');
         metrics.forEach((metric, index) => {
            setTimeout(() => {
               metric.style.transform = 'translateY(0)';
               metric.style.opacity = '1';
            }, index * 100);
         });
      }
   });
}, {
   threshold: 0.3
});

document.querySelectorAll('.metrics-grid').forEach(grid => {
   metricsObserver.observe(grid);
});

// Initialize metrics animation state
document.querySelectorAll('.metric-item').forEach(item => {
   item.style.transform = 'translateY(20px)';
   item.style.opacity = '0';
   item.style.transition = 'all 0.5s ease';
});
 <!-- Нач.вид кнопок -->
document.getElementById("button1").style.backgroundColor ="#14ff6e";
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button3").style.backgroundColor ="#141414";

document.getElementById("button3").onclick = function(){
            this.style.backgroundColor ="#14ff6e";
            this.style.padding ="25px 69px"; 
  
document.getElementById("button1").style.backgroundColor ="#141414";
  
document.getElementById("button2").style.backgroundColor ="#141414";
  
document.getElementById("button2").style.padding ="25px 45px"; 
  
document.getElementById("button1").style.padding ="25px 12px";
  
document.getElementById("button4").style.backgroundColor ="#141414";

document.getElementById("button4").style.padding ="25px 25px";
}

document.getElementById("button1").onclick = function(){
            this.style.backgroundColor ="#14ff6e";
            this.style.padding ="25px 40px";
  
document.getElementById("button2").style.backgroundColor ="#141414";

document.getElementById("button2").style.padding ="25px 45px";
document.getElementById("button3").style.backgroundColor ="#141414";  
  
document.getElementById("button3").style.padding ="25px 40px";
  
document.getElementById("button4").style.backgroundColor ="#141414";

document.getElementById("button4").style.padding ="25px 25px";
  
document.getElementById()  
}
  
document.getElementById("button2").onclick = function(){
            this.style.backgroundColor ="#14ff6e";
            this.style.padding ="25px 74px";
  
document.getElementById("button1").style.backgroundColor ="#141414";
  
document.getElementById("button1").style.padding ="25px 12px";  
  
document.getElementById("button3").style.backgroundColor ="#141414";

document.getElementById("button3").style.padding ="25px 40px";
  
document.getElementById("button4").style.backgroundColor ="#141414";

document.getElementById("button4").style.padding ="25px 25px";
}

document.getElementById("button4").onclick = function(){
            this.style.backgroundColor ="#14ff6e";
            this.style.padding ="25px 54px";
  
document.getElementById("button1").style.backgroundColor ="#141414";
  
document.getElementById("button1").style.padding ="25px 12px";  
  
document.getElementById("button3").style.backgroundColor ="#141414";

document.getElementById("button3").style.padding ="25px 40px";

document.getElementById("button2").style.backgroundColor ="#141414";

document.getElementById("button2").style.padding ="25px 45px";
}


