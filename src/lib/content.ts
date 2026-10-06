export type Locale = "en" | "fa";
export const isLocale = (value: string): value is Locale =>
  value === "en" || value === "fa";
type Story = { name: string; description: string; contribution: string };
export type Project = {
  id: string;
  months?: number;
  status: "live" | "planned" | "internal" | "project";
  tags: string[];
  url?: string;
  en: Story;
  fa: Story;
};
export const projects: Project[] = [
  {
    id: "shop",
    months: 5,
    status: "live",
    tags: ["Next.js", "React Query", "MUI"],
    en: {
      name: "MCI Shop",
      description:
        "From browsing to checkout. A storefront for Hamrah-e Aval customers.",
      contribution:
        "Contributed to the front end of a live e-commerce application, building product browsing, cart, and checkout interfaces over five months.",
    },
    fa: {
      name: "فروشگاه همراه اول",
      description:
        "از جست‌وجوی محصول تا تکمیل خرید؛ فروشگاهی برای مشتریان همراه اول.",
      contribution:
        "طی پنج ماه در توسعه فرانت‌اند فروشگاه آنلاین فعال همراه اول مشارکت کردم؛ از مرور محصولات و سبد خرید تا رابط تکمیل سفارش.",
    },
  },
  {
    id: "phantom",
    months: 2,
    status: "internal",
    tags: ["Next.js", "TypeScript", "Zustand"],
    en: {
      name: "Phantom",
      description:
        "An API mocking workspace. Built for the way our team develops.",
      contribution:
        "Built an API mocking dashboard with endpoint configuration, request testing, and call history. Now used internally across Nilva projects.",
    },
    fa: {
      name: "فانتوم",
      description: "محیط شبیه‌سازی API، ساخته‌شده برای شیوه کار تیم ما.",
      contribution:
        "داشبورد شبیه‌سازی API را با قابلیت تنظیم اندپوینت، تست درخواست و تاریخچه فراخوانی‌ها ساختم. اکنون در پروژه‌های داخلی نیلوا استفاده می‌شود.",
    },
  },
  {
    id: "inbox",
    months: 3,
    status: "planned",
    tags: ["Dynamic UI", "shadcn/ui"],
    en: {
      name: "Inbox / My Messages",
      description: "Flexible message layouts for the My-MCI experience.",
      contribution:
        "Built dynamic message layouts with shadcn/ui components to deliver MCI messages to end users. Planned for integration into the My-MCI (Hamrah-e Man) app.",
    },
    fa: {
      name: "پیام‌های من",
      description: "چیدمان‌های پویای پیام برای تجربه همراه من.",
      contribution:
        "چیدمان‌های پویای پیام را با کامپوننت‌های shadcn/ui برای ارسال پیام‌های همراه اول به کاربران ساختم. برای استفاده در اپلیکیشن همراه من برنامه‌ریزی شده است.",
    },
  },
  {
    id: "ava",
    months: 3,
    status: "planned",
    tags: ["Next.js", "Front-end"],
    en: {
      name: "Ava Hamrah",
      description:
        "A new front-end experience for MCI’s ringback tone service.",
      contribution:
        "Developed Next.js front-end features for Hamrah-e Aval’s ringback tone service over three months, with launch planned on the Hamrah-e Aval website.",
    },
    fa: {
      name: "آوای همراه",
      description: "تجربه فرانت‌اند سرویس آوای انتظار همراه اول.",
      contribution:
        "طی سه ماه قابلیت‌های فرانت‌اند سرویس آوای انتظار همراه اول را با Next.js توسعه دادم؛ با برنامه عرضه در وب‌سایت همراه اول.",
    },
  },
  {
    id: "sport",
    months: 2,
    status: "live",
    tags: ["Next.js 12", "Optimization"],
    en: {
      name: "Sport Zarebin",
      description: "Better match tables for a live sports experience.",
      contribution:
        "Optimized match tables in a production Next.js 12 sports application associated with Zarebin, serving real users.",
    },
    fa: {
      name: "ورزش ذره‌بین",
      description: "بهینه‌سازی جدول‌های مسابقات در یک محصول ورزشی فعال.",
      contribution:
        "جدول‌های مسابقات را در برنامه ورزشی مرتبط با ذره‌بین، ساخته‌شده با Next.js 12 و دارای کاربران واقعی، بهینه‌سازی کردم.",
    },
  },
  {
    id: "shahdaei",
    status: "live",
    tags: ["Portfolio", "Client work"],
    url: "https://shahdaei.com/",
    en: {
      name: "Shahdaei",
      description:
        "A personal portfolio. A place for one person’s work to live.",
      contribution:
        "Built a personal portfolio website for an individual client, bringing their professional presence to the web.",
    },
    fa: {
      name: "شاه‌داعی",
      description: "یک وب‌سایت شخصی؛ فضایی برای معرفی کار و هویت حرفه‌ای.",
      contribution:
        "برای یک مشتری شخصی وب‌سایت پورتفولیو ساختم تا حضور حرفه‌ای خود را در وب معرفی کند.",
    },
  },
  {
    id: "bubble",
    status: "project",
    tags: ["React", "Animation"],
    en: {
      name: "MCI Bubble Game",
      description: "A little play, built for the browser.",
      contribution:
        "Developed an interactive React browser game with animated gameplay and a focus on user experience.",
    },
    fa: {
      name: "بازی حباب همراه اول",
      description: "تجربه‌ای سرگرم‌کننده در مرورگر.",
      contribution:
        "یک بازی تعاملی تحت مرورگر را با React توسعه دادم؛ با انیمیشن‌های بازی و تمرکز بر تجربه کاربری.",
    },
  },
];
export const copy = {
  en: {
    name: "Nima Zandian",
    role: "Front-end developer",
    work: "Work",
    about: "About",
    contact: "Contact",
    resume: "Resume",
    headline: ["Thoughtful interfaces.", "Real-world impact."],
    intro:
      "I’m Nima, a front-end developer turning complex ideas into intuitive web experiences with React, Next.js, and a little attention to the details.",
    viewWork: "Explore my work",
    sayHello: "Let’s talk",
    based: "React · Next.js · TypeScript",
    illustration: "An interface study, in motion.",
    selected: "Built with purpose.",
    workIntro:
      "Consumer products, internal tools, and independent work. Here’s where I’ve put my code to work.",
    details: "My contribution",
    visit: "Visit website",
    months: "months",
    live: "In production",
    planned: "Planned launch",
    internal: "Used at Nilva",
    project: "Project",
    aboutTitle: "Good interfaces take more than good code.",
    aboutBody:
      "I’m a front-end developer with 3 years of experience building web applications. At Nilva, I work on products for Hamrah-e Aval, connecting reusable interfaces, application state, and APIs into experiences people can use.",
    aboutBody2:
      "My four-month internship also introduced me to quality assurance and practical software testing. That experience informs how I approach the details, from a form’s validation to the flow through a checkout.",
    experience: "Experience",
    job: "Front-end Developer",
    present: "2024 — Present",
    company: "Nilva",
    internship: "Development & QA internship",
    internshipTime: "4 months",
    education: "B.Sc. Computer Engineering",
    university: "Islamic Azad University, West Tehran Branch",
    toolkit: "The tools behind the work.",
    core: "Core",
    ui: "Interface",
    data: "State & data",
    quality: "Quality & workflow",
    contactTitle: ["Have something", "in mind?"],
    contactBody:
      "A product to build, a team to join, or an idea to discuss. I’d like to hear about it.",
    email: "Email me",
    linkedin: "Find me on LinkedIn",
    download: "Take a closer look.",
    resumeNote: "My experience, projects, and skills in one page.",
    enResume: "English resume",
    faResume: "Persian resume",
    footer: "Built with care. And Next.js.",
    top: "Back to top",
    skip: "Skip to content",
    artNote: "Project artwork is illustrative.",
  },
  fa: {
    name: "نیما زندیان",
    role: "توسعه‌دهنده فرانت‌اند",
    work: "پروژه‌ها",
    about: "درباره من",
    contact: "تماس",
    resume: "رزومه",
    headline: ["رابط‌های فکرشده.", "اثر در دنیای واقعی."],
    intro:
      "من نیما هستم؛ توسعه‌دهنده فرانت‌اند. ایده‌های پیچیده را با React، Next.js و توجه به جزئیات، به تجربه‌های ساده و کاربردی تبدیل می‌کنم.",
    viewWork: "دیدن پروژه‌ها",
    sayHello: "گفت‌وگو کنیم",
    based: "React · Next.js · TypeScript",
    illustration: "مطالعه‌ای از رابط کاربری، در حرکت.",
    selected: "ساخته‌شده با هدف.",
    workIntro:
      "محصولات کاربرمحور، ابزارهای داخلی و پروژه‌های مستقل؛ جاهایی که کدهایم به کار آمده‌اند.",
    details: "نقش من در پروژه",
    visit: "دیدن وب‌سایت",
    months: "ماه",
    live: "در حال استفاده",
    planned: "عرضه برنامه‌ریزی‌شده",
    internal: "مورد استفاده در نیلوا",
    project: "پروژه",
    aboutTitle: "رابط خوب، چیزی فراتر از کد خوب است.",
    aboutBody:
      "توسعه‌دهنده فرانت‌اند با ۳ سال تجربه در ساخت برنامه‌های وب هستم. در نیلوا روی محصولات همراه اول کار می‌کنم و کامپوننت‌های قابل استفاده مجدد، وضعیت برنامه و APIها را به تجربه‌ای کاربردی پیوند می‌دهم.",
    aboutBody2:
      "دوره کارآموزی چهارماهه، من را با تضمین کیفیت و تست عملی نرم‌افزار آشنا کرد. این تجربه در توجه من به جزئیات، از اعتبارسنجی فرم‌ها تا مسیر تکمیل خرید، نقش دارد.",
    experience: "تجربه",
    job: "توسعه‌دهنده فرانت‌اند",
    present: "۲۰۲۴ تا اکنون",
    company: "نیلوا",
    internship: "کارآموزی توسعه و تضمین کیفیت",
    internshipTime: "۴ ماه",
    education: "کارشناسی مهندسی کامپیوتر",
    university: "دانشگاه آزاد اسلامی، واحد تهران غرب",
    toolkit: "ابزارهای پشت هر پروژه.",
    core: "هسته توسعه",
    ui: "رابط کاربری",
    data: "وضعیت و داده",
    quality: "کیفیت و فرایند",
    contactTitle: ["ایده‌ای", "در ذهن دارید؟"],
    contactBody:
      "محصولی برای ساختن، تیمی برای پیوستن یا ایده‌ای برای گفت‌وگو. خوشحال می‌شوم درباره‌اش بشنوم.",
    email: "ایمیل بزنید",
    linkedin: "در لینکدین",
    download: "کمی بیشتر آشنا شویم.",
    resumeNote: "تجربه‌ها، پروژه‌ها و مهارت‌های من در یک صفحه.",
    enResume: "رزومه انگلیسی",
    faResume: "رزومه فارسی",
    footer: "ساخته‌شده با دقت و Next.js.",
    top: "بازگشت به بالا",
    skip: "رفتن به محتوا",
    artNote: "طرح‌های پروژه‌ها، تصویرسازی مفهومی هستند.",
  },
} as const;
