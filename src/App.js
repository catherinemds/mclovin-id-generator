import './App.css';
import Image from "./barcode.svg";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="photo"></div>
        <div className='barcode'>
          <img src={Image} alt='barcode' width="160px" height="80px" />
        </div>
        <div className="info">
          <span className='state'>HAWAII</span> <span className='text'>driver license</span>
          <div className='id-data'>
            <div className='id-number'>Number <b>01-47-87441</b></div>
            <div>DOB 06/03/1981 EXP 06/03/2008</div>
            <div class="data-column">
              <div id="item-0">HT</div>
              <div id="item-1">WT</div>
              <div id="item-2">HAIR</div>
              <div id="item-3">EYES</div>
              <div id="item-4">SEX</div>
              <div id="item-5">CTY</div>
              <div id="item-6">5-10</div>
              <div id="item-7">130</div>
              <div id="item-8">BRO</div>
              <div id="item-9">BRO</div>
              <div id="item-10">M</div>
              <div id="item-11">O</div>
            </div>
            <div>ISSUE DATE CLASS RESTR ENDORSE</div>
            <div>06/18/1998 3</div>
          </div>
            <span className='signature'>McLovin</span>
        </div>
      </div>
    </div>
  );
}

export default App;
