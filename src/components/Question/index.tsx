import './styles.scss';

type QuestionProps = {
  content: string;
  author: {
    avatar: string;
    name: string;
  };
};

export function Question({ content, author }: QuestionProps) {
  return (
    <div className="question">
      <p>{content}</p>

      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
      </footer>
    </div>
  );
}
