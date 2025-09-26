import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/footer'
import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import ticketsData from '../public/tickets.json'

function App() {
  const [tickets] = useState(ticketsData)
  const [taskStatus, setTaskStatus] = useState([])
  const [resolved, setResolved] = useState([])

  const inProgressCount = taskStatus.length
  const resolvedCount = resolved.length

  function handleCardClick(ticket) {
    setTaskStatus(prev => [ticket, ...prev])
    toast.success(`added to the task status: ${ticket.title}`)
  }

  function handleComplete(ticketId) {
    const ticketFromTask = taskStatus.find(t => t.id === ticketId)
    const ticketFromTickets = tickets.find(t => t.id === ticketId)
    const ticket = ticketFromTask || ticketFromTickets
    setTaskStatus(prev => prev.filter(t => t.id !== ticketId))
    setResolved(prev => [{ ...ticket, status: 'resolved' }, ...prev])
    toast.success(`Ticket resolved: ${ticket.title}`)
  }


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-gray-200 text-gray-800">
        <Toaster position="top-left" reverseOrder={false} />

        <header className="px-6 py-8  to-white">

          <div className="flex flex-col items-center sm:flex-row justify-center gap-10 text-center">
            <div className="w-[250px] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] p-[40px] rounded">

              <div className="text-sm ">In Progress</div>
              <div className="text-2xl font-bold">{inProgressCount}</div>
            </div>
            <div className="w-[250px] bg-[linear-gradient(90deg,#54CF68_9.6%,#00827A_92.23%)] p-[40px] rounded">

              <div className="text-sm">Resolved</div>
              <div className="text-2xl font-bold">{resolvedCount}</div>

            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <section className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {
                  tickets
                    .filter(ticket =>
                      !taskStatus.some(t => t.id === ticket.id) &&
                      !resolved.some(r => r.id === ticket.id)
                    ).map(ticket => (
                      <div

                        onClick={() => handleCardClick(ticket)}
                        className="bg-white rounded p-4 shadow hover:shadow-md cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-[16px] text-gray-500">{ticket.customer}</div>
                            <h3 className="font-semibold mt-2">{ticket.title}</h3>

                            <p className="text-sm mt-2 text-gray-600">{ticket.description}</p>
                            <div className="mt-3 flex items-center gap-3 text-xs">
                              <div className="text-[12px] text-gray-500">{ticket.id}</div>
                              <span
                                className={`px-2 py-1 rounded font-semibold ${ticket.priority === "Low" ? "bg-yellow-400" : ticket.priority === "Medium" ? "bg-amber-600" : ticket.priority === "High" ? "bg-amber-700" : "bg-gray-100"}`}>
                                {ticket.priority}
                              </span>
                              <span className="px-2 py-1 rounded bg-gray-100">{ticket.createdAt}</span>
                            </div>
                          </div>
                          <div className=" text-xs px-4 py-3 text-white opacity-70 bg-green-700 text-center rounded-xl">Open</div>
                        </div>
                      </div>
                    ))
                }
              </div>
            </section>

            <aside className="space-y-6">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">Task Status</h3>
                <p className="text-sm text-gray-500">Select a ticket to add to Task Status</p>
                <div className="mt-3 space-y-3 ">
                  {
                    taskStatus.map(t => (
                      <div key={t.id} className="flex flex-col items-center justify-between p-2 border rounded gap-3">
                        <div>
                          <div className="text-sm font-medium">{t.title}</div>
                          {/* <div className="text-xs text-gray-500">{t.customer}</div> */}
                        </div>
                        <button className="w-[100%] px-3 py-1 text-sm rounded bg-green-600 text-white" onClick={() => handleComplete(t.id)}>Complete</button>
                      </div>
                    ))
                  }
                </div>
              </div>

              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">Resolved Task</h3>

                <div className="mt-3 space-y-3">
                  {
                    resolved.map(r => (
                      <div key={r.id} className="p-2 border rounded">
                        <div className="text-sm font-medium">{r.title}</div>
                        <div className="text-xs text-gray-500">{r.customer}-{r.id}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default App
