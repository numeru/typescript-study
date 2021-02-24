{
  // 두 type을 묶는다 key, value
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Title" },
  };
}
