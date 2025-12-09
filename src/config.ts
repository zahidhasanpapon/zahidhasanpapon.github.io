export const SITE = {
  website: "https://zahidhasanpapon.github.io/", // deployed domain (GitHub Pages root)
  author: "Zahid Hasan",
  profile: "https://github.com/zahidhasanpapon",
  desc: "Personal site for my work, writing, and experiments on the web.",
  title: "Zahid Hasan",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/zahidhasanpapon/zahidhasanpapon.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Kuala_Lumpur", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
