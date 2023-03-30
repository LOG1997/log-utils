type TreeNode<T> = T & {
    [K in string]: any;
};
type NodeType = {
    [key in string]: any;
};
/**
 *
 * @param arr any[] 需要转换的数组
 * @param options {id: string, pid: string, children: string} 配置项
 * @param options.id string 数组中每个对象的id字段
 * @param options.pid string 数组中每个对象的父id字段
 * @param options.children string 数组中每个对象的子节点字段
 * @returns any[] 返回转换后的树形结构
 */
export declare function arrayToTree<T extends NodeType>(nodes: T[], { id, pid, children, }: {
    id?: string;
    pid?: string;
    children?: string;
}): TreeNode<T>[];
/**
 * @description 将树形结构转换为扁平数组
 * @param tree TreeNode<T>[]
 * @param param1 {children?: string}
 * @returns TreeNode<T>[]
 */
export declare function treeToArr<T>(tree: TreeNode<T>[], { children }: {
    children?: string;
}): TreeNode<T>[];
export {};
