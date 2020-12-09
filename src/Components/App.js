import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Excercises from './Excercises';
import { muscles, exercises } from '../store';

export default class extends Component {
  state = {
    exercises  
  }

  getExercicesByMuscle() {
    return Object.entries(this.state.exercises.reduce((listOfExercises, currentExercise) => {
      const { muscles } = currentExercise;
      listOfExercises[muscles] = listOfExercises[muscles]
        ? [...listOfExercises[muscles], currentExercise]
        : [currentExercise];
      
      return listOfExercises;
    }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  render() {
    const exercises = this.getExercicesByMuscle();
    const { category } = this.state;
    return (
      <Fragment>
        <Header />
        <Excercises
          category={category}
          exercises={exercises}
        />
        
        <Footer
          category = {category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    )
  }
}