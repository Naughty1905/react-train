import React from 'react';
// import './App.css';
import Car from './Components/Car/Car'

class App extends React.Component {

    state = {
        cars: [
            {
                name: 'Ford Mustang',
                year: '2009',
                status: 'sell'
            },
            {
                name: 'Audi A8',
                year: '2020',
                status: 'sell'
            },
            {
                name: 'Mercedes CLS',
                year: '2018',
                status: 'sell'
            }
        ],
        pageTitle: 'Danya Loh',
        showCars: false,
    };

    handleTitle = (newTitle) => {
        console.log('clicked');

        this.setState({
            pageTitle: newTitle
        })
    };

    // handleInput = (event) => {
    //     console.log('first input changed');
    //     this.setState({
    //         pageTitle: event.target.value
    //     })
    // };

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
        let cars = this.state.cars.concat()
        cars.splice(index, 1);
        this.setState({cars});
    }

    render() {

        const divClass = {
            textAlign: 'center',
            color: 'blue'
        };

        const cars = this.state.cars;

        return (
            <div className='App' style={divClass}>
                <h1>{this.state.pageTitle}</h1>

                {/*<input type="text" onChange={this.handleInput}/>*/}

                <button
                    onClick={this.handleTitle.bind(this, 'Changed!!!')}
                >
                    Change title
                </button>

                <button
                    onClick={this.toggleCars}
                >
                    Show and unshow cars
                </button>

                {/*иттерируем каждый из элементов и возвращаем массив*/}
                {this.state.showCars ?
                    this.state.cars.map((car, index) => {
                        return (
                            <Car
                                key={index}
                                name={car.name}
                                year={car.year}
                                status={car.status}
                                onDelete={this.deleteHandler.bind(this, index)}
                                onChangeName={(event) => this.onChangeName(`${event.target.value}`, index)}
                            />
                        )
                    }) : null}

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
