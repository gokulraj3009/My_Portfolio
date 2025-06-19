import React from 'react';
import './hobby.css';
import Music from '../../assets/music.png';
import Gaming from '../../assets/gaming.avif';
import Coding from '../../assets/coding.jpg';

const hobbies = [
  {
    img: Music,
    title: "Listening to Music",
    desc: "I enjoy relaxing with music, especially while coding or unwinding."
  },
  {
    img: Gaming,
    title: "Gaming",
    desc: "I enjoy playing games to unwind and recharge my mind whenever I feel stressed."
  },
  {
    img: Coding,
    title: "Coding for Fun",
    desc: "I often experiment with new frameworks and build side projects."
  }
];

const Hobby = () => {
  return (
    <section id="hobby">
      <h2 className="hobbyTitle">My Hobbies</h2>
      <span className="hobbyDesc">
        Beyond programming, I have several hobbies that keep me inspired and balanced. Here are a few things I love to do in my free time.
      </span>

      <div className="hobbyGrid">
        {hobbies.map((item, index) => (
          <div className="hobbyCard" key={index}>
            <img src={item.img} alt={item.title} className="hobbyImg" />
            <h3 className="hobbyName">{item.title}</h3>
            <p className="hobbyText">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobby;
