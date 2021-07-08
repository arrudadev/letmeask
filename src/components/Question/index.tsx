import { ReactNode } from 'react';

import cx from 'classnames';

import './styles.scss';

type QuestionProps = {
  content: string;
  author: {
    avatar: string;
    name: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  isAnswered,
  isHighlighted,
  children,
}: QuestionProps) {
  return (
    <div
      className={cx(
        'question',
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered },
      )}
    >
      <p>{content}</p>

      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
