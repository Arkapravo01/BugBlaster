import React from "react";
import MessageContext from "./context/MessageContext";
import { useContext } from "react";

function App() {
  const message = "Hello World";
  return (
    <MessageContext.Provider value={message}>
      <ComponentA />
    </MessageContext.Provider>
  );
}

function ComponentA() {
  return (
    <div>
      <ComponentB />
    </div>
  );
}
function ComponentB() {
  const message = useContext(MessageContext);
  return <div>Message:{message}</div>;
}
export default App;
