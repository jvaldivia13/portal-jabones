/* ─── EMAILJS CONFIG ──────────────────────────────────────────────────────
   1. Crea cuenta en https://www.emailjs.com (plan Free: 200 emails/mes)
   2. En Email Services → Add New Service → Gmail (o el que uses)
   3. En Email Templates → Create New Template (ver instrucciones abajo)
   4. En Account → General → Public Key
   Reemplaza los tres valores de abajo con los tuyos.
────────────────────────────────────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY  = '-uMsuloJLZxGuY1Eo';
const EMAILJS_SERVICE_ID  = 'service_qxa8lym';
const EMAILJS_TEMPLATE_ID = 'template_9grj0xq';

const PRODUCTS = [
    { id:1, name:'Jabón de Colágeno', category:'Anti-Envejecimiento', tag:null, price:25, weight:100,
      desc:'Rejuvenece tu piel mejorando su elasticidad y firmeza natural con colágeno hidrolizado.',
      longDesc:'Fórmula enriquecida con colágeno que previene la flacidez y atenúa líneas de expresión. Ayuda a mantener la piel hidratada, suave y con un aspecto rejuvenecido gracias a la vitamina E.',
      ingredients:['Gelatina natural','Glicerina transparente','Aceite de rosa mosqueta','Colágeno hidrolizado','Esencia'],
      benefits:['Mejora la elasticidad','Rejuvenece el cutis','Atenúa líneas finas','Hidratación profunda'],
      skinType:'Madura y seca', usage:'Usar en la rutina diaria, de día o de noche.',
      image:'catalogo/jabon-artesanal-colageno-rejuvenecedor.jpeg' },

    { id:2, name:'Jabón de Cacao', category:'Ultra Nutrición', tag:null, price:25, weight:100,
      desc:'Humecta y nutre todo el cuerpo con las propiedades antioxidantes del cacao puro.',
      longDesc:'El cacao puro es rico en antioxidantes naturales que combaten el daño de radicales libres. Nutre intensamente y ofrece un aroma relajante ideal para el cuerpo entero.',
      ingredients:['Glicerina transparente','Cacao molido','Esencia de chocolate','Aceite de almendra','Miel','Vitamina E'],
      benefits:['Nutrición intensa','Efecto antioxidante','Aroma relajante','Suaviza la piel'],
      skinType:'Seca a normal', usage:'Ideal para usar en la ducha corporal completa.',
      image:'catalogo/jabon-natural-cacao-antioxidante.jpeg' },

    { id:3, name:'Jabón de Cúrcuma', category:'Aclaramiento & Control', tag:null, price:25, weight:100,
      desc:'Limpia profundamente y ayuda a reducir manchas del rostro y mejorar la luminosidad.',
      longDesc:'La cúrcuma posee poderosos efectos antiinflamatorios y aclarantes. Ayuda a combatir manchas oscuras y brotes de acné, unificando el tono para un cutis radiante.',
      ingredients:['Glicerina blanca','Aceite de coco','Vitamina E','Esencia de vainilla'],
      benefits:['Reduce manchas oscuras','Unifica el tono','Antiinflamatorio natural','Aporta luminosidad'],
      skinType:'Todo tipo de piel', usage:'Usar 2-3 veces por semana en el rostro con masajes circulares.',
      image:'catalogo/jabon-curcuma-aclarante-manchas-cara.jpeg' },

    { id:4, name:'Jabón de Aloe Vera', category:'Acne & Cicatrización', tag:null, price:25, weight:100,
      desc:'Fórmula cicatrizante con Aloe Vera puro para tratar acné y reducir molestias cutáneas.',
      longDesc:'El Aloe Vera actúa como un desinfectante y antiinflamatorio natural súper eficaz. Ideal para calmar quemaduras leves, brotes de acné activo y refrescar la piel.',
      ingredients:['Glicerina blanca y transparente','Aloe vera gel','Manzanilla','Vitamina E','Esencia de Aloe Vera','Tintura verde'],
      benefits:['Calma acné activo','Cicatriza marcas','Refresca la piel','Antiinflamatorio'],
      skinType:'Acneica y grasa', usage:'Usar diariamente en zonas afectadas por brotes.',
      image:'catalogo/jabon-aloe-vera-cicatrizante-acne.jpeg' },

    { id:5, name:'Jabón de Avena y Miel', category:'Suavidad & Alivio', tag:null, price:25, weight:100,
      desc:'Humectante natural que ayuda a suavizar y nutrir pieles sensibles y delicadas.',
      longDesc:'La combinación perfecta para piel irritada. La miel aporta propiedades antibacterianas y la avena funciona como exfoliante ultra suave que retiene la humedad natural.',
      ingredients:['Glicerina blanca','Avena molida','Miel','Vitamina E','Manteca de karité','Aceite de esencia de la Banda'],
      benefits:['Humectación profunda','Nutrición intensa','Calma irritaciones','Suaviza la piel'],
      skinType:'Sensible y delicada', usage:'Masajear suavemente la piel y enjuagar con agua tibia.',
      image:'catalogo/jabon-avena-miel-piel-sensible.jpeg' },

    { id:6, name:'Jabón de Arroz', category:'Unificador de Tono', tag:null, price:25, weight:100,
      desc:'Aclarante natural que unifica y nutre la piel, dejándola como porcelana.',
      longDesc:'Inspirado en antiguos secretos de belleza asiáticos. El arroz molido exfolia delicadamente, fomenta la renovación celular e ilumina el rostro progresivamente.',
      ingredients:['Glicerina blanca','Arroz molido','Vitamina E','Maizena','Aceite de rosa mosqueta','Esencia','Leche en polvo'],
      benefits:['Aclarante progresivo','Unifica el tono','Aspecto mate y suave','Renueva células'],
      skinType:'Mixta a grasa', usage:'Usar diariamente o intercalado para mantener el tono claro.',
      image:'catalogo/jabon-arroz-aclarante-piel-porcelana.jpeg' },

    { id:7, name:'Jabón de Coco', category:'Hidratación Diaria', tag:null, price:25, weight:100,
      desc:'Poderoso humectante que atrapa la humedad para dejar el rostro y cuerpo suaves.',
      longDesc:'El aceite de coco penetra profundamente en los poros. Ayuda a restaurar la barrera protectora de la piel secas o agrietadas, dejando un suave y exótico aroma tropical.',
      ingredients:['Glicerina blanca','Coco molido','Aceite de coco','Aceite de rosa mosqueta','Vitamina E'],
      benefits:['Atrapa la humedad','Previene resequedad','Repara grietas','Aroma exótico'],
      skinType:'Seca y extra seca', usage:'Ideal para ducha diaria en áreas resecas como codos y rodillas.',
      image:'catalogo/jabon-coco-hidratacion-profunda.jpeg' },

    { id:8, name:'Jabón de Manzanilla', category:'Calmante Natural', tag:null, price:25, weight:100,
      desc:'Desinflama y relaja la piel irritada. Perfecto para pieles que necesitan un descanso.',
      longDesc:'La flor de manzanilla es famosa por sus poderes sedantes y analgésicos naturales. Calma el enrojecimiento, reduce la hinchazón y ofrece una limpieza tan amorosa que parece un abrazo.',
      ingredients:['Glicerina transparente','Manzanilla seca','Vitamina E','Aceite de almendra'],
      benefits:['Desinflama rojeces','Limpia delicadamente','Humecta','Relaja tensiones'],
      skinType:'Sensible y atópica', usage:'Lavado facial nocturno para calmar la piel antes de dormir.',
      image:'catalogo/jabon-manzanilla-calmante-piel-atopica.jpeg' },

    { id:9, name:'Jabón de Café', category:'Energía & Revitalización', tag:null, price:25, weight:100,
      desc:'Exfoliante vigorizante que remueve células muertas y activa tu circulación.',
      longDesc:'El café molido realiza una exfoliación mecánica efectiva, estimulando el flujo sanguíneo y ayudando a combatir la retención de líquidos (ideal contra la celulitis).',
      ingredients:['Glicerina blanca o transparente','Cera de abeja','Café molido','Aceite de coco','Esencia la Banda'],
      benefits:['Exfoliación profunda','Estimula circulación','Suaviza textura gruesa','Energiza'],
      skinType:'Normal a resistente', usage:'Frotar directamente sobre el cuerpo en la ducha (evitar rostro sensible).',
      image:'catalogo/jabon-cafe-exfoliante-celulitis.jpeg' }
];

const TESTIMONIALS = [
    { name:'Luciana Ríos', initial:'L', product:'Jabón de Aloe Vera', stars:5, text:'Llevaba meses lidiando con brotes de acné y nada funcionaba. A la tercera semana con este jabón los granitos activos bajaron muchísimo. No pica, no reseca. Ahora es parte fija de mi rutina.', result:'Brotes reducidos en 3 semanas' },
    { name:'Carmen López', initial:'C', product:'Jabón de Avena y Miel', stars:5, text:'Tengo piel muy sensible y la mayoría de jabones me dejan enrojecida. Este es suavísimo, huele increíble y no me causó ninguna reacción. Mi hija de 8 años también lo usa ya.', result:'Sin irritaciones desde el primer uso' },
    { name:'Rosa Mendez', initial:'R', product:'Jabón de Arroz', stars:5, text:'Tenía una mancha oscura en el pómulo que me molestaba hace tiempo. Después de usarlo todos los días durante un mes, está mucho más clara. No esperaba resultados tan notorios siendo un jabón.', result:'Mancha visiblemente aclarada' },
    { name:'Patricia Torres', initial:'P', product:'Jabón de Coco', stars:5, text:'Mis codos y rodillas siempre estuvieron resecos sin importar cuánta crema me pusiera. Con este jabón en la ducha diaria la textura cambió por completo. Piel suave y sin esa sensación áspera.', result:'Resequedad extrema controlada' },
    { name:'Marco Villanueva', initial:'M', product:'Jabón de Café', stars:4, text:'Lo compré curioso porque nunca había usado un jabón exfoliante de verdad. El resultado en la ducha es inmediato: la piel queda limpia y más firme. Lo uso tres veces por semana en piernas y espalda.', result:'Textura de piel mejorada' },
    { name:'Sofía Araya', initial:'S', product:'Jabón de Cúrcuma', stars:5, text:'Mi tono era muy disparejo, con manchitas del sol. Empecé a usarlo dos veces por semana como me indicaron y al mes el tono se veía mucho más uniforme. El color amarillo asusta al principio pero no mancha nada.', result:'Tono unificado en 4 semanas' }
];

const FAQS = [
    { q:'¿Los jabones KARIM son realmente 100% naturales?', a:'Sí. Todos nuestros jabones están elaborados con ingredientes naturales: glicerina vegetal, aceites prensados en frío y extractos botánicos. Sin sulfatos, parabenos, siliconas ni colorantes artificiales.' },
    { q:'¿Cuánto dura un jabón de 100 gramos?', a:'Con uso regular (2 veces al día) dura aproximadamente 30 días. Al ser concentrado, rinde más que los jabones comerciales. Con jabonera drenante puede durar hasta 40 días.' },
    { q:'¿Puedo usarlo si tengo piel muy sensible?', a:'Sí. El Jabón de Avena y Miel está especialmente formulado para pieles sensibles, con eczema o dermatitis. Recomendamos probar en una pequeña zona antes del primer uso completo.' },
    { q:'¿Cuándo veré resultados?', a:'Los primeros resultados visibles suelen aparecer entre 5 y 10 días. Los cambios más significativos, como reducción de acne o aclaramiento, se aprecian tras 3-4 semanas de uso consistente.' },
    { q:'¿Cómo debo conservar el jabón?', a:'Guarda el jabón en un lugar seco, alejado del agua acumulada. Usa una jabonera con drenaje entre usos. Esto maximiza la durabilidad y evita que se ablande.' },
    { q:'¿Hacen envíos a todo el Perú?', a:'Sí. Lima y Callao en 2-3 días hábiles; provincias en 5-7 días hábiles. Los pedidos se procesan dentro de las 24 horas de confirmado el pago.' },
    { q:'¿Tienen descuentos por compra en cantidad?', a:'Sí. Escríbenos por WhatsApp al +51 953 908 876 para consultar nuestros packs especiales y descuentos por volumen.' }
];

const BLOG_POSTS = [
    {
        id: 'piel',
        title: '¿Cómo elegir tu jabón ideal según tu piel?',
        tag: 'Guía',
        image: 'imagenes/woman_using_soap.png',
        content: `
            <p>Elegir el jabón adecuado no es solo cuestión de aroma; es la base de una piel sana. En KARIM, formulamos cada barra para responder a necesidades específicas:</p>
            <ul>
                <li><strong>Para Piel Grasa:</strong> Busca ingredientes purificantes como el <strong>Aloe Vera</strong> o la <strong>Cúrcuma</strong>. Ayudan a controlar el exceso de sebo sin resecar.</li>
                <li><strong>Para Piel Seca:</strong> Necesitas nutrición intensa. El jabón de <strong>Coco</strong> o el de <strong>Cacao</strong> son tus mejores aliados, ya que restauran la barrera lipídica.</li>
                <li><strong>Para Piel Sensible:</strong> La <strong>Avena y Miel</strong> o la <strong>Manzanilla</strong> ofrecen una limpieza ultra-suave que calma rojeces e irritaciones.</li>
                <li><strong>Para Piel Madura:</strong> El <strong>Colágeno</strong> y la <strong>Rosa Mosqueta</strong> ayudan a mantener la elasticidad y firmeza natural.</li>
            </ul>
            <p>Recuerda realizar masajes circulares suaves y enjuagar siempre con agua tibia.</p>
        `
    },
    {
        id: 'duracion',
        title: '3 Secretos para que tu jabón dure el doble',
        tag: 'Tips',
        image: 'imagenes/hero_woman_soap.png',
        content: `
            <p>Un jabón artesanal es un producto concentrado y valioso. Sigue estos pasos para maximizar cada gramo:</p>
            <ol>
                <li><strong>Drenaje es Vida:</strong> Nunca dejes tu jabón en una superficie plana donde se acumule agua. Usa una jabonera con agujeros o una rejilla que permita que el aire circule.</li>
                <li><strong>Duchas de Vapor:</strong> Intenta mantener el jabón fuera de la línea directa de la ducha cuando no lo estés usando. La humedad constante del vapor puede ablandarlo prematuramente.</li>
                <li><strong>La Espuma es Suficiente:</strong> No necesitas frotar la barra directamente sobre todo el cuerpo. Haz espuma en tus manos y aplícala; esto rinde mucho más y es igual de efectivo para limpiar.</li>
            </ol>
            <p>Con estos conejos, una barra de 100g puede durar perfectamente entre 30 y 40 días de uso diario.</p>
        `
    },
    {
        id: 'peligros',
        title: 'Peligros ocultos en los jabones comerciales',
        tag: 'Salud',
        image: 'imagenes/WhatsApp Image 2026-04-05 at 5.01.19 PM.jpeg',
        content: `
            <p>La mayoría de los "jabones" de supermercado son en realidad detergentes sintéticos. Aquí te explicamos qué evitar:</p>
            <ul>
                <li><strong>Sulfatos (SLS/SLES):</strong> Son los responsables de la espuma excesiva, pero también eliminan los aceites naturales de la piel, causando resequedad y dermatitis.</li>
                <li><strong>Parabenos:</strong> Conservantes químicos que han sido cuestionados por su potencial para alterar el sistema hormonal.</li>
                <li><strong>Fragancias Sintéticas:</strong> A menudo contienen ftalatos, que pueden irritar pieles sensibles y causar alergias respiratorias.</li>
            </ul>
            <p>En <strong>KARIM</strong>, reemplazamos todo esto por glicerina vegetal, aceites prensados en frío y extractos botánicos puros. Tu piel sentirá la diferencia desde la primera ducha.</p>
        `
    }
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

function openBlogModal(id) {
    const post = BLOG_POSTS.find(p => p.id === id);
    if (!post) return;
    
    document.getElementById('mName').textContent = post.title;
    document.getElementById('mMeta').textContent = post.tag;
    document.getElementById('mBody').innerHTML = `
        <img class="modal-img" src="${post.image}" alt="${post.title}" style="max-height:300px; object-fit:cover;">
        <div class="blog-post-full" style="padding:1.5rem 0;">
            ${post.content}
        </div>
        <button class="btn-submit" style="margin-top:1rem; width:100%;" onclick="closeModal()">Cerrar lectura</button>
    `;
    document.getElementById('productModal').classList.add('open');
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
    
    let text = `Hola KARIM, me gustaría realizar un pedido:\n\n`;
    cart.forEach(item => {
        text += `🔹 ${item.qty}x ${item.name} (S/ ${(item.price * item.qty).toFixed(2)})\n`;
    });
    text += `\n*TOTAL: S/ ${total.toFixed(2)}*\n\nPor favor, indíquenme los métodos de pago y opciones de envío.`;
    
    const waPhone = "51953908876";
    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    cart = []; 
    updateCart(); 
    toggleCart();
}

function handleContact(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value.trim();
    const phone = document.getElementById('contactPhone').value.trim() || 'No especificado';
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    
    const checkboxes = document.querySelectorAll('input[name="productos"]:checked');
    const selectedProducts = Array.from(checkboxes).map(cb => cb.value);
    const productsString = selectedProducts.length > 0 ? selectedProducts.join(', ') : 'Ningún producto específico';
    
    let text = `Hola KARIM, me gustaría hacer una consulta desde la web:\n\n`;
    text += `*Nombre:* ${name}\n`;
    if(phone !== 'No especificado') text += `*Teléfono:* ${phone}\n`;
    text += `*Correo:* ${email}\n`;
    text += `*Me interesan:* ${productsString}\n`;
    if (message) text += `\n*Mensaje:*\n${message}`;
    
    const waPhone = "51953908876";
    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    
    showToast('Redirigiendo a WhatsApp...');
    e.target.reset();
}

/* ─── LIBRO DE RECLAMACIONES ─── */

function openReclamaciones() {
    document.getElementById('reclamacionesBackdrop').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeReclamaciones(e) {
    if (e && e.target !== document.getElementById('reclamacionesBackdrop')) return;
    document.getElementById('reclamacionesBackdrop').classList.remove('open');
    document.body.style.overflow = '';
}

function generarCodigo() {
    const hoy = new Date();
    const fecha = hoy.getFullYear().toString() +
        String(hoy.getMonth() + 1).padStart(2, '0') +
        String(hoy.getDate()).padStart(2, '0');
    const random = Math.floor(1000 + Math.random() * 9000);
    return `KARIM-${fecha}-${random}`;
}

function handleReclamaciones(e) {
    e.preventDefault();

    const nombre      = document.getElementById('recNombre').value.trim();
    const dni         = document.getElementById('recDni').value.trim();
    const email       = document.getElementById('recEmail').value.trim();
    const telefono    = document.getElementById('recTelefono').value.trim();
    const direccion   = document.getElementById('recDireccion').value.trim();
    const tipoBien    = document.querySelector('input[name="recTipoBien"]:checked').value;
    const producto    = document.getElementById('recProducto').value;
    const monto       = document.getElementById('recMonto').value || 'No especificado';
    const tipo        = document.querySelector('input[name="recTipo"]:checked').value;
    const descripcion = document.getElementById('recDescripcion').value.trim();
    const pedido      = document.getElementById('recPedido').value.trim();

    if (!nombre || !dni || !email || !telefono || !direccion || !producto || !descripcion || !pedido) {
        showToast('Completa todos los campos obligatorios.');
        return;
    }

    const codigo = generarCodigo();
    const fecha  = new Date().toLocaleDateString('es-PE', { day:'2-digit', month:'long', year:'numeric' });

    const btn = document.getElementById('recSubmitBtn');
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    emailjs.init(EMAILJS_PUBLIC_KEY);

    const templateParams = {
        codigo,
        fecha,
        tipo,
        nombre,
        dni,
        email_consumidor: email,
        telefono,
        direccion,
        tipo_bien: tipoBien,
        producto,
        monto,
        descripcion,
        pedido,
        reply_to: email
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
            document.getElementById('reclamacionesForm').innerHTML = `
                <div style="text-align:center;padding:3rem 1rem;">
                    <div style="font-size:2.5rem;margin-bottom:1rem;">✓</div>
                    <h3 style="font-family:'Gilda Display',serif;color:#8B0000;margin-bottom:0.8rem;">Reclamo registrado</h3>
                    <p style="color:var(--muted);font-size:0.88rem;margin-bottom:1.2rem;">Hemos recibido tu ${tipo.toLowerCase()} correctamente.</p>
                    <div style="background:var(--cream2);padding:1rem 2rem;display:inline-block;margin-bottom:1.5rem;">
                        <div style="font-size:0.65rem;letter-spacing:2px;color:var(--muted);text-transform:uppercase;">Código de seguimiento</div>
                        <div style="font-size:1.1rem;font-weight:700;color:var(--dark);margin-top:0.3rem;">${codigo}</div>
                    </div>
                    <p style="color:var(--muted);font-size:0.8rem;">Recibirás una respuesta en <strong>tu correo electrónico</strong> en un plazo máximo de 30 días calendario.</p>
                    <button onclick="closeReclamaciones()" style="margin-top:1.5rem;padding:0.7rem 2rem;background:var(--dark);color:white;border:none;cursor:pointer;font-size:0.85rem;">Cerrar</button>
                </div>`;
            document.body.style.overflow = '';
        })
        .catch(() => {
            showToast('Error al enviar. Intenta por WhatsApp o email.');
            btn.disabled = false;
            btn.textContent = 'Enviar Reclamo o Queja';
        });
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
    lucide.createIcons();
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
        document.querySelectorAll('.strip, .section-head, .product-card, .promo-banner, .about-img, .about-content, .t-head, .t-card, .faq-head, .faq-item, .contact-dark, .contact-light, .newsletter, .blog, .blog-card').forEach((el, index) => {
            el.classList.add('reveal');
            if(el.classList.contains('product-card') || el.classList.contains('t-card') || el.classList.contains('faq-item') || el.classList.contains('blog-card')) {
                el.style.transitionDelay = `${(index % 3) * 0.12}s`;
            }
            observer.observe(el);
        });
    }, 100);
});
