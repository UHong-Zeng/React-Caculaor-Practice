'use client';

const onClick = (num: string) => {
  console.log(num);
}

interface NineProps {
  onclick: (n: string) => void;
}

const Nine:React.FC<NineProps> = ({onclick}) => {
  const handleClick = (n: string) => {
    return () => {
      onclick(n);
    }
  }

  return (
    <div className='rounded-md outline outline-amber-300 h-64 flex'>
      <div className="grid grid-rows-4 grid-cols-3 gap-2 text-2xl">
        <button className='btn rounded-sm bg-slate-100 col-start-1 col-span-2'
          onClick={handleClick('0')}
        >
          0
        </button>
        <button className='btn rounded-sm bg-slate-100 col-start-3'>
          .
        </button>
        {
          Array.from({length:9}, (_,i) => (
            <button 
              key={i+1}
              className={`${i + 1 <= 3 ? 'row-start-3' : i + 1 <= 6 ? 'row-start-2' : 'row-start-1'}
                        ${i % 3 === 0 ? 'col-start-1' : i % 3 === 1 ? 'col-start-2' : 'col-start-3'}
                        btn `}
              onClick={handleClick((i+1).toString())}
            >{i+1}</button>
          ))
        }
      </div>
    </div>
    
  )
}

export default Nine