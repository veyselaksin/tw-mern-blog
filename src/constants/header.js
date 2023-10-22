const NAV_LINKS = [
  {
    name: "Home",
    path: "/",
    type: "link",
  },
  {
    name: "Articles",
    path: "/articles",
    type: "link",
  },
  {
    name: "Pages",
    path: "/pages",
    type: "dropdown",
    items: [
      {
        name: "About",
        path: "/about",
        type: "link",
      },
      {
        name: "Contact",
        path: "/contact",
        type: "link",
      },
    ],
  },
  {
    name: "Pricing",
    path: "/pricing",
    type: "link",
  },
  {
    name: "Faq",
    path: "/faq",
    type: "link",
  },
];

const header = {
  nav_links: NAV_LINKS,
};

export default header;
