import { useState, useCallback, useEffect } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "./App.css";
import "reactflow/dist/style.css";
import QuestionModule from "./QuestionModule";
import Modal from "./Modal";
import { questionnaire } from "./data/questionnaire";

function getDefaultNodes() {
  const initialXPosition = 170;
  const defaultNodes = questionnaire.questions.map(
    (question, questionIndex) => ({
      id: String(questionIndex + 1),
      type: "questionModule",
      data: question,
      position: { x: initialXPosition * questionIndex, y: 0 },
    })
  );
  return defaultNodes;
}

const defaultNodes = getDefaultNodes();

const defaultEdges = [
  { id: "edge-1", source: "1", target: "2", sourceHandle: "a" },
  { id: "edge-2", source: "2", target: "3", sourceHandle: "b" },
];

const nodeTypes = {
  questionModule: QuestionModule,
};

const savedEdges = JSON.parse(localStorage.getItem("edges"));
const savedNodes = JSON.parse(localStorage.getItem("nodes"));

function App() {
  const [nodes, setNodes] = useState(savedNodes ?? defaultNodes);
  const [edges, setEdges] = useState(savedEdges ?? defaultEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  useEffect(() => {
    const newNodes = [...nodes];

    edges.forEach((edge, edgeIndex) => {
      const nodeSource = newNodes.find((node) => node.id === edge.source);
      const nodeTarget = newNodes.find((node) => node.id === edge.target);
      nodeSource.data.order_number = edgeIndex + 1;
      nodeTarget.data.order_number = nodeSource.order_number + 1;
    });

    setNodes(newNodes);
    localStorage.setItem("nodes", JSON.stringify(newNodes));
    localStorage.setItem("edges", JSON.stringify(edges));
  }, [edges]);

  useEffect(() => {
    localStorage.setItem("nodes", JSON.stringify(nodes));
  }, [nodes]);

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="questionnaire-logic-flow"
    >
      <Modal />
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onEdgeClick={(_, { id }) => {
          setEdges((edges) => edges.filter((e) => e.id !== id));
        }}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <header className="header">
          <h1>{questionnaire.title}</h1>
          <button onClick={() => console.log("save...")}>Save</button>
        </header>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
