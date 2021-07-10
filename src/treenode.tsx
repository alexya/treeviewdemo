import React, { useCallback, useContext, useState } from "react";
import { Item } from "./types";
import { TreeViewContext } from "./App";
import { selectionChange } from "./slice";

export interface TreeNodeProps {
  node: Item;
  level: number;
  isSelected: string;
  expanded: boolean;
}

const TreeNode = (props: TreeNodeProps) => {
  const { node, level, isSelected } = props;
  const indent = level * 20;
  const [expanded, setExpanded] = useState(props.expanded);
  const { dispatch } = useContext(TreeViewContext);

  const handleClick = useCallback(() => {
    if (dispatch) {
      dispatch(selectionChange(node.name));
    }
  }, [dispatch, node]);

  const handleDoubleClick = useCallback(() => {
    setExpanded((prev) => !prev);
    console.log(`double click the node: ${node.name}`);
  }, [node]);

  console.log("render treenode");
  return (
    <React.Fragment>
      <div
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        style={{
          color: "black",
          paddingLeft: `${indent}px`,
          userSelect: "none"
        }}
      >
        {isSelected === node.name ? node.name + " *** selected ***" : node.name}
      </div>

      {expanded
        ? node.children.map((data, index) => {
            return (
              <TreeNode
                node={data}
                level={level + 1}
                key={`${data.name}-${index}`}
                isSelected={isSelected}
                expanded={false}
              />
            );
          })
        : null}
    </React.Fragment>
  );
};

export default TreeNode;
