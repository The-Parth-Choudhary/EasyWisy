const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
    sub_menus: [],
  },
  {
    id: 2,
    title: "Pages",
    link: "/about",
    has_dropdown: true,
    sub_menus: [
      { link: "/about", title: "About" },
      { link: "/contact", title: "Contact" },
      { link: "/check-out", title: "Check Out" },
      { link: "/faq", title: "FAQ" },
      { link: "/register", title: "Register" },
      { link: "/sign-in", title: "Sign In" },
    ],
  },
  {
    id: 3,
    title: "Instructor",
    link: "/instructor",
    has_dropdown: true,
    sub_menus: [
      { link: "/instructor", title: "Instructor" },
      { link: "/instructor-profile", title: "Instructor Profile" },
    ],
  },
  {
    id: 4,
    title: "Course",
    link: "/course-grid",
    has_dropdown: true,
    sub_menus: [
      { link: "/course-grid", title: "Course Grid" },
      { link: "/course-list", title: "Course List" },
      { link: "/course-details", title: "Course Details" },
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog Sidebar" },
      { link: "/blog-grid", title: "Blog Grid" },
      { link: "/blog-masonry", title: "Blog Masonry" },
      { link: "/blog-details", title: "Blog Details" },
    ],
  },
  
];
export default menu_data;
