import { TreeNode } from "../../../data-structure/tree/treenode";

const levelOrder = (root: TreeNode) => {
  let result: Array<number[]> = [];
  if (root === null) {
    return result;
  }

  let queue: any = [root];
  while(queue.length > 0) {
    let currentLevelQueueLength = queue.length;
    let currentLevel = [];
    for(let i = 0; i < currentLevelQueueLength; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);
      if(node!.left !== null) {queue.push(node.left);}
      if(node!.right !== null) {queue.push(node.right);}


    }
    result.push(currentLevel);
  }
  return result;
}
