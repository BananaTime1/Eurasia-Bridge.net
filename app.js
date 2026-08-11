/* ================= Eurasia Bridge — app.js ================= */

/* ---------- i18n ---------- */
const T = {
  en:{
    brand:"Eurasia Bridge",
    nav_home:"Home", nav_routes:"Routes", nav_calc:"Calculator", nav_contact:"Contact",
    cta_quote:"Get a route quote",
    /* home hero */
    h_eyebrow:"The Iran ⇄ Kazakhstan trade corridor",
    h_l1:"One partner,", h_l2:"from the supplier", h_l3:"to the shelf.",
    h_sub:"We run the whole transaction across the corridor — sourcing, transport, customs, payment, and barter — and put your goods on the shelf.",
    h_cta1:"Open the route calculator", h_cta2:"Explore the routes",
    st1n:"3", st1l:"routes",
    st2n:"1 day", st2l:"to a quote",
    st3n:"1", st3l:"point of accountability",
    scroll:"Scroll",
    strip1:"Pistachios",strip2:"Saffron",strip3:"Polymers",strip4:"Bitumen",strip5:"Grain",strip6:"Rolled metal",strip7:"Fertilisers",strip8:"Carpets",
    /* directions */
    dir_eyebrow:"01 — Two directions",
    dir_title:"Two directions, one infrastructure",
    dir_sub:"Everything flows one of two ways through the same corridor. When a clean cash channel is hard, we structure barter with priced parity.",
    dir1_h:"Iranian goods, north into the CIS", dir1_p:"Nine product groups into Kazakhstan and the wider CIS.",
    dir2_h:"Counter-shipments, south to Iran", dir2_p:"Matched to what the Iranian side actually demands.",
    g_pist:"Pistachios",g_saf:"Saffron",g_dates:"Dates",g_poly:"Polymers",g_bit:"Bitumen",g_carp:"Carpets",g_cosm:"Cosmetics",g_hh:"Household chemicals",
    g_grain:"Grain & pulses",g_oil:"Vegetable oils",g_metal:"Rolled metal",g_timber:"Timber",g_fert:"Fertilisers",g_equip:"Equipment",
    barter:"◆ Grain & chemicals — barter-eligible",
    /* routes teaser + explorer */
    rt_eyebrow:"02 — The corridor",
    rt_title:"Three routes. Choosing between them is the expertise.",
    rt_sub:"There isn't one way across — there are three. Switch between them to read each one's crossings, transit range, and what governs the timing.",
    rt_cta:"See all three routes",
    r_rail_t:"Eastern railway", r_ferry_t:"Caspian ferry", r_road_t:"Road via Turkmenistan",
    m_transit:"Transit", m_gov:"Governed by",
    r_rail_mode:"Rail · end-to-end", r_rail_name:"Eastern railway (KTI)",
    r_rail_desc:"Tehran → Gorgan → Incheh Borun → Bereket → Bolashak → Zhanaozen. The only end-to-end rail line, with a gauge break at the Iranian border where cargo is transshipped.",
    r_rail_gov:"Gauge break", r_rail_transit:"14–18 days",
    r_ferry_mode:"Water · short leg", r_ferry_name:"Caspian ferry",
    r_ferry_desc:"Aktau / Kuryk ⇄ Anzali / Amirabad. A short water crossing — the berth queue, not the crossing itself, is the risk.",
    r_ferry_gov:"Berth queue", r_ferry_transit:"6–12 days",
    r_road_mode:"Road · most flexible", r_road_name:"Road via Turkmenistan",
    r_road_desc:"Through Sarakhs, Bajgiran, or Lotfabad, then Uzbekistan into Kazakhstan. The most flexible option, most exposed to border hours.",
    r_road_gov:"Border hours", r_road_transit:"9–16 days",
    /* services */
    svc_eyebrow:"03 — Services",
    svc_title:"Take the whole deal, or a single stage.",
    svc_sub:"Six services along one line of accountability — in the order a deal actually moves.",
    s1:"Supplier sourcing & vetting",s1d:"Find and verify the counterparty on either side.",
    s2:"Multimodal logistics",s2d:"Rail, ferry, and road across the corridor.",
    s3:"Customs clearance, both sides",s3d:"EAEU certification and FTA origin paperwork.",
    s4:"Settlement & barter",s4d:"Payment schemes, or goods-for-goods with priced parity.",
    s5:"Market entry & shelf placement",s5d:"Onto the retail shelf, not just into a warehouse.",
    s6:"Legal support",s6d:"Contracts and compliance end to end.",
    /* calculator */
    calc_eyebrow:"Route calculator",
    calc_title:"Estimate your route and transit in seconds.",
    calc_sub:"Indicative only — the real number comes back within one business day once our team confirms the lane.",
    f_direction:"Direction of trade", d_iran:"Iran → CIS", d_cis:"CIS → Iran",
    f_cargo:"Cargo type",
    c_food:"Food", c_produce:"Fresh produce", c_poly:"Polymers & petro",
    c_bitumen:"Bitumen & petroleum", c_construction:"Construction materials", c_carpets:"Carpets & home",
    c_cosmetics:"Cosmetics & personal care", c_household:"Household chemicals",
    c_grain:"Grain & pulses", c_oils:"Vegetable oils", c_metal:"Rolled metal", c_timber:"Timber",
    c_fert:"Chemicals & fertilisers", c_equip:"Equipment",
    f_volume:"Volume", f_route:"Preferred route", rp_auto:"Recommend for me", rp_rail:"Rail", rp_ferry:"Ferry", rp_road:"Road",
    out_rec:"Recommended route", out_transit:"Estimated transit", days:"days",
    out_governed:"Governed by", out_border:"Border crossings", out_barter:"Barter", out_barter_yes:"Eligible — goods-for-goods", out_barter_no:"Cash settlement",
    calc_cta:"Turn this into a real quote", calc_disc:"Indicative estimate, not a binding offer. Transit excludes berth/border queues and seasonal disruption (Caspian storms, Nowruz, grain peak).",
    /* contact */
    ct_eyebrow:"Start an enquiry",
    ct_title:"A route quote within one business day.",
    ct_sub:"Send the endpoints, cargo, volume, and terms. You get one point of accountability instead of four separate conversations.",
    fld_company:"Company", fld_email:"Work email", fld_from:"Origin", fld_to:"Destination",
    fld_cargo:"Cargo & volume", fld_msg:"Anything else we should know",
    ct_send:"Send enquiry", ct_note:"We reply within one business day.",
    p1b:"1 business day", p1t:"An indicative route quote back in your inbox.",
    p2b:"1 partner, not four", p2t:"Sourcing, transport, customs and payment on one line.",
    p3b:"Fixed checkpoints", p3t:"Status you can track, correct customs codes, FTA preference where it applies.",
    /* footer */
    f_tag:"A trading & logistics operator on the Iran–Kazakhstan corridor. Based in Kazakhstan and Iran; Russian and English, with Persian for Iranian counterparties.",
    f_explore:"Explore", f_reach:"Reach us", f_rights:"© 2026 Eurasia Bridge", f_privacy:"Privacy", sub_h:"Corridor updates", sub_ph:"Your email", sub_btn:"Subscribe", sub_ok:"Thanks — you're on the list.", sub_bad:"Enter a valid email.", wa_msg:"Hello! I'm writing from the Eurasia Bridge website.", human_line:"You deal with a person, not a portal — message us and you're talking to us directly, usually within the hour.", cb_h:"Prefer a call?", cb_sub:"Leave your number and we'll call you back — usually within the hour.", cb_name:"Your name", cb_phone:"Phone / WhatsApp", cb_time:"Best time to call (optional)", cb_btn:"Request a callback", cb_ok:"Got it — we'll call you shortly.",
    cta_ready:"Ready to move cargo across the corridor?",
    cta_ready_sub:"Start with one stage or the whole deal. We'll come back with a route and a plan.",
    wz_step:"Step", wz_of:"of", wz_next:"Next", wz_back:"Back", wz_calc:"See the timeline", wz_restart:"Start over",
    q_dir:"Which way is the cargo moving?", q_cargo:"What are you shipping?", q_vol:"How much, and on what terms?", q_route:"Any route preference?",
    f_incoterm:"Incoterm", res_rec:"Recommended route", res_total:"Door-to-shelf", res_days:"days",
    tl1:"Pickup & consolidation", tl2:"Origin customs & docs", tl3:"Main transit", tl4:"Border / transshipment", tl5:"Destination customs (EAEU)", tl6:"Delivery & shelf placement",
    vb_title:"Cargo moving, every day.", vb_sub:"Rail, ferry and road — one operator accountable from the gate to the shelf.", vb_groups:"product groups", vb_eyebrow:"The corridor, in motion", g_produce:"Fresh produce", g_constr:"Construction", ct_ok_t:"Thanks — enquiry received.", ct_ok_p:"We'll come back with an indicative route within one business day.", net_eyebrow:"02 — The network", net_title:"Iran to every major CIS city.", net_sub:"Lanes from Iranian hubs — Tehran, Tabriz, Mashhad — to Moscow, Almaty, Astana, Tashkent, Baku and beyond.", nav_cargo:"Cargo", lst_eyebrow:"Cargo listings", lst_title:"Cargo on the corridor.", lst_sub:"Live lots offered both ways across the Iran–Kazakhstan corridor. Tap any to enquire.", lst_all:"All", lst_origin:"Origin", lst_moq:"Min. lot", lst_enquire:"Enquire", lst_add:"Anyone can add cargo — submissions appear here once our team approves them.", lst_empty:"No cargo listed yet — new lots appear here as they're added.",
    lst_add_btn:"Add cargo", ac_title:"Add cargo", ac_sub:"Submit a lot to the corridor catalogue. It appears on the site once our team approves it.",
    ac_dir:"Direction", ac_name:"Cargo name", ac_weight:"Weight / volume", ac_origin:"Origin", ac_moq:"Min. order (optional)", ac_barter:"Barter-eligible",
    ac_desc:"Description", ac_photos:"Photos", ac_photos_hint:"Up to 4 images.", ac_submit:"Submit for review", ac_sending:"Sending…",
    ac_ok:"Thanks — your cargo was submitted and will appear once approved.", ac_err:"Something went wrong. Please try again.", ac_pending:"Pending review", ac_close:"Close", news_eyebrow:"Corridor news", news_title:"Latest from the region.", news_sub:"Iran, Kazakhstan and the CIS — headlines, updated automatically.", news_more:"Read", news_empty:"Live news appears on the published site.",
    ab_eyebrow:"Who we are", ab_title:"One team standing behind every shipment.",
    ab_p1:"Eurasia Bridge is a trade and logistics operator built around one corridor — Iran to Kazakhstan and the wider CIS. We handle the parts that usually take four separate companies: finding and vetting the supplier, moving the cargo by rail, ferry or road, clearing customs on both sides, settling payment — including barter where a clean cash channel is hard — and placing your goods on the shelf.",
    ab_p2:"We are based in Kazakhstan and Iran and work in Russian, English and Persian, so both sides of the deal speak to one accountable partner instead of a chain of handoffs.",
    ab_pt1_h:"One point of accountability", ab_pt1_p:"From the supplier's gate to the retail shelf — one contract, one team.",
    ab_pt2_h:"Both-sides customs", ab_pt2_p:"EAEU certification and origin paperwork handled in-house, on both borders.",
    ab_pt3_h:"Corridor specialists", ab_pt3_p:"Rail, Caspian ferry and road — the route chosen for your cargo, not a default.",
  },
  ru:{
    brand:"Евразия Мост",
    nav_home:"Главная", nav_routes:"Маршруты", nav_calc:"Калькулятор", nav_contact:"Контакты",
    cta_quote:"Запросить расчёт",
    h_eyebrow:"Торговый коридор Иран ⇄ Казахстан",
    h_l1:"Один партнёр —", h_l2:"от поставщика", h_l3:"до полки.",
    h_sub:"Мы ведём всю сделку по коридору — поиск поставщика, транспорт, таможня, платежи и бартер — и ставим ваш товар на полку.",
    h_cta1:"Открыть калькулятор", h_cta2:"Смотреть маршруты",
    st1n:"3", st1l:"маршрута",
    st2n:"1 день", st2l:"до расчёта",
    st3n:"1", st3l:"точка ответственности",
    scroll:"Прокрутите",
    strip1:"Фисташки",strip2:"Шафран",strip3:"Полимеры",strip4:"Битум",strip5:"Зерно",strip6:"Прокат",strip7:"Удобрения",strip8:"Ковры",
    dir_eyebrow:"01 — Два направления",
    dir_title:"Два направления, одна инфраструктура",
    dir_sub:"Всё движется одним из двух путей по одному коридору. Когда прямой денежный расчёт затруднён, мы выстраиваем бартер с ценовым паритетом.",
    dir1_h:"Иранские товары — на север, в СНГ", dir1_p:"Девять товарных групп в Казахстан и страны СНГ.",
    dir2_h:"Встречные поставки — на юг, в Иран", dir2_p:"Под реальный спрос иранской стороны.",
    g_pist:"Фисташки",g_saf:"Шафран",g_dates:"Финики",g_poly:"Полимеры",g_bit:"Битум",g_carp:"Ковры",g_cosm:"Косметика",g_hh:"Бытовая химия",
    g_grain:"Зерно и бобовые",g_oil:"Растительные масла",g_metal:"Прокат",g_timber:"Лес",g_fert:"Удобрения",g_equip:"Оборудование",
    barter:"◆ Зерно и химия — по бартеру",
    rt_eyebrow:"02 — Коридор",
    rt_title:"Три маршрута. Выбор между ними — и есть экспертиза.",
    rt_sub:"Через коридор нет одного пути — их три. Переключайтесь между ними и смотрите переходы, сроки и что определяет тайминг.",
    rt_cta:"Смотреть все три маршрута",
    r_rail_t:"Железная дорога", r_ferry_t:"Каспийский паром", r_road_t:"Автодорога",
    m_transit:"Срок", m_gov:"Определяет",
    r_rail_mode:"Ж/д · сквозной", r_rail_name:"Восточная ж/д (КТЖ)",
    r_rail_desc:"Тегеран → Горган → Инче-Бурун → Берекет → Болашак → Жанаозен. Единственная сквозная линия, со сменой колеи на иранской границе и перегрузкой.",
    r_rail_gov:"Смена колеи", r_rail_transit:"14–18 дней",
    r_ferry_mode:"Вода · короткое плечо", r_ferry_name:"Каспийский паром",
    r_ferry_desc:"Актау / Курык ⇄ Энзели / Амирабад. Короткое морское плечо — риск не в переходе, а в очереди на причал.",
    r_ferry_gov:"Очередь на причал", r_ferry_transit:"6–12 дней",
    r_road_mode:"Авто · самый гибкий", r_road_name:"Автодорога через Туркменистан",
    r_road_desc:"Через Серахс, Баджгиран или Лотфабад, затем через Узбекистан в Казахстан. Самый гибкий вариант, но зависит от часов работы границы.",
    r_road_gov:"Часы границы", r_road_transit:"9–16 дней",
    svc_eyebrow:"03 — Услуги",
    svc_title:"Возьмите сделку целиком — или один этап.",
    svc_sub:"Шесть услуг на одной линии ответственности — в том порядке, как идёт сделка.",
    s1:"Поиск и проверка поставщиков",s1d:"Находим и проверяем контрагента с обеих сторон.",
    s2:"Мультимодальная логистика",s2d:"Ж/д, паром и автодорога по коридору.",
    s3:"Таможня с обеих сторон",s3d:"Сертификация ЕАЭС и документы о происхождении FTA.",
    s4:"Расчёты и бартер",s4d:"Платёжные схемы или товар-на-товар с ценовым паритетом.",
    s5:"Выход на рынок и выкладка",s5d:"На полку магазина, а не просто на склад.",
    s6:"Юридическое сопровождение",s6d:"Договоры и комплаенс от начала до конца.",
    calc_eyebrow:"Калькулятор маршрута",
    calc_title:"Оцените маршрут и срок за секунды.",
    calc_sub:"Предварительно — точную цифру пришлём в течение одного рабочего дня после проверки линии.",
    f_direction:"Направление торговли", d_iran:"Иран → СНГ", d_cis:"СНГ → Иран",
    f_cargo:"Тип груза",
    c_food:"Продукты", c_produce:"Свежие фрукты и овощи", c_poly:"Полимеры",
    c_bitumen:"Битум и нефтепродукты", c_construction:"Стройматериалы", c_carpets:"Ковры и дом",
    c_cosmetics:"Косметика и уход", c_household:"Бытовая химия",
    c_grain:"Зерно и бобовые", c_oils:"Растительные масла", c_metal:"Прокат", c_timber:"Лес",
    c_fert:"Химия и удобрения", c_equip:"Оборудование",
    f_volume:"Объём", f_route:"Предпочтительный маршрут", rp_auto:"Подобрать", rp_rail:"Ж/д", rp_ferry:"Паром", rp_road:"Авто",
    out_rec:"Рекомендуемый маршрут", out_transit:"Оценка срока", days:"дней",
    out_governed:"Определяет", out_border:"Переходы", out_barter:"Бартер", out_barter_yes:"Возможен — товар за товар", out_barter_no:"Денежный расчёт",
    calc_cta:"Превратить в реальный расчёт", calc_disc:"Предварительная оценка, не оферта. Срок без учёта очередей на причал/границе и сезонных сбоев (штормы на Каспии, Навруз, пик зерна).",
    ct_eyebrow:"Оставить заявку",
    ct_title:"Расчёт маршрута за один рабочий день.",
    ct_sub:"Пришлите точки, груз, объём и условия. Одна точка ответственности вместо четырёх разговоров.",
    fld_company:"Компания", fld_email:"Рабочая почта", fld_from:"Пункт отправления", fld_to:"Пункт назначения",
    fld_cargo:"Груз и объём", fld_msg:"Что ещё нам стоит знать",
    ct_send:"Отправить заявку", ct_note:"Отвечаем в течение одного рабочего дня.",
    p1b:"1 рабочий день", p1t:"Предварительный расчёт маршрута к вам на почту.",
    p2b:"1 партнёр, а не четыре", p2t:"Поиск, транспорт, таможня и платёж — на одной линии.",
    p3b:"Контрольные точки", p3t:"Статус под контролем, верные коды ТН ВЭД, преференции FTA где применимо.",
    f_tag:"Торгово-логистический оператор на коридоре Иран–Казахстан. База в Казахстане и Иране; русский и английский, персидский — для иранских контрагентов.",
    f_explore:"Разделы", f_reach:"Связаться", f_rights:"© 2026 Евразия Мост", f_privacy:"Конфиденциальность", sub_h:"Новости коридора", sub_ph:"Ваш e-mail", sub_btn:"Подписаться", sub_ok:"Спасибо — вы подписаны.", sub_bad:"Введите корректный e-mail.", wa_msg:"Здравствуйте! Пишу с сайта Eurasia Bridge.", human_line:"Вы общаетесь с человеком, а не с порталом — напишите нам, и вы сразу говорите напрямую с нами, обычно в течение часа.", cb_h:"Удобнее звонок?", cb_sub:"Оставьте номер — перезвоним, обычно в течение часа.", cb_name:"Ваше имя", cb_phone:"Телефон / WhatsApp", cb_time:"Удобное время для звонка (необязательно)", cb_btn:"Заказать звонок", cb_ok:"Принято — скоро перезвоним.",
    cta_ready:"Готовы везти груз через коридор?",
    cta_ready_sub:"Начните с одного этапа или всей сделки. Мы вернёмся с маршрутом и планом.",
    wz_step:"Шаг", wz_of:"из", wz_next:"Далее", wz_back:"Назад", wz_calc:"Показать сроки", wz_restart:"Заново",
    q_dir:"В какую сторону идёт груз?", q_cargo:"Что вы отправляете?", q_vol:"Сколько и на каких условиях?", q_route:"Есть предпочтение по маршруту?",
    f_incoterm:"Инкотермс", res_rec:"Рекомендуемый маршрут", res_total:"От двери до полки", res_days:"дней",
    tl1:"Забор и консолидация", tl2:"Таможня и документы (отправление)", tl3:"Основной транзит", tl4:"Граница / перегрузка", tl5:"Таможня назначения (ЕАЭС)", tl6:"Доставка и выкладка",
    vb_title:"Груз в движении, каждый день.", vb_sub:"Ж/д, паром и автодорога — один оператор отвечает от ворот до полки.", vb_groups:"товарные группы", vb_eyebrow:"Коридор в движении", g_produce:"Свежие фрукты", g_constr:"Стройматериалы", ct_ok_t:"Спасибо — заявка получена.", ct_ok_p:"Вернёмся с предварительным маршрутом в течение одного рабочего дня.", net_eyebrow:"02 — Сеть", net_title:"Иран — в каждый крупный город СНГ.", net_sub:"Линии от иранских хабов — Тегеран, Тебриз, Мешхед — до Москвы, Алматы, Астаны, Ташкента, Баку и далее.", nav_cargo:"Наши товары", lst_eyebrow:"Каталог грузов", lst_title:"Товары наших партнёров.", lst_sub:"Актуальные партии в обе стороны по коридору Иран–Казахстан. Нажмите, чтобы оставить запрос.", lst_all:"Все", lst_origin:"Происхождение", lst_moq:"Мин. партия", lst_enquire:"Запросить", lst_add:"Любой может добавить груз — заявки появляются здесь после проверки нашей командой.", lst_empty:"Пока нет размещённых грузов — новые партии появятся здесь.",
    lst_add_btn:"Добавить груз", ac_title:"Добавить груз", ac_sub:"Отправьте партию в каталог коридора. Она появится на сайте после проверки нашей командой.",
    ac_dir:"Направление", ac_name:"Название груза", ac_weight:"Вес / объём", ac_origin:"Происхождение", ac_moq:"Мин. партия (необязательно)", ac_barter:"Возможен бартер",
    ac_desc:"Описание", ac_photos:"Фотографии", ac_photos_hint:"До 4 изображений.", ac_submit:"Отправить на проверку", ac_sending:"Отправка…",
    ac_ok:"Спасибо — груз отправлен и появится после одобрения.", ac_err:"Что-то пошло не так. Попробуйте ещё раз.", ac_pending:"На проверке", ac_close:"Закрыть", news_eyebrow:"Новости коридора", news_title:"Последнее из региона.", news_sub:"Иран, Казахстан и СНГ — заголовки, обновляются автоматически.", news_more:"Читать", news_empty:"Новости появляются на опубликованном сайте.",
    ab_eyebrow:"О нас", ab_title:"Одна команда отвечает за каждую поставку.",
    ab_p1:"Eurasia Bridge — торгово-логистический оператор, построенный вокруг одного коридора: Иран — Казахстан и страны СНГ. Мы берём на себя то, что обычно требует четырёх отдельных компаний: поиск и проверку поставщика, перевозку по железной дороге, паромом или автотранспортом, таможенное оформление с обеих сторон, расчёты — включая бартер, когда прямой денежный канал затруднён, — и размещение вашего товара на полке.",
    ab_p2:"Мы базируемся в Казахстане и Иране и работаем на русском, английском и персидском, поэтому обе стороны сделки общаются с одним ответственным партнёром, а не с цепочкой посредников.",
    ab_pt1_h:"Одна точка ответственности", ab_pt1_p:"От ворот поставщика до полки магазина — один договор, одна команда.",
    ab_pt2_h:"Таможня с обеих сторон", ab_pt2_p:"Сертификация ЕАЭС и документы о происхождении — своими силами, на обеих границах.",
    ab_pt3_h:"Специалисты по коридору", ab_pt3_p:"Ж/д, каспийский паром и автодорога — маршрут под ваш груз, а не по умолчанию.",
  },
  fa:{
    brand:"پل اوراسیا",
    nav_home:"خانه", nav_routes:"مسیرها", nav_calc:"محاسبه‌گر", nav_contact:"تماس",
    cta_quote:"استعلام مسیر",
    h_eyebrow:"کریدور تجاری ایران ⇄ قزاقستان",
    h_l1:"یک شریک،", h_l2:"از تأمین‌کننده", h_l3:"تا قفسه فروشگاه.",
    h_sub:"ما کل معامله را در طول کریدور مدیریت می‌کنیم — تأمین، حمل‌ونقل، گمرک، پرداخت و تهاتر — و کالای شما را روی قفسه می‌گذاریم.",
    h_cta1:"باز کردن محاسبه‌گر مسیر", h_cta2:"کاوش مسیرها",
    st1n:"۳", st1l:"مسیر",
    st2n:"۱ روز", st2l:"تا برآورد",
    st3n:"۱", st3l:"نقطه‌ی پاسخگویی",
    scroll:"اسکرول",
    strip1:"پسته",strip2:"زعفران",strip3:"پلیمرها",strip4:"قیر",strip5:"غلات",strip6:"فولاد",strip7:"کود",strip8:"فرش",
    dir_eyebrow:"۰۱ — دو جهت",
    dir_title:"دو جهت، یک زیرساخت",
    dir_sub:"همه‌چیز از یکی از دو مسیر در همان کریدور جریان دارد. وقتی کانال نقدی پاک دشوار است، تهاتر با برابری قیمت را ساختاردهی می‌کنیم.",
    dir1_h:"کالای ایرانی، به شمال و به کشورهای مشترک‌المنافع", dir1_p:"نُه گروه کالایی به قزاقستان و کشورهای مشترک‌المنافع.",
    dir2_h:"محموله‌های متقابل، به جنوب و به ایران", dir2_p:"متناسب با تقاضای واقعی طرف ایرانی.",
    g_pist:"پسته",g_saf:"زعفران",g_dates:"خرما",g_poly:"پلیمر",g_bit:"قیر",g_carp:"فرش",g_cosm:"لوازم آرایشی",g_hh:"مواد شوینده",
    g_grain:"غلات و حبوبات",g_oil:"روغن نباتی",g_metal:"فولاد",g_timber:"چوب",g_fert:"کود",g_equip:"تجهیزات",
    barter:"◆ غلات و مواد شیمیایی — قابل تهاتر",
    rt_eyebrow:"۰۲ — کریدور",
    rt_title:"سه مسیر. انتخاب میان آن‌ها همان تخصص است.",
    rt_sub:"یک راه برای عبور وجود ندارد — سه راه هست. میان آن‌ها جابه‌جا شوید و گذرگاه‌ها، بازه‌ی زمان و عامل زمان‌بندی را ببینید.",
    rt_cta:"مشاهده‌ی هر سه مسیر",
    r_rail_t:"راه‌آهن شرقی", r_ferry_t:"کشتی خزر", r_road_t:"جاده از ترکمنستان",
    m_transit:"زمان حمل", m_gov:"عامل تعیین‌کننده",
    r_rail_mode:"ریلی · سرتاسری", r_rail_name:"راه‌آهن شرقی (KTI)",
    r_rail_desc:"تهران ← گرگان ← اینچه‌برون ← برکت ← بولاشاک ← ژاناوزن. تنها خط ریلی سرتاسری، با تغییر عرض خط در مرز ایران و تخلیه و بارگیری مجدد.",
    r_rail_gov:"تغییر عرض خط", r_rail_transit:"۱۴ تا ۱۸ روز",
    r_ferry_mode:"دریایی · مسیر کوتاه", r_ferry_name:"کشتی خزر",
    r_ferry_desc:"اکتائو / کوریک ⇄ انزلی / امیرآباد. یک مسیر دریایی کوتاه — ریسک در صف اسکله است، نه در خودِ گذر.",
    r_ferry_gov:"صف اسکله", r_ferry_transit:"۶ تا ۱۲ روز",
    r_road_mode:"جاده‌ای · منعطف‌ترین", r_road_name:"جاده از طریق ترکمنستان",
    r_road_desc:"از سرخس، باجگیران یا لطف‌آباد، سپس از ازبکستان به قزاقستان. منعطف‌ترین گزینه و وابسته‌ترین به ساعات کاری مرز.",
    r_road_gov:"ساعات کاری مرز", r_road_transit:"۹ تا ۱۶ روز",
    svc_eyebrow:"۰۳ — خدمات",
    svc_title:"کل معامله را بسپارید، یا فقط یک مرحله را.",
    svc_sub:"شش خدمت روی یک خط پاسخگویی — به همان ترتیبی که معامله پیش می‌رود.",
    s1:"یافتن و ارزیابی تأمین‌کننده",s1d:"شناسایی و راستی‌آزمایی طرف معامله در هر دو سو.",
    s2:"لجستیک چندوجهی",s2d:"ریل، کشتی و جاده در سراسر کریدور.",
    s3:"ترخیص گمرکی در هر دو سو",s3d:"گواهی EAEU و مدارک مبدأ ترجیحی.",
    s4:"تسویه و تهاتر",s4d:"طرح‌های پرداخت، یا کالا در برابر کالا با برابری قیمت.",
    s5:"ورود به بازار و چیدمان قفسه",s5d:"روی قفسه فروشگاه، نه فقط در انبار.",
    s6:"پشتیبانی حقوقی",s6d:"قرارداد و انطباق از ابتدا تا انتها.",
    calc_eyebrow:"محاسبه‌گر مسیر",
    calc_title:"مسیر و زمان حمل را در چند ثانیه برآورد کنید.",
    calc_sub:"فقط اولیه — عدد واقعی ظرف یک روز کاری پس از تأیید تیم ما برمی‌گردد.",
    f_direction:"جهت تجارت", d_iran:"ایران → مشترک‌المنافع", d_cis:"مشترک‌المنافع → ایران",
    f_cargo:"نوع بار",
    c_food:"مواد غذایی", c_produce:"محصولات تازه", c_poly:"پلیمر",
    c_bitumen:"قیر و فرآورده‌های نفتی", c_construction:"مصالح ساختمانی", c_carpets:"فرش و خانه",
    c_cosmetics:"آرایشی و بهداشتی", c_household:"مواد شوینده",
    c_grain:"غلات و حبوبات", c_oils:"روغن نباتی", c_metal:"فولاد", c_timber:"چوب",
    c_fert:"مواد شیمیایی و کود", c_equip:"تجهیزات",
    f_volume:"حجم", f_route:"مسیر ترجیحی", rp_auto:"پیشنهاد بده", rp_rail:"ریل", rp_ferry:"کشتی", rp_road:"جاده",
    out_rec:"مسیر پیشنهادی", out_transit:"برآورد زمان حمل", days:"روز",
    out_governed:"عامل تعیین‌کننده", out_border:"گذرگاه‌ها", out_barter:"تهاتر", out_barter_yes:"ممکن — کالا در برابر کالا", out_barter_no:"تسویه نقدی",
    calc_cta:"تبدیل به استعلام واقعی", calc_disc:"برآورد اولیه، نه پیشنهاد الزام‌آور. زمان حمل بدون صف اسکله/مرز و اختلالات فصلی (طوفان خزر، نوروز، اوج غلات).",
    ct_eyebrow:"ثبت درخواست",
    ct_title:"استعلام مسیر ظرف یک روز کاری.",
    ct_sub:"نقاط مبدأ و مقصد، بار، حجم و شرایط را بفرستید. یک نقطه‌ی پاسخگویی به‌جای چهار گفتگوی جداگانه.",
    fld_company:"شرکت", fld_email:"ایمیل کاری", fld_from:"مبدأ", fld_to:"مقصد",
    fld_cargo:"بار و حجم", fld_msg:"چیز دیگری که باید بدانیم",
    ct_send:"ارسال درخواست", ct_note:"ظرف یک روز کاری پاسخ می‌دهیم.",
    p1b:"۱ روز کاری", p1t:"برآورد اولیه‌ی مسیر در ایمیل شما.",
    p2b:"۱ شریک، نه چهار تا", p2t:"تأمین، حمل، گمرک و پرداخت روی یک خط.",
    p3b:"ایست‌های ثابت", p3t:"وضعیتِ قابل پیگیری، کدهای گمرکی درست، ترجیح FTA در صورت امکان.",
    f_tag:"اپراتور تجاری و لجستیکی در کریدور ایران–قزاقستان. مستقر در قزاقستان و ایران؛ روسی و انگلیسی، و فارسی برای طرف‌های ایرانی.",
    f_explore:"کاوش", f_reach:"تماس با ما", f_rights:"© ۲۰۲۶ پل اوراسیا", f_privacy:"حریم خصوصی", sub_h:"اخبار کریدور", sub_ph:"ایمیل شما", sub_btn:"عضویت", sub_ok:"سپاس — شما عضو شدید.", sub_bad:"یک ایمیل معتبر وارد کنید.", wa_msg:"سلام! از وب‌سایت پل اوراسیا پیام می‌دهم.", human_line:"شما با یک انسان طرف هستید، نه یک سامانه — پیام دهید و مستقیماً با ما صحبت می‌کنید، معمولاً ظرف یک ساعت.", cb_h:"ترجیح می‌دهید تماس بگیریم؟", cb_sub:"شماره‌تان را بگذارید تا با شما تماس بگیریم — معمولاً ظرف یک ساعت.", cb_name:"نام شما", cb_phone:"تلفن / واتساپ", cb_time:"زمان مناسب برای تماس (اختیاری)", cb_btn:"درخواست تماس", cb_ok:"دریافت شد — به‌زودی با شما تماس می‌گیریم.",
    cta_ready:"آماده‌ی جابه‌جایی بار در کریدور هستید؟",
    cta_ready_sub:"با یک مرحله یا کل معامله شروع کنید. با یک مسیر و یک برنامه برمی‌گردیم.",
    wz_step:"مرحله", wz_of:"از", wz_next:"بعدی", wz_back:"قبلی", wz_calc:"نمایش زمان‌بندی", wz_restart:"از نو",
    q_dir:"بار به کدام سو می‌رود؟", q_cargo:"چه چیزی ارسال می‌کنید؟", q_vol:"چه مقدار و با چه شرایطی؟", q_route:"مسیر ترجیحی دارید؟",
    f_incoterm:"اینکوترمز", res_rec:"مسیر پیشنهادی", res_total:"از مبدأ تا قفسه", res_days:"روز",
    tl1:"جمع‌آوری و تجمیع", tl2:"گمرک و اسناد مبدأ", tl3:"ترانزیت اصلی", tl4:"مرز / تخلیه و بارگیری", tl5:"گمرک مقصد (EAEU)", tl6:"تحویل و چیدمان قفسه",
    vb_title:"بار در حرکت، هر روز.", vb_sub:"ریل، کشتی و جاده — یک اپراتور پاسخگو از دروازه تا قفسه.", vb_groups:"گروه کالایی", vb_eyebrow:"کریدور در حرکت", g_produce:"محصولات تازه", g_constr:"مصالح ساختمانی", ct_ok_t:"سپاس — درخواست دریافت شد.", ct_ok_p:"ظرف یک روز کاری با یک مسیر اولیه بازمی‌گردیم.", net_eyebrow:"۰۲ — شبکه", net_title:"ایران به هر شهر بزرگ مشترک‌المنافع.", net_sub:"خطوط از هاب‌های ایران — تهران، تبریز، مشهد — تا مسکو، آلماتی، آستانه، تاشکند، باکو و فراتر.", nav_cargo:"کالاها", lst_eyebrow:"فهرست کالاها", lst_title:"کالاهای کریدور.", lst_sub:"محموله‌های موجود در هر دو جهت کریدور ایران–قزاقستان. برای استعلام روی هر مورد بزنید.", lst_all:"همه", lst_origin:"مبدأ", lst_moq:"حداقل محموله", lst_enquire:"استعلام", lst_add:"هرکسی می‌تواند بار اضافه کند — پس از تأیید تیم ما اینجا نمایش داده می‌شود.", lst_empty:"هنوز باری ثبت نشده — محموله‌های جدید به‌مرور اینجا نمایش داده می‌شوند.",
    lst_add_btn:"افزودن بار", ac_title:"افزودن بار", ac_sub:"یک محموله به فهرست کریدور ثبت کنید. پس از تأیید تیم ما روی سایت نمایش داده می‌شود.",
    ac_dir:"جهت", ac_name:"نام بار", ac_weight:"وزن / حجم", ac_origin:"مبدأ", ac_moq:"حداقل سفارش (اختیاری)", ac_barter:"قابل تهاتر",
    ac_desc:"توضیحات", ac_photos:"عکس‌ها", ac_photos_hint:"حداکثر ۴ تصویر.", ac_submit:"ارسال برای بررسی", ac_sending:"در حال ارسال…",
    ac_ok:"سپاس — بار شما ثبت شد و پس از تأیید نمایش داده می‌شود.", ac_err:"خطایی رخ داد. دوباره تلاش کنید.", ac_pending:"در انتظار بررسی", ac_close:"بستن", news_eyebrow:"اخبار کریدور", news_title:"آخرین اخبار منطقه.", news_sub:"ایران، قزاقستان و کشورهای مشترک‌المنافع — سرخط‌ها، به‌روزرسانی خودکار.", news_more:"خواندن", news_empty:"اخبار زنده در سایت منتشرشده نمایش داده می‌شود.",
    ab_eyebrow:"درباره‌ی ما", ab_title:"یک تیم پشت هر محموله.",
    ab_p1:"پل اوراسیا یک اپراتور تجاری و لجستیکی است که حول یک کریدور شکل گرفته: ایران تا قزاقستان و کشورهای مشترک‌المنافع. ما کارهایی را بر عهده می‌گیریم که معمولاً به چهار شرکت جداگانه نیاز دارد: یافتن و ارزیابی تأمین‌کننده، حمل بار با ریل، کشتی یا جاده، ترخیص گمرکی در هر دو سو، تسویه — از جمله تهاتر وقتی کانال نقدی مستقیم دشوار است — و قرار دادن کالای شما روی قفسه.",
    ab_p2:"ما در قزاقستان و ایران مستقر هستیم و به روسی، انگلیسی و فارسی کار می‌کنیم، بنابراین هر دو طرف معامله با یک شریک پاسخگو صحبت می‌کنند، نه با زنجیره‌ای از واسطه‌ها.",
    ab_pt1_h:"یک نقطه‌ی پاسخگویی", ab_pt1_p:"از درِ تأمین‌کننده تا قفسه‌ی فروشگاه — یک قرارداد، یک تیم.",
    ab_pt2_h:"گمرک در هر دو سو", ab_pt2_p:"گواهی EAEU و اسناد مبدأ، به‌صورت داخلی و در هر دو مرز.",
    ab_pt3_h:"متخصص کریدور", ab_pt3_p:"ریل، کشتی خزر و جاده — مسیر متناسب با بار شما، نه پیش‌فرض.",
  }
};

const ROUTE_KEYS = {
  rail:{mode:"r_rail_mode",name:"r_rail_name",desc:"r_rail_desc",gov:"r_rail_gov",transit:"r_rail_transit"},
  ferry:{mode:"r_ferry_mode",name:"r_ferry_name",desc:"r_ferry_desc",gov:"r_ferry_gov",transit:"r_ferry_transit"},
  road:{mode:"r_road_mode",name:"r_road_name",desc:"r_road_desc",gov:"r_road_gov",transit:"r_road_transit"}
};

let LANG = localStorage.getItem("eb_lang") || "ru";

/* ---------- integrations config ----------
   Paste your Google Apps Script Web App URL here to receive enquiries in a
   Google Sheet. See SETUP.md for the 5-minute setup. Leave "" to just demo. */
const SHEET_ENDPOINT = "https://script.google.com/a/macros/eurasia-bridge.net/s/AKfycbyLHUwi9nzQ5BxZ1GtQDgun18HAKINHPANRhziBtEWBHLm0UjgIfksAZW1Hv5DvcyED/exec";
/* Optional: an Apps Script doGet URL to load cargo listings live from a Sheet
   "Listings" tab. Leave "" to use the built-in seed below. */
const LISTINGS_ENDPOINT = "https://script.google.com/a/macros/eurasia-bridge.net/s/AKfycbyLHUwi9nzQ5BxZ1GtQDgun18HAKINHPANRhziBtEWBHLm0UjgIfksAZW1Hv5DvcyED/exec";
/* Optional: live news with images. Paste the SAME Apps Script Web App URL here
   (it proxies GNews so the API key stays server-side). Leave "" to fall back to
   the keyless Google-News headline feed (no images). See SETUP.md / google-sheet.gs. */
const NEWS_ENDPOINT = "https://script.google.com/a/macros/eurasia-bridge.net/s/AKfycbyLHUwi9nzQ5BxZ1GtQDgun18HAKINHPANRhziBtEWBHLm0UjgIfksAZW1Hv5DvcyED/exec";

/* Floating chat button. Set WHATSAPP to the full number in international format,
   digits only (no +, spaces or dashes). Leave "" to hide. Falls back to TELEGRAM
   (public username, no @) if WhatsApp is empty. */
const WHATSAPP = "989390975921";
const TELEGRAM = "";

// Cleared of demo/placeholder cargo — real lots come from the connected Google
// Sheet (Listings tab) via LISTINGS_ENDPOINT, added through the on-site "Add cargo"
// flow. Empty array = the page shows a clean "no cargo yet" state until then.
const LISTINGS_SEED = [
];

function tr(k){ return (T[LANG] && T[LANG][k]!=null) ? T[LANG][k] : (T.en[k]!=null?T.en[k]:k); }

function applyLang(l){
  LANG = l; localStorage.setItem("eb_lang", l);
  document.documentElement.lang = l;
  document.documentElement.dir = (l==="fa") ? "rtl" : "ltr";
  document.body.classList.toggle("lang-fa", l==="fa");
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if(T[l] && T[l][k]!=null) el.textContent = T[l][k];
    else if(T.en[k]!=null) el.textContent = T.en[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const k = el.getAttribute("data-i18n-ph");
    el.placeholder = (T[l] && T[l][k]!=null) ? T[l][k] : (T.en[k]!=null?T.en[k]:k);
  });
  document.querySelectorAll(".langsw button").forEach(b=>b.classList.toggle("on", b.dataset.lang===l));
  const waFab=document.querySelector(".chat-fab[aria-label='WhatsApp']");
  if(waFab && typeof WHATSAPP!=="undefined" && WHATSAPP){ waFab.href="https://wa.me/"+String(WHATSAPP).replace(/[^0-9]/g,"")+"?text="+encodeURIComponent(tr("wa_msg")); }
  if(window.__refreshRoute) window.__refreshRoute();
  if(window.__recalc) window.__recalc();
  if(window.__renderListings) window.__renderListings();
  if(window.__newsReload) window.__newsReload();
}

/* ---------- interactive globe ---------- */
const CITIES = {
  tehran:[35.7,51.4], gorgan:[36.8,54.4], incheh:[37.6,54.7], bereket:[39.25,55.5],
  bolashak:[45.3,55.2], zhanaozen:[43.34,52.86], anzali:[37.47,49.46], amirabad:[36.85,53.37],
  aktau:[43.65,51.16], kuryk:[43.2,51.6]
};
const ROUTE_PATHS = {
  rail:{color:"#E89A3C", pts:[CITIES.tehran,CITIES.gorgan,CITIES.incheh,CITIES.bereket,CITIES.bolashak,CITIES.zhanaozen], ends:[CITIES.tehran,CITIES.zhanaozen], dash:false},
  ferry:{color:"#8FD3C8", pts:[CITIES.anzali,[40.6,50.7],CITIES.aktau,CITIES.zhanaozen], ends:[CITIES.anzali,CITIES.aktau], dash:true},
  road:{color:"#F5F0E7", pts:[CITIES.tehran,[36.5,57.8],[41.6,60.2],[43.6,55.5],CITIES.zhanaozen], ends:[CITIES.tehran,CITIES.zhanaozen], dash:true}
};
const LON0 = 54, TILT = 41*Math.PI/180;
const D2R = Math.PI/180;
function centerOn(v){const s=Math.atan2(-v[0],v[2]);const z1=Math.hypot(v[0],v[2]);return {s, t:Math.atan2(v[1],z1)};}
function angWrap(a){while(a>Math.PI)a-=2*Math.PI;while(a<-Math.PI)a+=2*Math.PI;return a;}
const CASPIAN=[[47.0,51.5],[46.4,53.1],[45.0,52.9],[44.0,51.1],[42.6,50.1],[41.2,50.9],[39.6,49.9],[38.1,49.1],[37.0,50.0],[36.6,52.4],[37.6,53.6],[39.0,53.6],[40.6,52.6],[42.0,52.7],[43.6,51.3],[45.0,51.7],[46.2,50.4]];
const REGIONS=[[32.0,53.5,"IRAN"],[39.2,59.5,"TURKMENISTAN"],[41.4,64.6,"UZBEKISTAN"],[48.6,66.0,"KAZAKHSTAN"],[41.4,50.8,"CASPIAN"],[45.0,40.0,"RUSSIA"]];
const HUBS={tehran:[35.7,51.4],tabriz:[38.1,46.3],mashhad:[36.3,59.6],isfahan:[32.7,51.7],bandarabbas:[27.2,56.3],anzali:[37.5,49.5],astana:[51.1,71.4],almaty:[43.2,76.9],aktau:[43.6,51.2],atyrau:[47.1,51.9],tashkent:[41.3,69.2],samarkand:[39.7,66.9],bishkek:[42.9,74.6],dushanbe:[38.5,68.8],ashgabat:[37.9,58.4],baku:[40.4,49.9],moscow:[55.75,37.6],kazan:[55.8,49.1]};
const NET_LINKS=[["tehran","astana"],["tehran","almaty"],["tehran","aktau"],["tehran","atyrau"],["tehran","tashkent"],["tehran","samarkand"],["tehran","bishkek"],["tehran","dushanbe"],["tehran","ashgabat"],["tehran","baku"],["tehran","moscow"],["tehran","kazan"],["tabriz","baku"],["tabriz","moscow"],["tabriz","astana"],["tabriz","aktau"],["tabriz","atyrau"],["tabriz","kazan"],["mashhad","ashgabat"],["mashhad","tashkent"],["mashhad","samarkand"],["mashhad","dushanbe"],["mashhad","almaty"],["mashhad","bishkek"],["mashhad","astana"],["isfahan","aktau"],["isfahan","tashkent"],["isfahan","almaty"],["bandarabbas","aktau"],["bandarabbas","atyrau"],["anzali","aktau"],["anzali","atyrau"],["anzali","baku"]];
const NET_LABEL={tehran:"TEHRAN",tabriz:"TABRIZ",mashhad:"MASHHAD",almaty:"ALMATY",astana:"ASTANA",tashkent:"TASHKENT",baku:"BAKU",moscow:"MOSCOW",aktau:"AKTAU",ashgabat:"ASHGABAT"};
const NET_ORIGINS=new Set(["tehran","tabriz","mashhad","isfahan","bandarabbas","anzali"]);
function toVec(lat,lon){const a=lat*D2R,b=(lon-LON0)*D2R;return [Math.cos(a)*Math.sin(b),Math.sin(a),Math.cos(a)*Math.cos(b)];}
function slerp(a,b,t){
  let d=a[0]*b[0]+a[1]*b[1]+a[2]*b[2]; d=Math.max(-1,Math.min(1,d));
  const o=Math.acos(d); if(o<1e-4)return a.slice();
  const s=Math.sin(o), w1=Math.sin((1-t)*o)/s, w2=Math.sin(t*o)/s;
  return [a[0]*w1+b[0]*w2, a[1]*w1+b[1]*w2, a[2]*w1+b[2]*w2];
}
function sampleRoute(pts){
  const out=[]; for(let i=0;i<pts.length-1;i++){
    const A=toVec(pts[i][0],pts[i][1]), B=toVec(pts[i+1][0],pts[i+1][1]);
    const N=26; for(let j=0;j<N;j++){out.push(slerp(A,B,j/N));}
  } out.push(toVec(pts[pts.length-1][0],pts[pts.length-1][1])); return out;
}

class Globe{
  constructor(stage, opts={}){
    this.stage=stage; this.opts=opts;
    this.canvas=document.createElement("canvas"); stage.appendChild(this.canvas);
    this.canvas.setAttribute("role","img");
    this.canvas.setAttribute("aria-label", opts.aria||"Interactive map of the Iran–Kazakhstan trade corridor and the network of city routes across the CIS.");
    this.ctx=this.canvas.getContext("2d");
    this.reduced=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const cc=opts.center||[43,58]; const home=centerOn(toVec(cc[0],cc[1])); this.homeSpin=home.s; this.homeTilt=home.t;
    this.spin=home.s; this.tilt=home.t;
    this.baseZoom=opts.zoom||1.5; this.zoom=this.baseZoom;
    this.showModal=opts.showModal!==false; this.network=opts.network!==false; this.reveal=(opts.reveal!=null)?opts.reveal:1;
    this.autoRotate=!!opts.autoRotate; this.rotSpeed=opts.rotSpeed||0.0022;
    this.active=opts.active||null; this.phase=0; this.t=0;
    this.dragging=false; this.lastX=0; this.lastY=0;
    this.flying=false; this.flyId=null; this.drawMax=Infinity; this.flyT0=0;
    this.autoFly=!!opts.autoFly && !this.reduced; this.flyIdx=0; this.nextFly=performance.now()+2000;
    this.routes={}; for(const k in ROUTE_PATHS){this.routes[k]={...ROUTE_PATHS[k], s:sampleRoute(ROUTE_PATHS[k].pts)};}
    this.net=NET_LINKS.map(([a,b])=>sampleRoute([HUBS[a],HUBS[b]]));
    this.hubVecs=Object.keys(HUBS).map(k=>({k,v:toVec(HUBS[k][0],HUBS[k][1])}));
    this.geo=(typeof GEO!=='undefined')?GEO.map(r=>r.map(p=>toVec(p[1],p[0]))):[];
    this.grat=this._graticule(); this.caspian=CASPIAN.map(p=>toVec(p[0],p[1]));
    this._resize(); this._events(); this.render();
    window.addEventListener("resize",()=>{this._resize();this.render();});
    const loop=()=>{ if(!document.hidden){ this._tick(); this.render(); } requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  }
  _fib(n){const p=[],off=2/n,inc=Math.PI*(3-Math.sqrt(5));for(let i=0;i<n;i++){const y=i*off-1+off/2,r=Math.sqrt(1-y*y),ph=i*inc;p.push([Math.cos(ph)*r,y,Math.sin(ph)*r]);}return p;}
  _graticule(){const L=[];for(let lat=-60;lat<=60;lat+=15){const ln=[];for(let lon=-180;lon<=180;lon+=6)ln.push(toVec(lat,lon));L.push(ln);}for(let lon=-180;lon<180;lon+=15){const ln=[];for(let lat=-80;lat<=80;lat+=4)ln.push(toVec(lat,lon));L.push(ln);}return L;}
  _resize(){const dpr=Math.min(window.devicePixelRatio||1,2);const w=this.stage.clientWidth||420,h=this.stage.clientHeight||w;
    this.canvas.width=w*dpr;this.canvas.height=h*dpr;this.canvas.style.width=w+"px";this.canvas.style.height=h+"px";
    this.ctx.setTransform(dpr,0,0,dpr,0,0);this.W=w;this.H=h;this.cx=w/2;this.cy=h/2;this.baseR=Math.min(w,h)*0.42;this.R=this.baseR*this.zoom;}
  _events(){
    const dn=e=>{this.dragging=true;this.autoFly=false;this._axis=null;const t=e.touches?e.touches[0]:e;this.lastX=t.clientX;this.lastY=t.clientY;};
    const mv=e=>{if(!this.dragging)return;const t=e.touches?e.touches[0]:e;const dx=t.clientX-this.lastX,dy=t.clientY-this.lastY;
      if(e.touches){ if(this._axis==null && (Math.abs(dx)>2||Math.abs(dy)>2)) this._axis=Math.abs(dx)>Math.abs(dy)?"h":"v";
        if(this._axis==="v") return; }            /* vertical swipe → let the page scroll */
      this.spin+=dx*0.006;this.tilt=Math.max(-0.1,Math.min(1.3,this.tilt+dy*0.005));this.homeSpin=this.spin;this.homeTilt=this.tilt;this.lastX=t.clientX;this.lastY=t.clientY;
      if(e.cancelable && (!e.touches || this._axis==="h")) e.preventDefault();};
    const up=()=>{this.dragging=false;};
    this.canvas.addEventListener("mousedown",dn);window.addEventListener("mousemove",mv);window.addEventListener("mouseup",up);
    this.canvas.addEventListener("touchstart",dn,{passive:true});this.canvas.addEventListener("touchmove",mv,{passive:false});window.addEventListener("touchend",up);
    this.canvas.style.cursor="grab";
  }
  _tick(){
    const now=performance.now(); this.t+=0.016; this.phase=(this.phase+0.004)%1;
    if(this.flying){
      let p=(now-this.flyT0)/3400;
      if(p>=1){this.flying=false;this.drawMax=Infinity;}
      else{const pe=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
        const rt=this.routes[this.flyId],N=rt.s.length,idx=Math.floor(pe*(N-1));
        this.drawMax=idx; const c=centerOn(rt.s[idx]);
        this.spin+=angWrap(c.s-this.spin)*0.18; this.tilt+=(c.t-this.tilt)*0.18;
        const zt=this.baseZoom+Math.sin(Math.PI*p)*(this.baseZoom*0.95); this.zoom+=(zt-this.zoom)*0.12;}
    } else {
      if(this.autoFly && now>this.nextFly){const ids=["rail","ferry","road"];this.flyRoute(ids[this.flyIdx%3]);this.flyIdx++;this.nextFly=now+6400;}
      if(!this.dragging){
        if(this.autoRotate){ this.spin=this.homeSpin+0.30*Math.sin(this.t*0.16); this.tilt=this.homeTilt+0.075*Math.sin(this.t*0.11); }
        else if(!this.reduced){ const sway=0.02*Math.sin(this.t*0.35);
          this.spin+=angWrap(this.homeSpin+sway-this.spin)*0.05; this.tilt+=(this.homeTilt-this.tilt)*0.05; }
      }
      this.zoom+=(this.baseZoom-this.zoom)*0.06;
    }
    this.R=this.baseR*this.zoom;
  }
  _proj(v){
    const cs=Math.cos(this.spin),sn=Math.sin(this.spin);
    let x=v[0]*cs+v[2]*sn, z=-v[0]*sn+v[2]*cs, y=v[1];
    const cb=Math.cos(this.tilt),sb=Math.sin(this.tilt);
    const y2=y*cb-z*sb, z2=y*sb+z*cb;
    return {x:this.cx+this.R*x, y:this.cy-this.R*y2, z:z2};
  }
  setActive(id){this.active=id;}
  setReveal(v){this.reveal=Math.max(0,Math.min(1,v));}
  flyRoute(id){ if(!this.routes[id])return; this.setActive(id); this.flying=true; this.flyId=id; this.flyT0=performance.now(); this.drawMax=0; }
  _stroke(pts,maxI){const c=this.ctx;let st=false;c.beginPath();const N=Math.min(pts.length,(maxI==null?pts.length:maxI+1));for(let i=0;i<N;i++){const p=this._proj(pts[i]);if(p.z>0.02){if(!st){c.moveTo(p.x,p.y);st=true;}else c.lineTo(p.x,p.y);}else st=false;}c.stroke();}
  render(){
    const c=this.ctx, R=this.R; c.clearRect(0,0,this.W,this.H);
    // atmosphere halo
    const halo=c.createRadialGradient(this.cx,this.cy,R*0.92,this.cx,this.cy,R*1.32);
    halo.addColorStop(0,"rgba(232,154,60,0.16)"); halo.addColorStop(.5,"rgba(232,154,60,0.05)"); halo.addColorStop(1,"rgba(232,154,60,0)");
    c.fillStyle=halo; c.beginPath(); c.arc(this.cx,this.cy,R*1.32,0,7); c.fill();
    c.save(); c.beginPath(); c.arc(this.cx,this.cy,R,0,7); c.clip();
    // glossy sphere
    const g=c.createRadialGradient(this.cx-R*.36,this.cy-R*.42,R*.05,this.cx,this.cy,R*1.16);
    g.addColorStop(0,"#1b2a35"); g.addColorStop(.55,"#101a22"); g.addColorStop(1,"#05090d");
    c.fillStyle=g; c.beginPath(); c.arc(this.cx,this.cy,R,0,7); c.fill();
    // caspian (subtle water)
    let st=false;c.beginPath();for(const v of this.caspian){const p=this._proj(v);if(p.z>0){if(!st){c.moveTo(p.x,p.y);st=true;}else c.lineTo(p.x,p.y);}}
    if(st){c.closePath();c.fillStyle="rgba(40,92,108,.28)";c.fill();}
    // soft coastlines
    c.strokeStyle="rgba(154,176,184,.34)"; c.lineWidth=0.9; c.lineJoin="round"; c.lineCap="round";
    for(const ring of this.geo) this._stroke(ring,null);
    // terminator shading (day/night depth)
    const sh=c.createRadialGradient(this.cx-R*.35,this.cy-R*.4,R*.2,this.cx+R*.15,this.cy+R*.2,R*1.25);
    sh.addColorStop(0,"rgba(0,0,0,0)"); sh.addColorStop(1,"rgba(0,0,0,.55)");
    c.fillStyle=sh; c.beginPath(); c.arc(this.cx,this.cy,R,0,7); c.fill();
    c.restore();
    // network of city lanes — reveal-driven draw (lines shoot from Iran outward)
    if(this.network){
      c.lineCap="round"; c.strokeStyle="#F2B45E"; c.shadowColor="#E89A3C"; c.shadowBlur=9; const M=this.net.length, Rv=this.reveal;
      for(let ai=0;ai<M;ai++){
        const arc=this.net[ai], N=arc.length;
        const start=(ai/M)*0.4, ar=Math.max(0,Math.min(1,(Rv-start)/0.5));
        if(ar<=0) continue;
        const upto=Math.max(1,Math.floor(ar*(N-1)));
        c.globalAlpha=0.34+0.30*ar; c.lineWidth=1.35; let started=false; c.beginPath();
        for(let i=0;i<=upto;i++){const v=arc[i],f=i/(N-1),l=1+0.09*Math.sin(Math.PI*f),p=this._proj([v[0]*l,v[1]*l,v[2]*l]);
          if(p.z>0.02){if(!started){c.moveTo(p.x,p.y);started=true;}else c.lineTo(p.x,p.y);}else started=false;}
        c.stroke();
        if(ar<1){const v=arc[upto],f=upto/(N-1),l=1+0.09*Math.sin(Math.PI*f),p=this._proj([v[0]*l,v[1]*l,v[2]*l]);
          if(p.z>0.02){c.globalAlpha=1;c.beginPath();c.arc(p.x,p.y,2.6,0,7);c.fillStyle="#fff";c.fill();c.beginPath();c.arc(p.x,p.y,6.5,0,7);c.strokeStyle="#E89A3C";c.globalAlpha=.5;c.lineWidth=1.2;c.stroke();}}
      }
      c.globalAlpha=1; c.shadowBlur=0;
    }
    // modal routes (rail/ferry/road) — highlighted over the web
    if(this.showModal){
      const lift=(v,f)=>{const l=1+0.08*Math.sin(Math.PI*f);return this._proj([v[0]*l,v[1]*l,v[2]*l]);};
      for(const k in this.routes){
        const rt=this.routes[k], isActive=!this.active||this.active===k, N=rt.s.length;
        const maxI=(this.flying&&k===this.flyId)?this.drawMax:N-1;
        c.lineWidth=isActive?3:1.4; c.strokeStyle=rt.color; c.globalAlpha=isActive?0.98:0.22;
        c.setLineDash(rt.dash?[2,7]:[]); c.lineCap="round"; c.lineJoin="round";
        if(isActive){c.shadowColor=rt.color;c.shadowBlur=12;}
        let started=false; c.beginPath();
        for(let i=0;i<=maxI;i++){const p=lift(rt.s[i], i/(N-1));if(p.z>0.02){if(!started){c.moveTo(p.x,p.y);started=true;}else c.lineTo(p.x,p.y);}else started=false;}
        c.stroke(); c.setLineDash([]); c.shadowBlur=0;
        let li=-1;
        if(this.flying&&k===this.flyId) li=this.drawMax;
        else if(isActive&&!this.flying) li=Math.floor(this.phase*(N-1));
        if(li>=0&&li<N){const p=lift(rt.s[li],li/(N-1));if(p.z>0.02){c.globalAlpha=1;c.beginPath();c.arc(p.x,p.y,3.6,0,7);c.fillStyle="#fff";c.fill();c.beginPath();c.arc(p.x,p.y,9,0,7);c.strokeStyle=rt.color;c.globalAlpha=.4;c.lineWidth=1.4;c.stroke();}}
        c.globalAlpha=1;
      }
    }
    // city nodes — Iranian origins subtle, destination cities glow amber (many distinct arrivals)
    for(const h of this.hubVecs){const p=this._proj(h.v);if(p.z<=0.1)continue;
      if(NET_ORIGINS.has(h.k)){c.beginPath();c.arc(p.x,p.y,h.k==="tehran"?2.6:1.5,0,7);c.fillStyle="rgba(245,240,231,.68)";c.fill();}
      else{c.shadowColor="#E89A3C";c.shadowBlur=8;c.beginPath();c.arc(p.x,p.y,3,0,7);c.fillStyle="#F2B45E";c.fill();c.shadowBlur=0;
        c.beginPath();c.arc(p.x,p.y,1.2,0,7);c.fillStyle="#fff";c.fill();}}
    // country labels (faint, behind everything)
    c.textBaseline="middle"; c.textAlign="center"; c.font="9px 'IBM Plex Mono',monospace";
    for(const [la,lo,txt] of REGIONS){const p=this._proj(toVec(la,lo));if(p.z>0.25){c.fillStyle="rgba(143,178,190,.30)";c.fillText(txt,p.x,p.y);}}
    // hub labels — collision-aware, pushed outward from the globe centre so they never stack
    c.font="10px 'IBM Plex Mono',monospace"; c.textBaseline="middle";
    const cand=[];
    for(const k in NET_LABEL){const p=this._proj(toVec(HUBS[k][0],HUBS[k][1]));if(p.z<=0.2)continue;
      cand.push({p,txt:NET_LABEL[k],pr:(k==="tehran"?3:(NET_ORIGINS.has(k)?1:2))});}
    cand.sort((a,b)=>b.pr-a.pr||b.p.z-a.p.z);      // destinations + front-facing first
    const placed=[];
    for(const it of cand){const p=it.p, right=p.x>=this.cx;
      c.textAlign=right?"left":"right";
      const lx=p.x+(right?8:-8), ly=p.y-7, w=c.measureText(it.txt).width;
      const x1=(right?lx:lx-w)-3, x2=(right?lx+w:lx)+3, rect={x1,y1:ly-8,x2,y2:ly+8};
      if(placed.some(q=>!(rect.x2<q.x1||rect.x1>q.x2||rect.y2<q.y1||rect.y1>q.y2)))continue;
      placed.push(rect);
      c.fillStyle=it.pr===2?"rgba(245,240,231,.95)":"rgba(245,240,231,.72)"; c.fillText(it.txt,lx,ly);}
  }
}

/* ---------- route explorer binding ---------- */
function initRouteExplorer(globe){
  let cur="rail";
  const map=document.querySelector(".routemap");
  const highlight=id=>{ if(globe)globe.flyRoute(id); if(map)map.setAttribute("data-active",id); };
  window.__refreshRoute=function(){
    const R=ROUTE_KEYS[cur];
    const set=(id,k)=>{const el=document.getElementById(id);if(el)el.textContent=tr(k);};
    set("r-mode",R.mode);set("r-name",R.name);set("r-desc",R.desc);set("r-gov",R.gov);set("r-transit",R.transit);
    document.querySelectorAll(".route-tabs button").forEach(b=>b.classList.toggle("on",b.dataset.route===cur));
  };
  document.querySelectorAll(".route-tabs button").forEach(b=>b.addEventListener("click",()=>{
    cur=b.dataset.route; highlight(cur); window.__refreshRoute();
  }));
  if(globe)globe.setActive("rail");
  highlight("rail");
  window.__refreshRoute();
}

/* ---------- multi-step quote wizard ---------- */
function initWizard(){
  const wiz=document.getElementById("wiz"); if(!wiz) return;
  const state={dir:"iran-cis",cargo:"c_food",vol:120,incoterm:"CPT",pref:"auto"};
  let step=1; const total=4;
  const panels=[...wiz.querySelectorAll(".wz-panel")];
  const segs=[...wiz.querySelectorAll(".wz-prog .seg")];
  const back=document.getElementById("wz-back"), next=document.getElementById("wz-next");
  const result=document.getElementById("wz-result");
  const PHASES=[
    {k:"tl1",d:{rail:[1,3],ferry:[1,3],road:[1,2]}},
    {k:"tl2",d:{rail:[2,4],ferry:[2,4],road:[2,3]}},
    {k:"tl3",d:{rail:[8,11],ferry:[3,6],road:[6,10]}},
    {k:"tl4",d:{rail:[1,2],ferry:[1,3],road:[2,4]}},
    {k:"tl5",d:{rail:[2,4],ferry:[2,4],road:[2,3]}},
    {k:"tl6",d:{rail:[2,4],ferry:[2,4],road:[2,4]}}
  ];
  const barterCargo=["c_grain","c_fert"];
  function recommend(){
    if(state.pref!=="auto")return state.pref;
    const c=state.cargo;
    if(["c_produce","c_food","c_cosmetics"].includes(c))return "rail";
    if(["c_poly","c_bitumen","c_oils","c_fert"].includes(c))return state.vol>350?"ferry":"rail";
    if(["c_metal","c_timber","c_construction","c_equip"].includes(c))return state.vol>250?"ferry":"rail";
    if(state.vol<40)return "road";
    return "rail";
  }
  function nextLabel(){return wiz.dataset.mode==="result"?tr("wz_restart"):(step===total?tr("wz_calc"):tr("wz_next"));}
  function showStep(){
    panels.forEach(p=>p.classList.toggle("on", +p.dataset.step===step));
    result.classList.remove("on");
    segs.forEach((s,i)=>{s.classList.toggle("done",i<step-1);s.classList.toggle("cur",i===step-1);});
    back.disabled=step===1; wiz.dataset.mode="steps"; next.textContent=nextLabel();
  }
  function animNum(el,to){const from=+(el.dataset.cur||0)||0,t0=performance.now();function s(t){const p=Math.min(1,(t-t0)/650);el.firstChild.nodeValue=Math.round(from+(to-from)*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(s);else el.dataset.cur=to;}requestAnimationFrame(s);}
  function compute(){
    const r=recommend(); const vb=state.vol>600?[1,2]:state.vol>250?[0,1]:[0,0];
    let lo=0,hi=0; const rows=PHASES.map((ph,i)=>{let a=ph.d[r][0],b=ph.d[r][1];if(i===2){a+=vb[0];b+=vb[1];}lo+=a;hi+=b;return{k:ph.k,a,b,mid:(a+b)/2};});
    const totMid=Math.round((lo+hi)/2), maxMid=Math.max.apply(null,rows.map(x=>x.mid));
    const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
    set("o-route",tr(ROUTE_KEYS[r].name)); set("o-mode",tr(ROUTE_KEYS[r].mode)); set("o-range",lo+"–"+hi+" "+tr("res_days"));
    const bn=document.getElementById("o-days"); if(bn){if(!bn.firstChild)bn.appendChild(document.createTextNode("0"));animNum(bn,totMid);}
    const tl=document.getElementById("timeline"); tl.innerHTML="";
    rows.forEach((row,i)=>{const el=document.createElement("div");el.className="tl-row";el.style.setProperty("--w",Math.round(20+row.mid/maxMid*80)+"%");
      el.innerHTML='<div class="ph">'+tr(row.k)+'</div><div class="tl-bar"><i></i></div><div class="d">'+row.a+'–'+row.b+'</div>';
      tl.appendChild(el); setTimeout(()=>el.classList.add("in"),90+i*95);});
    const be=document.getElementById("o-barter"); const elig=barterCargo.includes(state.cargo);
    if(be) be.textContent=(elig?"◆ "+tr("out_barter_yes"):tr("out_barter_no"));
  }
  function showResult(){
    panels.forEach(p=>p.classList.remove("on"));
    result.classList.add("on"); segs.forEach(s=>{s.classList.add("done");s.classList.remove("cur");});
    back.disabled=false; wiz.dataset.mode="result"; next.textContent=nextLabel(); compute();
  }
  wiz.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>{
    const f=b.dataset.field; state[f]=b.dataset.val;
    b.parentElement.querySelectorAll(".opt").forEach(x=>x.classList.toggle("on",x===b));
  }));
  const vol=document.getElementById("w-vol"),volOut=document.getElementById("w-vol-out");
  if(vol)vol.addEventListener("input",()=>{state.vol=+vol.value;if(volOut)volOut.textContent=(+vol.value).toLocaleString()+" t";});
  const inc=document.getElementById("w-incoterm"); if(inc)inc.addEventListener("change",()=>state.incoterm=inc.value);
  next.addEventListener("click",()=>{ if(wiz.dataset.mode==="result"){step=1;showStep();return;} if(step<total){step++;showStep();}else{showResult();} });
  back.addEventListener("click",()=>{ if(wiz.dataset.mode==="result"){step=total;showStep();return;} if(step>1){step--;showStep();} });
  window.__recalc=function(){ if(wiz.dataset.mode==="result")compute(); next.textContent=nextLabel(); };
  showStep();
}

/* ---------- page transitions ---------- */
function initTransitions(){
  const curtain=document.querySelector(".curtain"); if(!curtain) return;
  requestAnimationFrame(()=>curtain.classList.add("reveal"));
  const reduce=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  document.querySelectorAll('a[href$=".html"]').forEach(a=>{
    a.addEventListener("click",e=>{
      const href=a.getAttribute("href");
      if(e.metaKey||e.ctrlKey||a.target==="_blank")return;
      if(reduce)return;
      e.preventDefault(); curtain.classList.remove("reveal"); curtain.classList.add("cover");
      setTimeout(()=>{window.location.href=href;},560);
    });
  });
}

/* ---------- misc ---------- */
function initReveals(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{threshold:.14});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}
function initNavHide(){
  const nav=document.querySelector(".nav"); if(!nav)return; let last=0;
  window.addEventListener("scroll",()=>{const y=window.scrollY;nav.classList.toggle("hidden", y>last&&y>240);last=y;},{passive:true});
}
function initCursor(){
  const g=document.querySelector(".cursor-glow"); if(!g)return;
  window.addEventListener("mousemove",e=>{g.style.left=e.clientX+"px";g.style.top=e.clientY+"px";},{passive:true});
}
function initLangSwitch(){
  document.querySelectorAll(".langsw button").forEach(b=>b.addEventListener("click",()=>applyLang(b.dataset.lang)));
}
function initMobileNav(){
  const nr=document.querySelector(".nav .nav-right"); const links=document.querySelector(".nav .navlinks"); if(!nr||!links) return;
  const btn=document.createElement("button"); btn.className="navtoggle"; btn.setAttribute("aria-label","Menu"); btn.setAttribute("aria-expanded","false");
  btn.innerHTML='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  nr.appendChild(btn);
  const menu=document.createElement("div"); menu.className="mobile-menu"; menu.innerHTML='<div class="mm-inner"></div>';
  const inner=menu.querySelector(".mm-inner");
  links.querySelectorAll("a").forEach(a=>inner.appendChild(a.cloneNode(true)));
  const cta=document.createElement("a"); cta.className="btn btn-gold"; cta.href="contact.html"; cta.setAttribute("data-i18n","cta_quote"); cta.textContent=tr("cta_quote"); inner.appendChild(cta);
  document.body.appendChild(menu);
  const close=()=>{menu.classList.remove("open");btn.setAttribute("aria-expanded","false");document.body.style.overflow="";};
  btn.addEventListener("click",()=>{const o=!menu.classList.contains("open");menu.classList.toggle("open",o);btn.setAttribute("aria-expanded",String(o));document.body.style.overflow=o?"hidden":"";});
  menu.addEventListener("click",e=>{ if(e.target===menu||e.target.tagName==="A") close(); });
}
function initContactForm(){
  const form=document.querySelector(".enq-form"); if(!form) return;
  const email=form.querySelector("#c-email"); if(email) email.type="email";
  try{const cg=new URLSearchParams(location.search).get("cargo"); if(cg){const cf=form.querySelector("#c-cargo"); if(cf&&!cf.value) cf.value=cg;}}catch(e){}
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const hp=form.querySelector("#c-website");
    if(hp&&hp.value){ form.innerHTML='<div class="enq-success"><div class="ok-check">✓</div><h3>'+tr("ct_ok_t")+'</h3><p>'+tr("ct_ok_p")+'</p></div>'; return; }  // bot trap
    let ok=true;
    [["#c-company",false],["#c-email",true],["#c-cargo",false]].forEach(([sel,isEmail])=>{
      const f=form.querySelector(sel); if(!f)return;
      const bad=!f.value.trim() || (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim()));
      f.style.borderColor=bad?"#c0603a":""; if(bad)ok=false;
    });
    if(!ok) return;
    const val=s=>{const f=form.querySelector(s);return f?f.value.trim():"";};
    const data={type:"enquiry",company:val("#c-company"),email:val("#c-email"),origin:val("#c-from"),destination:val("#c-to"),cargo:val("#c-cargo"),message:val("#c-msg"),lang:LANG,ts:new Date().toISOString()};
    if(SHEET_ENDPOINT){ fetch(SHEET_ENDPOINT,{method:"POST",body:JSON.stringify(data)}).catch(()=>{}); }
    form.innerHTML='<div class="enq-success"><div class="ok-check">✓</div><h3>'+tr("ct_ok_t")+'</h3><p>'+tr("ct_ok_p")+'</p></div>';
  });
}

/* ---------- footer newsletter signup ---------- */
function initSubscribe(){
  document.querySelectorAll(".foot-sub").forEach(form=>{
    const input=form.querySelector("input[type=email]");
    const note=form.querySelector(".foot-sub-note");
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const hp=form.querySelector(".hp"); if(hp&&hp.value) return;   // bot trap
      const email=(input&&input.value||"").trim();
      const ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if(!ok){ if(note){note.textContent=tr("sub_bad");note.classList.add("bad");note.hidden=false;} if(input)input.style.borderColor="#c0603a"; return; }
      if(input)input.style.borderColor="";
      const data={type:"subscribe",email:email,lang:LANG,ts:new Date().toISOString()};
      if(SHEET_ENDPOINT){ fetch(SHEET_ENDPOINT,{method:"POST",body:JSON.stringify(data)}).catch(()=>{}); }
      form.innerHTML='<p class="foot-sub-ok">'+tr("sub_ok")+'</p>';
    });
  });
}

/* ---------- request-a-callback ---------- */
function initCallback(){
  const form=document.querySelector(".callback"); if(!form) return;
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const hp=form.querySelector(".hp"); if(hp&&hp.value) return;   // bot trap
    const val=s=>{const f=form.querySelector(s);return f?f.value.trim():"";};
    const name=val("#cb-name"), phone=val("#cb-phone"), time=val("#cb-time");
    if(!phone){ const p=form.querySelector("#cb-phone"); if(p)p.style.borderColor="#c0603a"; return; }
    const p=form.querySelector("#cb-phone"); if(p)p.style.borderColor="";
    const data={ type:"callback", company:(name||"—"), email:"",
      message:"📞 CALLBACK REQUEST — Phone: "+phone+(time?("  ·  Best time: "+time):""),
      lang:LANG, ts:new Date().toISOString() };
    if(SHEET_ENDPOINT){ fetch(SHEET_ENDPOINT,{method:"POST",body:JSON.stringify(data)}).catch(()=>{}); }
    form.innerHTML='<div class="cb-ok">'+tr("cb_ok")+'</div>';
  });
}

const LOGO='<svg class="mark" viewBox="0 0 30 30" fill="none" aria-hidden="true"><circle cx="15" cy="15" r="13.4" stroke="#E89A3C" stroke-opacity=".28" stroke-width="1.1"/><path d="M4.5 19.6 C10 19.6 11 8.4 15 8.4 C19 8.4 20 19.6 25.5 19.6" stroke="#E89A3C" stroke-width="2" stroke-linecap="round"/><path d="M6.6 19.6 C11 19.6 12.6 13.4 15 13.4 C17.4 13.4 19 19.6 23.4 19.6" stroke="#E89A3C" stroke-opacity=".45" stroke-width="1.35" stroke-linecap="round"/><circle cx="15" cy="8.4" r="2.5" fill="#E89A3C"/></svg>';
function initLogo(){document.querySelectorAll(".brand .mark").forEach(el=>{el.outerHTML=LOGO;});}

/* ---------- cargo listings ---------- */
let LISTINGS=[];
function imgsOf(it){ if(Array.isArray(it.images)) return it.images.filter(Boolean);
  if(it.images) return String(it.images).split(",").map(s=>s.trim()).filter(Boolean);
  return it.image?[it.image]:[]; }
function initListings(){
  const grid=document.getElementById("listings"); if(!grid) return;
  let filter="all"; LISTINGS=LISTINGS_SEED.slice();
  const nm=it=>it[LANG]||it.ru||it.en||it.name||"";
  function render(){
    grid.innerHTML="";
    const shown=LISTINGS.filter(it=>filter==="all"||it.dir===filter);
    const c=document.getElementById("lst-count"); if(c)c.textContent=shown.length;
    if(!shown.length){ grid.innerHTML='<div class="news-note">'+tr("lst_empty")+'</div>'; return; }
    shown.forEach(it=>{
      const card=document.createElement("a"); card.className="lcard";
      card.href="contact.html?cargo="+encodeURIComponent(nm(it));
      const dirLabel=(String(it.dir).indexOf("cis-iran")===0)?tr("d_cis"):tr("d_iran");
      const imgs=imgsOf(it);
      const photo=imgs.length?'<div class="lc-img"><img src="'+escHtml(imgs[0])+'" alt="" loading="lazy" onerror="this.closest(\'.lc-img\').remove()">'+(imgs.length>1?'<span class="lc-imgn">+'+(imgs.length-1)+'</span>':'')+'</div>':'';
      const pending=it._pending?'<span class="lc-pending">'+tr("ac_pending")+'</span>':'';
      const meta=[
        it.weight?'<span><b>'+tr("ac_weight")+'</b> '+escHtml(it.weight)+'</span>':'',
        it.hs?'<span><b>HS</b> '+escHtml(it.hs)+'</span>':'',
        '<span><b>'+tr("lst_origin")+'</b> '+escHtml(it.origin||"—")+'</span>',
        it.moq?'<span><b>'+tr("lst_moq")+'</b> '+escHtml(it.moq)+'</span>':''
      ].join('');
      card.innerHTML=photo+'<div class="lc-body">'+
        '<div class="lc-top"><span class="lc-dir">'+dirLabel+'</span><span class="lc-badges">'+(it.barter?'<span class="lc-barter">◆ '+tr("out_barter")+'</span>':'')+pending+'</span></div>'+
        '<div class="lc-name">'+escHtml(nm(it))+'</div>'+
        (it.description?'<div class="lc-desc">'+escHtml(it.description)+'</div>':'')+
        '<div class="lc-meta">'+meta+'</div>'+
        '<div class="lc-cta">'+tr("lst_enquire")+' →</div></div>';
      grid.appendChild(card);
    });
  }
  document.querySelectorAll("[data-lfilter]").forEach(b=>b.addEventListener("click",()=>{
    filter=b.dataset.lfilter; document.querySelectorAll("[data-lfilter]").forEach(x=>x.classList.toggle("on",x===b)); render();
  }));
  window.__renderListings=render; render();
  if(LISTINGS_ENDPOINT){ fetch(LISTINGS_ENDPOINT+"?type=listings").then(r=>r.json()).then(rows=>{ if(Array.isArray(rows)&&rows.length){ LISTINGS=rows; render(); } }).catch(()=>{}); }
  initAddCargo(render);
}

/* ---------- add-cargo submission (public, moderated) ---------- */
function downscale(file, max, quality){
  return new Promise(res=>{
    const img=new Image(), url=URL.createObjectURL(file);
    img.onload=()=>{ URL.revokeObjectURL(url);
      let w=img.width, h=img.height;
      if(w>h && w>max){ h=Math.round(h*max/w); w=max; } else if(h>=w && h>max){ w=Math.round(w*max/h); h=max; }
      const cv=document.createElement("canvas"); cv.width=w; cv.height=h;
      cv.getContext("2d").drawImage(img,0,0,w,h);
      res(cv.toDataURL("image/jpeg", quality||0.8));
    };
    img.onerror=()=>{ URL.revokeObjectURL(url); res(null); };
    img.src=url;
  });
}
function initAddCargo(render){
  const modal=document.getElementById("cargoModal"); if(!modal) return;
  const openBtn=document.getElementById("addCargoBtn");
  const form=document.getElementById("cargoForm");
  const fileInput=document.getElementById("cargoPhotos");
  const previews=document.getElementById("acPreviews");
  const msg=document.getElementById("acMsg");
  let images=[];   // base64 data URLs, downscaled
  const open=()=>{ modal.classList.add("on"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; };
  const close=()=>{ modal.classList.remove("on"); modal.setAttribute("aria-hidden","true"); document.body.style.overflow=""; };
  if(openBtn) openBtn.addEventListener("click",open);
  modal.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",close));
  document.addEventListener("keydown",e=>{ if(e.key==="Escape"&&modal.classList.contains("on")) close(); });

  fileInput.addEventListener("change", async ()=>{
    const files=[...fileInput.files].slice(0,4);
    previews.innerHTML=""; images=[];
    for(const f of files){ const d=await downscale(f,1200,0.8); if(d){ images.push(d);
      const im=document.createElement("div"); im.className="ac-thumb"; im.innerHTML='<img src="'+d+'" alt="">'; previews.appendChild(im); } }
  });

  form.addEventListener("submit", e=>{
    e.preventDefault();
    const fd=new FormData(form);
    if(fd.get("website")){ msg.className="ac-msg ok"; msg.textContent=tr("ac_ok"); setTimeout(close,1200); return; }  // bot trap
    const cargo={ type:"cargo", dir:fd.get("dir")||"iran-cis", name:(fd.get("name")||"").trim(),
      weight:(fd.get("weight")||"").trim(), origin:(fd.get("origin")||"").trim(), moq:(fd.get("moq")||"").trim(),
      description:(fd.get("description")||"").trim(), barter:!!fd.get("barter"), images, lang:LANG };
    if(!cargo.name){ return; }
    const btn=form.querySelector('button[type="submit"]');
    msg.className="ac-msg"; msg.textContent=tr("ac_sending"); if(btn) btn.disabled=true;
    const done=ok=>{ if(btn) btn.disabled=false;
      msg.className="ac-msg "+(ok?"ok":"err"); msg.textContent=tr(ok?"ac_ok":"ac_err");
      if(ok){ // optimistic: show the submitter their card straight away, marked pending
        LISTINGS.unshift({dir:cargo.dir,name:cargo.name,weight:cargo.weight,origin:cargo.origin,moq:cargo.moq,
          description:cargo.description,barter:cargo.barter,images:cargo.images,_pending:true});
        render(); form.reset(); previews.innerHTML=""; images=[];
        setTimeout(close, 1400);
      } };
    if(LISTINGS_ENDPOINT){
      fetch(LISTINGS_ENDPOINT,{method:"POST",body:JSON.stringify(cargo)})
        .then(r=>r.json()).then(res=>done(res&&res.ok!==false)).catch(()=>done(false));
    } else { done(true); }   // no backend yet → local preview so the flow is visible
  });
}

/* ---------- live regional news ---------- */
function escHtml(s){return String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
function newsDate(iso){ if(!iso) return ""; const loc=LANG==="ru"?"ru-RU":LANG==="fa"?"fa-IR":"en-GB";
  try{ return new Date(iso).toLocaleDateString(loc,{day:"numeric",month:"short"}); }catch(e){ return ""; } }

let NEWS_TIMER=null;
function initNews(){
  const box=document.getElementById("news-grid"); if(!box) return;
  const note=()=>{ if(!box.querySelector(".ncard")) box.innerHTML='<div class="news-note">'+tr("news_empty")+'</div>'; };

  // Keyless Google-News RSS — headlines only, no images. Used both when there is
  // no GNews key AND as a fallback whenever the GNews proxy is empty or errors,
  // so the section is never blank. Query + locale follow the active language.
  const loadRss=()=>{
    const q=(LANG==="ru")?'Иран Казахстан торговля OR логистика OR коридор':'Iran Kazakhstan trade corridor OR logistics OR CIS';
    const hl=(LANG==="ru")?'ru':'en-US', gl=(LANG==="ru")?'RU':'US', ceid=(LANG==="ru")?'RU:ru':'US:en';
    const rss='https://news.google.com/rss/search?q='+encodeURIComponent(q)+'&hl='+hl+'&gl='+gl+'&ceid='+ceid;
    const url='https://api.allorigins.win/raw?url='+encodeURIComponent(rss);
    fetch(url).then(r=>r.text()).then(xml=>{
      const doc=new DOMParser().parseFromString(xml,"text/xml");
      const items=[].slice.call(doc.querySelectorAll("item")).slice(0,6);
      if(!items.length){ note(); return; }
      renderNews(box, items.map(it=>{
        const g=s=>{const el=it.querySelector(s);return el?el.textContent:"";};
        return {title:g("title").replace(/\s+-\s+[^-]+$/,""), source:g("source")||"News", url:g("link")||"#", date:g("pubDate"), image:""};
      }));
    }).catch(note);
  };

  // Preferred path: our GNews proxy (real API, images, auto-refreshing). Falls
  // back to RSS if it is unset, errors, or returns an empty feed.
  if(NEWS_ENDPOINT){
    const show=(items)=>{
      items=(items||[]).filter(a=>a&&a.title);
      if(!items.length){ loadRss(); return; }   // GNews empty (quota/no results) → RSS
      items.sort((a,b)=>(b.image?1:0)-(a.image?1:0));   // photos first so the grid never looks half-empty
      renderNews(box, items.slice(0,6));
    };
    const load=()=>{
      fetch(NEWS_ENDPOINT+"?type=news&lang="+encodeURIComponent(LANG))
        .then(r=>r.json())
        .then(items=>{
          items=Array.isArray(items)?items:[];
          // If a non-English feed is thin (limited regional coverage), top it up with
          // English headlines so the section is never emptier than the English page.
          if(items.length>=6 || LANG==="en"){ show(items); return; }
          fetch(NEWS_ENDPOINT+"?type=news&lang=en").then(r=>r.json()).then(en=>{
            en=Array.isArray(en)?en:[];
            const seen=new Set(items.map(a=>a.url));
            en.forEach(a=>{ if(a.url&&!seen.has(a.url)){ items.push(a); seen.add(a.url); } });
            show(items);
          }).catch(()=>show(items));
        })
        .catch(loadRss);   // proxy unreachable → RSS
    };
    window.__newsReload=load;                 // re-fetch when the language changes
    load();
    if(NEWS_TIMER) clearInterval(NEWS_TIMER);
    NEWS_TIMER=setInterval(()=>{ if(!document.hidden) load(); }, 900000);   // poll every 15 min
    document.addEventListener("visibilitychange",()=>{ if(!document.hidden) load(); });
    return;
  }

  window.__newsReload=loadRss;   // RSS-only mode still refreshes on language change
  loadRss();
}
function renderNews(box, items){
  box.innerHTML="";
  items.forEach(n=>{
    const a=document.createElement("a"); a.className="ncard"; a.href=n.url||"#"; a.target="_blank"; a.rel="noopener";
    const d=newsDate(n.date);
    const img=n.image?'<div class="nc-img"><img src="'+escHtml(n.image)+'" alt="" loading="lazy" onerror="this.closest(\'.nc-img\').remove()"></div>':'';
    a.innerHTML=img+'<div class="nc-body"><div class="nc-src">'+escHtml(n.source||"News")+(d?' · '+d:'')+'</div>'
      +'<div class="nc-title">'+escHtml(n.title||"")+'</div><div class="nc-go">'+tr("news_more")+' ↗</div></div>';
    box.appendChild(a);
  });
}

function initHeroScroll(globe){
  const hs=document.querySelector(".hero-scroll"); if(!hs||!globe) return;
  const overlay=document.querySelector(".hero-overlay");
  const cue=document.querySelector(".hero-scroll .scrollcue");
  const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
  const smooth=(x,a,b)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
  function upd(){
    const total=Math.max(1,hs.offsetHeight-window.innerHeight);
    const p=clamp(-hs.getBoundingClientRect().top/total,0,1);
    globe.setReveal(smooth(p,0.02,0.55));
    globe.baseZoom = 1.4 + p*0.6;                 // scrolling pulls you into the globe
    const hp=smooth(p,0.48,0.85);
    if(overlay){overlay.style.opacity=hp;overlay.style.transform="translateY("+((1-hp)*40)+"px)";}
    if(cue){cue.style.opacity=(1-smooth(p,0.02,0.16)).toFixed(3);}
  }
  window.addEventListener("scroll",upd,{passive:true});
  window.addEventListener("resize",upd); upd();
}

document.addEventListener("DOMContentLoaded",()=>{
  applyLang(LANG); initLogo(); initMobileNav();
  initLangSwitch(); initTransitions(); initReveals(); initNavHide(); initCursor(); initContactForm(); initSubscribe(); initCallback();
  const netStage=document.querySelector(".network .globe-stage");
  if(netStage){ new Globe(netStage,{zoom:1.5,center:[40,55],showModal:false,reveal:1,autoRotate:true,rotSpeed:0.0024}); }
  const heroStage=document.querySelector(".hero-globe .globe-stage");
  if(heroStage){ const hg=new Globe(heroStage,{zoom:1.4,center:[40,55],showModal:false,reveal:0,autoRotate:true,rotSpeed:0.0024}); initHeroScroll(hg); }
  const expStage=document.querySelector(".explorer .globe-stage");
  if(expStage){ const g=new Globe(expStage,{active:"rail",zoom:2.7,center:[40,53]}); initRouteExplorer(g); }
  else if(document.querySelector(".routemap")){ initRouteExplorer(null); }
  initWizard(); initListings(); initNews(); initChatButton();
});

/* ---------- floating Telegram chat button ---------- */
const WA_SVG='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#2a1e05" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.15 1.6 5.96L2 22l4.25-1.68c1.74.95 3.71 1.45 5.71 1.45h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm5.7 14.02c-.24.68-1.4 1.29-1.93 1.37-.49.07-1.11.1-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94s.73-2.09.99-2.37c.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.97.88 2.11.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.28-.12.55.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.69-.81.88-1.09.19-.28.37-.23.62-.14.25.09 1.6.75 1.87.89.28.14.46.21.53.32.07.11.07.66-.17 1.34z"/></svg>';
const TG_SVG='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#2a1e05" d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>';
function initChatButton(){
  const a=document.createElement("a");
  a.className="chat-fab"; a.target="_blank"; a.rel="noopener";
  if(typeof WHATSAPP!=="undefined" && WHATSAPP){
    const num=String(WHATSAPP).replace(/[^0-9]/g,"");
    a.href="https://wa.me/"+num+"?text="+encodeURIComponent(tr("wa_msg"));
    a.setAttribute("aria-label","WhatsApp"); a.innerHTML=WA_SVG;
  } else if(typeof TELEGRAM!=="undefined" && TELEGRAM){
    a.href="https://t.me/"+String(TELEGRAM).replace(/^@/,"");
    a.setAttribute("aria-label","Telegram"); a.innerHTML=TG_SVG;
  } else { return; }
  document.body.appendChild(a);
}
