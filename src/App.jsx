import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// JSX = JavaScript + XML -> é um arquivo javascript que contem html
export function App() { //componente no react é uma função que retorna html
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Renato Ide Ogata"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, debitis nesciunt officia praesentium animi quam, pariatur ipsum nemo obcaecati voluptatum optio adipisci esse aliquid numquam magni vel cumque aliquam tempora?"
          />

          <Post
            author="Penes"
            content="Um novo Post"
          />
        </main>
      </div>
    </div>
  )
}
