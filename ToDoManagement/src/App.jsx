import ListTodo from "./Component/ListToDoComponent";
import AddToDos from "./Component/AddTodoComponent";
import FooterComponent from "./Component/FooterComponent";
import { Header } from "./Component/HeaderComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Component/RegisterComponent";
import Login from "./Component/LoginComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/api/todos" element={<ListTodo />} />
          <Route path="add-todos" element={<AddToDos />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
