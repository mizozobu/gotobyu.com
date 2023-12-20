'use client';

import {
  useEffect,
  useState,
  type ComponentType,
  type Dispatch,
  type SetStateAction,
} from 'react';

export const useServerProps = <P,>(
  getServerProps: () => P | Promise<P>,
  defaultServerProps: P,
): [P, Dispatch<SetStateAction<P>>] => {
  const [state, setState] = useState<P>(defaultServerProps);

  useEffect(() => {
    void (async (): Promise<void> => {
      const props = await getServerProps();
      setState(props);
    })();
  }, [getServerProps]);

  return [state, setState];
};

export const WithServerProps =
  <P extends object>(
    getServerProps: () => Partial<P> | Promise<Partial<P>>,
    defaultServerProps: Awaited<ReturnType<typeof getServerProps>>,
  ) =>
  (Component: ComponentType<P>) => {
    const ComponentWithHoc = (props: P): JSX.Element => {
      const [serverProps] = useServerProps(getServerProps, defaultServerProps);
      return <Component {...serverProps} {...props} />;
    };

    return ComponentWithHoc;
  };
