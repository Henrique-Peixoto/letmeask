import { ReactNode } from 'react';
import { Footer } from './style.js';
import cx from 'classnames';
import './style.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({ 
  content, 
  author, 
  children, 
  isAnswered = false, 
  isHighlighted = false,
}: QuestionProps) {
  return (
    <div className={cx(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered},
    )}>
      <p>{content}</p>
      <Footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div className="bottom-buttons">
          {children}
        </div>
      </Footer>
    </div>
  );
}