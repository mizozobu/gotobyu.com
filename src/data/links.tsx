import { FC } from 'react';
import {
  BookOpenIcon,
  MailOpenIcon,
  OfficeBuildingIcon,
  PresentationChartBarIcon,
  ScaleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { NextImage } from '@c/atoms/NextImage';
import byuLogoImage from '@p/byu/byu-logo.png';
import byuhLogoImage from '@p/byuh/byuh-logo.png';
import byuiLogoImage from '@p/byui/byui-logo.png';

export interface PageMeta {
  name: string;
  detail: string;
  title: string | undefined;
  description: string;
  href: string;
  icon: FC<{ className?: string }>;
}

export const IndexPageMeta: Omit<PageMeta, 'name' | 'detail' | 'icon'> = {
  title: undefined, // use default title
  description:
    'BYU、BYUH、BYUIへの入学を考えている方に向けて、在学生と卒業生が入学前に知っておきたかった情報をまとめました。専攻、費用、アルバイト、奨学金、入学手続き、BYU3校の比較、英語の勉強方法、卒業後のキャリアなどについて紹介しています。',
  href: '/',
};

export const BYUPageMeta: PageMeta = {
  name: 'Brigham Young University',
  detail:
    '専攻、衣住食、レクリエーション、クラブ、アルバイト、奨学金などのBYUの情報',
  title: 'BYUの情報',
  description:
    'Brigham Young University(BYU)について。在学生と卒業生の経験を元に、専攻、衣住食、レクリエーション、クラブ、アルバイト、奨学金などについてまとめています。',
  href: '/schools/byu',
  icon: ({ className }) => (
    <NextImage
      className={className}
      src={byuLogoImage}
      alt='BYU logo'
      placeholder='blur'
      layout='fill'
      objectFit='cover'
    />
  ),
};

export const BYUHPageMeta: PageMeta = {
  name: 'Brigham Young University–Hawaii',
  detail:
    '専攻、衣住食、レクリエーション、クラブ、アルバイト、奨学金などのBYUHの情報',
  title: 'BYUHの情報',
  description:
    'Brigham Young University–Hawaii(BYUH)について。在学生と卒業生の経験を元に、専攻、衣住食、レクリエーション、クラブ、アルバイト、奨学金についてまとめています。',
  href: '/schools/byuh',
  icon: ({ className }) => (
    <NextImage
      className={className}
      src={byuhLogoImage}
      alt='BYUH logo'
      placeholder='blur'
      layout='fill'
      objectFit='cover'
    />
  ),
};

export const BYUIPageMeta: PageMeta = {
  name: 'Brigham Young University - Idaho',
  detail:
    '専攻、衣住食、レクリエーション、クラブ、アルバイト、奨学金などのBYUIの情報',
  title: 'BYUIの情報',
  description:
    'Brigham Young University - Idaho(BYUI)について。在学生と卒業生の経験を元に、専攻、衣住食、レクリエーション、クラブ、アルバイト、奨学金についてまとめています。',
  href: '/schools/byui',
  icon: ({ className }) => (
    <NextImage
      className={className}
      src={byuiLogoImage}
      alt='BYUI logo'
      placeholder='blur'
      layout='fill'
      objectFit='cover'
    />
  ),
};

export const ComparePageMeta: PageMeta = {
  name: 'BYU3校の比較',
  detail: 'BYU、BYUH、BYUIを必要な英語力や費用の面から数字で比較',
  title: 'BYU、BYUH、BYUIの比較',
  description:
    'BYU、BYUH、BYUIを費用、生徒数、専攻数、英語力などの面で比較します。',
  href: '/tips/compare',
  icon: ScaleIcon,
};

export const ApplyPageMeta: PageMeta = {
  name: '入学手続き',
  detail: 'BYU、BYUH、BYUIへの入学手続き',
  title: '入学手続き',
  description:
    'BYU、BYUH、BYUIの入学手続きについて。締め切り、申込費用、必要な英語力、試験、必要書類についてまとめています。',
  href: '/tips/apply',
  icon: MailOpenIcon,
};

export const LearnEnglishPageMeta: PageMeta = {
  name: '英語の勉強方法',
  detail: 'BYU、BYUH、BYUIへの入学基準を満たすための英語の勉強方法',
  title: '英語の勉強方法',
  description:
    'BYU、BYUH、BYUIへの入学に必要な英語力を満たすための勉強法を紹介しています。',
  href: '/tips/learn-english',
  icon: BookOpenIcon,
};

export const CareerPageMeta: PageMeta = {
  name: '就職',
  detail: 'BYU、BYUH、BYUI卒業生の就職先と年収',
  title: '就職',
  description:
    'BYU、BYUH、BYUIの学生の就職先と1年目の年収について。新卒の平均を上回る年収を貰う人や、外資系企業で活躍する人がいます。',
  href: '/tips/career',
  icon: OfficeBuildingIcon,
};

export const InternshipPageMeta: PageMeta = {
  name: 'インターンシップ',
  detail: 'BYU、BYUH、BYUIの学生のインターンシップ先と給与',
  title: 'インターンシップ',
  description:
    'BYU、BYUH、BYUIの学生のインターンシップ先の企業と給与について。誰もが知っている有名企業でインターンシップをする学生や、インターンシップにもかかわらず一般的な新入社員よりも給与を貰う学生もいます。',
  href: '/tips/internship',
  icon: PresentationChartBarIcon,
};

export const AboutPageMeta: PageMeta = {
  name: '運営者について',
  detail: 'このウェブサイトを運営するBYU Management Society Tokyo Chapterとは',
  title: '運営者について',
  description:
    'このウェブサイトを運営するBYU Management Society Tokyo Chapterについて。',
  href: '/about',
  icon: UserGroupIcon,
};

export const SchoolLinks = [BYUPageMeta, BYUHPageMeta, BYUIPageMeta];

export const AdditionalSchoolLinks = [ComparePageMeta];

export const ApplyLinks = [ApplyPageMeta, LearnEnglishPageMeta];

export const CareerLinks = [CareerPageMeta, InternshipPageMeta];

export const OtherLinks = [AboutPageMeta];
