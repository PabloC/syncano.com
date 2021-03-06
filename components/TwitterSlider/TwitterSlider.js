import React, { Component } from 'react';
import _ from 'lodash';
import SliderWrapper from '../SliderWrapper';
import TwitterSliderNavPrev from './TwitterSliderNavPrev';
import TwitterSliderNavNext from './TwitterSliderNavNext';
import TwitterWidget from '../TwitterWidget';
import HideOnLandingPage from '../HideOnLandingPage';
import tweets from '../../data-tweets.json';

export default class TwitterSlider extends Component {
  render() {
    if (tweets.errors) {
      return null;
    }

    return (
      <div
        className="twitter-slider"
        ref={(ref) => this.twitterSlider = ref}
      >
        <div className="inner">
          <h2>
            <img
              src={require('./images/heart.svg')}
              alt="heart"
            />
            <span>from our users</span>
          </h2>
          <div className="twitter-slider__slider">
            <SliderWrapper
              arrows={true}
              slidesToShow={3}
              prevArrow={<TwitterSliderNavPrev />}
              nextArrow={<TwitterSliderNavNext />}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                  }
                },
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false
                  }
                }
              ]}
            >
              {_.map(tweets, (data) => (
                <div>
                  <TwitterWidget data={data} />
                </div>
              ))}
            </SliderWrapper>
          </div>
          <HideOnLandingPage>
            <a
              className="button button--white"
              href="https://twitter.com/syncanolove/"
              target="_blank"
            >
              More Tweets
            </a>
          </HideOnLandingPage>
        </div>
      </div>
    );
  };
};
