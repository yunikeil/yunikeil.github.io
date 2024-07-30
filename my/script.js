const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const particles = [];
let density = calculateDensity();

for (let i = 0; i < density; i++) {
    particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5),
        vy: (Math.random() - 0.5),
        radius: Math.random() * 1.2
    });
}

function calculateDensity() {
    const area = w * h;
    return Math.floor(area / 10000);
}

function draw() {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i++) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, Math.PI * 2);
        ctx.fill();

        particles[i].x += particles[i].vx;
        particles[i].y += particles[i].vy;

        if (particles[i].x < -50) {
            particles[i].x = w + 50;
        }
        if (particles[i].y < -50) {
            particles[i].y = h + 50;
        }
        if (particles[i].x > w + 50) {
            particles[i].x = -50;
        }
        if (particles[i].y > h + 50) {
        }
    }

    requestAnimationFrame(draw);
}

window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    density = calculateDensity();

    particles.length = 0;

    for (let i = 0; i < density; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5),
            vy: (Math.random() - 0.5),
            radius: Math.random() * 1.2
        });
    }
});

draw();