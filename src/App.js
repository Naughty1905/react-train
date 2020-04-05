import React from 'react';
// import './App.css';
import Car from './Components/Car/Car';
import ErrorBoundary from "./ErrorBoundary/Error";
import Counter from './Components/Counter/Counter';

class App extends React.Component {

    constructor(props) {
        console.log('App constructor');
        super(props);
        this.state = {
            cars: [
                {
                    name: 'Ford Mustang',
                    year: 2009,
                    status: 'sell'
                },
                {
                    name: 'Audi A8',
                    year: 2020,
                    status: 'sell'
                },
                {
                    name: 'Mercedes CLS',
                    year: 2018,
                    status: 'sell'
                }
            ],
            pageTitle: 'I did not! Oh, Hi mark!!!',
            showCars: false,
        };

    }

    handleTitle = (newTitle) => {
        console.log('clicked');

        this.setState({
            pageTitle: newTitle
        })
    };

    handleInput = (event) => {
        console.log('first input changed');
        this.setState({
            pageTitle: event.target.value
        })
    };

    toggleCars = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    };

    onChangeName(name, index) {
        console.log(name, index);
        const car = this.state.cars[index];
        car.name = name;
        //copy array cars from state
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({
            cars: cars
        })
    }

    deleteHandler(index) {
        console.log('delete');
        //like a [...this.state.cars]
        //create new array
        //cause concat is empty
        let cars = this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({cars});
    }


    render() {
        const divClass = {
            textAlign: 'center',
            // color: 'blue'
        };

        // const cars = this.state.cars;

        let cars = null;

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            status={car.status}
                            index={index}
                            onDelete={this.deleteHandler.bind(this, index)}
                            onChangeName={(event) => this.onChangeName(`${event.target.value}`, index)}
                        />
                    </ErrorBoundary>
                )
            })
        }

        return (
            <div className='App' style={divClass}>
                {/*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>

                <Counter/>
                <hr/>

                {/*<input type="text" onChange={this.handleInput}/>*/}

                {/*<button*/}
                {/*    onClick={this.handleTitle.bind(this, 'Changed!!!')}*/}
                {/*>*/}
                {/*    Change title*/}
                {/*</button>*/}

                <button
                    style={{marginTop: "20px"}}
                    onClick={this.toggleCars}
                >
                    Show and unshow cars
                </button>

                <div style={{
                    width: 600,
                    margin: "auto",
                    paddingTop: "20px"
                }}>
                    {cars}
                    {/*ниже аналог того что пы прописал в render*/}
                    {/*/!*иттерируем каждый из элементов и возвращаем массив*!/*/}
                    {/*{this.state.showCars ?*/}
                    {/*    this.state.cars.map((car, index) => {*/}
                    {/*        return (*/}
                    {/*            <Car*/}
                    {/*                key={index}*/}
                    {/*                name={car.name}*/}
                    {/*                year={car.year}*/}
                    {/*                status={car.status}*/}
                    {/*                onDelete={this.deleteHandler.bind(this, index)}*/}
                    {/*                onChangeName={(event) => this.onChangeName(`${event.target.value}`, index)}*/}
                    {/*            />*/}
                    {/*        )*/}
                    {/*    }) : null}*/}
                </div>
                {/*<Car*/}
                {/*    name={cars[0].name}*/}
                {/*    year={cars[0].year}*/}
                {/*    changeStatus={this.handleTitle.bind(this, `Changed ${cars[0].name}`)}*/}
                {/*/>*/}
                {/*<Car*/}
                {/*    name={cars[1].name}*/}
                {/*    year={cars[1].year}*/}
                {/*    changeStatus={() => this.handleTitle(`Changed ${cars[1].name}`)}*/}
                {/*/>*/}
                {/*<Car*/}
                {/*    name={cars[2].name}*/}
                {/*    year={cars[2].year}*/}
                {/*    changeStatus={() => this.handleTitle(`Changed ${cars[2].name}`)}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default App;
