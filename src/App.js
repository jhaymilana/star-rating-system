import './style/index.css';
import { useState } from 'react';
import StarRating from "./components/StarRating";
import Dialog from './components/Dialog';

function App() {
  const useModal = () => {
    const [visible, setVisible] = useState(false);
    function toggle() {
      setVisible(!visible);    
    }
    return {toggle, visible}
  };

  const {toggle, visible} = useModal();

  return (
    <>
    <div className="container">
      <StarRating />
      <Dialog visible={visible} toggle={toggle} />
    </div>
    <button className="modal-button" onClick={toggle}>Show Modal</button>
    </>
  );
}

export default App;