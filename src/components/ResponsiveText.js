import React from 'react'
import { useThree } from "react-three-fiber"
import { useControl } from "react-three-gui"
import { Text } from "drei"
// import {TextMesh} from 'troika-3d-text/dist/textmesh-standalone.esm.js'


export default function ResponsiveText( props) {
    // const textMesh = new TextMesh()
    // console.log(textMesh)

    // const textContent = "ELIT SED DO EIUSMOD TEMPOR INCIDIDUNT LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA UT ENIM AD MINIM VENIAM QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE LOADING... ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM"
    const textContent = "WOODFORDWOODFORDWOODFORDWOODFORD " + 
                        "WOODFORDWOODFORDWOODFORDWOODFORD " +
                        "WOODFORDWOODFORDWOODFORDWOODFORD " +
                        "WOODFORDWOODFORDWOODFORDWOODFORD " + 
                        "WOODFORDWOODFORDWOODFORDWOODFORD " + 
                        "WOODFORDWOODFORDWOODFORDWOODFORD " + 
                        "WOODFORDWOODFORDWOODFORDWOODFORD " + 
                        "WOODFORDWOODFORDWOODFORDWOODFORD " + 
                        "WOODFORDWOODFORDWOODFORDWOODFORD " + 
                        "WOODFORDWOODFORDWOODFORDWOODFORD " + 
                        "WOODFORDWOODFORDWOODFORDWOODFORD " + 
                        "FORDWOODFORDWOODFORDWOODFORDWOOD " + 
                        "WOODFORDWOODFORDWOODFORDWOODFORD " +
                        "WOODFORDWOODFORDWOODFORDWOODFORD " + 
                        "WOODFORDWOODFORDWOODFORDWOODFORD " +
                        "WOODFORDWOODFORDWOODFORDWOODFORD " 
    // const textContent = "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " + 
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " +
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " +
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " + 
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " + 
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " + 
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " + 
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " + 
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " + 
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " + 
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " + 
    //                     "TSEDDOEIUSMODTEMPORINCIDIDUNTELI " + 
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " +
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " + 
    //                     "ELITSEDDOEIUSMODTEMPORINCIDIDUNT " 

    const { viewport } = useThree()
    // const color = useControl("color", { type: "color", value: "#EC2D2D" })
    const fontSize = useControl("fontSize", { type: "number", value: 22, min: 1, max: 100 })
    // const maxWidth = useControl("maxWidth", { type: "number", value: 100, min: 1, max: 100 })
    const lineHeight = useControl("lineHeight", { type: "number", value: 0.90, min: 0.1, max: 10 })
    const letterSpacing = useControl("spacing", { type: "number", value: 0.24, min: -0.5, max: 1 })
    // const textAlign = useControl("textAlign", {
    //     type: "select",
    //     items: ["left", "right", "center", "justify"],
    //     value: "justify",
    // })
    // const textInput = useControl("text", { type: "string", value: `${textContent}` })

    return (
        <Text
            color={props.color}
            rotation={props.rotation}
            fontSize={fontSize}
            maxWidth={(viewport.width / 100) * 100}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            textAlign={"justify"}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle"
            // clipRect={[-100,-150,100,150]}
            text={textContent}
            selectable="true"
        >
            {/* ELIT SED DO EIUSMOD TEMPOR INCIDIDUNT LOREM IPSUM DOLOR
            SIT AMET CONSECTETUR ADIPISCING ELIT SED DO EIUSMOD 
            TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA 
            UT ENIM AD MINIM VENIAM QUIS NOSTRUD EXERCITATION ULLAMCO
            LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT DUIS AUTE 
            IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE LOADING... ESSE 
            CILLUM DOLORE EU FUGIAT NULLA PARIATUR EXCEPTEUR SINT 
            OCCAECAT CUPIDATAT NON PROIDENT SUNT IN CULPA QUI OFFICIA 
            DESERUNT MOLLIT ANIM ID EST LABORUM */}
        </Text>
    )
}

