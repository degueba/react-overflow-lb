import React, { useContext } from "react";
import { QuestionType } from "./global.defs";
import { Handle, Position } from "reactflow";
import { ModalContext } from "./context/ModalContext";

function Question({ data }: { data: QuestionType }) {
  const { setModalContent } = useContext(ModalContext);
  const { title, type } = data;

  const editQuestion = () => {
    // open modal
    setModalContent && setModalContent(<div>Edit {title}</div>);
  };

  return (
    <div className="question">
      <Handle id="a" type="source" position={Position.Right} />
      <span className="nodrag question-title" onClick={editQuestion}>
        {title}
      </span>
      <span className="question-type">{type}</span>
      <Handle id="b" type="target" position={Position.Left} />
    </div>
  );
}

export default Question;
