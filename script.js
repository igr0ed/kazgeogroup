"use strict"

//faq

const faqItems = document.querySelectorAll(".question__item");

faqItems.forEach(function (item) {
    const answer = item.querySelector(".question__item_answer");

    item.addEventListener("click", function () {
        answer.classList.toggle("show");
    });
});

//WhatsAll

function redirectToWhatsApp() {
    let phoneNumber = '+77773284444'; 
    var whatsappLink = 'https://wa.me/' + phoneNumber;
    window.location.href = whatsappLink;
}

//Instagram

function redirectToInstagram(){
    window.location.href = 'https://www.instagram.com/';
}

// Language

document.addEventListener('DOMContentLoaded', function () {
    const translations = {
        'rus': {
            'header': 'Главная',
            'description': 'Описание',
            'partners': 'Партнеры',
            'process': 'Процесс',
            'faq': 'Вопросы',
            'contacts': 'Контакты',
            'headerMainText': 'Шелковый путь современности: Грузия - Центральная Азия в объятиях грузоперевозок',
            'descriptionText1': 'Наша компания управляет двумя контейнерными терминалами и гордится своим высококвалифицированным персоналом.Мы гарантируем доставку грузов любой сложности в кратчайшие сроки и по конкурентным ценам. Профессионализм и стремление к лучшему сервису для наших клиентов — наш главный приоритет.',
            'descriptionText2': 'Международные перевозки требуют уникального подхода к выбору транспорта и разработке маршрута. Мы тщательно подбираем оптимальный вид транспорта — морской, железнодорожный или автомобильный — в зависимости от местоположения отправителя и получателя, а также сроков доставки.',
            'descriptionText3': 'При разработке маршрутов для автомобильных перевозок наши логисты учитывают все детали: пропускные способности дорог, грузоподъёмность и пропускную способность мостов и тоннелей. Мы тщательно согласовываем маршрут и подготавливаем все необходимые документы, обеспечивая бесперебойную и своевременную доставку.',
            'partnersText': 'Наши Партнеры',
            'processText': 'Как сделать заказ',
            'processItem1': 'Отправьте запрос',
            'processItemText1': 'Свяжитесь с нами по телефону, указав детали вашего груза и маршрута.',
            'processItem2': 'Получите предложение',
            'processItemText2': 'Мы быстро обработаем ваш запрос и отправим вам индивидуальное предложение с расчетом стоимости и сроков доставки.',
            'processItem3': 'Подтвердите заказ',
            'processItemText3': 'Подтвердите заказ удобным для вас способом, и мы начнём подготовку к перевозке.',
            'processItem4': 'Доставка и получение',
            'processItemText4': 'Наши специалисты обеспечат безопасную и своевременную доставку груза до указанного адреса.Вы получите груз в целости и сохранности.',
            'questionText': 'Часто задаваемые вопросы',
            'questionItemText1': 'Как я могу узнать стоимость доставки моего груза?',
            'questionItemAnswer1': 'Стоимость доставки рассчитывается на основе нескольких факторов, включая вес и размеры груза, расстояние перевозки, выбранный вид транспорта и дополнительные услуги.Вы можете отправить запрос через нашу форму на сайте или связаться снами по телефону, чтобы получить точное предложение.',
            'questionItemText2': 'Какие виды грузов вы перевозите?',
            'questionItemAnswer2': 'Мы перевозим широкий спектр грузов, включая стандартные, негабаритные, опасные и ценные грузы. Если у вас есть специфические требования к перевозке, пожалуйста, сообщите нам об этом при отправке запроса.',
            'questionItemText3': 'Как я могу отслеживать статус моей доставки?',
            'questionItemAnswer3': 'Вы можете отслеживать статус вашей доставки в режиме реального времени через наш онлайн-сервис. После подтверждения заказа вам будет предоставлен трек- номер и доступ к системе отслеживания на нашем сайте.',
            'questionItemText4': 'Что делать, если мой груз повреждён или потерян?',
            'questionItemAnswer4': 'В случае повреждения или потери груза, пожалуйста, свяжитесь с нами как можно скорее. Мы начнем расследование и поможем вам подать претензию для возмещения ущерба.Наша компания застрахована и всегда готова решить подобные проблемы оперативно.',
            'questionItemText5': 'Как долго занимает доставка груза?',
            'questionItemAnswer5': 'Время доставки зависит от расстояния и выбранного вида транспорта. При оформлении заказа мы предоставим вам точное время доставки.В среднем, внутри страны доставка занимает от 1 до 7 дней, международные перевозки могут занять больше времени в зависимости от конкретного маршрута.',
            'footerContactText': 'Контакты',
            'footerContactCity': 'Грузия, г.Поти',
        },

        'eng': {
            'header': 'Home',
            'description': 'Description',
            'partners': 'Partners',
            'process': 'Process',
            'faq': 'FAQ',
            'contacts': 'Contacts',
            'headerMainText': 'The Silk Road of Modernity: Georgia - Central Asia in the arms of cargo transportation',
            'descriptionText1': 'Our company operates two container terminals and is proud of its highly qualified staff. We guarantee the delivery of goods of any complexity in the shortest possible time and at competitive prices. Professionalism and commitment to the best service for our customers is our top priority.',
            'descriptionText2': 'International transportation requires a unique approach to the choice of transport and route development. We carefully select the optimal mode of transport — sea, rail or road — depending on the location of the sender and recipient, as well as the delivery time.',
            'descriptionText3': 'When developing routes for road transport, our logisticians take into account all the details: road capacity, load capacity and capacity of bridges and tunnels. We carefully coordinate the route and prepare all necessary documents, ensuring uninterrupted and timely delivery.',
            'partnersText': 'Our Partners',
            'processText': 'How to place an order',
            'processItem1': 'Send a request',
            'processItemText1': 'Contact us by phone, specifying the details of your cargo and route.',
            'processItem2': 'Get an offer',
            'processItemText2': 'We will process your request quickly and send you an individual offer with an estimate of the cost and delivery time.',
            'processItem3': 'Confirm the order',
            'processItemText3': 'Confirm the order in a convenient way for you, and we will start preparing for transportation.',
            'processItem4': 'Delivery and receipt',
            'processItemText4': 'Our specialists will ensure safe and timely delivery of the cargo to the specified address.You will receive the cargo safely.',
            'questionText': 'Frequently Asked Questions',
            'questionItemText1': 'How can I find out the shipping cost of my shipment?',
            'questionItemAnswer1': 'The cost of delivery is calculated based on several factors, including the weight and dimensions of the cargo, the distance of transportation, the selected mode of transport and additional services.You can send a request through our form on the website or contact us by phone to get an accurate offer.',
            'questionItemText2': 'What types of cargo do you transport?',
            'questionItemAnswer2': 'We transport a wide range of goods, including standard, oversized, dangerous and valuable goods. If you have specific requirements for transportation, please let us know when sending the request.',
            'questionItemText3': 'How can I track the status of my delivery?',
            'questionItemAnswer3': 'You can track the status of your delivery in real time through our online service. After confirming the order, you will be provided with a track number and access to the tracking system on our website.',
            'questionItemText4': 'What should I do if my cargo is damaged or lost?',
            'questionItemAnswer4': 'In case of damage or loss of cargo, please contact us as soon as possible. We will start an investigation and help you file a claim for damages.Our company is insured and is always ready to solve such problems promptly.',
            'questionItemText5': 'How long does it take to deliver the cargo?',
            'questionItemAnswer5': 'The delivery time depends on the distance and the chosen mode of transport. When placing an order, we will provide you with the exact delivery time.On average, domestic delivery takes from 1 to 7 days, international shipments may take longer depending on the specific route.',
            'footerContactText': 'Contacts',
            'footerContactCity': 'Georgia, Poti',
        }
    };

    function changeLanguage(language) {
        document.querySelectorAll('[data-lang]').forEach(function (element) {
            const key = element.getAttribute('data-lang');
            element.textContent = translations[language][key];
        });
        // Сохранение выбранного языка в localStorage
        localStorage.setItem('preferredLanguage', language);
    }

    // Проверка и установка языка при загрузке страницы
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    }

    document.querySelectorAll('.button-lang__text').forEach(function (button) {
        button.addEventListener('click', function () {
            const language = this.getAttribute('data-btn');
            changeLanguage(language);
        });
    });;
});

// Burger Menu

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuLinks = menu.querySelectorAll('a');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('show');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Закрыть меню при клике на ссылку
            burger.classList.remove('active');
            menu.classList.remove('show');
        });
    });
});


