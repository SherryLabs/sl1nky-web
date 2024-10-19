import { BlockchainAction } from './interface/BlockchainAction';

export interface Metadata<T extends ActionType = 'action'> {
    type: T;
    icon: string;
    title: string;
    description: string;
    label: string;
    disabled: boolean;
    actions?: BlockchainAction[];
}


    
export type ActionType = "action" | "message" | "post" | "external-link";