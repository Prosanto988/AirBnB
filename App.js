import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from './Data';

export default function App() {
    const cards = data.map(item =>{
        return(
            <Card
                key={item.id}
                {...item}
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // Location={item.location}
                // title={item.title}
                // price={item.price}
                // openSports={item.openSports}
            />
        )
    })
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <section className='card-lists'>
            {cards}
        </section>
    </div>
  );
}
