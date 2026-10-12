/* ============================================================
   Jamia Ayesha Siddiqua — i18n Translation System
   Supports: English (en), Urdu (ur), Arabic (ar)

   How it works:
   - Every translatable element has a data-i18n="key" attribute
   - setLang(lang) walks the DOM, swaps text from this dictionary
   - RTL layout is applied for 'ur' and 'ar'
   - The chosen language is saved in localStorage so it persists
   ============================================================ */

const TRANSLATIONS = {

  /* ---- SHARED / GLOBAL ---- */
  "bismillah": {
    en: "In the Name of Allah, the Most Gracious, the Most Merciful",
    ur: "بسم اللہ الرحمن الرحیم — اللہ کے نام سے جو بڑا مہربان، نہایت رحم والا ہے",
    ar: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ — بِاسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ"
  },
  "brand-name-en": {
    en: "Jamia Ayesha Siddiqua Lil Banin Wal Banat",
    ur: "جامعہ عائشہ صدیقہ للبنین والبنات",
    ar: "جامعة عائشة الصديقة للبنين والبنات"
  },
  "brand-location": {
    en: "📍 Patancheru, Hyderabad, Telangana",
    ur: "📍 پٹانچیرو، حیدرآباد، تلنگانہ",
    ar: "📍 باتانشيرو، حيدر آباد، تلنغانا"
  },

  /* ---- NAV ---- */
  "nav-home":        { en: "Home",           ur: "ہوم",              ar: "الرئيسية" },
  "nav-about":       { en: "About Jamia",    ur: "جامعہ کے بارے میں", ar: "عن الجامعة" },
  "nav-intro":       { en: "Introduction",   ur: "تعارف",            ar: "التعريف" },
  "nav-mission":     { en: "Mission & Vision", ur: "مشن اور وژن",   ar: "الرسالة والرؤية" },
  "nav-leadership":  { en: "Leadership",     ur: "قیادت",            ar: "القيادة" },
  "nav-departments": { en: "Departments",    ur: "شعبہ جات",         ar: "الأقسام" },
  "nav-banin":       { en: "Shoba-e-Banin (Boys)", ur: "شعبۂ بنین (لڑکے)", ar: "شعبة البنين" },
  "nav-banat":       { en: "Shoba-e-Banat (Girls)", ur: "شعبۂ بنات (لڑکیاں)", ar: "شعبة البنات" },
  "nav-courses":     { en: "Courses",        ur: "کورسز",            ar: "الدورات" },
  "nav-admissions":  { en: "Admissions",     ur: "داخلہ",            ar: "القبول" },
  "nav-news":        { en: "News & Notices", ur: "خبریں و اعلانات",  ar: "الأخبار والإعلانات" },
  "nav-donate":      { en: "Donate",         ur: "عطیہ",             ar: "التبرع" },
  "nav-gallery":     { en: "Gallery",        ur: "گیلری",            ar: "المعرض" },
  "nav-contact":     { en: "Contact",        ur: "رابطہ",            ar: "اتصل بنا" },

  /* ---- INDEX — HERO ---- */
  "hero-badge":      { en: "Est. — Patancheru, Hyderabad", ur: "قائم — پٹانچیرو، حیدرآباد", ar: "تأسست — باتانشيرو، حيدر آباد" },
  "hero-urdu":       { en: "Quality Islamic Education, Excellent Character, Bright Future",
                        ur: "معیاری دینی تعلیم، بہترین تربیت، روشن مستقبل",
                        ar: "تعليم إسلامي راقٍ، أخلاق رفيعة، مستقبل مشرق" },
  "hero-h1":         { en: "Quality Islamic Education, Excellent Character, Bright Future",
                        ur: "معیاری دینی تعلیم، بہترین تربیت، روشن مستقبل",
                        ar: "تعليم إسلامي راقٍ، أخلاق رفيعة، مستقبل مشرق" },
  "hero-name":       { en: "Jamia Ayesha Siddiqua Lil Banin Wal Banat",
                        ur: "جامعہ عائشہ صدیقہ للبنین والبنات",
                        ar: "جامعة عائشة الصديقة للبنين والبنات" },
  "hero-desc":       { en: "A dedicated institution nurturing the next generation of Muslim scholars and upright citizens through authentic Deeni education, moral development, and modern skills.",
                        ur: "ایک مخصوص ادارہ جو دینی تعلیم، اخلاقی تربیت اور جدید مہارتوں کے ذریعے مسلمان علماء اور نیک شہریوں کی اگلی نسل کی پرورش کر رہا ہے۔",
                        ar: "مؤسسة تعليمية متخصصة تُعنى بتنشئة جيل المستقبل من العلماء والمواطنين الصالحين عبر التعليم الديني الأصيل والتنمية الأخلاقية والمهارات العصرية." },
  "hero-btn-apply":  { en: "Apply for Admission", ur: "داخلے کے لیے درخواست دیں", ar: "قدِّم للقبول" },
  "hero-btn-donate": { en: "Donate Now",          ur: "ابھی عطیہ دیں",             ar: "تبرَّع الآن" },

  /* ---- INDEX — STATS ---- */
  "stat-students":   { en: "Students Enrolled",          ur: "طلبہ و طالبات داخل",      ar: "طلاب وطالبات ملتحقون" },
  "stat-programs":   { en: "Educational Programs",       ur: "تعلیمی پروگرام",          ar: "برامج تعليمية" },
  "stat-teachers":   { en: "Qualified Teachers",         ur: "تجربہ کار اساتذہ",        ar: "معلمون مؤهلون" },
  "stat-depts":      { en: "Departments (Boys & Girls)", ur: "شعبہ جات (لڑکے اور لڑکیاں)", ar: "أقسام (بنين وبنات)" },

  /* ---- INDEX — ABOUT SNIPPET ---- */
  "about-section-title": { en: "About Us",                    ur: "ہمارے بارے میں",    ar: "عن الجامعة" },
  "about-h2":            { en: "About Jamia Ayesha Siddiqua", ur: "جامعہ عائشہ صدیقہ کے بارے میں", ar: "عن جامعة عائشة الصديقة" },
  "about-quote":         { en: "Seeking knowledge is obligatory upon every Muslim man and woman.",
                            ur: "علم حاصل کرنا ہر مسلمان مرد اور عورت پر فرض ہے",
                            ar: "طلب العلم فريضة على كل مسلم ومسلمة" },
  "about-p1":            { en: "Jamia Ayesha Siddiqua Lil Banin Wal Banat is a premier Islamic educational institution located in Patancheru, Hyderabad, Telangana. Founded under the guidance of <strong>Maulana Muhammad Saleem Rahmani</strong>, the Jamia is dedicated to providing comprehensive Deeni education to both boys and girls.",
                            ur: "جامعہ عائشہ صدیقہ للبنین والبنات پٹانچیرو، حیدرآباد، تلنگانہ میں واقع ایک اعلیٰ اسلامی تعلیمی ادارہ ہے۔ یہ ادارہ <strong>مولانا محمد سلیم رحمانی</strong> کی رہنمائی میں قائم کیا گیا ہے اور لڑکوں و لڑکیوں دونوں کو جامع دینی تعلیم فراہم کرنے کے لیے وقف ہے۔",
                            ar: "جامعة عائشة الصديقة للبنين والبنات مؤسسة تعليمية إسلامية رائدة تقع في باتانشيرو، حيدر آباد، تلنغانا. تأسست تحت إشراف <strong>المولانا محمد سليم رحماني</strong>، وتسعى إلى تقديم تعليم ديني شامل للبنين والبنات." },
  "about-li1":  { en: "Separate departments for boys (Shoba-e-Banin) and girls (Shoba-e-Banat)", ur: "لڑکوں (شعبۂ بنین) اور لڑکیوں (شعبۂ بنات) کے لیے الگ الگ شعبے", ar: "أقسام منفصلة للبنين (شعبة البنين) والبنات (شعبة البنات)" },
  "about-li2":  { en: "Authentic Islamic curriculum rooted in the Quran and Sunnah", ur: "قرآن و سنت پر مبنی مستند اسلامی نصاب", ar: "منهج إسلامي أصيل مستند إلى القرآن والسنة" },
  "about-li3":  { en: "Modern skills including Computer Education and Tailoring", ur: "جدید مہارتیں جیسے کمپیوٹر تعلیم اور سلائی", ar: "مهارات حديثة تشمل تعليم الحاسوب والخياطة" },
  "about-li4":  { en: "Safe, nurturing, and spiritually enriching environment", ur: "محفوظ، پرورش کرنے والا اور روحانی ماحول", ar: "بيئة آمنة وتربوية ومثرية روحياً" },
  "about-li5":  { en: "Qualified, experienced, and dedicated teaching staff", ur: "اہل، تجربہ کار اور وقف اساتذہ کرام", ar: "هيئة تدريسية مؤهلة وذات خبرة ومتفانية" },
  "about-btn":  { en: "Read More About Us", ur: "ہمارے بارے میں مزید پڑھیں", ar: "اقرأ المزيد عنا" },

  /* ---- INDEX — COURSES ---- */
  "courses-section-title": { en: "Our Courses",    ur: "ہمارے کورسز",  ar: "دوراتنا" },
  "courses-h2":            { en: "Educational Programs", ur: "تعلیمی پروگرام", ar: "البرامج التعليمية" },
  "courses-sub":           { en: "Comprehensive Islamic and modern education programs for boys and girls", ur: "لڑکوں اور لڑکیوں کے لیے جامع اسلامی اور جدید تعلیمی پروگرام", ar: "برامج تعليمية إسلامية وحديثة شاملة للبنين والبنات" },
  "course1-h3":  { en: "Hifz-ul-Quran",                    ur: "حفظ القرآن",              ar: "حفظ القرآن الكريم" },
  "course1-p":   { en: "Complete memorization of the Holy Quran under expert Huffaz with Tajweed and proper recitation rules.", ur: "ماہر حفاظ کی نگرانی میں قرآن کریم کا مکمل حفظ، تجوید اور صحیح تلاوت کے ساتھ۔", ar: "حفظ القرآن الكريم كاملاً تحت إشراف حفاظ متخصصين مع تعلّم أحكام التجويد والتلاوة الصحيحة." },
  "course2-h3":  { en: "Alimah & Fazilah",                  ur: "عالمہ و فاضلہ",           ar: "دورة العالمة والفاضلة" },
  "course2-p":   { en: "Advanced Islamic scholarship programs covering Tafsir, Hadith, Fiqh, and all classical Islamic sciences.", ur: "تفسیر، حدیث، فقہ اور تمام کلاسیکی اسلامی علوم کا احاطہ کرنے والے اعلیٰ علمی پروگرام۔", ar: "برامج دراسية إسلامية متقدمة تشمل التفسير والحديث والفقه وسائر العلوم الإسلامية الكلاسيكية." },
  "course3-h3":  { en: "Momina Course",                     ur: "مومنہ کورس",              ar: "دورة المؤمنة" },
  "course3-p":   { en: "A foundational course in Islamic beliefs, practice, and character building for young Muslim women.", ur: "مسلمان خواتین کے لیے اسلامی عقائد، عمل اور کردار سازی کا بنیادی کورس۔", ar: "دورة أساسية في العقيدة الإسلامية والعبادة وبناء الشخصية للمرأة المسلمة." },
  "course4-h3":  { en: "One-Year Diploma in Deeniyat",      ur: "ایک سالہ دینیات ڈپلومہ",  ar: "دبلوم الدينيات لسنة واحدة" },
  "course4-p":   { en: "An intensive one-year program covering the essential pillars of Islamic knowledge and practice.", ur: "اسلامی علم اور عمل کے بنیادی ارکان پر محیط ایک سالہ گہرا پروگرام۔", ar: "برنامج مكثف لمدة عام واحد يشمل أركان المعرفة والممارسة الإسلامية الأساسية." },
  "course5-h3":  { en: "Computer Education",                ur: "کمپیوٹر تعلیم",           ar: "تعليم الحاسوب" },
  "course5-p":   { en: "Modern computer literacy and digital skills integrated with Islamic education to prepare students for the future.", ur: "اسلامی تعلیم کے ساتھ جدید کمپیوٹر خواندگی اور ڈیجیٹل مہارتیں — طلباء کو مستقبل کے لیے تیار کرنے کے لیے۔", ar: "محو الأمية الحاسوبية والمهارات الرقمية الحديثة مدمجةً بالتعليم الإسلامي لإعداد الطلاب للمستقبل." },
  "course6-h3":  { en: "Tailoring & Skill Development",     ur: "سلائی کڑھائی و ہنر سازی", ar: "الخياطة والتدريب المهني" },
  "course6-p":   { en: "Practical vocational training in tailoring and handicrafts to empower students with livelihood skills.", ur: "طلباء کو روزگار کی مہارتوں سے بہرہ مند کرنے کے لیے سلائی اور دستکاری میں عملی پیشہ ورانہ تربیت۔", ar: "تدريب مهني عملي في الخياطة والحرف اليدوية لتمكين الطلاب من مهارات كسب الرزق." },
  "courses-btn": { en: "View All Programs", ur: "تمام پروگرام دیکھیں", ar: "عرض جميع البرامج" },
  "course-learn-more": { en: "Learn More", ur: "مزید جانیں", ar: "اعرف أكثر" },

  /* ---- INDEX — WHY CHOOSE US ---- */
  "why-section-title": { en: "Why Choose Us?",            ur: "ہمیں کیوں چنیں؟",     ar: "لماذا تختارنا؟" },
  "why-h2":            { en: "Why Choose Our Jamia?",     ur: "ہماری جامعہ کیوں چنیں؟", ar: "لماذا تختار جامعتنا؟" },
  "why1-h3": { en: "Authentic Deeni Education", ur: "معیاری دینی تعلیم",   ar: "تعليم ديني أصيل" },
  "why1-p":  { en: "Curriculum rooted in the Quran, Sunnah, and classical Islamic scholarship.", ur: "قرآن، سنت اور کلاسیکی اسلامی علوم پر مبنی نصاب۔", ar: "منهج مستند إلى القرآن والسنة والتراث الإسلامي الكلاسيكي." },
  "why2-h3": { en: "Character & Tarbiyah",         ur: "اخلاق اور تربیت",      ar: "الأخلاق والتربية" },
  "why2-p":  { en: "Holistic moral and spiritual development alongside academic excellence.", ur: "تعلیمی عمدگی کے ساتھ ساتھ جامع اخلاقی اور روحانی ترقی۔", ar: "تنمية أخلاقية وروحية شاملة جنباً إلى جنب مع التفوق الأكاديمي." },
  "why3-h3": { en: "Qualified Teachers",           ur: "تجربہ کار اساتذہ",     ar: "معلمون مؤهلون" },
  "why3-p":  { en: "Experienced, dedicated faculty committed to students' growth and success.", ur: "طلباء کی نشوونما اور کامیابی کے لیے وقف تجربہ کار اساتذہ۔", ar: "كادر تعليمي ذو خبرة ومتفانٍ لنمو الطلاب ونجاحهم." },
  "why4-h3": { en: "Modern Skills",               ur: "جدید مہارتیں",          ar: "المهارات الحديثة" },
  "why4-p":  { en: "Computer education and vocational training to prepare students for modern life.", ur: "جدید زندگی کے لیے طلباء کو تیار کرنے کے لیے کمپیوٹر تعلیم اور پیشہ ورانہ تربیت۔", ar: "تعليم الحاسوب والتدريب المهني لإعداد الطلاب لمتطلبات الحياة العصرية." },

  /* ---- INDEX — NEWS ---- */
  "news-section-title": { en: "Latest News & Announcements", ur: "تازہ خبریں و اعلانات", ar: "آخر الأخبار والإعلانات" },
  "news-h2":            { en: "Latest News & Announcements", ur: "تازہ خبریں و اعلانات", ar: "آخر الأخبار والإعلانات" },
  "news1-h3":  { en: "Admissions Open for Academic Year 2026–27", ur: "تعلیمی سال ۲۰۲۶–۲۷ کے لیے داخلے کھل گئے", ar: "القبول مفتوح للعام الدراسي ٢٠٢٦–٢٧" },
  "news2-h3":  { en: "Annual Results Announcement — All Courses", ur: "تمام کورسز کے سالانہ نتائج کا اعلان",          ar: "إعلان النتائج السنوية — جميع الدورات" },
  "news3-h3":  { en: "Winter Break Schedule — December 2026",     ur: "موسم سرما کی چھٹیوں کا شیڈول — دسمبر ۲۰۲۶",  ar: "جدول إجازة الشتاء — ديسمبر ٢٠٢٦" },
  "news-all-btn":  { en: "View All Announcements", ur: "تمام اعلانات دیکھیں", ar: "عرض جميع الإعلانات" },
  "ql-title":      { en: "Quick Links",          ur: "فوری لنکس",           ar: "روابط سريعة" },
  "ql-admission":  { en: "Admission Form",        ur: "داخلہ فارم",          ar: "استمارة القبول" },
  "ql-notices":    { en: "Notices & Circulars",   ur: "اعلانات و سرکلر",     ar: "الإشعارات والتعاميم" },
  "ql-courses":    { en: "Course Details",        ur: "کورس کی تفصیلات",     ar: "تفاصيل الدورات" },
  "ql-donate":     { en: "Donate Online",         ur: "آن لائن عطیہ دیں",    ar: "تبرع عبر الإنترنت" },
  "ql-gallery":    { en: "Photo Gallery",         ur: "فوٹو گیلری",          ar: "معرض الصور" },
  "ql-contact":    { en: "Contact Us",            ur: "ہم سے رابطہ کریں",    ar: "اتصل بنا" },

  /* ---- INDEX — DONATION ---- */
  "donate-section-title": { en: "Support Islamic Education",        ur: "دینی تعلیم میں تعاون کریں",    ar: "ادعم التعليم الإسلامي" },
  "donate-h2":            { en: "Support Islamic Education",        ur: "دینی تعلیم میں تعاون کریں",    ar: "ادعم التعليم الإسلامي" },
  "donate-p1":    { en: "Your generous donation helps us provide quality Islamic education to students who cannot afford it. Every contribution — big or small — is an ongoing charity (Sadaqah Jariyah).",
                    ur: "آپ کا فراخدلانہ عطیہ ہمیں ان طلباء کو معیاری اسلامی تعلیم فراہم کرنے میں مدد کرتا ہے جو اسے برداشت نہیں کر سکتے۔ ہر تعاون — چھوٹا یا بڑا — ایک صدقہ جاریہ ہے۔",
                    ar: "تساعد تبرعاتكم الكريمة في تقديم تعليم إسلامي راقٍ للطلاب غير القادرين. كل مساهمة — كبيرة أو صغيرة — هي صدقة جارية." },
  "donate-btn":   { en: "Donate Now",    ur: "ابھی عطیہ دیں",  ar: "تبرَّع الآن" },
  "donate-btn2":  { en: "Monthly Donor", ur: "ماہانہ عطیہ دہندہ", ar: "متبرع شهري" },
  "donate-qr-title": { en: "Scan to Donate via UPI", ur: "یو پی آئی سے عطیہ دینے کے لیے اسکین کریں", ar: "امسح للتبرع عبر UPI" },
  "donate-all-btn":  { en: "View All Payment Methods", ur: "تمام ادائیگی کے طریقے دیکھیں", ar: "عرض جميع طرق الدفع" },

  /* ---- INDEX — GALLERY ---- */
  "gallery-section-title": { en: "Photo Gallery", ur: "تصویری گیلری", ar: "معرض الصور" },
  "gallery-h2":            { en: "Photo Gallery", ur: "تصویری گیلری", ar: "معرض الصور" },
  "gallery-sub":           { en: "Glimpses of campus life, activities, and events at the Jamia", ur: "جامعہ میں کیمپس کی زندگی، سرگرمیوں اور تقریبات کی جھلکیاں", ar: "لقطات من الحياة الجامعية والأنشطة والفعاليات" },
  "gallery-btn":           { en: "View Full Gallery", ur: "مکمل گیلری دیکھیں", ar: "عرض المعرض كاملاً" },

  /* ---- INDEX — CONTACT SNIPPET ---- */
  "contact-section-title": { en: "Get in Touch",  ur: "رابطہ کریں",      ar: "تواصل معنا" },
  "contact-h2":            { en: "Get in Touch",  ur: "رابطہ کریں",      ar: "تواصل معنا" },
  "contact1-h3":  { en: "Our Address",       ur: "ہمارا پتہ",          ar: "عنواننا" },
  "contact2-h3":  { en: "Phone & WhatsApp",  ur: "فون اور واٹس ایپ",   ar: "الهاتف وواتساب" },
  "contact3-h3":  { en: "Email",             ur: "ای میل",              ar: "البريد الإلكتروني" },

  /* ---- FOOTER ---- */
  "footer-desc":       { en: "Jamia Ayesha Siddiqua Lil Banin Wal Banat — Nurturing Islamic scholars and upright citizens through authentic Deeni education.",
                          ur: "جامعہ عائشہ صدیقہ — مستند دینی تعلیم کے ذریعے اسلامی علماء اور نیک شہریوں کی تربیت۔",
                          ar: "جامعة عائشة الصديقة — تنشئة العلماء والمواطنين الصالحين عبر التعليم الديني الأصيل." },
  "footer-founder":    { en: "Founder & Nazim: Maulana Muhammad Saleem Rahmani", ur: "بانی و ناظم: مولانا محمد سلیم رحمانی", ar: "المؤسس والناظم: مولانا محمد سليم رحماني" },
  "footer-ql":         { en: "Quick Links",  ur: "فوری لنکس",  ar: "روابط سريعة" },
  "footer-info":       { en: "Information",  ur: "معلومات",      ar: "معلومات" },
  "footer-contact":    { en: "Contact",      ur: "رابطہ",        ar: "اتصل بنا" },
  "footer-copyright":  { en: "© 2026 Jamia Ayesha Siddiqua Lil Banin Wal Banat. All rights reserved.",
                          ur: "© ۲۰۲۶ جامعہ عائشہ صدیقہ للبنین والبنات۔ جملہ حقوق محفوظ ہیں۔",
                          ar: "© ٢٠٢٦ جامعة عائشة الصديقة للبنين والبنات. جميع الحقوق محفوظة." },
  "footer-privacy":    { en: "Privacy Policy", ur: "رازداری کی پالیسی", ar: "سياسة الخصوصية" },

  /* ---- PAGE HEROES (inner pages) ---- */
  "ph-about":       { en: "About Jamia Ayesha Siddiqua", ur: "جامعہ عائشہ صدیقہ کے بارے میں", ar: "عن جامعة عائشة الصديقة" },
  "ph-about-sub":   { en: "Our history, mission, vision, and leadership — in multiple languages", ur: "ہماری تاریخ، مشن، وژن اور قیادت — متعدد زبانوں میں", ar: "تاريخنا ورسالتنا ورؤيتنا وقيادتنا — بلغات متعددة" },
  "ph-departments": { en: "Our Departments", ur: "ہمارے شعبہ جات", ar: "أقسامنا" },
  "ph-dept-sub":    { en: "Dedicated learning environments for boys and girls", ur: "لڑکوں اور لڑکیوں کے لیے مخصوص تعلیمی ماحول", ar: "بيئات تعليمية مخصصة للبنين والبنات" },
  "ph-courses":     { en: "Courses & Educational Programs", ur: "کورسز و تعلیمی پروگرام", ar: "الدورات والبرامج التعليمية" },
  "ph-courses-sub": { en: "Comprehensive Islamic and modern education for boys and girls", ur: "لڑکوں اور لڑکیوں کے لیے جامع اسلامی اور جدید تعلیم", ar: "تعليم إسلامي وحديث شامل للبنين والبنات" },
  "ph-admissions":  { en: "Admissions", ur: "داخلہ", ar: "القبول" },
  "ph-adm-sub":     { en: "Join Jamia Ayesha Siddiqua — admissions open for all courses", ur: "جامعہ عائشہ صدیقہ میں شامل ہوں — تمام کورسز کے لیے داخلہ کھلا ہے", ar: "انضم إلى جامعة عائشة الصديقة — القبول مفتوح لجميع الدورات" },
  "ph-news":        { en: "News, Notices & Activities", ur: "خبریں، اعلانات اور سرگرمیاں", ar: "الأخبار والإعلانات والأنشطة" },
  "ph-news-sub":    { en: "Latest updates, announcements and events from the Jamia", ur: "جامعہ کی تازہ ترین خبریں، اعلانات اور تقریبات", ar: "آخر المستجدات والإعلانات والفعاليات من الجامعة" },
  "ph-donations":   { en: "Support Islamic Education", ur: "دینی تعلیم میں تعاون کریں", ar: "ادعم التعليم الإسلامي" },
  "ph-donate-sub":  { en: "Every donation is an ongoing charity — Sadaqah Jariyah", ur: "ہر عطیہ صدقہ جاریہ ہے", ar: "كل تبرع صدقة جارية" },
  "ph-gallery":     { en: "Photo & Video Gallery", ur: "تصویری و ویڈیو گیلری", ar: "معرض الصور والفيديو" },
  "ph-gallery-sub": { en: "Glimpses of campus life, events, and activities", ur: "کیمپس کی زندگی، تقریبات اور سرگرمیوں کی جھلکیاں", ar: "لقطات من الحياة الجامعية والفعاليات والأنشطة" },
  "ph-contact":     { en: "Contact Us", ur: "رابطہ کریں", ar: "اتصل بنا" },
  "ph-contact-sub": { en: "We're here to help — reach out via phone, WhatsApp, or email", ur: "ہم مدد کے لیے یہاں ہیں — فون، واٹس ایپ یا ای میل کے ذریعے رابطہ کریں", ar: "نحن هنا للمساعدة — تواصل معنا عبر الهاتف أو واتساب أو البريد الإلكتروني" },

  /* ---- BREADCRUMBS ---- */
  "bc-home": { en: "Home", ur: "ہوم", ar: "الرئيسية" },

  /* ---- ADMISSIONS PAGE ---- */
  "adm-how-title":  { en: "How to Apply",          ur: "داخلے کا طریقہ",       ar: "كيفية التقديم" },
  "adm-how-h2":     { en: "How to Apply",          ur: "داخلے کا طریقہ",       ar: "كيفية التقديم" },
  "adm-step1-h4":   { en: "Fill Enquiry Form",     ur: "انکوائری فارم بھریں", ar: "امل استمارة الاستفسار" },
  "adm-step1-p":    { en: "Complete the online enquiry form below with student details", ur: "ذیل میں آن لائن انکوائری فارم طالب علم کی تفصیلات کے ساتھ پُر کریں", ar: "أكمل استمارة الاستفسار الإلكترونية أدناه ببيانات الطالب" },
  "adm-step2-h4":   { en: "We Contact You",        ur: "ہم آپ سے رابطہ کریں گے", ar: "نتصل بك" },
  "adm-step2-p":    { en: "Our team will contact you within 2–3 working days", ur: "ہماری ٹیم ۲–۳ کاری دنوں میں آپ سے رابطہ کرے گی", ar: "سيتواصل معك فريقنا خلال ٢–٣ أيام عمل" },
  "adm-step3-h4":   { en: "Visit the Jamia",       ur: "جامعہ کا دورہ کریں",  ar: "زُر الجامعة" },
  "adm-step3-p":    { en: "Come for an interview and document verification", ur: "انٹرویو اور دستاویز کی تصدیق کے لیے آئیں", ar: "تعال للمقابلة والتحقق من الوثائق" },
  "adm-step4-h4":   { en: "Confirm Admission",     ur: "داخلہ مکمل کریں",     ar: "تأكيد القبول" },
  "adm-step4-p":    { en: "Complete registration and join the Jamia", ur: "رجسٹریشن مکمل کریں اور جامعہ میں شامل ہوں", ar: "أكمل التسجيل والتحق بالجامعة" },
  "adm-rules-title": { en: "Admission Rules & Requirements", ur: "داخلہ قوانین و شرائط", ar: "قواعد القبول ومتطلباته" },
  "adm-download-label": { en: "Download Admission Form (PDF)", ur: "داخلہ فارم ڈاؤن لوڈ کریں (PDF)", ar: "تحميل استمارة القبول (PDF)" },
  "adm-download-sub":   { en: "Print and fill the form before your visit to the Jamia", ur: "جامعہ آنے سے پہلے فارم پرنٹ کریں اور پُر کریں", ar: "اطبع الاستمارة وأكملها قبل زيارة الجامعة" },
  "adm-download-btn":   { en: "Download ↓", ur: "ڈاؤن لوڈ ↓", ar: "تحميل ↓" },
  "adm-form-title":     { en: "Online Admission Enquiry", ur: "آن لائن داخلہ انکوائری", ar: "استفسار القبول الإلكتروني" },
  "adm-form-sub":       { en: "Fill in the details below and our admissions team will contact you within 2–3 working days.", ur: "ذیل میں تفصیلات بھریں اور ہماری ٹیم ۲–۳ دنوں میں آپ سے رابطہ کرے گی۔", ar: "أكمل البيانات أدناه وسيتواصل معك فريق القبول خلال ٢–٣ أيام عمل." },
  "adm-submit-btn":     { en: "Submit Enquiry →", ur: "درخواست جمع کریں →", ar: "إرسال الاستفسار →" },
  "adm-status-title":   { en: "Admission Status", ur: "داخلہ کی صورت حال", ar: "حالة القبول" },
  "adm-helpline-title": { en: "Admission Helpline", ur: "داخلہ ہیلپ لائن", ar: "خط مساعدة القبول" },
  "adm-call-btn":       { en: "📞 Call Us", ur: "📞 کال کریں", ar: "📞 اتصل بنا" },
  "adm-wa-btn":         { en: "💬 WhatsApp", ur: "💬 واٹس ایپ", ar: "💬 واتساب" },

  /* ---- NEWS PAGE ---- */
  "news-filter-all":     { en: "All",      ur: "سب",       ar: "الكل" },
  "news-filter-notice":  { en: "Notices",  ur: "اعلانات",  ar: "الإشعارات" },
  "news-filter-event":   { en: "Events",   ur: "تقریبات",  ar: "الفعاليات" },
  "news-filter-result":  { en: "Results",  ur: "نتائج",    ar: "النتائج" },
  "news-filter-holiday": { en: "Holidays", ur: "چھٹیاں",   ar: "الإجازات" },

  /* ---- DONATIONS PAGE ---- */
  "don-methods-title": { en: "Ways to Donate",       ur: "تعاون کے طریقے",    ar: "طرق التبرع" },
  "don-methods-h2":    { en: "Ways to Donate",       ur: "تعاون کے طریقے",    ar: "طرق التبرع" },
  "don-upi-h3":        { en: "UPI / QR Code",        ur: "یو پی آئی / کیو آر", ar: "UPI / رمز QR" },
  "don-bank-h3":       { en: "Bank Transfer / NEFT", ur: "بینک ٹرانسفر",       ar: "تحويل بنكي / NEFT" },
  "don-monthly-h3":    { en: "Monthly Donation",     ur: "ماہانہ چندہ",         ar: "التبرع الشهري" },
  "don-impact-title":  { en: "Your Donation's Impact", ur: "آپ کے تعاون کا اثر", ar: "أثر تبرعك" },
  "don-impact-h2":     { en: "Your Donation's Impact", ur: "آپ کے تعاون کا اثر", ar: "أثر تبرعك" },

  /* ---- GALLERY PAGE ---- */
  "gal-photo-title": { en: "Photo Gallery", ur: "تصویری گیلری", ar: "معرض الصور" },
  "gal-photo-h2":    { en: "Photo Gallery", ur: "تصویری گیلری", ar: "معرض الصور" },
  "gal-video-title": { en: "Videos",        ur: "ویڈیوز",        ar: "مقاطع الفيديو" },
  "gal-video-h2":    { en: "Videos",        ur: "ویڈیوز",        ar: "مقاطع الفيديو" },

  /* ---- CONTACT PAGE ---- */
  "con-details-title": { en: "Get in Touch",       ur: "رابطہ کریں",        ar: "تواصل معنا" },
  "con-details-h2":    { en: "Get in Touch",       ur: "رابطہ کریں",        ar: "تواصل معنا" },
  "con-addr-h4":       { en: "Address",            ur: "پتہ",               ar: "العنوان" },
  "con-phone-h4":      { en: "Phone",              ur: "فون",               ar: "الهاتف" },
  "con-wa-h4":         { en: "WhatsApp",           ur: "واٹس ایپ",          ar: "واتساب" },
  "con-email-h4":      { en: "Email",              ur: "ای میل",            ar: "البريد الإلكتروني" },
  "con-hours-title":   { en: "Office Hours",       ur: "دفتری اوقات",       ar: "ساعات العمل" },
  "con-form-title":    { en: "Send Us a Message",  ur: "پیغام بھیجیں",      ar: "أرسل لنا رسالة" },
  "con-submit-btn":    { en: "Send Message →",     ur: "پیغام بھیجیں →",    ar: "إرسال الرسالة →" },
  "con-wa-chat-btn":   { en: "💬 Chat on WhatsApp", ur: "💬 واٹس ایپ پر چیٹ کریں", ar: "💬 تحدث عبر واتساب" },

  /* ---- ABOUT PAGE ---- */
  "about-intro-title": { en: "Introduction to the Jamia", ur: "جامعہ کا تعارف",        ar: "التعريف بالجامعة" },
  "about-intro-h2":    { en: "Introduction to the Jamia", ur: "جامعہ کا تعارف",        ar: "التعريف بالجامعة" },
  "about-intro-sub":   { en: "Read about our institution in your preferred language", ur: "اپنی پسندیدہ زبان میں ہمارے ادارے کے بارے میں پڑھیں", ar: "اقرأ عن مؤسستنا بلغتك المفضلة" },
  "about-mv-title":    { en: "Our Mission & Vision", ur: "ہمارا مشن اور وژن",   ar: "رسالتنا ورؤيتنا" },
  "about-mv-h2":       { en: "Our Mission & Vision", ur: "ہمارا مشن اور وژن",   ar: "رسالتنا ورؤيتنا" },
  "about-val-title":   { en: "Our Core Values",      ur: "ہماری بنیادی اقدار",  ar: "قيمنا الأساسية" },
  "about-val-h2":      { en: "Our Core Values",      ur: "ہماری بنیادی اقدار",  ar: "قيمنا الأساسية" },
  "about-lead-title":  { en: "Our Leadership",       ur: "ہماری قیادت",          ar: "قيادتنا" },
  "about-lead-h2":     { en: "Our Leadership",       ur: "ہماری قیادت",          ar: "قيادتنا" },
  "about-lead-sub":    { en: "Guided by experienced Islamic scholars and educators", ur: "تجربہ کار اسلامی علماء اور ماہرین تعلیم کی رہنمائی میں", ar: "تحت إشراف علماء ومربين إسلاميين ذوي خبرة" }
};

/* ============================================================
   setLang(lang) — call this from any button
   ============================================================ */
function setLang(lang) {
  if (!['en', 'ur', 'ar'].includes(lang)) lang = 'en';

  // Save preference
  try { localStorage.setItem('jamia-lang', lang); } catch(e) {}

  // Update button states
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    const btnLang = btn.getAttribute('data-lang');
    btn.classList.toggle('active', btnLang === lang);
  });

  // Apply dir + lang to <html>
  const isRTL = lang === 'ur' || lang === 'ar';
  document.documentElement.setAttribute('dir',  isRTL ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);

  // Apply RTL-aware font
  if (lang === 'ur') {
    document.documentElement.style.setProperty('--page-font', "'Noto Nastaliq Urdu', 'Amiri', serif");
  } else if (lang === 'ar') {
    document.documentElement.style.setProperty('--page-font', "'Amiri', serif");
  } else {
    document.documentElement.style.setProperty('--page-font', "'Inter', sans-serif");
  }

  // Walk every [data-i18n] element and swap text
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    const dict = TRANSLATIONS[key];
    if (!dict) return;
    const text = dict[lang] || dict['en'];
    if (el.getAttribute('data-i18n-html') === 'true') {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });

  // Adjust font-family on body for RTL scripts
  document.body.style.fontFamily = isRTL
    ? (lang === 'ar' ? "'Amiri', serif" : "'Noto Nastaliq Urdu', 'Amiri', serif")
    : '';
}

/* ============================================================
   Auto-apply saved language on page load
   ============================================================ */
(function () {
  let saved = 'en';
  try { saved = localStorage.getItem('jamia-lang') || 'en'; } catch(e) {}
  if (saved !== 'en') {
    // Defer slightly so DOM is ready
    document.addEventListener('DOMContentLoaded', function () {
      setLang(saved);
    });
  }
})();
