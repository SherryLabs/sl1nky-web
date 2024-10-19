import { BlockchainAction } from './interface/BlockchainAction';

export interface Metadata<T extends ActionType = 'action'> {
    type: T;
    icon: string;
    title: string;
    description: string;
    label: string;
    disabled: boolean;
    actions?: LinkedAction[];
}

export interface LinkedAction {
    type: LinkedActionType;
    href: string;
    label: string;
    blockchainActions?: Array<BlockchainAction>;
    extraActions?: Array<LinkedAction>;
}


export type LinkedActionType =
    | "blockchain-write" 
    | "blockchain-read" 
    | "normal" 
    
export type ActionType = "action" | "message" | "post" | "external-link";