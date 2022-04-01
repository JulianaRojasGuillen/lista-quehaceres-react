import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {

  const [newQuehacer, setNewQuehacer] = useState ('');
  const [list, setList] = useState([]);

  function addQuehacer(e){
    e.preventDefault();

    if (newQuehacer == ''){
      return;
    }
    setList([...list, 
        {
        text: newQuehacer,
        completed: false
        }]);
    setNewQuehacer('');
    }
  
  function deleteQuehacer(indice){
    setList (list.filter ((_item, i) => i !== indice));
  }

  function alternarChecked (index) {
     const obj = {
      ...list[index]
     };
     obj.completed = !obj.completed;
     setList ([
       ...list.slice(0,index),
       obj
     ].concat (list.slice(index + 1)));
  };

  return (
    <div className="App">
      <form onSubmit={addQuehacer}>
        <input  type="text"
                onChange={e => setNewQuehacer(e.target.value)}
                value = {newQuehacer}></input>
        <button>Añadir</button>
      </form>
      <div>
            <h1>
                Lista de Quehaceres 
            </h1>
            {list.map((item,i) => (
              <div key={i}>
              <span  style={{ textDecoration: item.completed && 'line-through' }}>
                {item.text}
              </span>
              <input  type = "checkbox"
                      checked={item.completed}
                      onClick={() => alternarChecked(i)}></input>
              <button className='boton'
                      onClick={() => deleteQuehacer(i)}>Eliminar</button>
          </div>
            ))}
            
        </div>
    </div>
  );
}

export default App;
