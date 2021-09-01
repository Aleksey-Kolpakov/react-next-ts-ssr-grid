import React from "react";
import { FirstLevelMenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";
import CoursesIcon from "./icons/cources.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
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

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');