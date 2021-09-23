import Header from "./components/Header";
import Footer from "./components/Footer";
import TodosList from "./components/TodosList";

function App() {
  return (
    <div className='todo-container'>
        <Header/>
        <TodosList/>
        <Footer/>
    </div>
  );
}

export default App;
