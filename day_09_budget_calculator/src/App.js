import { useState } from 'react';
import './App.css';
import { FaPaperPlane, FaRegPenToSquare, FaRegTrashCan } from 'react-icons/fa6';

function App() {
  const [alertCreate, setAlertCreate] = useState(false);
  const [alertModify, setAlertModify] = useState(false);
  const [alertDelete, setAlertDelete] = useState(false);

  const [modifyIdx, setModifyIdx] = useState(-1);
  const [spend, setSpend] = useState('');
  const [cost, setCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [budgetList, setBudgetList] = useState([]);

  const handleClickSubmit = () => {
    if (spend === '' || cost === 0) return;
    if (modifyIdx !== -1) {
      setTotalCost(
        (tc) => Number(tc) - Number(budgetList[modifyIdx].cost) + Number(cost)
      );
      setBudgetList(
        budgetList.map((item, idx) => {
          if (idx === modifyIdx) return { spend: spend, cost: cost };
          else return item;
        })
      );
      setAlertModify(true);
      setTimeout(() => {
        setAlertModify(false);
      }, 2000);
    } else {
      setTotalCost((tc) => Number(tc) + Number(cost));
      setBudgetList([...budgetList, { spend: spend, cost: cost }]);

      setAlertCreate(true);
      setTimeout(() => {
        setAlertCreate(false);
      }, 2000);
    }

    setSpend('');
    setCost(0);
    setModifyIdx(-1);
  };

  const handleClickModify = (idx) => {
    setSpend(budgetList[idx].spend);
    setCost(budgetList[idx].cost);

    setModifyIdx(idx);
  };

  const handleClickDelete = (idx) => {
    if (idx < modifyIdx) setModifyIdx((index) => index - 1);
    else if (idx === modifyIdx) {
      setSpend('');
      setCost(0);
      setModifyIdx(-1);
    }

    setTotalCost((cost) => cost - budgetList[idx].cost);
    setBudgetList(budgetList.filter((user, index) => index !== idx));

    setAlertDelete(true);
    setTimeout(() => {
      setAlertDelete(false);
    }, 2000);
  };

  const handleClickDeleteAll = () => {
    setBudgetList([]);
    setTotalCost(0);
  };

  return (
    <div>
      {alertDelete && (
        <div
          style={{
            width: '100%',
            padding: '5px',
            marginBottom: '10px',
            backgroundColor: 'maroon',
            color: 'white',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          아이템이 제거되었습니다.
        </div>
      )}
      {alertModify && (
        <div
          style={{
            width: '100%',
            padding: '5px',
            marginBottom: '10px',
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          아이템이 수정되었습니다.
        </div>
      )}
      {alertCreate && (
        <div
          style={{
            width: '100%',
            padding: '5px',
            marginBottom: '10px',
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          아이템이 생성되었습니다.
        </div>
      )}
      <h1 style={{ margin: '0' }}>예산 계산기</h1>
      <div className='board'>
        <div className='inputFields'>
          <div className='inputField'>
            <p>지출 항목</p>
            <input
              type='text'
              placeholder='예) 렌트비'
              value={spend}
              onChange={(e) => {
                setSpend(e.target.value);
              }}
            ></input>
          </div>
          <div className='inputField'>
            <p>비용</p>
            <input
              type='number'
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button onClick={handleClickSubmit}>
          {modifyIdx === -1 ? '제출' : '수정'} <FaPaperPlane />
        </button>
        <div className='budgetList'>
          {budgetList.map((item, idx) => {
            return (
              <div className='budget' key={idx}>
                <span>{item.spend}</span>
                <span>{item.cost}</span>
                <div>
                  <FaRegPenToSquare
                    style={{ color: 'green', marginRight: '8px' }}
                    onClick={() => handleClickModify(idx)}
                  />
                  <FaRegTrashCan
                    style={{ color: 'red' }}
                    onClick={() => handleClickDelete(idx)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={handleClickDeleteAll}>
          목록 지우기 <FaRegTrashCan />
        </button>
      </div>
      <span style={{ float: 'right', fontSize: '20px', paddingTop: '10px' }}>
        총지출: {totalCost}원
      </span>
    </div>
  );
}

export default App;
