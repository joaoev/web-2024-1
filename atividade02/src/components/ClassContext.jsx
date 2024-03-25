import React from "react";
import ColorTheme from "./MyColorContext";

class ClassA extends React.Component {

    render() {
        const cores = { bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue" };
        return (
            <ColorTheme.Provider value={cores}>
                <h1 style={{ color: cores.bkgA }}>
                    Contexto A
                </h1>
                <ClassB />
                <ClassC />
                <ClassD />
            </ColorTheme.Provider>
        )
    }
}

class ClassB extends React.Component {

    render() {
        let value = this.context
        return (
            <div>
                <h1 style={{ color: value.bkgB }}>
                    Contexto B
                </h1>
            </div>
        )
    }
}

class ClassC extends React.Component {

    render() {
        let value = this.context
        return (
            <div>
                <h1 style={{ color: value.bkgC }}>
                    Contexto C
                </h1>
            </div>
        )
    }
}

class ClassD extends React.Component {

    render() {
        let value = this.context
        return (
            <div>
                <h1 style={{ color: value.bkgD }}>
                    Contexto D
                </h1>
            </div>
        )
    }
}

ClassA.contextType = ColorTheme
ClassB.contextType = ColorTheme
ClassC.contextType = ColorTheme
ClassD.contextType = ColorTheme
export default ClassA