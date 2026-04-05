# Landing Page - Portal de Jabones Artesanales

## Descripción
Esta es una landing page profesional para un portal de venta de jabones artesanales con diseño moderno, responsivo y optimizado para conversión. El diseño utiliza una paleta de colores tierra (beige, marrón, verde suave) que refleja la naturaleza de los productos.

---

## HTML5 + CSS + JavaScript

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Jabones artesanales naturales - Calidad premium, ingredientes orgánicos">
    <title>Jabones Artesanales | Belleza Natural</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --color-primary: #8B7355;
            --color-secondary: #D4A574;
            --color-accent: #A8D5BA;
            --color-light: #F5F1E8;
            --color-dark: #3E3E3E;
            --color-white: #FFFFFF;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: var(--color-dark);
            line-height: 1.6;
            background-color: var(--color-light);
        }

        /* ===== HEADER Y NAVEGACIÓN ===== */
        header {
            background-color: var(--color-white);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--color-primary);
            text-decoration: none;
            letter-spacing: 2px;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-menu a {
            text-decoration: none;
            color: var(--color-dark);
            font-weight: 500;
            transition: color 0.3s ease;
            position: relative;
        }

        .nav-menu a:hover {
            color: var(--color-secondary);
        }

        .nav-menu a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: var(--color-secondary);
            transition: width 0.3s ease;
        }

        .nav-menu a:hover::after {
            width: 100%;
        }

        .btn-cart {
            position: relative;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--color-primary);
        }

        .cart-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: var(--color-accent);
            color: var(--color-white);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: bold;
        }

        /* ===== HERO SECTION ===== */
        .hero {
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            color: var(--color-white);
            padding: 6rem 2rem;
            text-align: center;
            min-height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 500px;
            height: 500px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
        }

        .hero-content {
            max-width: 700px;
            position: relative;
            z-index: 1;
            animation: slideUp 0.8s ease;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
            letter-spacing: 1px;
        }

        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.95;
        }

        .btn-primary, .btn-secondary {
            display: inline-block;
            padding: 1rem 2.5rem;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 0.5rem;
        }

        .btn-primary {
            background-color: var(--color-accent);
            color: var(--color-white);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            background-color: #92C9A5;
        }

        .btn-secondary {
            background-color: var(--color-white);
            color: var(--color-primary);
        }

        .btn-secondary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        /* ===== SECCIÓN CARACTERÍSTICAS ===== */
        .features {
            max-width: 1200px;
            margin: -80px auto 4rem;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            position: relative;
            z-index: 2;
        }

        .feature-card {
            background-color: var(--color-white);
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .feature-card h3 {
            color: var(--color-primary);
            margin-bottom: 0.5rem;
            font-size: 1.3rem;
        }

        .feature-card p {
            color: var(--color-dark);
            font-size: 0.95rem;
        }

        /* ===== SECCIÓN PRODUCTOS ===== */
        .products {
            padding: 4rem 2rem;
            background-color: var(--color-white);
        }

        .section-header {
            max-width: 1200px;
            margin: 0 auto 3rem;
            text-align: center;
        }

        .section-header h2 {
            font-size: 2.5rem;
            color: var(--color-primary);
            margin-bottom: 1rem;
        }

        .section-header p {
            font-size: 1.1rem;
            color: var(--color-dark);
            max-width: 600px;
            margin: 0 auto;
        }

        .products-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
        }

        .product-card {
            background-color: var(--color-light);
            border-radius: 10px;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        .product-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .product-image {
            width: 100%;
            height: 250px;
            background: linear-gradient(135deg, var(--color-secondary), var(--color-accent));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: rgba(255, 255, 255, 0.3);
        }

        .product-info {
            padding: 1.5rem;
        }

        .product-category {
            color: var(--color-secondary);
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .product-name {
            font-size: 1.3rem;
            color: var(--color-primary);
            margin: 0.5rem 0;
            font-weight: 600;
        }

        .product-description {
            color: var(--color-dark);
            font-size: 0.95rem;
            margin: 0.5rem 0;
            min-height: 50px;
        }

        .product-rating {
            color: var(--color-secondary);
            margin: 0.5rem 0;
            font-size: 0.9rem;
        }

        .product-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .price {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--color-primary);
        }

        .btn-add-cart {
            background-color: var(--color-accent);
            color: var(--color-white);
            border: none;
            padding: 0.7rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .btn-add-cart:hover {
            background-color: #92C9A5;
            transform: scale(1.05);
        }

        /* ===== SECCIÓN ABOUT ===== */
        .about {
            padding: 4rem 2rem;
            background-color: var(--color-light);
        }

        .about-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }

        .about-image {
            height: 400px;
            background: linear-gradient(135deg, var(--color-secondary), var(--color-accent));
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8rem;
            color: rgba(255, 255, 255, 0.2);
        }

        .about-content h2 {
            font-size: 2.2rem;
            color: var(--color-primary);
            margin-bottom: 1.5rem;
        }

        .about-content p {
            margin-bottom: 1rem;
            color: var(--color-dark);
            line-height: 1.8;
        }

        .about-list {
            list-style: none;
            margin: 2rem 0;
        }

        .about-list li {
            padding: 0.5rem 0;
            color: var(--color-dark);
        }

        .about-list li::before {
            content: '✓';
            color: var(--color-accent);
            font-weight: bold;
            display: inline-block;
            width: 20px;
            margin-right: 10px;
        }

        /* ===== SECCIÓN TESTIMONIOS ===== */
        .testimonials {
            padding: 4rem 2rem;
            background-color: var(--color-white);
        }

        .testimonials-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .testimonial-card {
            background-color: var(--color-light);
            padding: 2rem;
            border-radius: 10px;
            border-left: 4px solid var(--color-secondary);
            transition: all 0.3s ease;
        }

        .testimonial-card:hover {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .testimonial-stars {
            color: var(--color-secondary);
            margin-bottom: 1rem;
        }

        .testimonial-text {
            color: var(--color-dark);
            margin-bottom: 1rem;
            font-style: italic;
        }

        .testimonial-author {
            font-weight: 600;
            color: var(--color-primary);
        }

        /* ===== SECCIÓN EDUCATIVA ===== */
        .education-section {
            padding: 4rem 2rem;
            background-color: var(--color-light);
        }

        .education-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }

        .education-card {
            background-color: var(--color-white);
            padding: 2rem;
            border-radius: 10px;
            border-top: 4px solid var(--color-secondary);
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        .education-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .education-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .education-card h3 {
            color: var(--color-primary);
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }

        .education-card p {
            color: var(--color-dark);
            line-height: 1.7;
            font-size: 0.95rem;
        }

        /* ===== SECCIÓN CTA ===== */
        .cta {
            padding: 4rem 2rem;
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            color: var(--color-white);
            text-align: center;
        }

        .cta h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .cta p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        /* ===== SECCIÓN FAQ ===== */
        .faq-section {
            padding: 4rem 2rem;
            background-color: var(--color-white);
        }

        .faq-container {
            max-width: 900px;
            margin: 0 auto;
        }

        .faq-item {
            margin-bottom: 1.5rem;
            background-color: var(--color-light);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
        }

        .faq-item:hover {
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .faq-question {
            padding: 1.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            color: var(--color-primary);
            background-color: var(--color-light);
            transition: all 0.3s ease;
        }

        .faq-question:hover {
            background-color: var(--color-secondary);
            color: var(--color-white);
        }

        .faq-icon {
            font-size: 1.5rem;
            transition: transform 0.3s ease;
        }

        .faq-item.active .faq-icon {
            transform: rotate(180deg);
        }

        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            color: var(--color-dark);
            background-color: var(--color-white);
        }

        .faq-item.active .faq-answer {
            max-height: 500px;
            padding: 1.5rem;
            border-top: 2px solid var(--color-light);
        }

        .faq-answer p {
            line-height: 1.8;
            margin: 0;
        }

        /* ===== NEWSLETTER ===== */
        .newsletter {
            max-width: 600px;
            margin: 0 auto 2rem;
            display: flex;
            gap: 1rem;
        }

        .newsletter input {
            flex: 1;
            padding: 1rem;
            border: none;
            border-radius: 50px;
            font-size: 1rem;
        }

        .newsletter button {
            padding: 1rem 2rem;
            background-color: var(--color-accent);
            color: var(--color-white);
            border: none;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .newsletter button:hover {
            background-color: #92C9A5;
            transform: translateY(-3px);
        }

        /* ===== FOOTER ===== */
        footer {
            background-color: var(--color-dark);
            color: var(--color-white);
            padding: 3rem 2rem 1rem;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer-section h3 {
            color: var(--color-secondary);
            margin-bottom: 1rem;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            margin: 0.5rem 0;
        }

        .footer-section a {
            color: var(--color-light);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-section a:hover {
            color: var(--color-secondary);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--color-light);
        }

        .social-links {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin: 1rem 0;
        }

        .social-links a {
            width: 40px;
            height: 40px;
            background-color: var(--color-secondary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-white);
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            background-color: var(--color-accent);
            transform: translateY(-3px);
        }

        /* ===== MODAL CARRITO ===== */
        .cart-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            align-items: center;
            justify-content: flex-end;
        }

        .cart-modal.active {
            display: flex;
        }

        .cart-panel {
            background-color: var(--color-white);
            width: 100%;
            max-width: 400px;
            height: 100%;
            padding: 2rem;
            overflow-y: auto;
            animation: slideInRight 0.3s ease;
        }

        @keyframes slideInRight {
            from {
                transform: translateX(100%);
            }
            to {
                transform: translateX(0);
            }
        }

        .cart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid var(--color-light);
        }

        .cart-header h2 {
            color: var(--color-primary);
        }

        .close-cart {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--color-dark);
        }

        .cart-items {
            margin-bottom: 2rem;
        }

        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            border-bottom: 1px solid var(--color-light);
        }

        .cart-item-name {
            font-weight: 600;
            color: var(--color-primary);
        }

        .cart-item-price {
            color: var(--color-secondary);
            font-weight: 600;
        }

        .cart-total {
            display: flex;
            justify-content: space-between;
            font-size: 1.3rem;
            font-weight: 700;
            padding: 1rem 0;
            border-top: 2px solid var(--color-light);
            color: var(--color-primary);
            margin-bottom: 2rem;
        }

        .checkout-btn {
            width: 100%;
            padding: 1rem;
            background-color: var(--color-accent);
            color: var(--color-white);
            border: none;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .checkout-btn:hover {
            background-color: #92C9A5;
            transform: translateY(-3px);
        }

        /* ===== MODAL DETALLES PRODUCTO ===== */
        .product-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 2000;
            overflow-y: auto;
        }

        .product-modal.active {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }

        .product-detail-panel {
            background-color: var(--color-white);
            width: 100%;
            max-width: 600px;
            border-radius: 15px;
            overflow-y: auto;
            max-height: 90vh;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.4s ease;
        }

        .detail-header {
            background: linear-gradient(135deg, var(--color-secondary), var(--color-accent));
            color: var(--color-white);
            padding: 2rem;
            text-align: center;
            border-radius: 15px 15px 0 0;
            position: relative;
        }

        .detail-image {
            font-size: 4rem;
            margin-bottom: 1rem;
        }

        .detail-header h2 {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
        }

        .detail-category {
            font-size: 0.9rem;
            opacity: 0.9;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
        }

        .close-modal {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: var(--color-white);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .close-modal:hover {
            transform: rotate(90deg);
        }

        .detail-content {
            padding: 2rem;
        }

        .detail-section {
            margin-bottom: 2rem;
        }

        .detail-section h3 {
            color: var(--color-primary);
            margin-bottom: 1rem;
            font-size: 1.2rem;
            border-bottom: 2px solid var(--color-light);
            padding-bottom: 0.5rem;
        }

        .detail-section p {
            color: var(--color-dark);
            line-height: 1.8;
            margin-bottom: 0.5rem;
        }

        .detail-section ul {
            list-style: none;
            color: var(--color-dark);
        }

        .detail-section ul li {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
        }

        .detail-section ul li::before {
            content: '✓';
            color: var(--color-accent);
            font-weight: bold;
            position: absolute;
            left: 0;
        }

        .detail-info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .info-box {
            background-color: var(--color-light);
            padding: 1rem;
            border-radius: 8px;
            border-left: 4px solid var(--color-secondary);
        }

        .info-box-label {
            font-size: 0.85rem;
            color: var(--color-secondary);
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }

        .info-box-value {
            color: var(--color-primary);
            font-weight: 600;
            font-size: 1rem;
        }

        .detail-footer {
            padding: 1.5rem 2rem;
            background-color: var(--color-light);
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 0 0 15px 15px;
            gap: 1rem;
        }

        .detail-price {
            font-size: 2rem;
            font-weight: 700;
            color: var(--color-primary);
        }

        .detail-add-btn {
            flex: 1;
            padding: 1rem 2rem;
            background-color: var(--color-accent);
            color: var(--color-white);
            border: none;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .detail-add-btn:hover {
            background-color: #92C9A5;
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(168, 213, 186, 0.4);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.2rem;
            }

            .hero p {
                font-size: 1rem;
            }

            .nav-menu {
                display: none;
            }

            .about-container {
                grid-template-columns: 1fr;
            }

            .about-image {
                height: 300px;
            }

            .section-header h2 {
                font-size: 2rem;
            }

            .hero {
                padding: 3rem 1rem;
                min-height: 400px;
            }

            .cta h2 {
                font-size: 1.8rem;
            }

            .features {
                margin-top: -40px;
            }

            .cart-panel {
                max-width: 100%;
            }
        }
    </style>
</head>
<body>
    <!-- HEADER -->
    <header>
        <nav>
            <a href="#" class="logo">JABÓN</a>
            <ul class="nav-menu">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            <button class="btn-cart" id="cartBtn">
                🛒
                <span class="cart-count" id="cartCount">0</span>
            </button>
        </nav>
    </header>

    <!-- HERO SECTION -->
    <section class="hero" id="inicio">
        <div class="hero-content">
            <h1>Belleza Natural para tu Piel</h1>
            <p>Jabones artesanales elaborados con ingredientes 100% naturales y orgánicos. Cuidado de la piel de calidad premium.</p>
            <a href="#productos" class="btn-primary">Explorar Productos</a>
            <a href="#nosotros" class="btn-secondary">Conocer Más</a>
        </div>
    </section>

    <!-- CARACTERÍSTICAS -->
    <section class="features">
        <div class="feature-card">
            <div class="feature-icon">🌿</div>
            <h3>100% Natural</h3>
            <p>Ingredientes orgánicos sin químicos dañinos ni conservantes artificiales.</p>
        </div>
        <div class="feature-card">
            <div class="feature-icon">🧴</div>
            <h3>Artesanal</h3>
            <p>Elaborados a mano con técnicas tradicionales en pequeños lotes.</p>
        </div>
        <div class="feature-card">
            <div class="feature-icon">💚</div>
            <h3>Eco-Friendly</h3>
            <p>Empaques sostenibles y amigables con el medio ambiente.</p>
        </div>
        <div class="feature-card">
            <div class="feature-icon">✨</div>
            <h3>Resultados Visibles</h3>
            <p>Piel más suave, hidratada y radiante desde la primera semana.</p>
        </div>
    </section>

    <!-- PRODUCTOS -->
    <section class="products" id="productos">
        <div class="section-header">
            <h2>Nuestros Productos</h2>
            <p>Descubre nuestra colección exclusiva de jabones artesanales para todos los tipos de piel</p>
        </div>
        <div class="products-grid" id="productsGrid">
            <!-- Los productos se cargarán aquí con JavaScript -->
        </div>
    </section>

    <!-- ABOUT -->
    <section class="about" id="nosotros">
        <div class="about-container">
            <div class="about-image">🧼</div>
            <div class="about-content">
                <h2>Sobre Nosotros</h2>
                <p>Desde hace más de 10 años, nos apasiona crear jabones artesanales que cuiden la piel de forma natural. Cada barra es elaborada con amor y dedicación usando los mejores ingredientes orgánicos.</p>
                <p>Creemos en la belleza natural y sostenible. Por eso, todos nuestros productos son biodegradables, veganos y producidos de manera ética.</p>
                <ul class="about-list">
                    <li>Ingredientes 100% naturales certificados</li>
                    <li>Proceso de elaboración artesanal</li>
                    <li>Empaques eco-amigables</li>
                    <li>Envíos rápidos y seguros</li>
                    <li>Garantía de satisfacción</li>
                </ul>
                <a href="#productos" class="btn-primary">Comprar Ahora</a>
            </div>
        </div>
    </section>

    <!-- SECCIÓN EDUCATIVA -->
    <section class="education-section">
        <div class="section-header">
            <h2>¿Por Qué Elegir Jabones Artesanales?</h2>
            <p>Descubre los beneficios de cambiar a productos naturales para el cuidado de tu piel</p>
        </div>
        <div class="education-grid">
            <div class="education-card">
                <div class="education-icon">🌿</div>
                <h3>Ingredientes 100% Naturales</h3>
                <p>Nuestros jabones contienen únicamente ingredientes orgánicos certificados, sin químicos sintéticos, parabenos ni sulfatos que dañan tu piel a largo plazo.</p>
            </div>
            <div class="education-card">
                <div class="education-icon">💧</div>
                <h3>Mantienen la Hidratación Natural</h3>
                <p>A diferencia de los jabones comerciales, nuestras fórmulas preservan la humedad natural de tu piel, dejándola hidratada y no reseca después del lavado.</p>
            </div>
            <div class="education-card">
                <div class="education-icon">🔬</div>
                <h3>Formulación Científica</h3>
                <p>Cada barra es formulada por expertos en dermatología natural, combinando ingredientes con beneficios probados para diferentes tipos de piel.</p>
            </div>
            <div class="education-card">
                <div class="education-icon">♻️</div>
                <h3>Eco-Amigables</h3>
                <p>Empaques biodegradables y compostables. Cuando termines la barra, nuestro empaque se degrada naturalmente sin contaminación ambiental.</p>
            </div>
            <div class="education-card">
                <div class="education-icon">💰</div>
                <h3>Durabilidad Premium</h3>
                <p>Una barra de jabón artesanal dura 2-3 veces más que un jabón comercial. Menos desperdicio, más valor por tu dinero.</p>
            </div>
            <div class="education-card">
                <div class="education-icon">✨</div>
                <h3>Resultados Visibles</h3>
                <p>Notarás cambios en tu piel desde la primera semana: menos irritación, mejor textura, mayor luminosidad y un brillo natural incomparable.</p>
            </div>
        </div>
    </section>

    <!-- TESTIMONIOS -->
    <section class="testimonials" id="testimonios">
        <div class="section-header">
            <h2>Lo Que Dicen Nuestros Clientes</h2>
            <p>Testimonios reales de personas que han transformado su rutina de cuidado de la piel</p>
        </div>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p class="testimonial-text">"Usé el jabón de Leche de Cabra por mi dermatitis y en 2 semanas la irritación desapareció. Increíble. Es suave, no reseca y definitivamente compraré más para mi familia."</p>
                <p class="testimonial-author">- María García, 38 años</p>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p class="testimonial-text">"Tengo piel grasa y propensa al acné. El jabón de Carbón Activado es un cambio de juego. Mis poros se ven más pequeños y no tengo brotes. Finalmente un producto que funciona!"</p>
                <p class="testimonial-author">- Juan López, 25 años</p>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p class="testimonial-text">"Usé el jabón de Rosa Silvestre y noté menos arrugas en 4 semanas. La piel se ve más firme y radiante. Es una inversión en belleza que vale cada peso."</p>
                <p class="testimonial-author">- Sofia Rodríguez, 52 años</p>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p class="testimonial-text">"El aroma del jabón de Lavanda es terapéutico. Uso uno en la ducha nocturna y duermo mejor. Mi piel está suave como nunca. Recomendado 100% a mis amigas."</p>
                <p class="testimonial-author">- Laura Mendez, 31 años</p>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p class="testimonial-text">"Tengo piel sensible y había probado casi todo. El jabón de Miel y Avena es lo mejor que encontré. Suave, hidratante y sin irritación. Ya voy en mi tercera barra."</p>
                <p class="testimonial-author">- Carlos Morales, 45 años</p>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p class="testimonial-text">"El jabón de Cúrcuma cambió mi tez. Tenía manchas oscuras y después de un mes se notó mucha diferencia. La piel se ve más uniforme y brillante. Excelente producto."</p>
                <p class="testimonial-author">- Daniela Costa, 36 años</p>
            </div>
        </div>
    </section>

    <!-- SECCIÓN FAQ -->
    <section class="faq-section">
        <div class="section-header">
            <h2>Preguntas Frecuentes</h2>
            <p>Resolvemos tus dudas sobre nuestros productos artesanales</p>
        </div>
        <div class="faq-container">
            <div class="faq-item active">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    <span>¿Cuál es la diferencia entre jabón artesanal y comercial?</span>
                    <span class="faq-icon">▼</span>
                </div>
                <div class="faq-answer">
                    <p>El jabón artesanal se elabora a mano en pequeños lotes, preservando los ingredientes naturales sin aplicar calor extremo. Los jabones comerciales industrializados contienen químicos sintéticos, sulfatos y conservantes que pueden irritar la piel. Nuestro jabón es más suave, duradero y efectivo.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    <span>¿Cuánto tiempo dura una barra de jabón?</span>
                    <span class="faq-icon">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Una barra de 100g dura aproximadamente 3-4 semanas de uso diario (2-3 veces al día). Gracias a su formulación artesanal, dura 2-3 veces más que los jabones comerciales. Si lo guardas en un lugar seco, su vida útil se extiende aún más.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    <span>¿Puedo usar estos jabones en mi cara?</span>
                    <span class="faq-icon">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Sí, la mayoría de nuestros jabones pueden usarse en cara y cuerpo. Para pieles extra sensibles o faciales, recomendamos específicamente nuestras líneas "Delicado" como el de Leche de Cabra y Miel, o el de Té Verde. Siempre humedece bien tu cara antes de aplicar.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    <span>¿Son seguros para pieles sensibles?</span>
                    <span class="faq-icon">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Completamente seguros. De hecho, nuestros jabones artesanales son ideales para pieles sensibles porque no contienen químicos irritantes. Para pieles con condiciones como eczema o dermatitis, recomendamos específicamente el jabón de Leche de Cabra y Miel que tiene propiedades curativas.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    <span>¿Necesito hacer pedido en cantidad mínima?</span>
                    <span class="faq-icon">▼</span>
                </div>
                <div class="faq-answer">
                    <p>No hay cantidad mínima. Puedes pedir desde 1 barra de jabón. Nuestro objetivo es que todos puedan probar nuestros productos. Para pedidos grandes (10+ unidades), ofrecemos descuentos especiales.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    <span>¿Cuál es el tiempo de entrega?</span>
                    <span class="faq-icon">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Los pedidos se preparan en 1-2 días hábiles. El envío dependerá de tu ubicación: dentro de la ciudad generalmente 3-5 días, a nivel nacional 5-10 días hábiles. Ofrecemos opción de envío express si lo requieres.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    <span>¿Puedo devolver un producto si no me gusta?</span>
                    <span class="faq-icon">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Sí. Ofrecemos garantía de satisfacción de 30 días. Si no estás satisfecho con tu compra, puedes devolver el producto y te reembolsaremos el 100%. Tu satisfacción es nuestra prioridad.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question" onclick="toggleFAQ(this)">
                    <span>¿Los productos son veganos?</span>
                    <span class="faq-icon">▼</span>
                </div>
                <div class="faq-answer">
                    <p>La mayoría de nuestros productos son 100% veganos. La excepción es nuestro jabón de Leche de Cabra y Miel que contiene leche de cabra por sus propiedades dermatológicas únicas. Si buscas opciones veganas, te recomendamos nuestras demás líneas.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA - NEWSLETTER -->
    <section class="cta" id="newsletter">
        <h2>Suscríbete a Nuestro Newsletter</h2>
        <p>Recibe descuentos especiales, tips de belleza y nuevos productos antes que nadie</p>
        <div class="newsletter">
            <input type="email" id="newsletterEmail" placeholder="Tu correo electrónico" required>
            <button onclick="subscribeNewsletter()">Suscribirse</button>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Sobre JABÓN</h3>
                <p>Belleza natural artesanal para el cuidado consciente de tu piel.</p>
                <div class="social-links">
                    <a href="#" title="Facebook">f</a>
                    <a href="#" title="Instagram">📷</a>
                    <a href="#" title="Twitter">𝕏</a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Links Rápidos</h3>
                <ul>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#nosotros">Sobre Nosotros</a></li>
                    <li><a href="#testimonios">Testimonios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Información</h3>
                <ul>
                    <li><a href="#">Política de Privacidad</a></li>
                    <li><a href="#">Términos de Servicio</a></li>
                    <li><a href="#">Devoluciones</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contacto</h3>
                <ul>
                    <li>📧 info@jabones.com</li>
                    <li>📞 +1 (555) 123-4567</li>
                    <li>📍 Calle Principal 123, Ciudad</li>
                    <li>🕐 Lun-Vie: 9AM - 6PM</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Jabones Artesanales. Todos los derechos reservados. Hecho con 💚</p>
        </div>
    </footer>

    <!-- MODAL DETALLES PRODUCTO -->
    <div class="product-modal" id="productModal">
        <div class="product-detail-panel">
            <div class="detail-header">
                <button class="close-modal" onclick="closeProductModal()">&times;</button>
                <div class="detail-image" id="detailImage">🧼</div>
                <h2 id="detailName">Nombre del Producto</h2>
                <div class="detail-category" id="detailCategory">Categoría</div>
            </div>
            
            <div class="detail-content">
                <div class="detail-section">
                    <h3>Descripción</h3>
                    <p id="detailDescription">Descripción detallada del producto...</p>
                </div>

                <div class="detail-section">
                    <h3>Ingredientes Principales</h3>
                    <p id="detailIngredients">Ingredientes...</p>
                </div>

                <div class="detail-section">
                    <h3>Beneficios</h3>
                    <ul id="detailBenefits">
                        <li>Beneficio 1</li>
                    </ul>
                </div>

                <div class="detail-section">
                    <h3>Información Técnica</h3>
                    <div class="detail-info-grid">
                        <div class="info-box">
                            <div class="info-box-label">Tipo de Piel</div>
                            <div class="info-box-value" id="detailSkinType">Todo tipo</div>
                        </div>
                        <div class="info-box">
                            <div class="info-box-label">Tamaño</div>
                            <div class="info-box-value" id="detailSize">100g</div>
                        </div>
                    </div>
                </div>

                <div class="detail-section">
                    <h3>Modo de Uso</h3>
                    <p id="detailUsage">Instrucciones de uso...</p>
                </div>
            </div>

            <div class="detail-footer">
                <div class="detail-price" id="detailPrice">$0.00</div>
                <button class="detail-add-btn" id="detailAddBtn">Agregar al Carrito</button>
            </div>
        </div>
    </div>

    <!-- CARRITO MODAL -->
    <div class="cart-modal" id="cartModal">
        <div class="cart-panel">
            <div class="cart-header">
                <h2>Mi Carrito</h2>
                <button class="close-cart" id="closeCart">&times;</button>
            </div>
            <div class="cart-items" id="cartItems">
                <!-- Items del carrito se agregan aquí -->
            </div>
            <div class="cart-total">
                <span>Total:</span>
                <span id="cartTotal">$0.00</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">Proceder al Pago</button>
        </div>
    </div>

    <script>
        // Datos de productos
        const products = [
            {
                id: 1,
                name: 'Jabón de Lavanda Premium',
                category: 'Relajación',
                description: 'Relájate con el aroma calming de lavanda pura. Perfecto para después de un día estresante.',
                longDescription: 'Nuestro jabón de lavanda artesanal está elaborado con aceite esencial puro de lavanda francesa, reconocido mundialmente por sus propiedades relajantes. Ideal para aliviar el estrés y la ansiedad. Deja la piel suave, hidratada y con un aroma duradero.',
                ingredients: 'Aceite de coco, aceite de oliva, manteca de cacao, aceite esencial de lavanda francesa, vitamina E',
                benefits: ['Reduce el estrés', 'Relaja el cuerpo', 'Hidrata profundamente', 'Aroma duradero'],
                skinType: 'Todo tipo de piel',
                usage: '2-3 veces al día. Aplicar con suavidad sobre la piel mojada, hacer espuma y enjuagar',
                size: '100g',
                price: 12.99,
                rating: 5
            },
            {
                id: 2,
                name: 'Jabón de Rosa Silvestre Anti-Edad',
                category: 'Antiedad',
                description: 'Rico en antioxidantes, retrasa el envejecimiento y regenera la piel.',
                longDescription: 'Formulado con extracto de rosa silvestre y ricos antioxidantes naturales. Este jabón ayuda a reducir las líneas de expresión, mejora la elasticidad de la piel y le proporciona un resplandor juvenil. Perfecto para pieles maduras que buscan rejuvenecimiento natural.',
                ingredients: 'Aceite de jojoba, rosa silvestre orgánica, vitamina C natural, aceite de argán, retinol botánico',
                benefits: ['Reduce arrugas', 'Aumenta elasticidad', 'Promueve regeneración celular', 'Efecto lifting natural'],
                skinType: 'Piel madura y sensible',
                usage: '1-2 veces al día. Masajear suavemente en movimientos ascendentes',
                size: '100g',
                price: 14.99,
                rating: 5
            },
            {
                id: 3,
                name: 'Jabón de Miel y Avena Nutritivo',
                category: 'Nutritivo',
                description: 'Ideal para pieles secas. Nutre e hidrata profundamente dejando la piel suave.',
                longDescription: 'La combinación de miel pura y avena coloidal crea un jabón excepcional para pieles secas. La miel es un humectante natural que retiene la humedad, mientras que la avena calma la irritación y proporciona una exfoliación suave. Tu piel quedará increíblemente suave y nutrida.',
                ingredients: 'Miel cruda ecológica, avena coloidal, aceite de almendras, manteca de karité, glicerina vegetal',
                benefits: ['Hidratación profunda', 'Calmante y suavizante', 'Exfolia sin dañar', 'Ideal para pieles sensibles'],
                skinType: 'Piel seca y sensible',
                usage: '1-2 veces al día. Ideal para ducha matutina y relajante antes de dormir',
                size: '100g',
                price: 13.99,
                rating: 5
            },
            {
                id: 4,
                name: 'Jabón de Carbón Activado Detox',
                category: 'Purificante',
                description: 'Limpia profundamente eliminando impurezas. Perfecto para pieles grasas.',
                longDescription: 'Especialmente formulado para pieles propensas al acné y poros dilatados. El carbón activado atrapa las impurezas y toxinas, mientras que el aceite de árbol de té previene el acné. Te verás con una piel más clara y luminosa desde la primera semana.',
                ingredients: 'Carbón activado, aceite de árbol de té, aloe vera, arcilla bentonita, aceite de coco virgen',
                benefits: ['Limpieza profunda', 'Elimina impurezas', 'Previene acné', 'Reduce poros dilatados', 'Detox natural'],
                skinType: 'Piel grasa y propensa al acné',
                usage: '2-3 veces al día. Ideal como limpiador diario para el rostro y cuerpo',
                size: '100g',
                price: 13.99,
                rating: 5
            },
            {
                id: 5,
                name: 'Jabón de Té Verde Antioxidante',
                category: 'Antioxidante',
                description: 'Protege la piel con poderosos antioxidantes. Mantiene la piel joven y radiante.',
                longDescription: 'El té verde es famoso por sus propiedades antioxidantes excepcionales. Este jabón protege tu piel del envejecimiento prematuro, reduce la inflamación y proporciona un efecto anti-acné. Descubre el secreto de la belleza asiática con nuestro jabón de té verde puro.',
                ingredients: 'Té verde orgánico, extracto de camomila, aceite de semilla de uva, aloe vera, vitamina E',
                benefits: ['Protección antioxidante', 'Reduce inflamación', 'Previene envejecimiento', 'Efecto calmante'],
                skinType: 'Todo tipo de piel',
                usage: '2-3 veces al día. Perfecto para pieles sensibles e inflamadas',
                size: '100g',
                price: 12.99,
                rating: 5
            },
            {
                id: 6,
                name: 'Jabón de Café y Vainilla Energizante',
                category: 'Energizante',
                description: 'Despierta tus sentidos con este jabón energizante. Exfolia y tonifica suavemente.',
                longDescription: 'Ideal para tu rutina matutina. El café natural exfolia suavemente eliminando células muertas, mejora la circulación y reduce la apariencia de celulitis. La vainilla aporta un aroma cálido y envolvente. Perfecta combinación para empezar el día con energía.',
                ingredients: 'Polvo de café orgánico, extracto de vainilla, aceite de cacao, manteca de cacao, cafeína natural',
                benefits: ['Exfoliación suave', 'Mejora circulación', 'Tonifica la piel', 'Aroma energizante'],
                skinType: 'Todo tipo de piel',
                usage: '1-2 veces al día, preferentemente por la mañana. Masajear suavemente en movimientos circulares',
                size: '100g',
                price: 13.99,
                rating: 5
            },
            {
                id: 7,
                name: 'Jabón de Cúrcuma Brightening',
                category: 'Iluminador',
                description: 'Ilumina tu piel con este jabón antiinflamatorio premium.',
                longDescription: 'La cúrcuma es un tesoro de la medicina ayurvédica conocido por sus increíbles propiedades antiinflamatorias y aclarantes. Este jabón reduce manchas oscuras, uniformiza el tono de piel y proporciona un brillo natural. Perfecto después de una noche de descanso.',
                ingredients: 'Polvo de cúrcuma orgánica, leche de coco, miel cruda, aceite de neem, arcilla amarilla',
                benefits: ['Ilumina y aclara', 'Reduce manchas', 'Antiinflamatorio', 'Uniformiza tono'],
                skinType: 'Piel oscura y con manchas',
                usage: '1-2 veces al día. Dejar actuar 2-3 minutos para mejores resultados',
                size: '100g',
                price: 14.99,
                rating: 5
            },
            {
                id: 8,
                name: 'Jabón de Rosas y Pétalos Romántico',
                category: 'Lujo',
                description: 'Lujo y romanticismo en cada barra. Aroma floral cautivador.',
                longDescription: 'Elaborado con pétalos de rosa real y agua de rosas destilada. Este jabón es pura elegancia. Suaviza, hidrata y perfuma tu piel con un aroma floral sofisticado que dura todo el día. Ideal como regalo especial o para tu autocuidado personal.',
                ingredients: 'Pétalos de rosa real, agua de rosas destilada, aceite de rosa mosqueta, manteca de cacao, glicerina',
                benefits: ['Aroma floral duradero', 'Hidratación premium', 'Suavidad extrema', 'Sensación de lujo'],
                skinType: 'Piel sensible y madura',
                usage: '1-2 veces al día. Disfruta del ritual de belleza',
                size: '100g',
                price: 15.99,
                rating: 5
            },
            {
                id: 9,
                name: 'Jabón de Coco y Lima Refrescante',
                category: 'Refrescante',
                description: 'Refréscate con este jabón tropical vigorizante.',
                longDescription: 'Siente la brisa tropical en tu piel. El aceite de coco virgen nutre profundamente mientras que la lima proporciona un aroma refrescante y vigorizante. Perfecto para después del ejercicio o en días calurosos. Deja tu piel suave, limpia y con energía.',
                ingredients: 'Aceite de coco virgen, zumo de lima, aceite de limón, aloe vera, sal marina',
                benefits: ['Refresca y vigoriza', 'Elimina olores corporales', 'Hidrata profundamente', 'Aroma tropical'],
                skinType: 'Todo tipo de piel',
                usage: '2-3 veces al día. Especialmente después del ejercicio',
                size: '100g',
                price: 12.99,
                rating: 5
            },
            {
                id: 10,
                name: 'Jabón de Leche de Cabra y Miel Delicado',
                category: 'Delicado',
                description: 'Suavidad extrema para pieles sensibles e irritadas.',
                longDescription: 'La leche de cabra es famosa por sus propiedades regenerativas naturales. Este jabón es ideal para eczema, dermatitis y pieles ultra sensibles. Combinada con miel pura, crea un producto que calma, hidrata y rejuvenece tu piel delicadamente.',
                ingredients: 'Leche de cabra cruda, miel pura, avena coloidal, aloe vera, aceite de almendras',
                benefits: ['Calma irritación', 'Regenera piel dañada', 'Ultra suave', 'Repara barrera cutánea'],
                skinType: 'Piel sensible, atópica y irritada',
                usage: '1-2 veces al día. Especialmente indicado para dermatitis y eczema',
                size: '100g',
                price: 14.99,
                rating: 5
            },
            {
                id: 11,
                name: 'Jabón de Aceite de Marula Premium',
                category: 'Lujo',
                description: 'Lujo africano: el mejor aceite para piel madura.',
                longDescription: 'El aceite de marula es uno de los más valiosos de África. Rico en antioxidantes y ácidos grasos esenciales, este jabón nutre intensamente, reduce arrugas y proporciona un brillo juvenil incomparable. Tu piel se verá radiante, suave y rejuvenecida.',
                ingredients: 'Aceite de marula orgánico, vitamina C natural, manteca de cacao, aloe vera, argán',
                benefits: ['Nutrición intensiva', 'Reduce arrugas profundas', 'Brillo juventud', 'Regeneración celular'],
                skinType: 'Piel madura y muy seca',
                usage: '1-2 veces al día. Aplicar con suavidad para máxima absorción',
                size: '100g',
                price: 16.99,
                rating: 5
            },
            {
                id: 12,
                name: 'Jabón de Menta y Eucalipto Revigorante',
                category: 'Revigorante',
                description: 'Despierta tu piel con esta combinación refrescante y energética.',
                longDescription: 'La combinación de menta y eucalipto crea un jabón revigorante perfecto para la mañana. Estimula la circulación, abre los poros, limpia profundamente y proporciona una sensación de frescura duradera. Tu piel se sentirá viva y renovada.',
                ingredients: 'Aceite esencial de menta pura, eucalipto, té verde, carbón activado, aloe vera',
                benefits: ['Estimula circulación', 'Refresca profundamente', 'Abre poros', 'Energía instantánea'],
                skinType: 'Todo tipo de piel',
                usage: '2-3 veces al día. Ideal para mañanas cansadas',
                size: '100g',
                price: 13.99,
                rating: 5
            }
        ];

        // Carrito
        let cart = [];

        // Cargar productos
        function loadProducts() {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = products.map(product => `
                <div class="product-card" onclick="showProductDetails(${product.id})">
                    <div class="product-image">🧼</div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <div class="product-name">${product.name}</div>
                        <div class="product-description">${product.description}</div>
                        <div style="margin: 0.7rem 0; font-size: 0.85rem; color: #A8D5BA; font-weight: 600;">
                            📋 Ver detalles
                        </div>
                        <div class="product-rating">${'⭐'.repeat(product.rating)}</div>
                        <div class="product-price">
                            <span class="price">$${product.price.toFixed(2)}</span>
                            <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Agregar</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Mostrar detalles del producto
        function showProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            const modal = document.getElementById('productModal');
            
            document.getElementById('detailImage').textContent = '🧼';
            document.getElementById('detailName').textContent = product.name;
            document.getElementById('detailCategory').textContent = product.category;
            document.getElementById('detailDescription').textContent = product.longDescription;
            document.getElementById('detailIngredients').innerHTML = product.ingredients;
            document.getElementById('detailBenefits').innerHTML = product.benefits
                .map(b => `<li>✓ ${b}</li>`).join('');
            document.getElementById('detailSkinType').textContent = product.skinType;
            document.getElementById('detailUsage').textContent = product.usage;
            document.getElementById('detailSize').textContent = product.size;
            document.getElementById('detailPrice').textContent = `$${product.price.toFixed(2)}`;
            document.getElementById('detailAddBtn').onclick = () => {
                addToCart(product.id);
                modal.classList.remove('active');
            };
            
            modal.classList.add('active');
        }

        // Cerrar modal de detalles
        function closeProductModal() {
            document.getElementById('productModal').classList.remove('active');
        }

        // Toggle FAQ
        function toggleFAQ(element) {
            const faqItem = element.parentElement;
            
            // Cerrar otros elementos
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle actual
            faqItem.classList.toggle('active');
        }

        // Agregar al carrito
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCart();
            showNotification('Producto agregado al carrito!');
        }

        // Actualizar carrito
        function updateCart() {
            document.getElementById('cartCount').textContent = cart.length;
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; color: #8B7355; padding: 2rem;">Tu carrito está vacío</p>';
                cartTotal.textContent = '$0.00';
                return;
            }
            
            let total = 0;
            cartItems.innerHTML = cart.map(item => {
                const subtotal = item.price * item.quantity;
                total += subtotal;
                return `
                    <div class="cart-item">
                        <div>
                            <div class="cart-item-name">${item.name}</div>
                            <small>Cantidad: ${item.quantity}</small>
                        </div>
                        <div class="cart-item-price">$${subtotal.toFixed(2)}</div>
                    </div>
                `;
            }).join('');
            
            cartTotal.textContent = '$' + total.toFixed(2);
        }

        // Mostrar notificación
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                background-color: #A8D5BA;
                color: white;
                padding: 1rem 2rem;
                border-radius: 50px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                animation: slideUp 0.3s ease;
                z-index: 999;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Carrito modal
        document.getElementById('cartBtn').addEventListener('click', () => {
            document.getElementById('cartModal').classList.add('active');
        });

        document.getElementById('closeCart').addEventListener('click', () => {
            document.getElementById('cartModal').classList.remove('active');
        });

        document.getElementById('cartModal').addEventListener('click', (e) => {
            if (e.target.id === 'cartModal') {
                document.getElementById('cartModal').classList.remove('active');
            }
        });

        // Product modal - Cerrar al hacer click fuera
        document.getElementById('productModal').addEventListener('click', (e) => {
            if (e.target.id === 'productModal') {
                closeProductModal();
            }
        });

        // Newsletter
        function subscribeNewsletter() {
            const email = document.getElementById('newsletterEmail').value;
            if (email) {
                showNotification('¡Gracias por suscribirse! Revisa tu correo.');
                document.getElementById('newsletterEmail').value = '';
            }
        }

        // Checkout
        function checkout() {
            if (cart.length === 0) {
                showNotification('Tu carrito está vacío');
                return;
            }
            showNotification('Redirigiendo a pago...');
            setTimeout(() => {
                alert('Sistema de pago integrado aquí.\n\nTotal: $' + 
                    cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2));
            }, 1000);
        }

        // Inicializar
        document.addEventListener('DOMContentLoaded', loadProducts);
    </script>
</body>
</html>
```

---

## Cómo Usar Este Archivo

1. **Crea un archivo HTML** (por ejemplo: `index.html`)
2. **Copia todo el código** entre las etiquetas `<html>` y `</html>` 
3. **Abre el archivo en tu navegador**

---

## Características Incluidas

✅ **Diseño Responsivo** - Se adapta a todos los dispositivos (móvil, tablet, desktop)  
✅ **Navegación Sticky** - Header fijo que acompaña el scroll  
✅ **Animaciones Suaves** - Transiciones modernas y fluidas  
✅ **Carrito Funcional** - Sistema de carrito completamente operativo  
✅ **Productos Dinámicos** - Los productos se cargan desde JavaScript  
✅ **Suscripción Newsletter** - Captura de emails  
✅ **Testimonios** - Sección de reseñas de clientes  
✅ **Secciones Optimizadas** - Hero, Características, Productos, Sobre Nosotros, etc.  
✅ **Paleta de Colores Natural** - Colores tierra que reflejan la naturaleza de los productos  
✅ **Accesibilidad** - Estructura semántica HTML5

---

## Personalización

### Cambiar Colores
Edita las variables CSS en `:root`:
```css
:root {
    --color-primary: #8B7355;      /* Marrón principal */
    --color-secondary: #D4A574;    /* Dorado/Beige */
    --color-accent: #A8D5BA;       /* Verde suave */
    --color-light: #F5F1E8;        /* Crema */
    --color-dark: #3E3E3E;         /* Gris oscuro */
}
```

### Agregar Más Productos
Agrega objetos al array `products`:
```javascript
{
    id: 7,
    name: 'Tu Nuevo Jabón',
    category: 'Categoría',
    description: 'Descripción aquí',
    price: 12.99,
    rating: 5
}
```

### Integrar Pagos Reales
En la función `checkout()`, integra un procesador de pagos como **Stripe**, **PayPal** o **MercadoPago**.

---

## Secciones del Sitio

| Sección | Descripción |
|---------|-------------|
| **Header** | Navegación con logo y carrito |
| **Hero** | Banner principal con CTA |
| **Features** | 4 características destacadas |
| **Productos** | Grid de 6 productos artesanales |
| **Sobre Nosotros** | Historia y valores de la marca |
| **Testimonios** | Reseñas de clientes satisfechos |
| **Newsletter** | Suscripción para email marketing |
| **Footer** | Links, contacto y redes sociales |

---

## Mejoras Futuras

- Integración de base de datos para productos dinámicos
- Sistema de filtrado y búsqueda de productos
- Integración de pago con Stripe/PayPal
- Blog de tips de belleza
- Sistema de reseñas verificadas
- Chat en vivo para soporte
- Galería de imágenes de productos
- Envío automatizado de confirmaciones
