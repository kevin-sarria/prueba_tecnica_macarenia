export const Paginador = () => {
  return (
    <div className="paginador">
      <div className="back">{'<'}</div>
      <div className="page page--active">1</div>
      <div className="page">2</div>
      <div className="page">3</div>
      <div className="page">4</div>
      <div className="separator">...</div>
      <div className="page">11</div>
      <div className="page">12</div>
      <div className="next">{'>'}</div>
    </div>
  );
};
