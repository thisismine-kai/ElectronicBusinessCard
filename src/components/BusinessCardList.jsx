import BusinessCard from './BusinessCard';
import { cards } from '../data/cards';

function BusinessCardList() {
  return (
   <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '1rem',
  padding: '1rem',
  width: '100vw',     // 画面幅100%
  boxSizing: 'border-box'
}}>

      {cards.map((card, index) => (
        <BusinessCard key={index} {...card} />
      ))}
    </div>
  );
}

export default BusinessCardList;