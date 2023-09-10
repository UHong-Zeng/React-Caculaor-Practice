

const Answer = ({ans}: {ans:string}) => {

  return (
    <main className="rounded-md border-2 border-red-400 flex flex-row-reverse" dir='ltr'>
      <div className=' pr-3'>
        {ans.length ? <div>{ans}</div> : <div>0</div>}
      </div>
    </main>
  )
}

export default Answer