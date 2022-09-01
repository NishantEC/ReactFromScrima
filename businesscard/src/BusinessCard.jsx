import React from "react"
import TextBody from "./components/TextBody"
import Buttons from "./components/Buttons"
import Footer from "./components/Footer"
import Info from "./components/Info"


export default function BusinessCard(){
    return(
        <div className="body-wrap">
            <Info />
            <Buttons />
            <TextBody />
            <Footer />
        </div>
    )
}