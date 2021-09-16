import { FC } from 'react';
import CopiedDialog from '@c/organisms/CopiedDialog';
import { Container } from '@c/atoms/Container';
import { Pane } from '@c/atoms/Pane';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { InternalLink } from '@c/atoms/InternalLink';
import { PageTitle } from '@c/atoms/PageTitle';
import { Section } from '@c/atoms/Section';
import SectionTitle from '@c/atoms/SectionTitle';
import { Mark } from '@c/atoms/Mark';

export interface Props {}

export const AboutPage: FC<Props> = () => (
  <Container>
    <PageTitle>運営者について</PageTitle>

    <Section id='運営者' className='clear-both'>
      <SectionTitle>運営者</SectionTitle>
      <Pane className='space-y-4'>
        <p>
          このウェブサイトは
          <InternalLink href='#BYU Management Society Tokyo Chapterについて'>
            BYU Management Society Tokyo Chapter
          </InternalLink>
          が運営しています。
          ウェブサイト上の情報を有益に保つ努力はしていますが、情報の正確性および完全性を保証するものではありません。
          また、運営者はこのウェブサイト上の情報により発生したあらゆる損害に関して一切の責任を負いません。
        </p>
      </Pane>
    </Section>

    <Section
      id='BYU Management Society Tokyo Chapterについて'
      className='clear-both'
    >
      <SectionTitle>BYU Management Society Tokyo Chapterについて</SectionTitle>
      <Pane className='space-y-4'>
        <p>
          <ExternalLink href='https://byums.byu.edu/tokyo/'>
            BYU Management Society Tokyo Chapter
          </ExternalLink>
          はBYU Management Societyの東京支部で、約20年前から活動をしています。
          <ExternalLink href='https://byums.byu.edu'>
            BYU Management Society
          </ExternalLink>
          はBYUが母体の道徳的なリーダーを目指す社会人のためのネットワークです。
          世界中に80以上の支部があり、それどれの地域で活動しています。
          <Mark>BYU卒業生に限らず</Mark>、全ての人が会員になることができます。
        </p>
      </Pane>
    </Section>

    <CopiedDialog />
  </Container>
);
