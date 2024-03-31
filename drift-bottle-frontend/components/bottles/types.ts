export type Bottle = {
    owner: string;
    bottle_id: string;
    label: number;
    content: string;
    star_counter: number;
    star_list: any;
    completed: boolean;
    reply_counter: number;
    reply_list: any;
    environmental_value: number;
    [key: string]: any;
};