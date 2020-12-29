import React from 'react';
import { Link } from 'gatsby';
import getInTouchStyles from './getInTouch.module.scss';

const GetInTouch = () => {
  return (
    <div className={getInTouchStyles.getInTouch}>
      <div className={getInTouchStyles.block}>
        <h4>
          Want to build some
          <br />
          Great Works together?
        </h4>
        <Link className={getInTouchStyles.requestLink} to="/contact">
          Get in touch
        </Link>
      </div>
      <div className={getInTouchStyles.block}>
        <p>
          I collaborate with innovative company to create cutting-edge digital
          experiences. Let&apos;s connect.
        </p>
      </div>
    </div>
  );
};

export default GetInTouch;
