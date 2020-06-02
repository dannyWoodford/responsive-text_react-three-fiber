import React, {useState} from 'react'
// import ReactDOM from "react-dom"
import { Canvas } from "react-three-fiber"
import { Controls } from "react-three-gui"
import ResponsiveText from "../components/ResponsiveText.js"

export default function Scene(props) {

    const [rotation, setRotation] = useState([0, 0, 0, 0]);
    const [color, setColor] = useState("#EC2D2D")

    const onMouseMove = e => {
        setRotation([
            ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 20,
            ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 20,
            0,
            0
        ])
        setColor(`rgb(${Math.round((e.clientY/e.target.offsetHeight)* Math.PI * 90 )},${Math.round((e.clientY/e.target.offsetHeight)* Math.PI * 30 )},${Math.round((e.clientX/e.target.offsetWidth)* Math.PI * 90)})`);
        // console.log(`rgb(${Math.round((e.clientY/e.target.offsetHeight)* Math.PI * 90 )},60,${Math.round((e.clientY/e.target.offsetWidth)* Math.PI * 90)})`)
    };

    return (
        <div>
            <Canvas colorManagement pixelRatio={window.devicePixelRatio} onMouseMove={onMouseMove} camera={{ position: [0, 0, 200] }}>
                <ResponsiveText rotation={rotation} color={color}/>
            </Canvas>

            <Controls />
        </div>
    )
}
