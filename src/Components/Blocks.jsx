import React, { useState } from 'react'
import './box.css'

export default function Blocks() {
    const [first, setfirst] = useState(() => {
        return { left: 0, top: 0 }
    });
    const firsttop = first.top;
    const firstleft = first.left;
    return (
        <>
            <div className="container">
                <div className="blocks-box m-auto">
                    <button onClick={() => setfirst((e) => { return { ...e, top: first.top - 50 } })}
                     className='d-block w-90 m-auto w-500 btn-style up-bottom' disabled={(firsttop == 0)}>up</button>
                    <div className="d-flex">
                        <button onClick={() => { setfirst((e) => { return { ...e, left: first.left - 50 } }) }} disabled={(firstleft == 0)}
                         className='btn-style left-right'>left</button>
                        <div className='play-ground d-inline-block position-relative'>
                            <div className="game-box position-absolute" style={{ left: first.left, top: first.top }}></div>
                        </div>
                        <button onClick={() => { setfirst((e) => { return { ...e, left: first.left + 50 } }) }} disabled={(firstleft == 450)} 
                        className='btn-style left-right'>right</button>
                    </div>
                    <button onClick={() => {setfirst((e) => { return { ...e, top: first.top + 50 } })}} disabled={(firsttop == 450)}
                     className='d-block m-auto btn-style w-500 up-bottom'>bottom</button>
                </div>
            </div >
        </>
    )
}
