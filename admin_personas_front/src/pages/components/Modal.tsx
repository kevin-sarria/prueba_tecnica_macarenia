interface Props {
    body: JSX.Element | null;
    isModalOpen: boolean;
}

export const Modal = ({ body, isModalOpen }: Props) => {
    return (
      <>
      {isModalOpen && 
        <div className="overlay">
            {body}
        </div>}
      </>)
  };