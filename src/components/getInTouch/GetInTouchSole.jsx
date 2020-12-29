import React from 'react';
import { Link } from 'gatsby';
import getInTouchStyles from './getInTouch.module.scss';

const GetInTouchSole = () => {
  return (
    <div className={`${getInTouchStyles.getInTouch} ${getInTouchStyles.sole}`}>
      <div className={getInTouchStyles.block}>
        <h4>Want to build some Great Works together?</h4>
        <Link className={getInTouchStyles.requestLink} to="/contact">
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default GetInTouchSole;
