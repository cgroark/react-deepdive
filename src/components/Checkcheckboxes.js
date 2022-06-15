import React, { useEffect, useState } from "react"

// export default function Checkcheckboxes(){
//     const [checkedOne, setCheckedOne] = useState(false)
//     const [checkedTwo, setCheckedTwo] = useState(false)

//     return(
//         <form>
//             <label htmlFor="one">check 1</label>&nbsp;<input type="checkbox" name="one" checked={checkedOne} id="one" onClick={() => setCheckedOne(!checkedOne) } />
//             <label htmlFor="two">check 2</label>&nbsp;<input type="checkbox" name="two" checked={checkedTwo} id="two" onClick={() => setCheckedTwo(!checkedTwo)} />
//         </form>
//     )
// }

export default function Checkcheckboxes(){
  const checkboxes = [
    {
      name: "check-box-1",
      key: "checkBox1",
      label: "Check Box 1"
    },
    {
      name: "check-box-2",
      key: "checkBox2",
      label: "Check Box 2"
    }
  ];
  const [checkedItems, setCheckedItems] = useState(
      new Array(checkboxes.length).fill(false)
  );

const handleOnChange = (position) => {
    const updatedCheckedState = checkedItems.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedItems(updatedCheckedState);
}
  return (
    <div>
      {checkboxes.map((each, index) => {
        const {name, key, label} = each;
         return(
         <React.Fragment key={key}>
            <label htmlFor={name} >
            {name}</label>
            <input
              id={name}
              type="checkbox"
              name={`${name}-${index}`}
              checked={checkedItems[index]}
              onChange={() => handleOnChange(index)}
            /><br></br>
         </React.Fragment>
          
          )
      })
       
      }
    </div>
  );
};

