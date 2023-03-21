import "./App.css";
import styled from "styled-components";
import RoutesList from "./routes/RoutesList";

function App() {
  return (
    <>
      <Nav>
        <ContentNav>
          <RoutesList />
        </ContentNav>
      </Nav>
    </>
  );
}

//footer 하단 고정
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentNav = styled.div`
  flex: 1;
`;

export default App;
