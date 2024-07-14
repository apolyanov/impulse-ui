import { GetOptionId, GetOptionLabel, GetOptionValue, SimpleOption } from '@impulse-ui/types';
declare const processOptions: (unProcessedOptions: any[], getOptionValue?: GetOptionValue<any>, getOptionLabel?: GetOptionLabel<any>, getOptionId?: GetOptionId<any>) => SimpleOption[];
declare const optionProcessor: (option: any, id: number | string, getOptionValue?: GetOptionValue<any>, getOptionLabel?: GetOptionLabel<any>, getOptionId?: GetOptionId<any>) => SimpleOption;
export { optionProcessor, processOptions };
