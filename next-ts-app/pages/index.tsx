import axios from "axios";
import React, { useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import { MenuItem } from "../interfaces/menu.interface";
import{Htag,Button,P,Tag,Rating} from "../components"

function Home({menu}:HomeProps): JSX.Element {
  const [rating, setRating] = useState(2);

axios.post<MenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",{firstCategory:"Courses"}
    ).then(data=> console.log(data));

  return (
    <>
      Hello world
      <Htag tag="h1">Some title</Htag>
      <Button className="some class" appearence="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearence="ghost" arrow="down">
        Кнопка 2
      </Button>
      <P size="s">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        voluptas libero sed aspernatur laudantium obcaecati ipsum neque odit
        velit. Accusantium quia illo maiores distinctio molestias? Ratione
        commodi eaque quia inventore?
      </P>
      <P>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        voluptas libero sed aspernatur laudantium obcaecati ipsum neque odit
        velit. Accusantium quia illo maiores distinctio molestias? Ratione
        commodi eaque quia inventore?
      </P>
      <P size="l">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        voluptas libero sed aspernatur laudantium obcaecati ipsum neque odit
        velit. Accusantium quia illo maiores distinctio molestias? Ratione
        commodi eaque quia inventore?
      </P>
      <Tag color="ghost" size="m">
        some tag
      </Tag>
      <Tag color="red" size="s">
        some tag
      </Tag>
      <Tag color="green">some tag</Tag>
      <Tag color="grey" href="/sadasd">
        some tag
      </Tag>
      <Tag>some tag</Tag>
      <Rating rating={3} />
      <Rating isEditable={true} rating={rating} setRating={setRating} />
      <ul>
        {menu.map(element=>(<li key={element._id.secondCategory}>{element._id.secondCategory}</li>))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",{firstCategory}
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string,unknown> {
  menu:MenuItem[],
  firstCategory:number
}