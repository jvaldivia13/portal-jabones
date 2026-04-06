const PRODUCTS = [
    { id:1, name:'Jabón Cicatrizante con Aloe Vera', category:'Acne & Cicatrización', tag:'Popular', price:25, weight:100,
      desc:'Fórmula cicatrizante con Aloe Vera puro para tratar el acne activo y reducir marcas de forma natural.',
      longDesc:'Especialmente formulado para pieles acneicas. El Aloe Vera puro actúa como antiinflamatorio natural mientras la Manzanilla calma la piel irritada. La Vitamina E acelera la regeneración celular.',
      ingredients:['Glicerina blanca y transparente','Esencia de Aloe Vera','Manzanilla','Aloe Vera gel','Vitamina E','Tinte Natural Verde'],
      benefits:['Reduce acne activo','Cicatriza marcas','Antiinflamatorio natural','Regenera la piel','Calma irritaciones'],
      skinType:'Acneica y grasa', usage:'Aplicar 2 veces al día en zonas afectadas con masajes suaves',
      image:'imagenes/WhatsApp Image 2026-04-05 at 5.01.19 PM (1).jpeg' },

    { id:2, name:'Jabón de Coco', category:'Hidratación Profunda', tag:'Nuevo', price:25, weight:100,
      desc:'Hidratación intensa con coco molido, aceite de coco y Rosa Mosqueta para una piel suave y nutritiva.',
      longDesc:'El coco molido exfolia suavemente mientras el aceite de coco nutre en profundidad. El Aceite de Rosa Mosqueta regenera y la Vitamina E protege. Ideal para pieles secas y normales.',
      ingredients:['Glicerina Blanca','Coco Molido','Aceite de Coco','Aceite de Rosa Mosqueta','Vitamina E'],
      benefits:['Hidratación profunda','Exfoliación suave','Piel más suave','Nutre en profundidad','Aroma tropical'],
      skinType:'Seca y normal', usage:'Usar diariamente con masajes circulares suaves',
      image:'imagenes/WhatsApp Image 2026-04-05 at 5.01.19 PM (2).jpeg' },

    { id:3, name:'Jabón de Arroz', category:'Aclaramiento & Luminosidad', tag:null, price:25, weight:100,
      desc:'Aclaramiento progresivo con arroz molido y leche en polvo para un cutis luminoso y uniforme.',
      longDesc:'El arroz molido exfolia y aclara el tono de piel progresivamente. La Leche en Polvo suaviza e ilumina, mientras el Aceite de Rosa Mosqueta trabaja sobre manchas y marcas existentes.',
      ingredients:['Glicerina blanca','Arroz Molido','Vitamina E','Maizena','Aceite de Rosa Mosqueta','Esencia natural','Leche en Polvo'],
      benefits:['Aclaramiento progresivo','Exfoliación suave','Piel luminosa','Iguala el tono','Reduce manchas'],
      skinType:'Todo tipo de piel', usage:'Usar 2-3 veces por semana, especialmente en zonas oscurecidas',
      image:'imagenes/WhatsApp Image 2026-04-05 at 5.01.20 PM (1).jpeg' },

    { id:4, name:'Jabón de Avena y Miel', category:'Nutrición & Protección', tag:'Sensible', price:25, weight:100,
      desc:'Calmante y nutritivo con avena, miel y manteca de Karité. Ideal para pieles sensibles e irritadas.',
      longDesc:'La Avena Molida calma la piel irritada mientras la Miel aporta propiedades antibacterianas naturales. La Manteca de Karité nutre profundamente. Ideal para eczema y dermatitis.',
      ingredients:['Glicerina blanca','Avena Molida','Miel','Vitamina E','Manteca de Karité','Aceite de esencia natural'],
      benefits:['Calma irritaciones','Hidratación intensa','Ideal para eczema','Propiedades antibacterianas','Suavidad extrema'],
      skinType:'Sensible e irritada', usage:'Usar suavemente 2 veces al día. Enjuagar con agua tibia.',
      image:'imagenes/WhatsApp Image 2026-04-05 at 5.01.20 PM (3).jpeg' },

    { id:5, name:'Jabón de Café Expediente', category:'Energía & Revitalización', tag:null, price:25, weight:100,
      desc:'Exfoliante energizante con café molido y cera de abeja para revitalizar y activar la circulación.',
      longDesc:'El café molido activa la circulación y realiza una exfoliación profunda. La Cera de Abeja crea una barrera protectora natural y el Aceite de Coco hidrata tras cada uso.',
      ingredients:['Glicerina blanca o transparente','Cera de abeja','Café Molido','Aceite de Coco','Esencia natural'],
      benefits:['Activa la circulación','Exfoliación profunda','Revitaliza la piel','Reduce retención de líquidos','Energiza el cutis'],
      skinType:'Todo tipo de piel', usage:'Usar por las mañanas con masajes circulares. Ideal en ducha.',
      image:'imagenes/WhatsApp Image 2026-04-05 at 5.01.20 PM (5).jpeg' }
];

const TESTIMONIALS = [
    { name:'María García', initial:'M', product:'Jabón Cicatrizante', stars:5, text:'En dos semanas noté una reducción enorme en mis puntos negros. Ya no necesito maquillaje pesado para salir.', result:'80% menos acne' },
    { name:'Carmen López', initial:'C', product:'Jabón de Avena y Miel', stars:5, text:'Tenía dermatitis crónica y este fue lo único que funcionó sin causarme reacciones alérgicas. Lo recomiendo.', result:'Dermatitis controlada' },
    { name:'Rosa Mendez', initial:'R', product:'Jabón de Arroz', stars:5, text:'Mis manchas están desapareciendo poco a poco. Vale cada sol invertido. Ya pedí mi tercer jabón.', result:'60% menos manchas' },
    { name:'Patricia Torres', initial:'P', product:'Jabón de Coco', stars:5, text:'Mi piel se siente increíblemente suave desde el primer uso. El aroma es relajante y la diferencia es notable.', result:'Piel notablemente hidratada' },
    { name:'Jesús Ruiz', initial:'J', product:'Jabón de Café', stars:5, text:'Como hombre aprecio que sea natural. La energía en la piel es real. Lo uso cada mañana antes de trabajar.', result:'Piel revitalizada' },
    { name:'Sofía Araya', initial:'S', product:'Jabón Cicatrizante', stars:5, text:'Finalmente puedo mirarme al espejo sin sentir inseguridad por las cicatrices del acne. Gracias KARIM.', result:'Cicatrices casi invisibles' }
];

const FAQS = [
    { q:'¿Los jabones KARIM son realmente 100% naturales?', a:'Sí. Todos nuestros jabones están elaborados con ingredientes naturales: glicerina vegetal, aceites prensados en frío y extractos botánicos. Sin sulfatos, parabenos, siliconas ni colorantes artificiales.' },
    { q:'¿Cuánto dura un jabón de 100 gramos?', a:'Con uso regular (2 veces al día) dura aproximadamente 30 días. Al ser concentrado, rinde más que los jabones comerciales. Con jabonera drenante puede durar hasta 40 días.' },
    { q:'¿Puedo usarlo si tengo piel muy sensible?', a:'Sí. El Jabón de Avena y Miel está especialmente formulado para pieles sensibles, con eczema o dermatitis. Recomendamos probar en una pequeña zona antes del primer uso completo.' },
    { q:'¿Cuándo veré resultados?', a:'Los primeros resultados visibles suelen aparecer entre 5 y 10 días. Los cambios más significativos, como reducción de acne o aclaramiento, se aprecian tras 3-4 semanas de uso consistente.' },
    { q:'¿Ofrecen garantía y cuál es la caducidad?', a:'Sí. Ofrecemos garantía completa de 1 año. Si no estás satisfecho con tu compra, te devolvemos el dinero sin preguntas. Ten en cuenta que nuestros jabones naturales tienen una caducidad óptima de 6 meses tras su elaboración.' },
    { q:'¿Cómo debo conservar el jabón?', a:'Guarda el jabón en un lugar seco, alejado del agua acumulada. Usa una jabonera con drenaje entre usos. Esto maximiza la durabilidad y evita que se ablande.' },
    { q:'¿Hacen envíos a todo el Perú?', a:'Sí. Lima y Callao en 2-3 días hábiles; provincias en 5-7 días hábiles. Los pedidos se procesan dentro de las 24 horas de confirmado el pago.' },
    { q:'¿Tienen descuentos por compra en cantidad?', a:'Sí. Escríbenos por WhatsApp al +51 953 908 876 para consultar nuestros packs especiales y descuentos por volumen.' }
];

let cart = [];

function renderProducts() {
    document.getElementById('productsGrid').innerHTML = PRODUCTS.map(p => `
        <div class="product-card">
            <div class="card-img">
                ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ''}
                <img src="${p.image}" alt="${p.name}" onerror="this.parentElement.style.background='var(--cream)'">
                <div class="card-overlay">
                    <button class="ov-btn" onclick="openModal(${p.id})">Ver detalles</button>
                    <button class="ov-btn" onclick="addToCart(${p.id})">Agregar</button>
                </div>
            </div>
            <div class="card-body">
                <span class="card-cat">${p.category}</span>
                <h3 class="card-name">${p.name}</h3>
                <div class="card-foot">
                    <span class="card-price">S/ ${p.price.toFixed(2)}</span>
                    <span class="card-weight">${p.weight} g</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    document.getElementById('testimonialsGrid').innerHTML = TESTIMONIALS.map(t => `
        <div class="t-card">
            <div class="t-stars">${'★'.repeat(t.stars)}</div>
            <p class="t-text">"${t.text}"</p>
            <div class="t-author">
                <div class="t-avatar">${t.initial}</div>
                <div class="t-info">
                    <strong>${t.name}</strong>
                    <span>${t.product}</span>
                    <span class="t-result">✓ ${t.result}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderFAQ() {
    document.getElementById('faqContainer').innerHTML = FAQS.map((f, i) => `
        <div class="faq-item" id="fi${i}">
            <div class="faq-q" onclick="toggleFAQ(${i})">
                <span>${f.q}</span>
                <div class="faq-icon">+</div>
            </div>
            <div class="faq-a"><p>${f.a}</p></div>
        </div>
    `).join('');
}

function toggleFAQ(i) {
    document.getElementById('fi' + i).classList.toggle('open');
}

function openModal(id) {
    const p = PRODUCTS.find(x => x.id === id);
    document.getElementById('mName').textContent = p.name;
    document.getElementById('mMeta').textContent = `${p.category} · ${p.weight}g · S/ ${p.price}`;
    document.getElementById('mBody').innerHTML = `
        <img class="modal-img" src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">
        <p class="modal-desc">${p.longDesc}</p>
        <div class="tag-block">
            <h4>Ingredientes</h4>
            <div class="tag-list">${p.ingredients.map(i => `<span>${i}</span>`).join('')}</div>
        </div>
        <div class="tag-block" style="margin-top:1rem;">
            <h4>Beneficios</h4>
            <ul class="bene-list">${p.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>
        <div class="modal-info">
            <div class="m-info-box"><label>Tipo de piel</label><span>${p.skinType}</span></div>
            <div class="m-info-box"><label>Modo de uso</label><span>${p.usage}</span></div>
        </div>
        <button class="btn-submit" style="margin-top:0.5rem;" onclick="addToCart(${p.id});closeModal()">
            Agregar al carrito — S/ ${p.price.toFixed(2)}
        </button>
    `;
    document.getElementById('productModal').classList.add('open');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('open');
}

function addToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    const ex = cart.find(x => x.id === id);
    if (ex) ex.qty++;
    else cart.push({ ...p, qty: 1 });
    updateCart();
    showToast(`"${p.name}" agregado al carrito`);
}

function removeFromCart(id) {
    cart = cart.filter(x => x.id !== id);
    updateCart();
}

function updateCart() {
    const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
    const count = cart.reduce((s, x) => s + x.qty, 0);
    document.getElementById('cartCount').textContent = count;
    document.getElementById('cartTotal').textContent = total.toFixed(2);
    const list = document.getElementById('cartList');
    if (!cart.length) {
        list.innerHTML = `<div class="cart-empty-msg"><p>Tu carrito está vacío</p><span>Explora nuestra colección</span></div>`;
    } else {
        list.innerHTML = cart.map(item => `
            <div class="cart-row">
                <img class="cart-row-img" src="${item.image}" alt="${item.name}" onerror="this.style.background='var(--cream)'">
                <div class="cart-row-info">
                    <div class="cart-row-name">${item.name}</div>
                    <div class="cart-row-price">S/ ${item.price.toFixed(2)} × ${item.qty}</div>
                </div>
                <button class="cart-rm" onclick="removeFromCart(${item.id})">✕</button>
            </div>
        `).join('');
    }
}

function toggleCart() {
    document.getElementById('cartPanel').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('open');
}

function handleCheckout() {
    if (!cart.length) { showToast('Tu carrito está vacío'); return; }
    const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
    alert(`¡Gracias por tu pedido!\n\nTotal: S/ ${total.toFixed(2)}\n\nTe contactaremos por WhatsApp al +51 953 908 876 para confirmar y coordinar el pago.`);
    cart = []; updateCart(); toggleCart();
}

function handleContact(e) {
    e.preventDefault();
    showToast('¡Mensaje enviado! Te contactaremos pronto.');
    e.target.reset();
}

function handleNewsletter(e) {
    e.preventDefault();
    showToast('¡Suscripción confirmada!');
    e.target.reset();
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

window.addEventListener('scroll', () => {
    document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 60);
});

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderTestimonials();
    renderFAQ();
    updateCart();

    /* ─── SCROLL REVEAL OBSERVER ─── */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    setTimeout(() => {
        document.querySelectorAll('.strip, .section-head, .product-card, .promo-banner, .about-img, .about-content, .t-head, .t-card, .faq-head, .faq-item, .contact-dark, .contact-light, .newsletter').forEach((el, index) => {
            el.classList.add('reveal');
            if(el.classList.contains('product-card') || el.classList.contains('t-card') || el.classList.contains('faq-item')) {
                el.style.transitionDelay = `${(index % 3) * 0.12}s`;
            }
            observer.observe(el);
        });
    }, 100);
});
