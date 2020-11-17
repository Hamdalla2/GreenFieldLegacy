import React from 'react';
import RecipeReviewCard from './read'
export default function CardComp({ reservationArray,favoritesArray,data,currentUser, checkIn, checkOut, searchValue, cityAndCountry, handleSeachButtonClick }) {
    return (<div>
        {/* <NavAndSearch handleSeachButtonClick={handleSeachButtonClick}currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry}/> */}
        <RecipeReviewCard currentUser={currentUser} data={data} reservationArray={reservationArray} favoritesArray={favoritesArray}/>
       

    </div>)
}