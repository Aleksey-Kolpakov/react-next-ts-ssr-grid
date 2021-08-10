import React, { useContext } from "react";
import styles from "./Menu.module.css";
import { FirstLevelMenuItem, MenuItem, PageItem } from "../../interfaces/menu.interface";
import cn from "classnames";
import { AppContext } from "../../context/app.context";
import Link from 'next/link';
import { useRouter } from "next/dist/client/router";
import {firstLevelMenu} from '../../helpers/helpers';

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
const router=useRouter();
console.log(router);

const openSecondCategory=(secondCategory:string)=>{
  setMenu && setMenu(menu.map(m=>{
    if(m._id.secondCategory===secondCategory){m.isOpen=!m.isOpen}
    return m;
  }));

};
  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <Link href={`/${menu.route}`}>
            <a>
              <div className={cn(styles.firstLevel,{
                [styles.firstLevelActive]:menu.id==firstCategory,
              })}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
            </Link>
          {menu.id==firstCategory && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem:FirstLevelMenuItem) => {
    return <div className={styles.secondBlock}>
   { menu.map(m=>{
     if(m.pages.map(page=>page.alias).includes(router.asPath.split('/')[2])){
       m.isOpen=true;
     }
   return (
     <div key={m._id.secondCategory}>
      <div className={styles.secondLevel} onClick={()=>openSecondCategory(m._id.secondCategory)}>{m._id.secondCategory}</div>
      <div className={cn(styles.secondLevelBlock,{
        [styles.secondLevelBlockOpen]:m.isOpen,
      })}>
        {buildThirdLevel(m.pages,menuItem.route)}
      </div>
     </div>
   )})}
    </div>;
  };
  const buildThirdLevel = (pages:PageItem[],route:string) => {
    return (
pages.map(page=>(
  <Link key={page.alias} href={`/${route}/${page.alias}`}>
<a  className={cn(styles.thirdLevel,{
  [styles.thirdLevelActive]:`/${route}/${page.alias}`===router.asPath,
})}>
  {page.category}
</a>
</Link>
))
    );
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};

export default Menu;
