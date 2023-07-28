function Card({children}) {
    console.log();
  return (
    <div className="flex justify-center items-center border-2 border-slate-600 m-3 p-3">
        {children}
    </div>
  )
}

export default Card