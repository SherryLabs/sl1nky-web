import { BlockchainAction } from './interface/BlockchainAction';

export interface Metadata<T extends ActionType = 'action'> {
    type: T;
    icon: string;
    title: string;
    description: string;
    label: string;
    disabled: boolean;
    links?: {
        actions: LinkedAction[];
    }
}

/** If there is parameters we add inputs */
export interface LinkedAction {
    /** Type of action to be performed by user */
    type: LinkedActionType;
    /** URL endpoint for an action */
    href: string;
    /** button text rendered to the user */
    label: string;
    blockchainActions?: Array<BlockchainAction>;
    extraActions?: Array<LinkedAction>;
}

export type LinkedActionType =
    | "blockchain-write" /* User is writing to the blockchain */
    | "blockchain-read" /* User is reading from the blockchain */
    | "normal" /* User is performing a normal action */
    
export type ActionType = "action" | "message" | "post" | "external-link";