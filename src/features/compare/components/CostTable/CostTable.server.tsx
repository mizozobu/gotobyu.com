'use client';

import { getUSDtoJPY } from '@/features/forex';
import { CostTable as _CostTable } from './CostTable';
import { WithServerProps } from './WithServerProps';

export const CostTable = WithServerProps(getUSDtoJPY, {
  exrate: 0,
})(_CostTable);
