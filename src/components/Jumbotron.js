import Container from "react-bootstrap/Container";
import "./style.css";

function Jumbotron() {
    return (
        <Container id="jumbo">
        <div className="jumbotron text-center m-4">
        <h1>Employee Directory</h1>
        <h3 className='m-2'>Search for Colleagues</h3>
        <p>Click Column Name to Sort in Ascending or Descending Order</p>
        </div>
     </Container>
    );
}

export default Jumbotron;