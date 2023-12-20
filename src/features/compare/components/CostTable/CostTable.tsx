import type { ComponentPropsWithoutRef } from 'react';
import { getForex } from '@/features/forex';
import { CostTable as ClientCostTable } from './CostTable.client';

/**
 * Props for {@link CostTable}
 */
interface Props
  extends Omit<ComponentPropsWithoutRef<typeof ClientCostTable>, 'exrate'> {}

/**
 * Server component for {@link ClientCostTable | CostTable}
 */
export const CostTable = async (props: Props): Promise<JSX.Element> => {
  const { exrate } = await getForex('USD', 'JPY');

  return <ClientCostTable exrate={exrate} {...props} />;
};
