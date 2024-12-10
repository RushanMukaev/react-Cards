import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <Card imgSrc="https://media.istockphoto.com/id/1318666271/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D0%B9%D0%BE%D1%80%D0%BA%D1%88%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80%D0%B0-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=1024x1024&w=is&k=20&c=L7C95Zn9v8UPdt2ts8E7_lXdAL1EsGvna3nCpyMh980=">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </Card>
  );
}

export default App;
