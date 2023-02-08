import React from 'react';

import Header from '@components/Header';

type TSliderProp = {
  title: string,
  node: React.ReactNode
};

type TSliderProps = { items: TSliderProp[] };

const Slider: React.FC<TSliderProps> = ({ items }) => (
  <div className="slider">
    {items.map((_item, index) => (
      <input key={index} id={`slide-${index + 1}`} type="radio" name="options" defaultChecked={index === 0} />
    ))}
    <ul className="slider__controls">
      {items.map((item, index) => (
        <li key={index}><label className="button" htmlFor={`slide-${index + 1}`}>{item.title}</label></li>
      ))}
    </ul>
    {items.map((item, index) => (
      <div key={index} className={`slider__slide slider__slide--${index + 1}`}>
        <Header text={item.title} align="left" />
        {item.node}
      </div>
    ))}
  </div>
);

export default Slider;
