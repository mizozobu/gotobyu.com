import {
  BookOpenIcon,
  MailOpenIcon,
  QuestionMarkCircleIcon,
  OfficeBuildingIcon,
  ScaleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { NextImage } from '@c/atoms/NextImage';
import byuLogoImage from '@p/byu.png';
import byuhLogoImage from '@p/byuh.png';
import byuiLogoImage from '@p/byui.png';

export const schoolLinks = [
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

export const additionalSchoolLinks = [
  {
    name: 'BYU3校を比較する',
    description: 'BYU、BYUH、BYUIを比較する',
    href: '/compare',
    icon: ScaleIcon,
  },
];

export const applyLinks = [
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

export const careerLinks = [
  {
    name: 'キャリア',
    description: 'BYU、BYUH、BYUI卒業生の就職先',
    href: '/career',
    icon: OfficeBuildingIcon,
  },
];

export const otherLinks = [
  {
    name: 'よくある質問',
    description: 'よく聞かれる質問とそれに対する回答',
    href: '/faq',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: '運営者について',
    description:
      'このサイトを運営するBYU Management Society Tokyo Chapterについて',
    href: '/about',
    icon: UserGroupIcon,
  },
];
