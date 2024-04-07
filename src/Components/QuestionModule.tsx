import React, { useState } from "react";
import { Position } from "reactflow";
import Question from "./Question";
import { QuestionType } from "../global.defs";

export type NodeProps<T = any> = {
  id: string;
  data: T;
  dragHandle?: boolean;
  type?: string;
  selected?: boolean;
  isConnectable?: boolean;
  zIndex?: number;
  xPos: number;
  yPos: number;
  dragging: boolean;
  targetPosition?: Position;
  sourcePosition?: Position;
};

export type QuestionModuleData = {
  // initialCount?: number;
};

export default function QuestionModule(props: NodeProps<QuestionType>) {
  return (
    <div className="question-module">
      <Question data={props.data} />
    </div>
  );
}
