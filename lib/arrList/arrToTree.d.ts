/**
 *
 * @param arr any[]
 * @param? id string  代表id的字段，默认为‘id’
 * @param? pid string  代表pid的字段，默认为‘pid’
 * @param? children string 代表children的字段，默认为‘children’
 * @returns
 */
export declare const arrayToTree: (arr: any[], id?: string, pid?: string, children?: string) => any[];
