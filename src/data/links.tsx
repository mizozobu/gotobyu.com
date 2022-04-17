import {
  BookOpenIcon,
  MailOpenIcon,
  OfficeBuildingIcon,
  PresentationChartBarIcon,
  ScaleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import type { ComponentPropsWithoutRef } from 'react';
import { NextImage } from '@c/atoms/NextImage';
import byuLogoImage from '@p/byu/byu-logo.png';
import byuhLogoImage from '@p/byuh/byuh-logo.png';
import byuiLogoImage from '@p/byui/byui-logo.png';

/**
 * Type for page meta data
 */
export interface PageMeta {
  /** Page name. Used in header and card. */
  name: string;
  /** Page detail. Used in header and card. */
  detail: string;
  /** Page title. Used in `<title>`. */
  title: string | undefined;
  /** Page description. Used in `<meta name="description">`. */
  description: string;
  /** Page link */
  href: string;
  /** Page icon. Used in header and card. */
  icon: (props: ComponentPropsWithoutRef<'svg'>) => JSX.Element;
}

/**
 * Index page meda data
 */
export const INDEX_PAGE_META: Omit<PageMeta, 'name' | 'detail' | 'icon'> = {
  title: undefined, // use default title
  description:
    'BYU、BYUH、BYUIへの入学を考えている方に向けて、在学生と卒業生が入学前に知っておきたかった情報をまとめました。専攻、費用、アルバイト、奨学金、入学手続き、BYU3校の比較、英語の勉強方法、卒業後のキャリアなどについて紹介しています。',
  href: '/',
};

/**
 * BYU page meda data
 */
export const BYU_PAGE_META: PageMeta = {
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

/**
 * BYUH page meda data
 */
export const BYUH_PAGE_META: PageMeta = {
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

/**
 * BYUI page meda data
 */
export const BYUI_PAGE_META: PageMeta = {
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

/**
 * Compare page meda data
 */
export const COMPARE_PAGE_META: PageMeta = {
  name: 'BYU3校の比較',
  detail: 'BYU、BYUH、BYUIを必要な英語力や費用の面から数字で比較',
  title: 'BYU、BYUH、BYUIの比較',
  description:
    'BYU、BYUH、BYUIを費用、生徒数、専攻数、英語力などの面で比較します。',
  href: '/tips/compare',
  icon: ScaleIcon,
};

/**
 * Apply page meda data
 */
export const APPLY_PAGE_META: PageMeta = {
  name: '入学手続き',
  detail: 'BYU、BYUH、BYUIへの入学手続き',
  title: '入学手続き',
  description:
    'BYU、BYUH、BYUIの入学手続きについて。締め切り、申込費用、必要な英語力、試験、必要書類についてまとめています。',
  href: '/tips/apply',
  icon: MailOpenIcon,
};

/**
 * Learn English page meda data
 */
export const LEARN_ENGLISH_PAGE_META: PageMeta = {
  name: '英語の勉強方法',
  detail: 'BYU、BYUH、BYUIへの入学基準を満たすための英語の勉強方法',
  title: '英語の勉強方法',
  description:
    'BYU、BYUH、BYUIへの入学に必要な英語力を満たすための勉強法を紹介しています。',
  href: '/tips/learn-english',
  icon: BookOpenIcon,
};

/**
 * Career page meda data
 */
export const CAREER_PAGE_META: PageMeta = {
  name: '就職',
  detail: 'BYU、BYUH、BYUI卒業生の就職先と年収',
  title: '就職',
  description:
    'BYU、BYUH、BYUIの学生の就職先と1年目の年収について。新卒の平均を上回る年収を貰う人や、外資系企業で活躍する人がいます。',
  href: '/tips/career',
  icon: OfficeBuildingIcon,
};

/**
 * Internship page meda data
 */
export const INTERNSHIP_PAGE_META: PageMeta = {
  name: 'インターンシップ',
  detail: 'BYU、BYUH、BYUIの学生のインターンシップ先と給与',
  title: 'インターンシップ',
  description:
    'BYU、BYUH、BYUIの学生のインターンシップ先の企業と給与について。誰もが知っている有名企業でインターンシップをする学生や、インターンシップにもかかわらず一般的な新入社員よりも給与を貰う学生もいます。',
  href: '/tips/internship',
  icon: PresentationChartBarIcon,
};

/**
 * About page meda data
 */
export const ABOUT_PAGE_META: PageMeta = {
  name: '運営者について',
  detail: 'このウェブサイトを運営するBYU Management Society Tokyo Chapterとは',
  title: '運営者について',
  description:
    'このウェブサイトを運営するBYU Management Society Tokyo Chapterについて。',
  href: '/about',
  icon: UserGroupIcon,
};

/**
 * Links in school category
 */
export const SCHOOL_LINKS = [BYU_PAGE_META, BYUH_PAGE_META, BYUI_PAGE_META];

/**
 * Links in additional school category
 */
export const ADDITIONAL_SCHOOL_LINKS = [COMPARE_PAGE_META];

/**
 * Links in apply category
 */
export const APPLY_LINKS = [APPLY_PAGE_META, LEARN_ENGLISH_PAGE_META];

/**
 * Links in career category
 */
export const CAREER_LINKS = [CAREER_PAGE_META, INTERNSHIP_PAGE_META];

/**
 * Links in other category
 */
export const OTHER_LINKS = [ABOUT_PAGE_META];
