import "./loading.css";

function Loading() {
  return (
    <div>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="textLoading">Cargando</p>
    </div>
  );
}

export default Loading;
