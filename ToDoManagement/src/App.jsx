import ListTodo from "./Component/ListToDoComponent";
import AddToDos from "./Component/AddTodoComponent";

import { Header } from "./Component/HeaderComponent";
import { Footer } from "./Component/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListTodo />} />
          <Route path="/api/todos" element={<ListTodo />} />
          <Route path="add-todos" element={<AddToDos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
