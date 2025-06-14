import BusinessCard from './BusinessCard';
import { cards } from '../data/cards';

function BusinessCardList() {
  return (
    <div style={{
      display: 'grid', // グリッドレイアウトを使用
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // 自動で列を調整
      gap: '1rem',// カード間の隙間
      padding: '1rem'// 内側の余白
    }}>
      {cards.map((card, index) => (
        <BusinessCard key={index} {...card} />
      ))}
    </div>
  );
}

export default BusinessCardList;