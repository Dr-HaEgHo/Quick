import { ImageSourcePropType } from "react-native";

export interface CardProps {
    title: string;
    image: ImageSourcePropType | undefined;
    route?: any;
}

export interface OrderCardProps extends CardProps {
    description: string;
    time: string;
}

export interface DistributorCardProps extends CardProps {
    name: string;
    details: string;
    rate: number;
    id: string;
}

export interface ProductProps extends Omit<CardProps, 'title'> {
    name: string;
    details: string;
    price: number;
    rate: number;
    id: string;
}

export enum MethodItem  {
    Get = 'GET',
    Post = 'POST',
    Patch = 'PATCH'
}

export interface paramsItem {
    q: string;
    page: string
}

export interface FetchProps {
    url: string,
    method: MethodItem,
    params: paramsItem
}

// export type useFetchType = (}) => any

