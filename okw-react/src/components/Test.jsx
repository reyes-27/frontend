import React from "react"
class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "Blue",
            year: 2003
        }
    }
    shouldComponentUpdate(){
        return true
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({color:"PENEDUMONKY"})
        }, 3000)
    }
    changeColor = (name, e) => {
        this.setState({color:"Red"})
        alert(`Your name is ${name} This is a ${e.type} event`)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("parrafo").innerHTML = "Before the update, the favorite was " + prevState.color
    }

    

    render(){
        const  myCarList = ["Hola", "Como", "Estas"]
        return (
        <div>
        <h1>My {this.state.brand}</h1>
        <p>It is a {this.state.color} {this.state.model} from {this.state.year}.</p>
        <p id="parrafo">

        </p>
            <button onClick={(event) => this.changeColor(this.props.name, event)}>
                Change Color
            </button>
            <h2>Hi man, I'm {this.props.name}</h2>
            <ul>
                {myCarList.map((car) => (
                    <li>{car}</li>
                ))}
            </ul>
      </div>
        )
    }
}

export default Test;