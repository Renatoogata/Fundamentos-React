import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        'Comentario Banaca hein!'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    console.log(newCommentText);

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatorio');
    }

    function handleCreateNewComment() {

        event.preventDefault()

        //const newCommentText = event.target.comment.value // retorna o elemento que esta recebendo o evento no caso o form -prog imperativa

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function deleteComment(commentToDelete) {
        const commentsWithOutDeleteOne = comments.filter(comments => {
            return comments !== commentToDelete;
        });

        setComments(commentsWithOutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="11 de Maio ás 08:13h" dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixa seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixa um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article >
    )
}