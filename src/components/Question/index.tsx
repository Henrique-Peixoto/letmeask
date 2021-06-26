import { ReactNode } from 'react';
import cx from 'classnames';
import { BottomButtons, Footer, QuestionDetails, UserInfo } from './style.js';

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
    <QuestionDetails className={cx(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered},
    )}>
      <p>{content}</p>
      <Footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <BottomButtons>
          {children}
        </BottomButtons>
      </Footer>
    </QuestionDetails>
  );
}