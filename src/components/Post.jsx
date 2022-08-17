import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/Renatoogata.png" />
                    <div className={styles.authorInfo}>
                        <strong>Renato Ide Ogata</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio ás 08:13h" dateTime="2022-05-11 08:13:30">Publicado a 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que eu fiz no nwl return, evento bla bla bla</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixa seu feedback</strong>

                <textarea
                    placeholder="Deixa um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article >
    )
}