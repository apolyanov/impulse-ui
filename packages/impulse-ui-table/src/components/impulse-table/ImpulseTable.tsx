import { ImpulseTableProps } from '../../types';
import { ImpulseTableProvider } from '../impulse-table-provider';
import { ImpulseTableWrapper } from '../impulse-table-wrapper/ImpulseTableWrapper.tsx';

const ImpulseTable = <T extends object>({ iStyle, ...tableProps }: ImpulseTableProps<T>) => {
  const { tableHeaderProps, ...tableProviderProps } = tableProps;

  return (
    <ImpulseTableProvider {...tableProviderProps}>
      <ImpulseTableWrapper {...tableProps} />
    </ImpulseTableProvider>
  );
};

export { ImpulseTable };
