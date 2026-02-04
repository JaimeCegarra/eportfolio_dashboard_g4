import './Roles.css';

function Roles(props) {
  return (
    <aside className="roles">
        <p>Roles del usuario: {props.token}</p>
    </aside>
  );
}
export default Roles;