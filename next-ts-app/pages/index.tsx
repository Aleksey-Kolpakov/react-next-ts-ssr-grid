import Htag from '../components/Htag/Htag';
import Button from '../components/Button/Button';
import React,{useState} from 'react';
import P from '../components/P/P';
import Tag from '../components/Tag/Tag';
import Rating from '../components/Rating/Rating';
import {withLayout} from '../layout/Layout';

function Home(): JSX.Element {
const [rating,setRating]=useState(2);
  return (
    <>
      Hello world
      <Htag tag='h1'>Some title</Htag>
      <Button className="some class" appearence="primary" arrow='right'>Кнопка</Button>
      <Button appearence="ghost" arrow='down'>Кнопка 2</Button>
      <P size='s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptas libero sed aspernatur laudantium obcaecati ipsum neque odit velit. Accusantium quia illo maiores distinctio molestias? Ratione commodi eaque quia inventore?</P>
      <P >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptas libero sed aspernatur laudantium obcaecati ipsum neque odit velit. Accusantium quia illo maiores distinctio molestias? Ratione commodi eaque quia inventore?</P>
      <P size='l'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti voluptas libero sed aspernatur laudantium obcaecati ipsum neque odit velit. Accusantium quia illo maiores distinctio molestias? Ratione commodi eaque quia inventore?</P>
      <Tag color="ghost" size="m">some tag</Tag>
      <Tag color="red" size="s">some tag</Tag>
      <Tag color="green">some tag</Tag>
      <Tag color="grey"href="/sadasd">some tag</Tag>
      <Tag >some tag</Tag>
      <Rating rating={3}/>
      <Rating isEditable={true} rating={rating} setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);