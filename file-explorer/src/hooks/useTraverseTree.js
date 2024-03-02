import * as uuid from "uuid";

const useTraverseTree = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    // This logic is for the matched item
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: uuid.v4(),
        name: item,
        isFolder: isFolder,
        items: [],
      });

      return tree;
    }

    // this logic is for traversing
    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  const deleteNode = () => {};

  const renameNode = () => {};

  return { insertNode, deleteNode, renameNode };
};
export default useTraverseTree;
