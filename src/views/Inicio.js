import { Fragment } from 'react';
import Header from "../components/Header";
import ArticleBlog from '../components/ArticleBlog';
import LittleMenu from '../components/LittleMenu';
import Reservation from '../components/Reservation';

const Inicio = () => {

  return (
    <Fragment>
      <Header />
      <ArticleBlog />
      <LittleMenu />
      <Reservation />
    </Fragment>
  )
}

export default Inicio