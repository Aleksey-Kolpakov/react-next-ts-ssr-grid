import Htag from '../components/Htag/Htag';
import Button from '../components/Button/Button';

export default function Home(): JSX.Element {

  return (
    <div>
      Hello world
      <Htag tag='h1'>Some title</Htag>
      <Button className="some class" appearence="primary">Кнопка</Button>
      <Button appearence="ghost">Кнопка 2</Button>
    </div>
  );
}
