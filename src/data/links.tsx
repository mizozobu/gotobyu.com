import {
  BookOpenIcon,
  MailOpenIcon,
  QuestionMarkCircleIcon,
  OfficeBuildingIcon,
  PresentationChartBarIcon,
  ScaleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { NextImage } from '@c/atoms/NextImage';
import byuLogoImage from '@p/byu.png';
import byuhLogoImage from '@p/byuh.png';
import byuiLogoImage from '@p/byui.png';

export const SchoolLinks = [
  {
    name: 'Brigham Young University',
    description: '専攻、衣住食、クラブ、アルバイト、奨学金などのBYUの情報',
    href: '/byu',
    icon: ({ className }: { className: string }): JSX.Element => (
      <NextImage
        className={className}
        src={byuLogoImage}
        alt='BYU logo'
        placeholder='blur'
        layout='fill'
        objectFit='cover'
      />
    ),
  },
  {
    name: 'Brigham Young University–Hawaii',
    description: '専攻、衣住食、クラブ、アルバイト、奨学金などのBYUHの情報',
    href: '/byuh',
    icon: ({ className }: { className: string }): JSX.Element => (
      <NextImage
        className={className}
        src={byuhLogoImage}
        alt='BYUH logo'
        placeholder='blur'
        layout='fill'
        objectFit='cover'
      />
    ),
  },
  {
    name: 'Brigham Young University - Idaho',
    description: '専攻、衣住食、クラブ、アルバイト、奨学金などのBYUIの情報',
    href: '/byui',
    icon: ({ className }: { className: string }): JSX.Element => (
      <NextImage
        className={className}
        src={byuiLogoImage}
        alt='BYUI logo'
        placeholder='blur'
        layout='fill'
        objectFit='cover'
      />
    ),
  },
];

export const AdditionalSchoolLinks = [
  {
    name: 'BYU3校を比較',
    description: 'BYU、BYUH、BYUIを必要な英語力や費用の面から数字で比較',
    href: '/compare',
    icon: ScaleIcon,
  },
];

export const ApplyLinks = [
  {
    name: '入学手続き',
    description: 'BYU、BYUH、BYUIへの入学手続き',
    href: '/apply',
    icon: MailOpenIcon,
  },
  {
    name: '英語の勉強方法',
    description: 'BYU、BYUH、BYUIへの入学基準を満たすための英語の勉強方法',
    href: '/learn-english',
    icon: BookOpenIcon,
  },
];

export const CareerLinks = [
  {
    name: '就職',
    description: 'BYU、BYUH、BYUI卒業生の就職先と年収',
    href: '/career',
    icon: OfficeBuildingIcon,
  },
  {
    name: 'インターンシップ',
    description: 'BYU、BYUH、BYUIの学生のインターンシップ先と給与',
    href: '/internship',
    icon: PresentationChartBarIcon,
  },
];

export const OtherLinks = [
  {
    name: 'よくある質問',
    description: 'よく聞かれる質問とそれに対する回答',
    href: '/faq',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: '運営者について',
    description:
      'このウェブサイトを運営するBYU Management Society Tokyo Chapterとは',
    href: '/about',
    icon: UserGroupIcon,
  },
];
