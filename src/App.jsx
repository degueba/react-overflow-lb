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
import QuestionModule from "./Components/QuestionModule";
import Modal from "./Components/Modal";
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

function App() {
  const [nodes, setNodes] = useState(defaultNodes);
  const [edges, setEdges] = useState(defaultEdges);

  const connectedNodes = new Set(); // Set to store IDs of connected nodes

  // Iterate through edges to collect connected node IDs
  edges.forEach((edge) => {
    connectedNodes.add(edge.source);
    connectedNodes.add(edge.target);
  });

  // Filter nodes to include only connected nodes
  const connectedNodesData = nodes.filter((node) =>
    connectedNodes.has(node.id)
  );

  const updateNodeOrder = useCallback(() => {
    const orderedNodes = connectedNodesData
      .map((node) => ({
        id: node.id,
        position: node.position,
        order_number: 0, // Initialize order number to be updated
      }))
      .sort((a, b) => {
        // Sort nodes based on their x-coordinate position
        return a.position.x - b.position.x;
      });

    // Update the order_number based on the sorted list
    orderedNodes.forEach((node, index) => {
      const updatedNode = nodes.find((n) => n.id === node.id);
      updatedNode.data.order_number = index + 1;
    });

    // Update the state with the updated nodes
    setNodes([...nodes]);
  }, [nodes]);

  const onNodeDragStop = (event, node) => {
    console.log(node);
    updateNodeOrder();
  };

  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onConnect = (params) => {
    const updatedEdges = addEdge(params, edges);
    setEdges(updatedEdges);
    updateNodeOrder();
  };

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
        onNodeDragStop={onNodeDragStop}
        onEdgeClick={(_, { id }) => {
          setEdges((edges) => edges.filter((e) => e.id !== id));
          updateNodeOrder();
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
