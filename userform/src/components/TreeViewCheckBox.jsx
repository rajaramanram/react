import React, { Component } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdChevronRight,
    MdKeyboardArrowDown,
    MdAddBox,
    MdIndeterminateCheckBox,
    MdFolder,
    MdFolderOpen,
    MdInsertDriveFile
} from "react-icons/md";

const nodes = [
  {
    value: "Countries",
    label: "Countries",
    children: [
      {
        value: "India",
        label:"India",
        children: [
          {
            value: "TamilNadu",
            label: "TamilNadu"
        },
        {
            value: "Kerala",
            label: "Kerala"
        },{
            value: "Karnataka",
            label: "Karnataka"
        },{
            value: "Andra",
            label: "Andra"
        },{
            value: "Delhi",
            label: "Delhi"
        }
            ]
        },
    {
        value: "Pakistan",
        label:"Pakistan",
        children: [
          {
            value: "child-1",
            label: "child-1"
        },
        {
            value: "Child-2",
            label: "Child-2"
        },{
            value: "Child-3a",
            label: "Child-3a"
        },{
            value: "Child-4",
            label: "Child-4"
        },{
            value: "child-5",
            label: "child-5"
        }
            ]
        },
    {
        value: "Bangladesh",
        label:"Bangladesh",
        children: [
          {
            value: "child-1",
            label: "child-1"
        },
        {
            value: "Child-2",
            label: "Child-2"
        },{
            value: "Child-3a",
            label: "Child-3a"
        },{
            value: "Child-4",
            label: "Child-4"
        },{
            value: "child-5",
            label: "child-5"
        }
            ]
        }]
    }]
          

class WidgetTree extends Component {
  state = {
    checked: [],
    expanded: []
  };

  render() {
    const icons = {
      check: <MdCheckBox className="rct-icon rct-icon-check" />,
      uncheck: <MdCheckBoxOutlineBlank className="rct-icon rct-icon-uncheck" />,
      halfCheck: (
        <MdIndeterminateCheckBox className="rct-icon rct-icon-half-check" />
      ),
      expandClose: (
        <MdChevronRight className="rct-icon rct-icon-expand-close" />
      ),
      expandOpen: (
        <MdKeyboardArrowDown className="rct-icon rct-icon-expand-open" />
      ),
      expandAll: <MdAddBox className="rct-icon rct-icon-expand-all" />,
      collapseAll: (
        <MdIndeterminateCheckBox className="rct-icon rct-icon-collapse-all" />
      ),
      //parentClose: <MdFolder className="rct-icon rct-icon-parent-close" />,
      //parentOpen: <MdFolderOpen className="rct-icon rct-icon-parent-open" />,
      leaf: <MdInsertDriveFile className="rct-icon rct-icon-leaf-close" />
    };
    console.log(this);
    return (
      <CheckboxTree
        nodes={nodes}
        checked={this.state.checked}
        expanded={this.state.expanded}
        onCheck={checked => this.setState({ checked })}
        onExpand={expanded => this.setState({ expanded })}
        icons={icons}
      />
    );
  }
}
export default WidgetTree;