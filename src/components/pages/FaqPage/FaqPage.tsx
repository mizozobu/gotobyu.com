import { FC } from 'react';
import CopiedDialog from '@c/organisms/CopiedDialog';
import { Container } from '@c/atoms/Container';
import { Pane } from '@c/atoms/Pane';
import { PageTitle } from '@c/atoms/PageTitle';
import { Section } from '@c/atoms/Section';
import SectionTitle from '@c/atoms/SectionTitle';
import { Question } from '@s/question';

export interface Props {
  questions: Question[];
}

export const FaqPage: FC<Props> = ({ questions }: Props) => (
  <Container>
    <PageTitle>よくある質問</PageTitle>

    {questions.map(({ text }) => (
      <Section key={text} id={text} className='clear-both'>
        <SectionTitle id={text}>{text}</SectionTitle>
        <Pane className='space-y-4'>
          <p>{text}</p>
        </Pane>
      </Section>
    ))}

    <CopiedDialog />
  </Container>
);
