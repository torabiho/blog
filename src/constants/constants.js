export const navItems = [
  {
    pathname: "/",
    state: {
      title: "nav-first-page",
      intro: "intro-first-page",
    },
  },
  {
    pathname: "/short-stories",
    search: "?categories=story",
    state: {
      title: "nav-short-stories",
      intro: "intro-short-stories",
    },
  },
  {
    pathname: "/library",
    search: "?categories=library",
    state: {
      title: "nav-library",
      intro: "intro-library",
    },
  },
  {
    pathname: "/movie-club",
    search: "?categories=video",
    state: {
      title: "nav-movie-club",
      intro: "intro-movie-club",
    },
  },
  {
    pathname: "/etc",
    search: "?categories=etc",
    state: {
      title: "nav-etc",
      intro: "intro-etc",
    },
  },
];
