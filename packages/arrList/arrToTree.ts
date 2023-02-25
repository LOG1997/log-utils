// 将扁平数组转换为树形结构，使用到了浅拷贝，所以不会改变原数组，不会改变map对象
/**
 *
 * @param arr any[]
 * @param? id string  代表id的字段，默认为‘id’
 * @param? pid string  代表pid的字段，默认为‘pid’
 * @param? children string 代表children的字段，默认为‘children’
 * @returns 
 */
export const arrayToTree = (
    arr: any[],
    id = "id",
    pid = "pid",
    children = "children"
) => {
    const res: any[] = [];
    // 去重
    const map = arr.reduce(
        (acc: any, cur: any) => ((acc[cur[id]] = cur), acc),
        {}
    );
    for (const item of arr) {
        // 通过map快速找到父节点
        const parent = map[item[pid]];
        // 父节点存在将其加入到父节点的children中，不存在则加入到根节点
        if (parent) {
            (parent[children] || (parent[children] = [])).push(item);
        } else {
            res.push(item);
        }
    }
    return res;
};

