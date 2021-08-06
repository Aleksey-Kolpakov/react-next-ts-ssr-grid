import React, { useContext } from "react";
import styles from "./Menu.module.css";
import { FirstLevelMenuItem, MenuItem, PageItem } from "../../interfaces/menu.interface";
import cn from "classnames";
import { AppContext } from "../../context/app.context";
import CoursesIcon from "./icons/cources.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import { TopLevelCategory } from "../../interfaces/page.interface";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
];

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div className={cn(styles.firstLevel,{
                [styles.firstLevelActive]:menu.id==firstCategory,
              })}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
          {menu.id==firstCategory && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem:FirstLevelMenuItem) => {
    return <div className={styles.secondBlock}>
   { menu.map(m=>(
     <div key={m._id.secondCategory}>
      <div className={styles.secondLevel}>{m._id.secondCategory}</div>
      <div className={cn(styles.secondLevelBlock,{
        [styles.secondLevelBlockOpen]:m.isOpen,
      })}>
        {buildThirdLevel(m.pages,menuItem.route)}
      </div>
     </div>
   ))}
    </div>;
  };
  const buildThirdLevel = (pages:PageItem[],route:string) => {
    return (
pages.map(page=>(
<a key={page.alias  } href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel,{
  [styles.thirdLevelActive]:true,
})}>
  {page.category}
</a>
))
    );
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
