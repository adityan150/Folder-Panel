const useTraverseTree = () => {
  return function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: []
      });

      return tree;
    }

    let latestNodes = [];
    if (tree.items)
      latestNodes = tree.items.map((ob) => {
        return insertNode(ob, folderId, item, isFolder);
      });

    return { ...tree, items: latestNodes };
  };
};

export default useTraverseTree;
