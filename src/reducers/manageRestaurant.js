import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type) {

        case 'ADD_RESTAURANT':
            const rez = {
                text: action.text,
                id: cuid()
            }

            return {...state, restaurants: [...state.restaurants, rez]};

        case 'DELETE_RESTAURANT':
            // debugger
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
            return { ...state, restaurants}
            // return { restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)};

        case 'ADD_REVIEW':
            const rev = {
                text: action.review.text,
                restaurantId: action.review.restaurantId,
                id: cuid()
            }

            return {...state, reviews: [...state.reviews, rev]};

        case 'DELETE_REVIEW':
            return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}
        
        default:
            return state;
    }

}
