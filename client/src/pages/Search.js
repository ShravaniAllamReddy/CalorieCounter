import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchForm from '../components/SearchForm';

class SearchFood extends Component {
  //sets the initial state
  state = {
    search: "",
    foodItems: [],
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  
  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getFoodCalories(this.state.search).then((res) => {
      let food = res.data.hints.map((result) => {
        result = {
          key: result.food.foodId,
          id: result.food.foodId,
          title: result.food.label,
          thumbnail: result.food.image,
          href: result.measures[0].uri,
        };
        return result;
      });
      this.setState({ foodItems: food });
      console.log(food);
    });
  };


  render() {
    return (
      <div>
        <Jumbotron>
          <h2 >Calorie Counter ( React )</h2>
          <p>Search for Food of Interest and count the calories</p>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="12">
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <br></br>
        {/* <Container>
          <SearchResult
            googlebooks={this.state.googlebooks}
            handleSaveButton={this.handleSaveButton}
          />
        </Container> */}
      </div>
    );
  }
}

export default SearchFood;
