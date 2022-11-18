import './App.css';
import { useMediaQuery } from 'react-responsive'

function App() {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  const tabLg = useMediaQuery({
    query: '(min-width: 960px) and (max-width: 1279px)'
  })
  const tabSm = useMediaQuery({
    query: '(min-width: 600px) and (max-width: 959px)'
  })
  const mobile = useMediaQuery({
    query: '(min-width: 0px) and (max-width: 599px)'
  })

  return (
    <div className="App">
      {isDesktop && <div style={{backgroundColor:'red'}}>Desktop</div>}
      {tabLg && <div style={{backgroundColor:'orange'}}>TabLg</div>}
      {tabSm && <div style={{backgroundColor:'yellow'}}>TabSm</div>}
      {mobile && <div style={{backgroundColor:'green'}}>Mobile</div>}
    </div>
  );
}

export default App;
