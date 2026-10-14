import { useState } from "react"


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])
  
  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({ title, details })
    setTask(copyTask)

    //console.log(title,details)
    setTitle('')
    setDetails('')

  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);

    setTask(copyTask)
  }


  return (
    <div className="h-screen lg:flex  bg-black text-white">

      <form 
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className="p-20 flex flex-col gap-5 lg:gap-10 justify-center align-center lg:w-1/2">
        
        <h1 className="text-3xl font-bold">Add Notes</h1>
        
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 border-2 rounded min-w-3/4"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          className="px-5 h-30 py-2  border-2 rounded min-w-3/4"
          placeholder="Write details..."
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button
          className="
           bg-green-700 active:bg-gray-200 rounded-2xl px-3 py-2 ">
          Add Notes
        </button>
        
      </form>

      <div className="  p-10 lg:w-1/2 bg-black lg:border-l-1">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex gap-5 mt-5 flex-wrap h-full overflow-auto">
          {task.map(function (elem,idx) {
            return <div key={idx} className="flex justify-between flex-col items-start h-52 w-40 rounded-xl bg-[url('https://clipart-library.com/image_gallery/139315.png')] bg-cover text-black pt-9 pb-4 px-5 relative">
              <div>
                <h3 className="leading-tight text-xl font-bold uppercase">{elem.title}</h3>
                <p className="mt-3 font-medium text-white leading-tight capitalize text-xs">{elem.details}</p>
              </div>
              <button
                onClick={() => {
                  deleteNote(idx)
                }}
                className="w-full text-xs rounded cursor-pointer active:scale-95 bg-red-500 text-white font-bold">Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
