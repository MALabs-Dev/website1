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
  "about-lead-sub":    { en: "Guided by experienced Islamic scholars and educators", ur: "تجربہ کار اسلامی علماء اور ماہرین تعلیم کی رہنمائی میں", ar: "تحت إشراف علماء ومربين إسلاميين ذوي خبرة" },

  /* ---- COURSES PAGE — full content ---- */
  "course-apply-now":   { en: "Apply Now",             ur: "ابھی درخواست دیں",   ar: "قدِّم الآن" },
  "course-apply-adm":   { en: "Apply for Admission",   ur: "داخلے کے لیے درخواست", ar: "قدِّم للقبول" },
  "course-ask-q":       { en: "Ask a Question",        ur: "سوال پوچھیں",         ar: "اطرح سؤالاً" },
  "course-avail-for":   { en: "Available for:",        ur: "کے لیے دستیاب:",      ar: "متاح لـ:" },
  "course-dept-banin":  { en: "🕌 Shoba-e-Banin",      ur: "🕌 شعبۂ بنین",        ar: "🕌 شعبة البنين" },
  "course-dept-banat":  { en: "🌸 Shoba-e-Banat",      ur: "🌸 شعبۂ بنات",        ar: "🌸 شعبة البنات" },
  "course-meta-dur":    { en: "Duration",              ur: "مدت",                 ar: "المدة" },
  "course-meta-age":    { en: "Age",                   ur: "عمر",                 ar: "العمر" },
  "course-meta-dept":   { en: "Department",            ur: "شعبہ",                ar: "القسم" },
  "course1-h2":  { en: "Hifz-ul-Quran",              ur: "حفظ القرآن",            ar: "حفظ القرآن الكريم" },
  "course1-about-h3": { en: "About the Hifz Program", ur: "حفظ پروگرام کے بارے میں", ar: "عن برنامج الحفظ" },
  "course1-p1":  { en: "The Hifz-ul-Quran program is the foundation of our institution. Students who complete this sacred journey memorise the entire Holy Quran — all 30 Juz — under the supervision of qualified, experienced Huffaz. The program follows a structured revision and memorisation schedule ensuring lasting retention.", ur: "حفظ القرآن پروگرام ہمارے ادارے کی بنیاد ہے۔ جو طلباء اس مقدس سفر کو مکمل کرتے ہیں وہ اہل اور تجربہ کار حفاظ کی نگرانی میں پورا قرآن کریم — تمام ۳۰ پارے — حفظ کرتے ہیں۔ پروگرام ایک منظم ترتیب کی پیروی کرتا ہے۔", ar: "برنامج حفظ القرآن الكريم هو الركيزة الأساسية لمؤسستنا. يحفظ الطلاب المتميزون القرآن كاملاً — ثلاثين جزءاً — تحت إشراف حفاظ مؤهلين وفق برنامج منظم للمراجعة والحفظ." },
  "course1-p2":  { en: "Our Hifz curriculum also integrates proper Tajweed (rules of recitation) so students not only memorise the Quran but recite it correctly and beautifully. Regular revision sessions, individual attention, and monthly progress assessments ensure every student progresses at an effective pace.", ur: "ہمارے حفظ نصاب میں صحیح تجوید بھی شامل ہے تاکہ طلباء نہ صرف قرآن حفظ کریں بلکہ اسے صحیح اور خوبصورتی سے پڑھ سکیں۔ باقاعدہ دورہ، انفرادی توجہ اور ماہانہ جائزے ہر طالب علم کی ترقی کو یقینی بناتے ہیں۔", ar: "يتضمن منهجنا أحكام التجويد الصحيحة حتى لا يقتصر الطالب على الحفظ بل يتقن التلاوة الجميلة. تضمن جلسات المراجعة والمتابعة الفردية وتقييمات التقدم الشهرية تحقيق كل طالب تقدماً فعّالاً." },
  "course2-h2":  { en: "Alimah & Fazilah",            ur: "عالمہ و فاضلہ",         ar: "دورة العالمة والفاضلة" },
  "course2-about-h3": { en: "About the Alimah & Fazilah Program", ur: "عالمہ و فاضلہ پروگرام کے بارے میں", ar: "عن برنامج العالمة والفاضلة" },
  "course2-p1":  { en: "The Alimah and Fazilah courses are the flagship advanced Islamic scholarship programs of Jamia Ayesha Siddiqua, offered primarily through the Shoba-e-Banat department. These programs cover the full spectrum of classical Islamic sciences over several years of rigorous study.", ur: "عالمہ اور فاضلہ کورسز جامعہ عائشہ صدیقہ کے اعلیٰ اسلامی علمی پروگرام ہیں جو بنیادی طور پر شعبۂ بنات کے ذریعے پیش کیے جاتے ہیں۔ یہ پروگرام کئی سالوں کی محنت کے ساتھ کلاسیکی اسلامی علوم کا مکمل احاطہ کرتے ہیں۔", ar: "تُعدّ دورتا العالمة والفاضلة البرامجَ العلمية الإسلامية المتقدمة الرائدة في الجامعة، وتُقدَّم أساساً عبر شعبة البنات، وتشمل كامل العلوم الإسلامية الكلاسيكية عبر سنوات من الدراسة المكثفة." },
  "course2-p2":  { en: "The Alimah course provides a comprehensive foundation in Tafsir, Hadith, Fiqh, Aqeedah, Arabic grammar, and Islamic history. The Fazilah course builds upon this with advanced studies in specialised Islamic disciplines, producing graduates who are qualified to teach and guide their communities.", ur: "عالمہ کورس تفسیر، حدیث، فقہ، عقیدہ، عربی گرامر اور اسلامی تاریخ میں جامع بنیاد فراہم کرتا ہے۔ فاضلہ کورس اس پر آگے بڑھتا ہے اور ایسے فارغین تیار کرتا ہے جو تدریس اور رہنمائی کے اہل ہوں۔", ar: "توفر دورة العالمة أساساً شاملاً في التفسير والحديث والفقه والعقيدة والنحو والتاريخ الإسلامي. وتبني دورة الفاضلة على ذلك بدراسات متقدمة تُخرّج خريجات مؤهلات للتدريس وتوجيه المجتمع." },
  "course3-h2":  { en: "Momina Course",               ur: "مومنہ کورس",            ar: "دورة المؤمنة" },
  "course3-about-h3": { en: "About the Momina Course", ur: "مومنہ کورس کے بارے میں", ar: "عن دورة المؤمنة" },
  "course3-p1":  { en: "The Momina Course is a focused Islamic program for girls and young women who wish to strengthen their faith, Islamic knowledge, and character. It is shorter than the full Alimah course but provides a solid, practical grounding in all essential aspects of Islamic belief and practice.", ur: "مومنہ کورس ان لڑکیوں اور نوجوان خواتین کے لیے ایک مخصوص اسلامی پروگرام ہے جو اپنے ایمان، اسلامی علم اور کردار کو مضبوط کرنا چاہتی ہیں۔", ar: "دورة المؤمنة برنامج إسلامي مركّز للفتيات والشابات اللواتي يرغبن في تعزيز إيمانهن ومعرفتهن الإسلامية وأخلاقهن." },
  "course4-h2":  { en: "Deeniyat Diploma",            ur: "دینیات ڈپلومہ",          ar: "دبلوم الدينيات" },
  "course4-about-h3": { en: "About the One-Year Diploma in Deeniyat", ur: "ایک سالہ دینیات ڈپلومہ کے بارے میں", ar: "عن دبلوم الدينيات لسنة واحدة" },
  "course4-p1":  { en: "The One-Year Diploma in Deeniyat is an intensive, accessible program designed for students who wish to acquire essential Islamic knowledge in a short time. It covers the core pillars of Islamic faith, worship, ethics, and practice in a structured and engaging way.", ur: "ایک سالہ دینیات ڈپلومہ ایک گہرا اور قابل رسائی پروگرام ہے جو ان طلباء کے لیے بنایا گیا ہے جو کم وقت میں ضروری اسلامی علم حاصل کرنا چاہتے ہیں۔", ar: "دبلوم الدينيات لسنة واحدة برنامج مكثف وميسور لمن يرغب في اكتساب المعرفة الإسلامية الأساسية في وقت قصير." },
  "course5-h2":  { en: "Computer Education",          ur: "کمپیوٹر تعلیم",          ar: "تعليم الحاسوب" },
  "course5-about-h3": { en: "About Computer Education", ur: "کمپیوٹر تعلیم کے بارے میں", ar: "عن تعليم الحاسوب" },
  "course5-p1":  { en: "In recognition of the importance of digital literacy in the modern world, Jamia Ayesha Siddiqua offers a comprehensive Computer Education program for both boys and girls. This course ensures students are equipped with the essential technology skills needed for education, communication, and future employment.", ur: "جدید دنیا میں ڈیجیٹل خواندگی کی اہمیت کو تسلیم کرتے ہوئے جامعہ عائشہ صدیقہ لڑکوں اور لڑکیوں دونوں کے لیے کمپیوٹر تعلیم پروگرام پیش کرتا ہے۔", ar: "إدراكاً لأهمية محو الأمية الرقمية، تقدم الجامعة برنامج تعليم حاسوبي شاملاً للبنين والبنات لتزويدهم بالمهارات التقنية الأساسية." },
  "course6-h2":  { en: "Tailoring & Skill Development", ur: "سلائی کڑھائی و ہنر سازی", ar: "الخياطة والتدريب المهني" },
  "course6-about-h3": { en: "About Tailoring & Skill Development", ur: "سلائی و ہنر سازی کے بارے میں", ar: "عن الخياطة والتدريب المهني" },
  "course6-p1":  { en: "The Tailoring and Skill Development program empowers female students with practical vocational skills that can provide them with economic independence and a means of halal livelihood.", ur: "سلائی اور ہنر سازی پروگرام خواتین طلباء کو عملی پیشہ ورانہ مہارتوں سے بہرہ مند کرتا ہے جو انہیں اقتصادی آزادی اور حلال روزگار فراہم کر سکتی ہیں۔", ar: "يُمكّن برنامج الخياطة والتدريب المهني الطالباتِ من المهارات المهنية العملية التي توفر لهن الاستقلال الاقتصادي وكسب الرزق الحلال." },
  "hl-huffaz":   { en: "✅ Qualified Huffaz teachers",        ur: "✅ اہل حفاظ اساتذہ",           ar: "✅ معلمون حفاظ مؤهلون" },
  "hl-attention":{ en: "✅ Individual attention & tracking",  ur: "✅ انفرادی توجہ اور پیروی",    ar: "✅ متابعة فردية" },
  "hl-tajweed":  { en: "✅ Tajweed integrated",               ur: "✅ تجوید شامل",                ar: "✅ التجويد مدمج" },
  "hl-reports":  { en: "✅ Monthly parent reports",           ur: "✅ ماہانہ والدین رپورٹ",       ar: "✅ تقارير شهرية للأولياء" },
  "hl-revision": { en: "✅ Regular revision sessions",        ur: "✅ باقاعدہ دورہ سیشنز",        ar: "✅ جلسات مراجعة منتظمة" },
  "hl-ceremony": { en: "✅ Completion ceremony",              ur: "✅ تکمیل کی تقریب",            ar: "✅ حفل الختم" },
  "hl-tafsir":   { en: "✅ Tafsir & Quran sciences",          ur: "✅ تفسیر اور علوم القرآن",     ar: "✅ التفسير وعلوم القرآن" },
  "hl-hadith":   { en: "✅ Hadith with chain analysis",       ur: "✅ سند کے ساتھ حدیث",         ar: "✅ الحديث مع تحليل السند" },
  "hl-fiqh":     { en: "✅ Fiqh & Islamic jurisprudence",     ur: "✅ فقہ اور اسلامی قانون",      ar: "✅ الفقه وأصوله" },
  "hl-arabic":   { en: "✅ Arabic grammar & literature",      ur: "✅ عربی گرامر اور ادب",        ar: "✅ النحو والأدب العربي" },
  "hl-history":  { en: "✅ Islamic history & biography",      ur: "✅ اسلامی تاریخ و سیرت",       ar: "✅ التاريخ والسيرة الإسلامية" },
  "hl-cert":     { en: "✅ Recognised certification",         ur: "✅ تسلیم شدہ سرٹیفکیٹ",       ar: "✅ شهادة معتمدة" },
  "hl-nazira":   { en: "✅ Quran with Tajweed",               ur: "✅ تجوید کے ساتھ قرآن",        ar: "✅ القرآن مع التجويد" },
  "hl-fiqh-ibd": { en: "✅ Basic Fiqh & Ibadah",              ur: "✅ بنیادی فقہ اور عبادت",      ar: "✅ الفقه الأساسي والعبادة" },
  "hl-char":     { en: "✅ Islamic character building",       ur: "✅ اسلامی کردار سازی",         ar: "✅ بناء الشخصية الإسلامية" },
  "hl-seerah":   { en: "✅ Seerah & Islamic history",         ur: "✅ سیرت اور اسلامی تاریخ",     ar: "✅ السيرة والتاريخ الإسلامي" },
  "hl-lifestyle":{ en: "✅ Practical Islamic lifestyle",      ur: "✅ عملی اسلامی طرز زندگی",     ar: "✅ نمط الحياة الإسلامي العملي" },
  "hl-diploma":  { en: "✅ Diploma certificate",              ur: "✅ ڈپلومہ سرٹیفکیٹ",           ar: "✅ شهادة الدبلوم" },
  "hl-pillars":  { en: "✅ Pillars of Islam & Iman",          ur: "✅ ارکان اسلام اور ایمان",      ar: "✅ أركان الإسلام والإيمان" },
  "hl-fiqh-wor": { en: "✅ Fiqh of daily worship",           ur: "✅ روزمرہ عبادت کا فقہ",        ar: "✅ فقه العبادات اليومية" },
  "hl-ethics":   { en: "✅ Islamic morals & ethics",          ur: "✅ اسلامی اخلاق و آداب",        ar: "✅ الأخلاق الإسلامية" },
  "hl-seerah2":  { en: "✅ Short Seerah overview",            ur: "✅ سیرت کا مختصر جائزہ",        ar: "✅ نظرة عامة على السيرة" },
  "hl-quran-rec":{ en: "✅ Quran recitation & basics",        ur: "✅ قرآن تلاوت اور بنیادیات",    ar: "✅ تلاوة القرآن وأساسياته" },
  "hl-computer": { en: "✅ Basic computer operations",        ur: "✅ بنیادی کمپیوٹر آپریشنز",    ar: "✅ العمليات الحاسوبية الأساسية" },
  "hl-msoffice": { en: "✅ MS Office (Word, Excel)",          ur: "✅ ایم ایس آفس (ورڈ، ایکسل)",  ar: "✅ MS Office (Word, Excel)" },
  "hl-internet": { en: "✅ Internet & email basics",          ur: "✅ انٹرنیٹ اور ای میل بنیادیات", ar: "✅ أساسيات الإنترنت والبريد" },
  "hl-digital":  { en: "✅ Safe digital practices",          ur: "✅ محفوظ ڈیجیٹل استعمال",      ar: "✅ الممارسات الرقمية الآمنة" },
  "hl-typing":   { en: "✅ Typing & data entry",             ur: "✅ ٹائپنگ اور ڈیٹا انٹری",     ar: "✅ الكتابة وإدخال البيانات" },
  "hl-cert2":    { en: "✅ Certificate on completion",        ur: "✅ تکمیل پر سرٹیفکیٹ",         ar: "✅ شهادة عند الإتمام" },
  "hl-stitch":   { en: "✅ Basic to advanced stitching",      ur: "✅ بنیادی سے اعلیٰ سلائی",     ar: "✅ الخياطة من الأساسية للمتقدمة" },
  "hl-cutting":  { en: "✅ Garment cutting & patterns",       ur: "✅ کپڑا کاٹنا اور پیٹرن",      ar: "✅ قص الأقمشة والأنماط" },
  "hl-embroid":  { en: "✅ Embroidery & handcraft",           ur: "✅ کڑھائی اور دستکاری",         ar: "✅ التطريز والحرف اليدوية" },
  "hl-machine":  { en: "✅ Machine operation",                ur: "✅ مشین آپریشن",                ar: "✅ تشغيل الماكينة" },
  "hl-project":  { en: "✅ Practical project work",          ur: "✅ عملی پروجیکٹ کام",           ar: "✅ العمل التطبيقي" },

  /* ---- DEPARTMENTS PAGE ---- */
  "dept-banin-h2":   { en: "Shoba-e-Banin",            ur: "شعبۂ بنین",              ar: "شعبة البنين" },
  "dept-banat-h2":   { en: "Shoba-e-Banat",            ur: "شعبۂ بنات",              ar: "شعبة البنات" },
  "dept-banin-urdu": { en: "Shoba-e-Banin — Boys' Department", ur: "شعبۂ بنین — لڑکوں کا شعبہ", ar: "شعبة البنين — قسم الطلاب" },
  "dept-banat-urdu": { en: "Shoba-e-Banat — Girls' Department", ur: "شعبۂ بنات — لڑکیوں کا شعبہ", ar: "شعبة البنات — قسم الطالبات" },
  "dept-banin-desc": { en: "A focused Islamic educational department for boys, combining classical scholarship with modern skills", ur: "لڑکوں کے لیے ایک مخصوص اسلامی تعلیمی شعبہ، کلاسیکی علوم اور جدید مہارتوں کا امتزاج", ar: "قسم تعليمي إسلامي مخصص للطلاب يجمع بين الدراسة الكلاسيكية والمهارات الحديثة" },
  "dept-banat-desc": { en: "A safe, nurturing, and high-quality Islamic educational department dedicated to female students", ur: "خواتین طلباء کے لیے ایک محفوظ، پرورش کرنے والا اور اعلیٰ معیاری اسلامی تعلیمی شعبہ", ar: "قسم تعليمي إسلامي آمن وراقٍ مخصص للطالبات" },
  "dept-banin-about-h3": { en: "About Shoba-e-Banin", ur: "شعبۂ بنین کے بارے میں", ar: "عن شعبة البنين" },
  "dept-banat-about-h3": { en: "About Shoba-e-Banat", ur: "شعبۂ بنات کے بارے میں", ar: "عن شعبة البنات" },
  "dept-courses-banin-h4": { en: "📚 Courses Offered in Shoba-e-Banin", ur: "📚 شعبۂ بنین میں پیش کردہ کورسز", ar: "📚 الدورات المقدمة في شعبة البنين" },
  "dept-courses-banat-h4": { en: "🌸 Courses Offered in Shoba-e-Banat", ur: "🌸 شعبۂ بنات میں پیش کردہ کورسز", ar: "🌸 الدورات المقدمة في شعبة البنات" },
  "dept-stat-students": { en: "Students Enrolled",      ur: "داخل طلباء",          ar: "الطلاب الملتحقون" },
  "dept-stat-faculty":  { en: "Qualified Faculty",      ur: "اہل اساتذہ",          ar: "أعضاء الهيئة المؤهلون" },
  "dept-stat-programs": { en: "Programs Offered",       ur: "پیش کردہ پروگرام",    ar: "البرامج المقدمة" },
  "dept-stat-env":      { en: "Dedicated Environment",  ur: "مخصوص ماحول",         ar: "بيئة متخصصة" },
  "dept-stat-secure":   { en: "Fully Secure Campus",    ur: "مکمل محفوظ کیمپس",    ar: "حرم آمن بالكامل" },
  "dept-apply-btn":     { en: "Apply for Admission",    ur: "داخلے کے لیے درخواست", ar: "قدِّم للقبول" },
  "pill-hifz":    { en: "📖 Hifz-ul-Quran",   ur: "📖 حفظ القرآن",      ar: "📖 حفظ القرآن" },
  "pill-alim":    { en: "🎓 Alim Course",      ur: "🎓 عالم کورس",       ar: "🎓 دورة العالم" },
  "pill-alimah":  { en: "🎓 Alimah Course",    ur: "🎓 عالمہ کورس",      ar: "🎓 دورة العالمة" },
  "pill-fazilah": { en: "🎓 Fazilah Course",   ur: "🎓 فاضلہ کورس",      ar: "🎓 دورة الفاضلة" },
  "pill-momina":  { en: "🌙 Momina Course",    ur: "🌙 مومنہ کورس",      ar: "🌙 دورة المؤمنة" },
  "pill-diploma": { en: "📜 Deeniyat Diploma", ur: "📜 دینیات ڈپلومہ",   ar: "📜 دبلوم الدينيات" },
  "pill-comp":    { en: "💻 Computer Education", ur: "💻 کمپیوٹر تعلیم",  ar: "💻 تعليم الحاسوب" },
  "pill-voc":     { en: "🧵 Vocational Skills", ur: "🧵 پیشہ ورانہ مہارتیں", ar: "🧵 المهارات المهنية" },
  "pill-tailor":  { en: "🧵 Tailoring & Skills", ur: "🧵 سلائی و ہنر",    ar: "🧵 الخياطة والمهارات" },

  /* ---- ABOUT PAGE ---- */
  "about-mission-h3":  { en: "🎯 Our Mission",  ur: "🎯 ہمارا مشن",   ar: "🎯 رسالتنا" },
  "about-vision-h3":   { en: "🌟 Our Vision",   ur: "🌟 ہمارا وژن",   ar: "🌟 رؤيتنا" },
  "about-mission-p":   { en: "To provide authentic, high-quality Islamic education rooted in the Quran and Sunnah, nurturing students who embody Islamic values, strong character, and practical skills — enabling them to serve their families, communities, and the Ummah with knowledge and integrity.", ur: "قرآن و سنت پر مبنی مستند اور اعلیٰ معیاری اسلامی تعلیم فراہم کرنا، ایسے طلباء کی تربیت کرنا جو اسلامی اقدار، مضبوط کردار اور عملی مہارتوں کے حامل ہوں اور علم و دیانت کے ساتھ اپنے خاندانوں، معاشروں اور امت کی خدمت کر سکیں۔", ar: "تقديم تعليم إسلامي أصيل وعالي الجودة مستند إلى القرآن والسنة، لتنشئة طلاب يجسّدون القيم الإسلامية وقوة الشخصية والمهارات العملية." },
  "about-vision-p":    { en: "To be a leading Islamic educational institution in Telangana that produces scholars, leaders, and community builders — graduates who are deeply grounded in their faith, modern in their outlook, and committed to the welfare of the society around them.", ur: "تلنگانہ میں ایک سرکردہ اسلامی تعلیمی ادارہ بننا جو علماء، رہنما اور معاشرے کے معمار تیار کرے — ایسے فارغین جو اپنے ایمان میں پختہ، نظریے میں جدید اور اپنے معاشرے کی فلاح کے لیے پرعزم ہوں۔", ar: "أن تكون الجامعة المؤسسة الإسلامية التعليمية الرائدة في تلنغانا، تُخرّج علماء وقادة وبنّائين مجتمعيين راسخين في إيمانهم ومنفتحين على العصر." },
  "val-knowledge": { en: "Knowledge",  ur: "علم",     ar: "العلم" },
  "val-character": { en: "Character",  ur: "اخلاق",   ar: "الأخلاق" },
  "val-integrity": { en: "Integrity",  ur: "دیانت",   ar: "الأمانة" },
  "val-service":   { en: "Service",    ur: "خدمت",    ar: "الخدمة" },
  "role-founder":  { en: "Founder & Nazim",         ur: "بانی و ناظم",            ar: "المؤسس والناظم" },
  "role-principal":{ en: "Principal",                ur: "مہتمم",                  ar: "المدير" },
  "role-head-banat":{ en: "Head — Shoba-e-Banat",   ur: "شعبۂ بنات کی انچارج",   ar: "رئيسة شعبة البنات" },
  "leader-p1":     { en: "The founder and principal authority of the Jamia, Maulana Rahmani has dedicated his life to the propagation of Islamic education in Telangana.", ur: "جامعہ کے بانی اور اعلیٰ اختیار، مولانا رحمانی نے اپنی زندگی تلنگانہ میں اسلامی تعلیم کے فروغ کے لیے وقف کی ہے۔", ar: "مؤسس الجامعة وصاحب السلطة العليا فيها، كرّس المولانا رحماني حياته لنشر التعليم الإسلامي في تلنغانا." },
  "leader-p2":     { en: "Oversees the day-to-day administration and academic excellence of the Jamia, ensuring the highest standards of Islamic education.", ur: "جامعہ کے روزمرہ انتظام اور علمی عمدگی کی نگرانی کرتے ہیں اور اسلامی تعلیم کے اعلیٰ ترین معیار کو یقینی بناتے ہیں۔", ar: "يشرف على الإدارة اليومية والتميز الأكاديمي للجامعة ضامناً أعلى معايير التعليم الإسلامي." },
  "leader-p3":     { en: "Leads the girls' department with compassion and expertise, fostering a nurturing and spiritually enriching environment for female students.", ur: "لڑکیوں کے شعبے کو ہمدردی اور مہارت کے ساتھ چلاتی ہیں اور خواتین طلباء کے لیے پرورش کرنے والا ماحول قائم کرتی ہیں۔", ar: "تقود شعبة البنات بتعاطف وكفاءة، مُهيّئةً بيئة تربوية مثرية روحياً للطالبات." },

  /* ---- ADMISSIONS PAGE ---- */
  "adm-label-name":    { en: "Student's Full Name *",        ur: "طالب علم کا پورا نام *",      ar: "الاسم الكامل للطالب *" },
  "adm-label-dob":     { en: "Date of Birth *",              ur: "تاریخ پیدائش *",              ar: "تاريخ الميلاد *" },
  "adm-label-gender":  { en: "Gender *",                     ur: "جنس *",                       ar: "الجنس *" },
  "adm-label-course":  { en: "Course Applying For *",        ur: "درخواست کردہ کورس *",         ar: "الدورة المطلوبة *" },
  "adm-label-parent":  { en: "Parent / Guardian Name *",     ur: "والدین / سرپرست کا نام *",    ar: "اسم ولي الأمر *" },
  "adm-label-phone":   { en: "Phone / WhatsApp Number *",    ur: "فون / واٹس ایپ نمبر *",      ar: "رقم الهاتف / واتساب *" },
  "adm-label-email":   { en: "Email Address",                ur: "ای میل پتہ",                  ar: "البريد الإلكتروني" },
  "adm-label-city":    { en: "City / Area *",                ur: "شہر / علاقہ *",               ar: "المدينة / المنطقة *" },
  "adm-label-quran":   { en: "Current Quran Reading Level",  ur: "قرآن پڑھنے کی موجودہ سطح",   ar: "مستوى قراءة القرآن الحالي" },
  "adm-label-msg":     { en: "Any Questions or Additional Information", ur: "کوئی سوال یا اضافی معلومات", ar: "أي أسئلة أو معلومات إضافية" },
  "adm-opt-sel-gen":   { en: "Select gender",                ur: "جنس منتخب کریں",              ar: "اختر الجنس" },
  "adm-opt-male":      { en: "Male (Shoba-e-Banin)",         ur: "لڑکا (شعبۂ بنین)",            ar: "ذكر (شعبة البنين)" },
  "adm-opt-female":    { en: "Female (Shoba-e-Banat)",       ur: "لڑکی (شعبۂ بنات)",            ar: "أنثى (شعبة البنات)" },
  "adm-opt-sel-course":{ en: "Select course",                ur: "کورس منتخب کریں",             ar: "اختر الدورة" },
  "adm-opt-hifz":      { en: "Hifz-ul-Quran",               ur: "حفظ القرآن",                  ar: "حفظ القرآن" },
  "adm-opt-alimah":    { en: "Alimah Course",                ur: "عالمہ کورس",                  ar: "دورة العالمة" },
  "adm-opt-fazilah":   { en: "Fazilah Course",               ur: "فاضلہ کورس",                  ar: "دورة الفاضلة" },
  "adm-opt-momina":    { en: "Momina Course",                ur: "مومنہ کورس",                  ar: "دورة المؤمنة" },
  "adm-opt-diploma":   { en: "One-Year Deeniyat Diploma",    ur: "ایک سالہ دینیات ڈپلومہ",      ar: "دبلوم الدينيات لسنة" },
  "adm-opt-comp":      { en: "Computer Education",           ur: "کمپیوٹر تعلیم",               ar: "تعليم الحاسوب" },
  "adm-opt-tailor":    { en: "Tailoring & Skill Development", ur: "سلائی و ہنر سازی",           ar: "الخياطة والتدريب" },
  "adm-opt-sel-lvl":   { en: "Select level",                 ur: "سطح منتخب کریں",              ar: "اختر المستوى" },
  "adm-opt-none":      { en: "Cannot read yet (Qaida level)", ur: "ابھی نہیں پڑھ سکتے (قاعدہ)", ar: "لا يقرأ بعد (مستوى القاعدة)" },
  "adm-opt-nazira":    { en: "Can read Quran (Nazira)",      ur: "قرآن پڑھ سکتے ہیں (ناظرہ)",  ar: "يقرأ القرآن (ناظرة)" },
  "adm-opt-partial":   { en: "Partially memorised",          ur: "جزوی حفظ",                    ar: "حفظ جزئي" },
  "adm-opt-hafiz":     { en: "Already a Hafiz",              ur: "پہلے سے حافظ",                ar: "حافظ بالفعل" },
  "adm-ph-name":       { en: "Enter full name",              ur: "پورا نام درج کریں",           ar: "أدخل الاسم الكامل" },
  "adm-ph-parent":     { en: "Father's or guardian's name",  ur: "والد یا سرپرست کا نام",       ar: "اسم الأب أو ولي الأمر" },
  "adm-ph-city":       { en: "Your city or area",            ur: "آپ کا شہر یا علاقہ",          ar: "مدينتك أو منطقتك" },
  "adm-ph-optional":   { en: "Optional",                     ur: "اختیاری",                     ar: "اختياري" },
  "adm-ph-msg":        { en: "Any questions, special requirements, or information you'd like to share...", ur: "کوئی سوال، خصوصی ضروریات، یا معلومات جو آپ شیئر کرنا چاہتے ہیں...", ar: "أي أسئلة أو متطلبات خاصة أو معلومات ترغب في مشاركتها..." },
  "adm-success-msg":   { en: "✅ JazakAllahu Khayran! Your enquiry has been received. Our admissions team will contact you within 2–3 working days. May Allah bless your endeavour.", ur: "✅ جزاکم اللہ خیراً! آپ کی درخواست موصول ہو گئی۔ ہماری ٹیم ۲–۳ دنوں میں آپ سے رابطہ کرے گی۔ اللہ آپ کی کوشش میں برکت عطا فرمائے۔", ar: "✅ جزاكم الله خيراً! تم استلام استفساركم. سيتواصل معك فريق القبول خلال ٢–٣ أيام عمل. بارك الله في مساعيكم." },
  "adm-info-status":   { en: "Current Status",   ur: "موجودہ صورت حال",   ar: "الحالة الحالية" },
  "adm-info-year":     { en: "Academic Year",    ur: "تعلیمی سال",         ar: "العام الدراسي" },
  "adm-info-lastdate": { en: "Last Date",        ur: "آخری تاریخ",         ar: "آخر موعد" },
  "adm-info-start":    { en: "Classes Begin",    ur: "کلاسیں شروع",        ar: "بدء الدراسة" },
  "adm-status-open":   { en: "🟢 Open",          ur: "🟢 کھلا ہے",          ar: "🟢 مفتوح" },
  "adm-accepting":     { en: "📚 Programs Accepting", ur: "📚 قابل داخلہ پروگرام", ar: "📚 البرامج القابلة للتقديم" },
  "adm-open":          { en: "✅ Open",           ur: "✅ کھلا",              ar: "✅ مفتوح" },
  "adm-help-p":        { en: "Have questions? Contact us directly:", ur: "کوئی سوال ہے؟ ہم سے براہ راست رابطہ کریں:", ar: "هل لديك أسئلة؟ تواصل معنا مباشرة:" },
  "adm-rule-title-h2": { en: "Admission Rules & Requirements", ur: "داخلہ قوانین و شرائط", ar: "قواعد القبول ومتطلباته" },

  /* ---- NEWS PAGE ---- */
  "news-notice-badge":  { en: "Notice",    ur: "اعلان",    ar: "إشعار" },
  "news-event-badge":   { en: "Event",     ur: "تقریب",    ar: "فعالية" },
  "news-result-badge":  { en: "Results",   ur: "نتائج",    ar: "النتائج" },
  "news-holiday-badge": { en: "Holiday",   ur: "چھٹی",     ar: "إجازة" },
  "news-apply-now":     { en: "Apply Now →",       ur: "ابھی درخواست دیں →",    ar: "قدِّم الآن →" },
  "news-read-more":     { en: "Read More →",       ur: "مزید پڑھیں →",          ar: "اقرأ المزيد →" },
  "news-dl-schedule":   { en: "Download Schedule ↓", ur: "شیڈول ڈاؤن لوڈ کریں ↓", ar: "تحميل الجدول ↓" },
  "news-imp-notice-h3": { en: "📢 Important Notice",  ur: "📢 اہم اعلان",           ar: "📢 إشعار مهم" },
  "news-imp-p":         { en: "Admissions are currently open for the 2026–27 academic year. Limited seats available.", ur: "تعلیمی سال ۲۰۲۶–۲۷ کے لیے داخلے ابھی کھلے ہیں۔ محدود نشستیں دستیاب ہیں۔", ar: "القبول مفتوح حالياً للعام الدراسي ٢٠٢٦–٢٧. المقاعد محدودة." },
  "news-imp-btn":       { en: "Apply Now",            ur: "ابھی درخواست دیں",      ar: "قدِّم الآن" },
  "news-archives-h3":   { en: "📁 Archives",          ur: "📁 آرکائیوز",            ar: "📁 الأرشيف" },
  "news-contact-h3":    { en: "📞 Contact Office",    ur: "📞 دفتر سے رابطہ",       ar: "📞 التواصل مع المكتب" },
  "news-dl-h3":         { en: "📄 Downloads",         ur: "📄 ڈاؤن لوڈز",           ar: "📄 التنزيلات" },
  "news-dl-adm-form":   { en: "📥 Admission Form",    ur: "📥 داخلہ فارم",          ar: "📥 استمارة القبول" },
  "news-dl-exam":       { en: "📥 Exam Schedule",     ur: "📥 امتحان شیڈول",        ar: "📥 جدول الامتحانات" },
  "news-dl-fee":        { en: "📥 Fee Structure",     ur: "📥 فیس ڈھانچہ",          ar: "📥 هيكل الرسوم" },
  "news-contact-p":     { en: "For clarification on any notice, contact the Jamia office directly.", ur: "کسی بھی اعلان کی وضاحت کے لیے جامعہ کے دفتر سے براہ راست رابطہ کریں۔", ar: "للاستفسار عن أي إشعار، تواصل مباشرة مع مكتب الجامعة." },
  "news-contact-sidebar-p": { en: "For clarification on any notice:", ur: "کسی بھی اعلان کی وضاحت کے لیے:", ar: "للاستفسار عن أي إشعار:" },

  /* ---- DONATIONS PAGE ---- */
  "don-sponsor-h3":     { en: "💚 Sponsor a Student's Education",  ur: "💚 ایک طالب علم کی تعلیم میں تعاون کریں", ar: "💚 ارعَ تعليم طالب" },
  "don-impact-quran-h4":{ en: "Preserve the Quran",    ur: "قرآن کا تحفظ کریں",   ar: "حافظ على القرآن" },
  "don-impact-quran-p": { en: "Your support helps train the next generation of Huffaz — guardians of the Holy Quran.", ur: "آپ کا تعاون حفاظ کی اگلی نسل کی تربیت میں مدد کرتا ہے — قرآن کریم کے محافظ۔", ar: "دعمك يُعين على تدريب جيل الحفاظ القادم — حُراس القرآن الكريم." },
  "don-impact-scholars-h4": { en: "Educate Scholars",  ur: "علماء تیار کریں",      ar: "أعدّ العلماء" },
  "don-impact-scholars-p":  { en: "Fund the education of future Alimahs and Islamic scholars who will guide communities.", ur: "مستقبل کی عالمات اور اسلامی علماء کی تعلیم کو فنڈ کریں جو معاشروں کی رہنمائی کریں گے۔", ar: "موّل تعليم العالمات والعلماء المستقبليين الذين سيقودون المجتمعات." },
  "don-impact-women-h4":    { en: "Empower Women",     ur: "خواتین کو بااختیار بنائیں", ar: "مكّن المرأة" },
  "don-impact-women-p":     { en: "Help girls gain practical skills — tailoring, computers — for economic independence.", ur: "لڑکیوں کو عملی مہارتیں — سلائی، کمپیوٹر — اقتصادی آزادی کے لیے حاصل کرنے میں مدد کریں۔", ar: "ساعد الفتيات على اكتساب مهارات عملية — خياطة وحاسوب — لتحقيق الاستقلال الاقتصادي." },
  "don-monthly-btn":        { en: "Become a Monthly Donor",            ur: "ماہانہ عطیہ دہندہ بنیں", ar: "كن متبرعاً شهرياً" },
  "don-wa-monthly-btn":     { en: "💬 WhatsApp to Become a Monthly Donor", ur: "💬 ماہانہ عطیہ دہندہ بننے کے لیے واٹس ایپ کریں", ar: "💬 واتساب للتسجيل كمتبرع شهري" },
  "don-tier1-benefit":      { en: "Contributes to stationery & books for one student", ur: "ایک طالب علم کے لیے کتابیں و اسٹیشنری", ar: "يُسهم في القرطاسية والكتب لطالب واحد" },
  "don-tier2-benefit":      { en: "Covers monthly fees for a needy student",           ur: "ضرورت مند طالب علم کی ماہانہ فیس",        ar: "يغطي الرسوم الشهرية لطالب محتاج" },
  "don-tier3-benefit":      { en: "Full scholarship support for a student",            ur: "ایک طالب علم کے لیے مکمل اسکالرشپ",      ar: "دعم منحة كاملة لطالب" },
  "don-upi-desc":           { en: "Scan the QR code with any UPI app — Google Pay, PhonePe, Paytm, BHIM", ur: "کسی بھی یو پی آئی ایپ سے کیو آر کوڈ اسکین کریں — گوگل پے، فون پے، پے ٹی ایم، بھیم", ar: "امسح رمز QR بأي تطبيق UPI — Google Pay أو PhonePe أو Paytm أو BHIM" },
  "don-bank-desc":          { en: "Transfer directly to the Jamia's bank account via NEFT, RTGS or IMPS", ur: "NEFT، RTGS یا IMPS کے ذریعے جامعہ کے بینک اکاؤنٹ میں براہ راست ٹرانسفر کریں", ar: "حوّل مباشرة إلى حساب الجامعة البنكي عبر NEFT أو RTGS أو IMPS" },
  "don-monthly-desc":       { en: "Set up a recurring monthly donation — sponsor a student's education every month", ur: "ماہانہ تعاون ترتیب دیں — ہر ماہ ایک طالب علم کی تعلیم میں حصہ دار بنیں", ar: "أنشئ تبرعاً شهرياً متكرراً — ارعَ تعليم طالب كل شهر" },
  "don-upi-or":             { en: "Or pay directly via UPI ID:", ur: "یا براہ راست یو پی آئی آئی ڈی سے ادائیگی کریں:", ar: "أو ادفع مباشرة عبر معرّف UPI:" },
  "don-bank-acc-name":      { en: "Account Name",  ur: "اکاؤنٹ کا نام",  ar: "اسم الحساب" },
  "don-bank-acc-no":        { en: "Account No.",   ur: "اکاؤنٹ نمبر",    ar: "رقم الحساب" },
  "don-bank-ifsc":          { en: "IFSC Code",     ur: "آئی ایف ایس سی", ar: "رمز IFSC" },
  "don-bank-name":          { en: "Bank",          ur: "بینک",            ar: "البنك" },
  "don-bank-branch":        { en: "Branch",        ur: "برانچ",           ar: "الفرع" },
  "don-wa-after":           { en: "Please WhatsApp payment confirmation after transfer", ur: "ٹرانسفر کے بعد ادائیگی کی تصدیق واٹس ایپ کریں", ar: "يرجى إرسال تأكيد الدفع عبر واتساب بعد التحويل" },

  /* ---- GALLERY PAGE ---- */
  "gal-filter-all":      { en: "All Photos",   ur: "تمام تصاویر",  ar: "جميع الصور" },
  "gal-filter-campus":   { en: "Campus",       ur: "کیمپس",         ar: "الحرم الجامعي" },
  "gal-filter-events":   { en: "Events",       ur: "تقریبات",       ar: "الفعاليات" },
  "gal-filter-classes":  { en: "Classes",      ur: "کلاسیں",        ar: "الفصول" },
  "gal-filter-grad":     { en: "Graduation",   ur: "تقسیم اسناد",   ar: "التخرج" },
  "gal-vid1-h4":  { en: "Introduction to Jamia Ayesha Siddiqua",  ur: "جامعہ عائشہ صدیقہ کا تعارف",   ar: "تعريف بجامعة عائشة الصديقة" },
  "gal-vid1-p":   { en: "A brief overview of our institution and its programs", ur: "ہمارے ادارے اور اس کے پروگراموں کا مختصر جائزہ", ar: "نظرة موجزة على مؤسستنا وبرامجها" },
  "gal-vid2-h4":  { en: "Hifz Completion Ceremony",               ur: "تکمیل حفظ کی تقریب",           ar: "حفل ختم الحفظ" },
  "gal-vid2-p":   { en: "Students completing their memorisation of the Holy Quran", ur: "طلباء کی تکمیل قرآن کریم حفظ", ar: "طلاب يُكملون حفظ القرآن الكريم" },
  "gal-vid3-h4":  { en: "Annual Function Highlights",             ur: "سالانہ تقریب کی جھلکیاں",      ar: "أبرز لحظات الحفل السنوي" },
  "gal-vid3-p":   { en: "Highlights from the annual awards and graduation function", ur: "سالانہ ایوارڈز اور تقسیم اسناد تقریب کی جھلکیاں", ar: "أبرز لحظات حفل الجوائز السنوي والتخرج" },

  /* ---- CONTACT PAGE ---- */
  "con-addr-p1":    { en: "Jamia Ayesha Siddiqua Lil Banin Wal Banat", ur: "جامعہ عائشہ صدیقہ للبنین والبنات", ar: "جامعة عائشة الصديقة للبنين والبنات" },
  "con-addr-p2":    { en: "Patancheru, Hyderabad",   ur: "پٹانچیرو، حیدرآباد",  ar: "باتانشيرو، حيدر آباد" },
  "con-addr-p3":    { en: "Telangana — 502 319, India", ur: "تلنگانہ — ۵۰۲ ۳۱۹، بھارت", ar: "تلنغانا — 502 319، الهند" },
  "con-phone-sub":  { en: "Saturday–Thursday · 8am–6pm",    ur: "ہفتہ–جمعرات · صبح ۸ – شام ۶", ar: "السبت–الخميس · ٨ص – ٦م" },
  "con-wa-sub":     { en: "Quick responses during office hours", ur: "دفتری اوقات میں فوری جوابات", ar: "ردود سريعة خلال ساعات العمل" },
  "con-email-sub":  { en: "Response within 1–2 working days",   ur: "۱–۲ کاری دنوں میں جواب",      ar: "رد خلال ١–٢ يومي عمل" },
  "con-sat-thu":    { en: "Saturday – Thursday",   ur: "ہفتہ – جمعرات",   ar: "السبت – الخميس" },
  "con-fri":        { en: "Friday",                ur: "جمعہ",              ar: "الجمعة" },
  "con-holidays":   { en: "Public Holidays",       ur: "عام تعطیلات",      ar: "الأعياد الرسمية" },
  "con-hours-sat":  { en: "8:00 AM – 6:00 PM",    ur: "صبح ۸:۰۰ – شام ۶:۰۰", ar: "٨:٠٠ص – ٦:٠٠م" },
  "con-closed":     { en: "Closed (Jumma)",        ur: "بند (جمعہ)",        ar: "مغلق (الجمعة)" },
  "con-closed2":    { en: "Closed",                ur: "بند",               ar: "مغلق" },
  "con-map-replace":{ en: "Google Maps will appear here.", ur: "گوگل میپ یہاں ظاہر ہوگا۔", ar: "ستظهر خرائط Google هنا." },
  "con-maps-btn":   { en: "Open in Google Maps ↗", ur: "گوگل میپس میں کھولیں ↗", ar: "افتح في خرائط Google ↗" },
  "con-labels-name":  { en: "Your Name *",        ur: "آپ کا نام *",       ar: "اسمك *" },
  "con-labels-phone": { en: "Phone / WhatsApp *", ur: "فون / واٹس ایپ *", ar: "الهاتف / واتساب *" },
  "con-labels-email": { en: "Email",              ur: "ای میل",             ar: "البريد الإلكتروني" },
  "con-labels-subj":  { en: "Subject *",          ur: "موضوع *",            ar: "الموضوع *" },
  "con-labels-msg":   { en: "Message *",          ur: "پیغام *",            ar: "الرسالة *" },
  "con-opt-adm":      { en: "Admission Enquiry",  ur: "داخلہ انکوائری",    ar: "استفسار قبول" },
  "con-opt-course":   { en: "Course Information", ur: "کورس معلومات",      ar: "معلومات الدورة" },
  "con-opt-don":      { en: "Donation",           ur: "عطیہ",               ar: "التبرع" },
  "con-opt-general":  { en: "General Enquiry",    ur: "عام انکوائری",      ar: "استفسار عام" },
  "con-opt-other":    { en: "Other",              ur: "دیگر",               ar: "أخرى" },
  "con-ph-name":      { en: "Your full name",     ur: "آپ کا پورا نام",    ar: "اسمك الكامل" },
  "con-ph-phone":     { en: "+91 00000 00000",    ur: "+91 00000 00000",    ar: "+91 00000 00000" },
  "con-ph-msg":       { en: "Write your message here...", ur: "یہاں اپنا پیغام لکھیں...", ar: "اكتب رسالتك هنا..." },
  "con-wa-p":         { en: "Prefer to chat? Message us on WhatsApp:", ur: "چیٹ کرنا چاہتے ہیں؟ واٹس ایپ پر پیغام بھیجیں:", ar: "تفضل المحادثة؟ راسلنا على واتساب:" },
  "con-success-msg":  { en: "✅ JazakAllahu Khayran! Your message has been received. We will get back to you within 1–2 working days, inshaAllah.", ur: "✅ جزاکم اللہ خیراً! آپ کا پیغام موصول ہو گیا۔ ہم ان شاء اللہ ۱–۲ دنوں میں آپ سے رابطہ کریں گے۔", ar: "✅ جزاكم الله خيراً! تم استلام رسالتك. سنرد عليك خلال ١–٢ يومي عمل إن شاء الله." }
  /* ---- COURSES PAGE ---- */
  "course-apply-now":   { en: "Apply Now",             ur: "ابھی درخواست دیں",   ar: "قدِّم الآن" },
  "course-apply-adm":   { en: "Apply for Admission",   ur: "داخلے کے لیے درخواست", ar: "قدِّم للقبول" },
  "course-ask-q":       { en: "Ask a Question",        ur: "سوال پوچھیں",         ar: "اطرح سؤالاً" },
  "course-avail-for":   { en: "Available for:",        ur: "کے لیے دستیاب:",      ar: "متاح لـ:" },
  "course-dept-banin":  { en: "🕌 Shoba-e-Banin",      ur: "🕌 شعبۂ بنین",        ar: "🕌 شعبة البنين" },
  "course-dept-banat":  { en: "🌸 Shoba-e-Banat",      ur: "🌸 شعبۂ بنات",        ar: "🌸 شعبة البنات" },
  "course-meta-dur":    { en: "Duration",              ur: "مدت",                 ar: "المدة" },
  "course-meta-age":    { en: "Age",                   ur: "عمر",                 ar: "العمر" },
  "course-meta-dept":   { en: "Department",            ur: "شعبہ",                ar: "القسم" },
  "course1-h2":  { en: "Hifz-ul-Quran",                ur: "حفظ القرآن",            ar: "حفظ القرآن الكريم" },
  "course1-about-h3":   { en: "About the Hifz Program",           ur: "حفظ پروگرام کے بارے میں",       ar: "عن برنامج الحفظ" },
  "course2-h2":  { en: "Alimah & Fazilah",             ur: "عالمہ و فاضلہ",         ar: "دورة العالمة والفاضلة" },
  "course2-about-h3":   { en: "About the Alimah & Fazilah Program", ur: "عالمہ و فاضلہ پروگرام کے بارے میں", ar: "عن برنامج العالمة والفاضلة" },
  "course3-h2":  { en: "Momina Course",                ur: "مومنہ کورس",            ar: "دورة المؤمنة" },
  "course3-about-h3":   { en: "About the Momina Course",           ur: "مومنہ کورس کے بارے میں",        ar: "عن دورة المؤمنة" },
  "course4-h2":  { en: "Deeniyat Diploma",             ur: "دینیات ڈپلومہ",          ar: "دبلوم الدينيات" },
  "course4-about-h3":   { en: "About the One-Year Diploma",        ur: "ایک سالہ ڈپلومہ کے بارے میں",  ar: "عن دبلوم الدينيات" },
  "course5-h2":  { en: "Computer Education",           ur: "کمپیوٹر تعلیم",          ar: "تعليم الحاسوب" },
  "course5-about-h3":   { en: "About Computer Education",          ur: "کمپیوٹر تعلیم کے بارے میں",    ar: "عن تعليم الحاسوب" },
  "course6-h2":  { en: "Tailoring & Skill Development", ur: "سلائی کڑھائی و ہنر سازی", ar: "الخياطة والتدريب المهني" },
  "course6-about-h3":   { en: "About Tailoring & Skill Development", ur: "سلائی و ہنر سازی کے بارے میں", ar: "عن الخياطة والتدريب" },
  "hl-huffaz":    { en: "✅ Qualified Huffaz teachers",       ur: "✅ اہل حفاظ اساتذہ",            ar: "✅ معلمون حفاظ مؤهلون" },
  "hl-attention": { en: "✅ Individual attention & tracking", ur: "✅ انفرادی توجہ اور پیروی",     ar: "✅ متابعة فردية" },
  "hl-tajweed":   { en: "✅ Tajweed integrated",              ur: "✅ تجوید شامل",                 ar: "✅ التجويد مدمج" },
  "hl-reports":   { en: "✅ Monthly parent reports",          ur: "✅ ماہانہ والدین رپورٹ",        ar: "✅ تقارير شهرية للأولياء" },
  "hl-revision":  { en: "✅ Regular revision sessions",       ur: "✅ باقاعدہ دورہ سیشنز",         ar: "✅ جلسات مراجعة منتظمة" },
  "hl-ceremony":  { en: "✅ Completion ceremony",             ur: "✅ تکمیل کی تقریب",             ar: "✅ حفل الختم" },
  "hl-tafsir":    { en: "✅ Tafsir & Quran sciences",         ur: "✅ تفسیر اور علوم القرآن",      ar: "✅ التفسير وعلوم القرآن" },
  "hl-hadith":    { en: "✅ Hadith with chain analysis",      ur: "✅ سند کے ساتھ حدیث",          ar: "✅ الحديث مع تحليل السند" },
  "hl-fiqh":      { en: "✅ Fiqh & Islamic jurisprudence",    ur: "✅ فقہ اور اسلامی قانون",       ar: "✅ الفقه وأصوله" },
  "hl-arabic":    { en: "✅ Arabic grammar & literature",     ur: "✅ عربی گرامر اور ادب",         ar: "✅ النحو والأدب العربي" },
  "hl-history":   { en: "✅ Islamic history & biography",     ur: "✅ اسلامی تاریخ و سیرت",        ar: "✅ التاريخ والسيرة الإسلامية" },
  "hl-cert":      { en: "✅ Recognised certification",        ur: "✅ تسلیم شدہ سرٹیفکیٹ",        ar: "✅ شهادة معتمدة" },
  "hl-nazira":    { en: "✅ Quran with Tajweed",              ur: "✅ تجوید کے ساتھ قرآن",         ar: "✅ القرآن مع التجويد" },
  "hl-fiqh-ibd":  { en: "✅ Basic Fiqh & Ibadah",            ur: "✅ بنیادی فقہ اور عبادت",       ar: "✅ الفقه الأساسي والعبادة" },
  "hl-char":      { en: "✅ Islamic character building",      ur: "✅ اسلامی کردار سازی",          ar: "✅ بناء الشخصية الإسلامية" },
  "hl-seerah":    { en: "✅ Seerah & Islamic history",        ur: "✅ سیرت اور اسلامی تاریخ",      ar: "✅ السيرة والتاريخ الإسلامي" },
  "hl-lifestyle": { en: "✅ Practical Islamic lifestyle",     ur: "✅ عملی اسلامی طرز زندگی",      ar: "✅ نمط الحياة الإسلامي العملي" },
  "hl-cert2":     { en: "✅ Certificate on completion",       ur: "✅ تکمیل پر سرٹیفکیٹ",          ar: "✅ شهادة عند الإتمام" },
  "hl-quran-rec": { en: "✅ Quran recitation & basics",       ur: "✅ قرآن تلاوت اور بنیادیات",    ar: "✅ تلاوة القرآن وأساسياته" },
  "hl-pillars":   { en: "✅ Pillars of Islam & Iman",         ur: "✅ ارکان اسلام اور ایمان",       ar: "✅ أركان الإسلام والإيمان" },
  "hl-fiqh-wor":  { en: "✅ Fiqh of daily worship",          ur: "✅ روزمرہ عبادت کا فقہ",         ar: "✅ فقه العبادات اليومية" },
  "hl-ethics":    { en: "✅ Islamic morals & ethics",         ur: "✅ اسلامی اخلاق و آداب",         ar: "✅ الأخلاق الإسلامية" },
  "hl-seerah2":   { en: "✅ Short Seerah overview",           ur: "✅ سیرت کا مختصر جائزہ",         ar: "✅ نظرة عامة على السيرة" },
  "hl-computer":  { en: "✅ Basic computer operations",       ur: "✅ بنیادی کمپیوٹر آپریشنز",     ar: "✅ العمليات الحاسوبية الأساسية" },
  "hl-msoffice":  { en: "✅ MS Office (Word, Excel)",         ur: "✅ ایم ایس آفس (ورڈ، ایکسل)",  ar: "✅ MS Office (Word, Excel)" },
  "hl-internet":  { en: "✅ Internet & email basics",         ur: "✅ انٹرنیٹ اور ای میل بنیادیات", ar: "✅ أساسيات الإنترنت والبريد" },
  "hl-digital":   { en: "✅ Safe digital practices",          ur: "✅ محفوظ ڈیجیٹل استعمال",       ar: "✅ الممارسات الرقمية الآمنة" },
  "hl-typing":    { en: "✅ Typing & data entry",             ur: "✅ ٹائپنگ اور ڈیٹا انٹری",      ar: "✅ الكتابة وإدخال البيانات" },
  "hl-stitch":    { en: "✅ Basic to advanced stitching",     ur: "✅ بنیادی سے اعلیٰ سلائی",      ar: "✅ الخياطة من الأساسية للمتقدمة" },
  "hl-cutting":   { en: "✅ Garment cutting & patterns",      ur: "✅ کپڑا کاٹنا اور پیٹرن",       ar: "✅ قص الأقمشة والأنماط" },
  "hl-embroid":   { en: "✅ Embroidery & handcraft",          ur: "✅ کڑھائی اور دستکاری",          ar: "✅ التطريز والحرف اليدوية" },
  "hl-machine":   { en: "✅ Machine operation",               ur: "✅ مشین آپریشن",                 ar: "✅ تشغيل الماكينة" },
  "hl-project":   { en: "✅ Practical project work",          ur: "✅ عملی پروجیکٹ کام",            ar: "✅ العمل التطبيقي" },

  /* ---- DEPARTMENTS ---- */
  "dept-banin-h2":   { en: "Shoba-e-Banin",  ur: "شعبۂ بنین",  ar: "شعبة البنين" },
  "dept-banat-h2":   { en: "Shoba-e-Banat",  ur: "شعبۂ بنات",  ar: "شعبة البنات" },
  "dept-banin-urdu": { en: "Shoba-e-Banin — Boys' Department",   ur: "شعبۂ بنین — لڑکوں کا شعبہ",   ar: "شعبة البنين — قسم الطلاب" },
  "dept-banat-urdu": { en: "Shoba-e-Banat — Girls' Department",  ur: "شعبۂ بنات — لڑکیوں کا شعبہ",  ar: "شعبة البنات — قسم الطالبات" },
  "dept-banin-desc": { en: "A focused Islamic educational department for boys, combining classical scholarship with modern skills", ur: "لڑکوں کے لیے مخصوص اسلامی تعلیمی شعبہ، کلاسیکی علوم اور جدید مہارتوں کا امتزاج", ar: "قسم إسلامي مخصص للطلاب يجمع بين الدراسة الكلاسيكية والمهارات الحديثة" },
  "dept-banat-desc": { en: "A safe, nurturing, and high-quality Islamic educational department dedicated to female students", ur: "خواتین طلباء کے لیے ایک محفوظ، پرورش کرنے والا اور اعلیٰ معیاری اسلامی تعلیمی شعبہ", ar: "قسم إسلامي آمن وراقٍ مخصص للطالبات" },
  "dept-banin-about-h3":   { en: "About Shoba-e-Banin",  ur: "شعبۂ بنین کے بارے میں",  ar: "عن شعبة البنين" },
  "dept-banat-about-h3":   { en: "About Shoba-e-Banat",  ur: "شعبۂ بنات کے بارے میں",  ar: "عن شعبة البنات" },
  "dept-courses-banin-h4": { en: "📚 Courses Offered in Shoba-e-Banin", ur: "📚 شعبۂ بنین میں پیش کردہ کورسز", ar: "📚 الدورات المقدمة في شعبة البنين" },
  "dept-courses-banat-h4": { en: "🌸 Courses Offered in Shoba-e-Banat", ur: "🌸 شعبۂ بنات میں پیش کردہ کورسز", ar: "🌸 الدورات المقدمة في شعبة البنات" },
  "dept-stat-students": { en: "Students Enrolled",     ur: "داخل طلباء",         ar: "الطلاب الملتحقون" },
  "dept-stat-faculty":  { en: "Qualified Faculty",     ur: "اہل اساتذہ",         ar: "أعضاء الهيئة المؤهلون" },
  "dept-stat-programs": { en: "Programs Offered",      ur: "پیش کردہ پروگرام",   ar: "البرامج المقدمة" },
  "dept-stat-env":      { en: "Dedicated Environment", ur: "مخصوص ماحول",        ar: "بيئة متخصصة" },
  "dept-stat-secure":   { en: "Fully Secure Campus",   ur: "مکمل محفوظ کیمپس",   ar: "حرم آمن بالكامل" },
  "dept-apply-btn":     { en: "Apply for Admission",   ur: "داخلے کے لیے درخواست", ar: "قدِّم للقبول" },
  "pill-hifz":    { en: "📖 Hifz-ul-Quran",    ur: "📖 حفظ القرآن",       ar: "📖 حفظ القرآن" },
  "pill-alim":    { en: "🎓 Alim Course",       ur: "🎓 عالم کورس",        ar: "🎓 دورة العالم" },
  "pill-alimah":  { en: "🎓 Alimah Course",     ur: "🎓 عالمہ کورس",       ar: "🎓 دورة العالمة" },
  "pill-fazilah": { en: "🎓 Fazilah Course",    ur: "🎓 فاضلہ کورس",       ar: "🎓 دورة الفاضلة" },
  "pill-momina":  { en: "🌙 Momina Course",     ur: "🌙 مومنہ کورس",       ar: "🌙 دورة المؤمنة" },
  "pill-diploma": { en: "📜 Deeniyat Diploma",  ur: "📜 دینیات ڈپلومہ",    ar: "📜 دبلوم الدينيات" },
  "pill-comp":    { en: "💻 Computer Education", ur: "💻 کمپیوٹر تعلیم",   ar: "💻 تعليم الحاسوب" },
  "pill-voc":     { en: "🧵 Vocational Skills",  ur: "🧵 پیشہ ورانہ مہارتیں", ar: "🧵 المهارات المهنية" },
  "pill-tailor":  { en: "🧵 Tailoring & Skills", ur: "🧵 سلائی و ہنر",      ar: "🧵 الخياطة والمهارات" },

  /* ---- ABOUT ---- */
  "about-mission-h3": { en: "🎯 Our Mission",  ur: "🎯 ہمارا مشن",   ar: "🎯 رسالتنا" },
  "about-vision-h3":  { en: "🌟 Our Vision",   ur: "🌟 ہمارا وژن",   ar: "🌟 رؤيتنا" },
  "about-mission-p":  { en: "To provide authentic, high-quality Islamic education rooted in the Quran and Sunnah, nurturing students who embody Islamic values, strong character, and practical skills.", ur: "قرآن و سنت پر مبنی مستند اور اعلیٰ معیاری اسلامی تعلیم فراہم کرنا، ایسے طلباء کی تربیت کرنا جو اسلامی اقدار اور مضبوط کردار کے حامل ہوں۔", ar: "تقديم تعليم إسلامي أصيل وعالي الجودة مستند إلى القرآن والسنة لتنشئة طلاب يجسّدون القيم الإسلامية وقوة الشخصية." },
  "about-vision-p":   { en: "To be a leading Islamic educational institution in Telangana that produces scholars, leaders, and community builders — graduates who are deeply grounded in their faith, modern in their outlook, and committed to the welfare of society.", ur: "تلنگانہ میں ایک سرکردہ اسلامی تعلیمی ادارہ بننا جو علماء، رہنما اور معاشرے کے معمار تیار کرے۔", ar: "أن تكون الجامعة المؤسسة الإسلامية التعليمية الرائدة في تلنغانا، تُخرّج علماء وقادة ومصلحين اجتماعيين." },
  "val-knowledge": { en: "Knowledge",  ur: "علم",     ar: "العلم" },
  "val-character": { en: "Character",  ur: "اخلاق",   ar: "الأخلاق" },
  "val-integrity": { en: "Integrity",  ur: "دیانت",   ar: "الأمانة" },
  "val-service":   { en: "Service",    ur: "خدمت",    ar: "الخدمة" },
  "role-founder":     { en: "Founder & Nazim",       ur: "بانی و ناظم",           ar: "المؤسس والناظم" },
  "role-principal":   { en: "Principal",              ur: "مہتمم",                 ar: "المدير" },
  "role-head-banat":  { en: "Head — Shoba-e-Banat",  ur: "شعبۂ بنات کی انچارج",  ar: "رئيسة شعبة البنات" },
  "leader-p1": { en: "The founder and principal authority of the Jamia, Maulana Rahmani has dedicated his life to the propagation of Islamic education in Telangana.", ur: "جامعہ کے بانی اور اعلیٰ اختیار، مولانا رحمانی نے اپنی زندگی تلنگانہ میں اسلامی تعلیم کے فروغ کے لیے وقف کی ہے۔", ar: "مؤسس الجامعة، كرّس المولانا رحماني حياته لنشر التعليم الإسلامي في تلنغانا." },
  "leader-p2": { en: "Oversees the day-to-day administration and academic excellence of the Jamia, ensuring the highest standards of Islamic education.", ur: "جامعہ کے روزمرہ انتظام اور علمی عمدگی کی نگرانی کرتے ہیں اور اسلامی تعلیم کے اعلیٰ ترین معیار کو یقینی بناتے ہیں۔", ar: "يشرف على الإدارة اليومية والتميز الأكاديمي للجامعة." },
  "leader-p3": { en: "Leads the girls' department with compassion and expertise, fostering a nurturing and spiritually enriching environment for female students.", ur: "لڑکیوں کے شعبے کو ہمدردی اور مہارت کے ساتھ چلاتی ہیں اور خواتین طلباء کے لیے پرورش کرنے والا ماحول قائم کرتی ہیں۔", ar: "تقود شعبة البنات بتعاطف وكفاءة مُهيّئةً بيئة تربوية مثرية روحياً للطالبات." },

  /* ---- ADMISSIONS FORM ---- */
  "adm-label-name":    { en: "Student's Full Name *",       ur: "طالب علم کا پورا نام *",     ar: "الاسم الكامل للطالب *" },
  "adm-label-dob":     { en: "Date of Birth *",             ur: "تاریخ پیدائش *",             ar: "تاريخ الميلاد *" },
  "adm-label-gender":  { en: "Gender *",                    ur: "جنس *",                      ar: "الجنس *" },
  "adm-label-course":  { en: "Course Applying For *",       ur: "درخواست کردہ کورس *",        ar: "الدورة المطلوبة *" },
  "adm-label-parent":  { en: "Parent / Guardian Name *",    ur: "والدین / سرپرست کا نام *",   ar: "اسم ولي الأمر *" },
  "adm-label-phone":   { en: "Phone / WhatsApp Number *",   ur: "فون / واٹس ایپ نمبر *",     ar: "رقم الهاتف / واتساب *" },
  "adm-label-email":   { en: "Email Address",               ur: "ای میل پتہ",                 ar: "البريد الإلكتروني" },
  "adm-label-city":    { en: "City / Area *",               ur: "شہر / علاقہ *",              ar: "المدينة / المنطقة *" },
  "adm-label-quran":   { en: "Current Quran Reading Level", ur: "قرآن پڑھنے کی موجودہ سطح",  ar: "مستوى قراءة القرآن الحالي" },
  "adm-label-msg":     { en: "Any Questions or Additional Information", ur: "کوئی سوال یا اضافی معلومات", ar: "أي أسئلة أو معلومات إضافية" },
  "adm-opt-sel-gen":   { en: "Select gender",               ur: "جنس منتخب کریں",             ar: "اختر الجنس" },
  "adm-opt-male":      { en: "Male (Shoba-e-Banin)",        ur: "لڑکا (شعبۂ بنین)",           ar: "ذكر (شعبة البنين)" },
  "adm-opt-female":    { en: "Female (Shoba-e-Banat)",      ur: "لڑکی (شعبۂ بنات)",           ar: "أنثى (شعبة البنات)" },
  "adm-opt-sel-course":{ en: "Select course",               ur: "کورس منتخب کریں",            ar: "اختر الدورة" },
  "adm-opt-hifz":      { en: "Hifz-ul-Quran",              ur: "حفظ القرآن",                 ar: "حفظ القرآن" },
  "adm-opt-alimah":    { en: "Alimah Course",               ur: "عالمہ کورس",                 ar: "دورة العالمة" },
  "adm-opt-fazilah":   { en: "Fazilah Course",              ur: "فاضلہ کورس",                 ar: "دورة الفاضلة" },
  "adm-opt-momina":    { en: "Momina Course",               ur: "مومنہ کورس",                 ar: "دورة المؤمنة" },
  "adm-opt-diploma":   { en: "One-Year Deeniyat Diploma",   ur: "ایک سالہ دینیات ڈپلومہ",     ar: "دبلوم الدينيات لسنة" },
  "adm-opt-comp":      { en: "Computer Education",          ur: "کمپیوٹر تعلیم",              ar: "تعليم الحاسوب" },
  "adm-opt-tailor":    { en: "Tailoring & Skill Development", ur: "سلائی و ہنر سازی",         ar: "الخياطة والتدريب" },
  "adm-opt-sel-lvl":   { en: "Select level",                ur: "سطح منتخب کریں",             ar: "اختر المستوى" },
  "adm-opt-none":      { en: "Cannot read yet (Qaida level)", ur: "ابھی نہیں پڑھ سکتے (قاعدہ)", ar: "لا يقرأ بعد (مستوى القاعدة)" },
  "adm-opt-nazira":    { en: "Can read Quran (Nazira)",     ur: "قرآن پڑھ سکتے ہیں (ناظرہ)", ar: "يقرأ القرآن (ناظرة)" },
  "adm-opt-partial":   { en: "Partially memorised",         ur: "جزوی حفظ",                   ar: "حفظ جزئي" },
  "adm-opt-hafiz":     { en: "Already a Hafiz",             ur: "پہلے سے حافظ",               ar: "حافظ بالفعل" },
  "adm-info-status":   { en: "Current Status",    ur: "موجودہ صورت حال",  ar: "الحالة الحالية" },
  "adm-info-year":     { en: "Academic Year",     ur: "تعلیمی سال",        ar: "العام الدراسي" },
  "adm-info-lastdate": { en: "Last Date",         ur: "آخری تاریخ",        ar: "آخر موعد" },
  "adm-info-start":    { en: "Classes Begin",     ur: "کلاسیں شروع",       ar: "بدء الدراسة" },
  "adm-status-open":   { en: "🟢 Open",           ur: "🟢 کھلا ہے",         ar: "🟢 مفتوح" },
  "adm-open":          { en: "✅ Open",            ur: "✅ کھلا",             ar: "✅ مفتوح" },
  "adm-accepting":     { en: "📚 Programs Accepting", ur: "📚 قابل داخلہ پروگرام", ar: "📚 البرامج القابلة للتقديم" },
  "adm-help-p":        { en: "Have questions? Contact us directly:", ur: "کوئی سوال ہے؟ ہم سے براہ راست رابطہ کریں:", ar: "هل لديك أسئلة؟ تواصل معنا مباشرة:" },
  "adm-success-msg":   { en: "✅ JazakAllahu Khayran! Your enquiry has been received. Our admissions team will contact you within 2–3 working days.", ur: "✅ جزاکم اللہ خیراً! آپ کی درخواست موصول ہو گئی۔ ہماری ٹیم ۲–۳ دنوں میں آپ سے رابطہ کرے گی۔", ar: "✅ جزاكم الله خيراً! تم استلام استفساركم. سيتواصل معك فريق القبول خلال ٢–٣ أيام عمل." },
  "adm-step1-p": { en: "Complete the online enquiry form below with student details", ur: "ذیل میں آن لائن انکوائری فارم پُر کریں", ar: "أكمل استمارة الاستفسار الإلكترونية أدناه" },
  "adm-step2-p": { en: "Our team will contact you within 2–3 working days", ur: "ہماری ٹیم ۲–۳ کاری دنوں میں رابطہ کرے گی", ar: "سيتواصل معك فريقنا خلال ٢–٣ أيام عمل" },
  "adm-step3-p": { en: "Come for an interview and document verification", ur: "انٹرویو اور دستاویز کی تصدیق کے لیے آئیں", ar: "تعال للمقابلة والتحقق من الوثائق" },
  "adm-step4-p": { en: "Complete registration and join the Jamia", ur: "رجسٹریشن مکمل کریں اور جامعہ میں شامل ہوں", ar: "أكمل التسجيل والتحق بالجامعة" },

  /* ---- NEWS ---- */
  "news-notice-badge":  { en: "Notice",    ur: "اعلان",   ar: "إشعار" },
  "news-event-badge":   { en: "Event",     ur: "تقریب",   ar: "فعالية" },
  "news-result-badge":  { en: "Results",   ur: "نتائج",   ar: "النتائج" },
  "news-holiday-badge": { en: "Holiday",   ur: "چھٹی",    ar: "إجازة" },
  "news-apply-now":     { en: "Apply Now →",         ur: "ابھی درخواست دیں →",    ar: "قدِّم الآن →" },
  "news-read-more":     { en: "Read More →",         ur: "مزید پڑھیں →",          ar: "اقرأ المزيد →" },
  "news-dl-schedule":   { en: "Download Schedule ↓", ur: "شیڈول ڈاؤن لوڈ کریں ↓", ar: "تحميل الجدول ↓" },
  "news2-h3-full":  { en: "Annual Results Ceremony — All Courses 2025–26", ur: "سالانہ نتائج کی تقریب — تمام کورسز ۲۰۲۵–۲۶", ar: "حفل النتائج السنوية — جميع الدورات ٢٠٢٥–٢٦" },
  "news-hifz-h3":   { en: "Hifz Completion — New Huffaz Graduated", ur: "تکمیل حفظ — نئے حفاظ کرام فارغ", ar: "ختم الحفظ — تخرج حفاظ جدد" },
  "news-exam-h3":   { en: "Annual Examination Schedule — All Departments", ur: "سالانہ امتحانات کا شیڈول — تمام شعبہ جات", ar: "جدول الامتحانات السنوية — جميع الأقسام" },
  "news-qirat-h3":  { en: "Quran Recitation Competition — Inter-Jamia Level", ur: "قرآن کریم تلاوت مقابلہ — بین الجامعاتی سطح", ar: "مسابقة تلاوة القرآن — المستوى بين الجامعات" },
  "news-imp-notice-h3": { en: "📢 Important Notice", ur: "📢 اہم اعلان",      ar: "📢 إشعار مهم" },
  "news-imp-p":         { en: "Admissions are currently open for the 2026–27 academic year. Limited seats available.", ur: "تعلیمی سال ۲۰۲۶–۲۷ کے لیے داخلے ابھی کھلے ہیں۔ محدود نشستیں دستیاب ہیں۔", ar: "القبول مفتوح حالياً للعام الدراسي ٢٠٢٦–٢٧. المقاعد محدودة." },
  "news-imp-btn":       { en: "Apply Now",            ur: "ابھی درخواست دیں", ar: "قدِّم الآن" },
  "news-archives-h3":   { en: "📁 Archives",          ur: "📁 آرکائیوز",      ar: "📁 الأرشيف" },
  "news-contact-h3":    { en: "📞 Contact Office",    ur: "📞 دفتر سے رابطہ", ar: "📞 التواصل مع المكتب" },
  "news-dl-h3":         { en: "📄 Downloads",         ur: "📄 ڈاؤن لوڈز",     ar: "📄 التنزيلات" },
  "news-dl-adm-form":   { en: "📥 Admission Form",    ur: "📥 داخلہ فارم",    ar: "📥 استمارة القبول" },
  "news-dl-exam":       { en: "📥 Exam Schedule",     ur: "📥 امتحان شیڈول",  ar: "📥 جدول الامتحانات" },
  "news-dl-fee":        { en: "📥 Fee Structure",     ur: "📥 فیس ڈھانچہ",    ar: "📥 هيكل الرسوم" },
  "news-sidebar-p":     { en: "For clarification on any notice:", ur: "کسی بھی اعلان کی وضاحت کے لیے:", ar: "للاستفسار عن أي إشعار:" },

  /* ---- DONATIONS ---- */
  "don-sponsor-h3":      { en: "💚 Sponsor a Student's Education",    ur: "💚 ایک طالب علم کی تعلیم میں تعاون", ar: "💚 ارعَ تعليم طالب" },
  "don-impact-quran-h4": { en: "Preserve the Quran",    ur: "قرآن کا تحفظ کریں",      ar: "حافظ على القرآن" },
  "don-impact-quran-p":  { en: "Your support helps train the next generation of Huffaz — guardians of the Holy Quran.", ur: "آپ کا تعاون حفاظ کی اگلی نسل کی تربیت میں مدد کرتا ہے۔", ar: "دعمك يُعين على تدريب جيل الحفاظ القادم." },
  "don-impact-scholars-h4": { en: "Educate Scholars",  ur: "علماء تیار کریں",      ar: "أعدّ العلماء" },
  "don-impact-scholars-p":  { en: "Fund the education of future Alimahs and Islamic scholars who will guide communities.", ur: "مستقبل کی عالمات اور اسلامی علماء کی تعلیم کو فنڈ کریں۔", ar: "موّل تعليم العالمات والعلماء المستقبليين." },
  "don-impact-women-h4":    { en: "Empower Women",     ur: "خواتین کو بااختیار بنائیں", ar: "مكّن المرأة" },
  "don-impact-women-p":     { en: "Help girls gain practical skills — tailoring, computers — for economic independence.", ur: "لڑکیوں کو عملی مہارتیں — سلائی، کمپیوٹر — اقتصادی آزادی کے لیے حاصل کرنے میں مدد کریں۔", ar: "ساعد الفتيات على اكتساب مهارات عملية للاستقلال الاقتصادي." },
  "don-monthly-btn":     { en: "Become a Monthly Donor",                ur: "ماہانہ عطیہ دہندہ بنیں",               ar: "كن متبرعاً شهرياً" },
  "don-wa-monthly-btn":  { en: "💬 WhatsApp to Become a Monthly Donor", ur: "💬 ماہانہ عطیہ کے لیے واٹس ایپ کریں",  ar: "💬 واتساب للتسجيل كمتبرع شهري" },
  "don-tier1-benefit":   { en: "Contributes to stationery & books for one student", ur: "ایک طالب علم کے لیے کتابیں و اسٹیشنری", ar: "يُسهم في القرطاسية والكتب لطالب واحد" },
  "don-tier2-benefit":   { en: "Covers monthly fees for a needy student",           ur: "ضرورت مند طالب علم کی ماہانہ فیس",       ar: "يغطي الرسوم الشهرية لطالب محتاج" },
  "don-tier3-benefit":   { en: "Full scholarship support for a student",            ur: "ایک طالب علم کے لیے مکمل اسکالرشپ",     ar: "دعم منحة كاملة لطالب" },
  "don-upi-desc":    { en: "Scan the QR code with any UPI app — Google Pay, PhonePe, Paytm, BHIM", ur: "کسی بھی یو پی آئی ایپ سے کیو آر کوڈ اسکین کریں", ar: "امسح رمز QR بأي تطبيق UPI" },
  "don-upi-or":      { en: "Or pay directly via UPI ID:", ur: "یا براہ راست یو پی آئی آئی ڈی سے:", ar: "أو ادفع مباشرة عبر معرّف UPI:" },
  "don-bank-desc":   { en: "Transfer directly to the Jamia's bank account via NEFT, RTGS or IMPS", ur: "NEFT، RTGS یا IMPS کے ذریعے جامعہ کے بینک اکاؤنٹ میں براہ راست ٹرانسفر کریں", ar: "حوّل مباشرة إلى حساب الجامعة البنكي عبر NEFT أو RTGS أو IMPS" },
  "don-wa-after":    { en: "Please WhatsApp payment confirmation after transfer", ur: "ٹرانسفر کے بعد ادائیگی کی تصدیق واٹس ایپ کریں", ar: "يرجى إرسال تأكيد الدفع عبر واتساب بعد التحويل" },
  "don-monthly-desc":{ en: "Set up a recurring monthly donation — sponsor a student's education every month", ur: "ماہانہ تعاون ترتیب دیں — ہر ماہ ایک طالب علم کی تعلیم میں حصہ دار بنیں", ar: "أنشئ تبرعاً شهرياً متكرراً — ارعَ تعليم طالب كل شهر" },
  "don-bank-acc-name": { en: "Account Name", ur: "اکاؤنٹ کا نام", ar: "اسم الحساب" },
  "don-bank-acc-no":   { en: "Account No.",  ur: "اکاؤنٹ نمبر",  ar: "رقم الحساب" },
  "don-bank-ifsc":     { en: "IFSC Code",    ur: "آئی ایف ایس سی", ar: "رمز IFSC" },
  "don-bank-name":     { en: "Bank",         ur: "بینک",           ar: "البنك" },
  "don-bank-branch":   { en: "Branch",       ur: "برانچ",          ar: "الفرع" },

  /* ---- GALLERY ---- */
  "gal-filter-all":     { en: "All Photos",  ur: "تمام تصاویر", ar: "جميع الصور" },
  "gal-filter-campus":  { en: "Campus",      ur: "کیمپس",        ar: "الحرم الجامعي" },
  "gal-filter-events":  { en: "Events",      ur: "تقریبات",      ar: "الفعاليات" },
  "gal-filter-classes": { en: "Classes",     ur: "کلاسیں",       ar: "الفصول" },
  "gal-filter-grad":    { en: "Graduation",  ur: "تقسیم اسناد",  ar: "التخرج" },
  "gal-vid1-h4": { en: "Introduction to Jamia Ayesha Siddiqua",           ur: "جامعہ عائشہ صدیقہ کا تعارف",     ar: "تعريف بجامعة عائشة الصديقة" },
  "gal-vid1-p":  { en: "A brief overview of our institution and its programs", ur: "ہمارے ادارے اور پروگراموں کا مختصر جائزہ", ar: "نظرة موجزة على مؤسستنا وبرامجها" },
  "gal-vid2-h4": { en: "Hifz Completion Ceremony",                         ur: "تکمیل حفظ کی تقریب",             ar: "حفل ختم الحفظ" },
  "gal-vid2-p":  { en: "Students completing their memorisation of the Holy Quran", ur: "طلباء کی تکمیل قرآن کریم حفظ", ar: "طلاب يُكملون حفظ القرآن الكريم" },
  "gal-vid3-h4": { en: "Annual Function Highlights",                        ur: "سالانہ تقریب کی جھلکیاں",        ar: "أبرز لحظات الحفل السنوي" },
  "gal-vid3-p":  { en: "Highlights from the annual awards and graduation function", ur: "سالانہ ایوارڈز اور تقسیم اسناد تقریب کی جھلکیاں", ar: "أبرز لحظات حفل الجوائز السنوي" },

  /* ---- CONTACT ---- */
  "con-addr-p1":   { en: "Jamia Ayesha Siddiqua Lil Banin Wal Banat", ur: "جامعہ عائشہ صدیقہ للبنین والبنات", ar: "جامعة عائشة الصديقة للبنين والبنات" },
  "con-addr-p2":   { en: "Patancheru, Hyderabad",         ur: "پٹانچیرو، حیدرآباد",          ar: "باتانشيرو، حيدر آباد" },
  "con-addr-p3":   { en: "Telangana — 502 319, India",    ur: "تلنگانہ — ۵۰۲ ۳۱۹، بھارت",   ar: "تلنغانا — 502 319، الهند" },
  "con-phone-sub": { en: "Saturday–Thursday · 8am–6pm",  ur: "ہفتہ–جمعرات · صبح ۸ – شام ۶", ar: "السبت–الخميس · ٨ص – ٦م" },
  "con-wa-sub":    { en: "Quick responses during office hours", ur: "دفتری اوقات میں فوری جوابات", ar: "ردود سريعة خلال ساعات العمل" },
  "con-email-sub": { en: "Response within 1–2 working days",   ur: "۱–۲ کاری دنوں میں جواب",     ar: "رد خلال ١–٢ يومي عمل" },
  "con-sat-thu":   { en: "Saturday – Thursday",  ur: "ہفتہ – جمعرات",  ar: "السبت – الخميس" },
  "con-fri":       { en: "Friday",               ur: "جمعہ",             ar: "الجمعة" },
  "con-holidays":  { en: "Public Holidays",      ur: "عام تعطیلات",     ar: "الأعياد الرسمية" },
  "con-hours-sat": { en: "8:00 AM – 6:00 PM",   ur: "صبح ۸:۰۰ – شام ۶:۰۰", ar: "٨:٠٠ص – ٦:٠٠م" },
  "con-closed":    { en: "Closed (Jumma)",       ur: "بند (جمعہ)",      ar: "مغلق (الجمعة)" },
  "con-closed2":   { en: "Closed",               ur: "بند",              ar: "مغلق" },
  "con-maps-btn":  { en: "Open in Google Maps ↗", ur: "گوگل میپس میں کھولیں ↗", ar: "افتح في خرائط Google ↗" },
  "con-labels-name":  { en: "Your Name *",        ur: "آپ کا نام *",       ar: "اسمك *" },
  "con-labels-phone": { en: "Phone / WhatsApp *", ur: "فون / واٹس ایپ *", ar: "الهاتف / واتساب *" },
  "con-labels-email": { en: "Email",              ur: "ای میل",             ar: "البريد الإلكتروني" },
  "con-labels-subj":  { en: "Subject *",          ur: "موضوع *",            ar: "الموضوع *" },
  "con-labels-msg":   { en: "Message *",          ur: "پیغام *",            ar: "الرسالة *" },
  "con-opt-adm":      { en: "Admission Enquiry",  ur: "داخلہ انکوائری",    ar: "استفسار قبول" },
  "con-opt-course":   { en: "Course Information", ur: "کورس معلومات",      ar: "معلومات الدورة" },
  "con-opt-don":      { en: "Donation",           ur: "عطیہ",               ar: "التبرع" },
  "con-opt-general":  { en: "General Enquiry",    ur: "عام انکوائری",      ar: "استفسار عام" },
  "con-opt-other":    { en: "Other",              ur: "دیگر",               ar: "أخرى" },
  "con-wa-p":         { en: "Prefer to chat? Message us on WhatsApp:", ur: "چیٹ کرنا چاہتے ہیں؟ واٹس ایپ پر پیغام بھیجیں:", ar: "تفضل المحادثة؟ راسلنا على واتساب:" },
  "con-success-msg":  { en: "✅ JazakAllahu Khayran! Your message has been received. We will get back to you within 1–2 working days, inshaAllah.", ur: "✅ جزاکم اللہ خیراً! آپ کا پیغام موصول ہو گیا۔ ہم ان شاء اللہ ۱–۲ دنوں میں آپ سے رابطہ کریں گے۔", ar: "✅ جزاكم الله خيراً! تم استلام رسالتك. سنرد عليك خلال ١–٢ يومي عمل إن شاء الله." }
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

  // Also swap input/textarea placeholders tagged with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-ph');
    const dict = TRANSLATIONS[key];
    if (!dict) return;
    el.placeholder = dict[lang] || dict['en'];
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
