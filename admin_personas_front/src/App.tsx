import { AdminPeopleContext } from "./context";
import { useModal } from "./hooks";
import { AdminPersonas } from "./pages";
import { Modal } from "./pages";

function App() {

  const modal = useModal();
  const { isModalOpen, contentModal } = modal;

  return (
    <AdminPeopleContext.Provider value={modal}>
      <AdminPersonas />
      <Modal isModalOpen={isModalOpen} body={contentModal} />
    </AdminPeopleContext.Provider>
  )
}

export default App;