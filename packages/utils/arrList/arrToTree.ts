// ts写一个数组转树形结构的方法
// Path: packages\arrList\arrToTree.ts
// // 将扁平数组转换为树形结构，使用到了浅拷贝，所以不会改变原数组，不会改变map对象
import { isUndefinedOrNull, isArray } from "../is/index";
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
export function arrayToTree<T extends NodeType>(
  nodes: T[],
  {
    id = "id",
    pid = "pid",
    children = "children",
  }: { id?: string; pid?: string; children?: string }
) {
  const map = new Map<number | string, TreeNode<T>>();
  const roots: TreeNode<T>[] = [];

  nodes.forEach((node) => {
    const nodeId: string | number = node[id];
    const parentId: string | number = node[pid];
    if (isUndefinedOrNull(nodeId) || isUndefinedOrNull(parentId)) {
      throw new Error(
        `${JSON.stringify(node)}:${id} or ${pid} format is undefined`
      );
    }
    map.set(nodeId, { ...node, [children]: [] });
  });

  nodes.forEach((node) => {
    const nodeId: string | number = node[id];
    const parentId: string | number = node[pid];
    const parent = map.get(parentId) as TreeNode<NodeType>;
    const childrenNode = map.get(nodeId);
    if (parent) {
      parent[children] = [...(parent[children] ?? []), map.get(nodeId)];
      // parent[children].push(childrenNode);
    }
    if (!parentId) {
      roots.push(childrenNode!);
    }
  });
  return roots;
}
// treeToArr
// Path: packages\arrList\arrToTree.ts
// // 将树形结构转换为扁平数组
/**
 * @description 将树形结构转换为扁平数组
 * @param tree TreeNode<T>[]
 * @param param1 {children?: string}
 * @returns TreeNode<T>[]
 */
export function treeToArr<T>(
  tree: TreeNode<T>[],
  { children = "children" }: { children?: string }
) {
  const result: TreeNode<T>[] = [];
  const dfs = (tree: TreeNode<T>[]) => {
    tree.forEach((node) => {
      result.push(node);
      const nodeChildren = node[children];
      if (isArray(nodeChildren) && node[children].length > 0) {
        dfs(node[children]);
      }
      delete node[children];
    });
  };
  dfs(tree);
  return result;
}
