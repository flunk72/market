import { useState } from 'react';
import { StarIcon } from '../../helpers/icons';
import { RatingProps } from './Rating.props';

const Rating = ({ isEditable = false, rating, setRating }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  return (
    <div>
      {ratingArray.map((rat, i) => {
        return <span key={i}>{rat}</span>;
      })}
    </div>
  );
};

export default Rating;
