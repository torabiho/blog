export const navItems = [
  {
    pathname: "/",
    state: {
      title: "nav-first-page",
    },
  },
  {
    pathname: "/short-stories",
    search: "?categories=story",
    state: {
      title: "nav-short-stories",
    },
  },
  {
    pathname: "/library",
    search: "?categories=library",
    state: {
      title: "nav-library",
    },
  },
  {
    pathname: "/movie-club",
    search: "?categories=video",
    state: {
      title: "nav-movie-club",
    },
  },
  {
    pathname: "/etc",
    search: "?categories=etc",
    state: {
      title: "nav-etc",
    },
  },
];
