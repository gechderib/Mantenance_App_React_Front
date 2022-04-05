import {useState, useRef} from 'react'
import ProbAddWrap from '../ui/ProbAddWrap';

function ProblemAdd(props) {
  var user = JSON.parse(localStorage.getItem("user"));
  var fullname = user["fullname"];
  var [itemType, setItemType] = useState([]);
  var [sysType, setItemSys] = useState([]);
  var [isDisable, setIsDisable] = useState("");
  var [workField, setWorkField] = useState("");
  var [sex, setSex] = useState("ወንድ");
  const directorateWorkflowName = useRef();
  const officeName = useRef();
  const officeNumber = useRef();
  const time = useRef();
  const reportedProblem = useRef();

  function handleAddProblem(e) {
    e.preventDefault()
    const enteredWrokField = workField;
    const entereddirectorateWorkflowName =
      directorateWorkflowName.current.value;
    const enteredofficeName = officeName.current.value;
    const enteredofficeNumber = officeNumber.current.value;
    const enteredtime = time.current.value;
    const enteredsex = sex;
    const enteredisUserDisabled = isDisable;
    const entereditemType = itemType
    const enteredsysType = sysType
    const enteredreportedProblem = reportedProblem.current.value;

    const problemInfo = {
      workField: enteredWrokField,
      directorateWorkflowName: entereddirectorateWorkflowName,
      officeName: enteredofficeName,
      officeNumber: enteredofficeNumber,
      time: enteredtime,
      sysUsername: fullname,
      sex: enteredsex,
      isUserDisabled: enteredisUserDisabled,
      itemType: entereditemType,
      sysType: enteredsysType,
      reportedProblem: enteredreportedProblem,
    };
    console.log(problemInfo)
    props.onAddProblem(problemInfo)
  }


  function handleCheckItem(e){

    if(e.target.checked){
      itemType.push(e.target.value)
    }
    if(!e.target.checked){
      itemType = itemType.filter((item)=> item !== e.target.value)
    }
    console.log(itemType)
  }
  function handleCheckSys(e){

    if(e.target.checked){
      sysType.push(e.target.value)
    }
    if(!e.target.checked){
      sysType = sysType.filter((item)=> item !== e.target.value)
    }
    console.log(sysType)
  }


 
  return (
    <ProbAddWrap>
      <form onSubmit={handleAddProblem}>

      <div className="form-row">
          <p className="mr-3">መስክ:</p>
          <div className="form-check mr-4">
            <input
              className="form-check-input"
              type="radio"
              name="main"
              id="main"
              value="ዋና መ/ቤት"
              onClick={(e) => setWorkField("ዋና መ/ቤት")}
            />
            <label className="form-check-label" htmlFor="main">
            ዋና መ/ቤት
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="main"
              id="main"
              value="ምድብ ፍትህ ጽ/ቤት"
              onClick={(e) => setWorkField("ምድብ ፍትህ ጽ/ቤት")}
            />
            <label className="form-check-label" htmlFor="main">
            ምድብ ፍትህ ጽ/ቤት
            </label>
          </div>
        </div>


        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="directorateWorkflowName">የ ዳይሬክቶሬቱ/ የ ስራ ሂደት ስም</label>
            <input
              type="text"
              className="form-control"
              id="directorateWorkflowName"
              placeholder="የ ዳይሬክቶሬቱ/ የ ስራ ሂደት ስም"
              ref={directorateWorkflowName}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="officeName">የ ምድብ ጽ/ቤቱ ስም</label>
            <input
              type="text"
              className="form-control"
              id="officeName"
              placeholder="የ ምድብ ጽ/ቤቱ ስም"
              ref={officeName}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="officeNumber">የቢሮ ቁጥር</label>
            <input
              type="number"
              className="form-control"
              id="officeNumber"
              placeholder="ቢሮ ቁጥር"
              ref={officeNumber}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="time">ሰዓት</label>
            <input
              type="date"
              className="form-control"
              id="time"
              placeholder="ሰዓት"
              ref={time}
            />
            {/* <input 
            type="text" 
            className="form-control"
            
            placeholder="ሰዓት"
            ref={time} 
            id="popupDatepicker" /> */}

          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="sysUsername">የ ተጠቃሚው ስም</label>
            <input
              type="text"
              className="form-control"
              id="sysUsername"
              placeholder={fullname}
              disabled
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="sex">ጾታ</label>
            <select id="sex" className="form-control" onChange={(e)=>setSex(e.target.value)}>
              <option value="ወንድ">ወንድ</option>
              <option value="ሴት">ሴት</option>
            </select>
          </div>
        </div>


        <div className="form-row">
          <p className="mr-3">የ ተጠቃሚው አካል ጉዳተኛ ናቸው?.</p>
          <div className="form-check mr-4">
            <input
              className="form-check-input"
              type="radio"
              name="disable"
              id="yes"
              value="አወ"
              onClick={(e) => setIsDisable("አወ")}
            />
            <label className="form-check-label" htmlFor="disable">
              አወ
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="disable"
              id="no"
              value="አይደሉም"
              onClick={(e) => setIsDisable("አይደሉም")}
            />
            <label className="form-check-label" htmlFor="disable">
              አይደሉም
            </label>
          </div>
        </div>


        <div className="form-row">
          <p className="mr-4">የ እቃው አይነት.</p>
          <div className="form-check mr-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="comp"
              id="computer"
              value="ኮምፒዩተር"
              onClick={handleCheckItem} 
            />
            <label className="form-check-label" htmlFor="comp">
            ኮምፒዩተር 
            </label>
          </div>
          <div className="form-check mr-4" >
            <input
              className="form-check-input"
              type="checkbox"
              name="print"
              id="print"
              value="ፕሪንተር"
              onClick={handleCheckItem} 
            />
            <label className="form-check-label" htmlFor="print">
            ፕሪንተር
            </label>
          </div>
          <div className="form-check mr-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="photoCopy"
              id="print"
              value="ፎቶኮፒ"
              onClick={handleCheckItem} 
            />
            <label className="form-check-label" htmlFor="photoCopy">
            ፎቶኮፒ
            </label>
          </div>
          <div className="form-check mr-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="fax"
              id="fax"
              value="ፋክስ"
              onClick={handleCheckItem} 
            />
            <label className="form-check-label" htmlFor="fax">
            ፋክስ
            </label>
          </div>
          <div className="form-check mr-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="scan"
              id="scan"
              value="ስካነር"
              onClick={handleCheckItem} 
            />
            <label className="form-check-label" htmlFor="scan">
            ስካነር
            </label>
          </div>
          <div className="form-check mr-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="other"
              id="other"
              value="ሌላ"
              onClick={handleCheckItem} 
            />
            <label className="form-check-label" htmlFor="other">
            ሌላ
            </label>
          </div>
        </div>




        <div className="form-row">
          <p className="mr-3">የ ሲስተም ዓይነት</p>
          <div className="form-check mr-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="netw"
              id="netw"
              value="ኔቶርክ"
              onClick={handleCheckSys}
            />
            <label className="form-check-label" htmlFor="netw">
            ኔቶርክ 
            </label>
          </div>
          <div className="form-check mr-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="mail"
              id="mail"
              value="ሜል ኤክስቼንጅ"
              onClick={handleCheckSys}
            />
            <label className="form-check-label" htmlFor="print">
            ሜል ኤክስቼንጅ
            </label>
          </div>
          <div className="form-check mr-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="pis"
              id="pis"
              value="PIS"
              onClick={handleCheckSys}
            />
            <label className="form-check-label" htmlFor="pis">
            PIS
            </label>
          </div>
          <div className="form-check mr-4">
            <input
              className="form-check-input"
              type="checkbox"
              name="oth"
              id="oth"
              value="ሌላ"
              onClick={handleCheckSys}
            />
            <label className="form-check-label" htmlFor="oth">
            ሌላ
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="problemFaced">ሪፖርት የተደረገ ችግር፡</label>
          <textarea
            className="form-control"
            id="problemFaced"
            placeholder="ችግር ያብራሩ"
            rows={4}
            required
            ref={reportedProblem}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-secondary">
          ላክ
          </button>
      </form>
    </ProbAddWrap>
  );
}

export default ProblemAdd;
