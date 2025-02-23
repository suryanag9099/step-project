import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [count, setCount] = useState(0);
  // let step =1;

  function handelpervious() {
    if (step > 1);
    {
      setStep(step - 1);
    }
  }

  function handelnext() {
    if (step < 3);
    {
      setStep((s) => s + 1);
      // setStep((s)=> s+1);
    }
  }

  function handleCountIncrease() {
    setCount(count + step);
  }

  function handleCountDecrease() {
    setCount(count - step);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", textcolor: "#fff" }}
              onClick={handelpervious}
              emoji="👈"
              // onMouseEnter={()=>{alert("prev")}}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handelnext}
            >
              Next
            </button>
          </div>

        
          <span className="date">{date.toDateString()}</span>
        </div>
      )}
    </>
  );
}
