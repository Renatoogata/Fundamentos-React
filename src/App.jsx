import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que eu fiz no nwl return, evento bla bla bla' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-17 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Renatoogata.png',
      name: 'Renato Ogata',
      role: 'student @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que eu fiz no nwl return, evento bla bla bla' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-18 20:00:00'),
  },
];

// JSX = JavaScript + XML -> é um arquivo javascript que contem html
export function App() { //componente no react é uma função que retorna html
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
