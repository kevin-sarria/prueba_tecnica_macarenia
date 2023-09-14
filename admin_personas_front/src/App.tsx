import { ModalProvider } from "./context";
import { AdminPersonas } from "./pages";
import { Modal } from "./pages";

function App() {

  return (
    <ModalProvider>
      <AdminPersonas />
      <Modal />
    </ModalProvider>
    
  )
}

export default App;