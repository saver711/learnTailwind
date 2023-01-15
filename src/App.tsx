import { useEffect, useState } from "react"
import logo from "./assets/react.svg"
import img1 from "./assets/Screenpresso/2023-01-14_20h37_54.png"
import img2 from "./assets/Screenpresso/2023-01-14_21h58_53.png"
import img3 from "./assets/Screenpresso/2023-01-14_22h18_29.png"
import img4 from "./assets/Screenpresso/2023-01-14_22h31_35.png"
import img5 from "./assets/Screenpresso/2023-01-14_22h42_00.png"

const persons = [
  { name: "ahmed", id: crypto.randomUUID(), number: 1 },
  { name: "mohammed", id: crypto.randomUUID(), number: 2 },
  { name: "Ziad", id: crypto.randomUUID(), number: 3 },
]

function App() {
  // STATES
  const [isDark, setIisDark] = useState(
    (): Boolean =>
      localStorage.isDark ||
      (!("isDark" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  )
  // FUNCTIONS
  const isTheDefaultIsDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  //
  return (
    // Wrapper with conditionally class 'dark
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="cBlock dark:bg-slate-500">
        <h4 className="cBlock__heading">Looping over array</h4>
        <ul className="cBlock__subheading">
          <li>first:</li>
          <li>last:</li>
          <li>even:</li>
          <li>odd:</li>
        </ul>
        <div className="cBlock__box">
          <div className="cBlock__images">
            <img src={img1} alt="" />
          </div>
          <div className="cBlock__result">
            <ul className="App">
              {persons.map((person) => (
                <li
                  className="py-4 first:pt-0 last:pb-0 even:bg-slate-200"
                  key={person.id}
                >
                  <p>{person.number}</p>
                  <p>{person.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="cBlock">
        {/* 👁️ */}
        <h4 className="cBlock__heading">Toggle dark mode</h4>
        <div className="cBlock__box">
          <div className="cBlock__images">
            {/* 👁️ */}
            <img src={img2} alt="" />
          </div>
        </div>
      </div>

      <div className="cBlock">
        {/* 👁️ */}
        <h4 className="cBlock__heading">Stacked modifiers</h4>
        <div className="cBlock__box">
          <div className="cBlock__images">
            {/* 👁️ */}
            <img src={img3} alt="" />
          </div>
          <div className="cBlock__result">
            {/* in dark mode, starting from md, on hover */}
            <button className="... dark:md:hover:bg-fuchsia-600">
              Save changes
            </button>
          </div>
        </div>
      </div>
      <div className="cBlock">
        {/* 👁️ */}
        <h4 className="cBlock__heading">
          Styling based on parent and sibling state
        </h4>
        <div className="cBlock__box">
          <div className="cBlock__images">
            {/* 👁️ */}
            <img src={img4} alt="" />
          </div>
          <div className="cBlock__result">
            <div className="group mx-auto mt-2 max-w-sm bg-slate-400 text-center md:rounded-md">
              <p className="peer inline-block">Mohammed</p>
              <div className="group/inner peer-hover:text-red-600">
                in
                <p className="group-hover:text-white group-hover/inner:text-purple-700">
                  Ahmed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cBlock">
        {/* 👁️ */}
        <h4 className="cBlock__heading">Before and After</h4>
        <div className="cBlock__box">
          <div className="cBlock__images">
            {/* 👁️ */}
            <img src={img5} alt="" />
          </div>
          <div className="cBlock__result">
            <label className="block">
              <input
                type="email"
                name="email"
                className="peer mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="you@example.com"
                required
              />
              <span
                className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 peer-required:after:content-['*']"
              >
                Email
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* FLOATING */}
      <div className="fixed bottom-2 right-2 flex space-x-2">
        <button
          title="dark"
          className="rounded-md bg-slate-600 py-1 px-4 font-medium text-white"
          // dark
          onClick={() => {
            localStorage.isDark = true
            setIisDark(true)
          }}
        >
          Dark
        </button>
        <button
          title="light"
          className="rounded-md bg-slate-400 py-1 px-4 font-medium text-white"
          // light
          onClick={() => {
            localStorage.isDark = false
            setIisDark(false)
          }}
        >
          Light
        </button>
        <button
          title="system"
          className="rounded-md bg-blue-600 py-1 px-4 font-medium text-white"
          // system
          onClick={() => {
            localStorage.isDark = isTheDefaultIsDark()
            setIisDark(isTheDefaultIsDark)
          }}
        >
          System
        </button>
      </div>
    </main>
  )
}

export default App
