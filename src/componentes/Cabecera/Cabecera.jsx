import './Cabecera.css';

function Cabecera(props) {
  return (
    <header className="cabecera">
      <p>cabecera {props.usuario}</p>
    </header>
  );
}
export default Cabecera;  