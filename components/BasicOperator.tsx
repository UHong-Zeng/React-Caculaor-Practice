import { basic_operation } from "@/app/libs";
import {} from 'react'

const BasicOperator = () => {
  return (
    <main className="grid grid-cols-2 grid-rows-4 outline rounded-md h-64 gap-1">
      {basic_operation.map((item,index) => (
        <button
          key={item.name}
          className={`
            btn col-start-${item.position?.col} row-start-${item.position?.row}
          `}
        >{item.operation}</button>
      ))}
    </main>
  );
};

export default BasicOperator;
