import logo from "./logo.jpg";
export default function Card(props) {
  return (
    <div class="card">
      <div class="container">
        <img src={logo} />
        <h4>
          <b>{props.title}</b>
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
