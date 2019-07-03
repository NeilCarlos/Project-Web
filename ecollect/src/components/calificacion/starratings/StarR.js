// import React, { Component } from 'react';
// // import StarRatings from './react-star-ratings';
// import StarRatings from './react-star-ratings';
 
// export class StarR extends Component {
//     changeRating( newRating, name ) {
//       this.setState({
//         rating: newRating
//       });
//     }
 
//     render() {
//       // rating = 2;
//       return (
//         <StarRatings
//           rating={this.state.rating}
//           starRatedColor="blue"
//           changeRating={this.changeRating}
//           numberOfStars={6}
//           name='rating'
//         />
//       );
//     }
// }

import React from 'react';
// import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
 
export class StarR extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}