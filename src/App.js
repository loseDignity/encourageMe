import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [kkk, setkkk] = useState(null);
  const getVal = () => {
    if (kkk != null){
      let commentList = document.getElementById("inserthere").children;  
      let isDup = false;
      if(commentList.length){
        for (let i = 0; i < commentList.length; i++){
          if(commentList[i].innerHTML == '*' + kkk){
            window.alert("그 말은 이미 했어용♡");
            isDup = true;
          }
        }
        
      }  
      const para = document.createElement("P"); 
      para.style.color = "blue";   
      para.style.fontSize = "small";  
      const addT = document.createTextNode('*' + kkk);      // Create a text node
      if (isDup == false){
        para.appendChild(addT);  
      }
      document.getElementById("inserthere").appendChild(para);    
    }                   // Create a <p> node
  };  

  const handleChange = (val) => {
    setkkk(val.target.value);
  }
  return (
    <div className="App">
      <div className="box" style={{
        padding: 20
      }}>
        <div style={{"textAlign": "left", marginLeft: "20px"}}>
          <i style={{"textAlign": "left", "color": "grey"}}>하 &lt; &lt;마이네임&gt; &gt; 안보현이랑, 한소희 로맨스에 치인다,,</i>
        </div>
          <input type="text"
                  placeholder="40자 이내로 용기 좀 주세요😂 Please encourage me (鼓励我)" 
                  maxLength='40'
                  style={{"width" : "90%", "height": "10%"}}
                  onChange={ handleChange }  
                  />
          <button type="submit">
            <i className="fa fa-search" onClick={ getVal }></i>
          </button>
          <div id="inserthere" style={{"textAlign":"left", paddingLeft: 20}}></div>
      </div>
      {/* <footer>내 이메일 : dlosemy@gmail.com</footer> */}
    </div>
  );

}

export default App;
