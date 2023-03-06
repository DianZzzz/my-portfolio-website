module.exports = {
  email: "aura-zhao@hotmail.com",
  siteTitle: "Dian Zhao | Data Scientist | Equity Analyst | Consultant",
  siteDescription: "Dian Zhao is a data scientist at BCG.",
  siteKeywords: "dian zhao, dian, dianzzzz, data scientist, consultant, ",
  siteUrl: "https://dianzzzz.netlify.app",
  siteLanguage: "en_US",

  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/dianzzzz",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/d.zhao",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sassypandacap",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/dian-zhao",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#jobs",
    },
    {
      name: "Work",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  colors: {
    green: "#64ffda",
    navy: "#0a192f",
    darkNavy: "#020c1b",
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
