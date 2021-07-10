import React, { useReducer } from "react";
import { Item } from "./types";
import TreeNode from "./treenode";
import reducer, { initialState, TreeViewContextType } from "./slice";

export const TreeViewContext = React.createContext<TreeViewContextType>({
  state: initialState
});
const rootItem = new Item("Root", []);
for (let i = 0; i < 3; i++) {
  rootItem.children.push(new Item(`${rootItem.name}-Jack${i}`, []));
}

rootItem.children.map((childNode) => {
  return (childNode.children = [1, 2, 3].map((i) => {
    return new Item(`${childNode.name}-John${i}`, []);
  }));
});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <TreeViewContext.Provider value={{ state, dispatch }}>
        <TreeNode
          key={"root-node"}
          node={rootItem}
          level={0}
          isSelected={state.selectedItem}
          expanded={true}
        />
      </TreeViewContext.Provider>
    </React.Fragment>
  );
}

export default App;
