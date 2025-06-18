import React from 'react';
import BusinessCard from '../components/BusinessCard';
import SidebarList from '../components/SideBarList';
import { cards } from '../data/mycard';

function MyBusinessCard() {
  const handleEditClick = () => {
    alert("プロフィール編集画面へ（ここをあとで編集）");
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
  {/* サイドバー */}
  <aside style={{
    width: '280px',
    backgroundColor: '#1e1e1e',
    color: 'white',
    padding: '1rem',
    height: '100vh', // 画面いっぱいに伸ばす
    boxSizing: 'border-box',
  }}>
    <SidebarList />
  </aside>

  {/* 右側コンテンツ（ヘッダー＋メイン） */}
  <div style={{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
  }}>
    {/* ヘッダー */}
    <header style={{
      width: '90%',
      backgroundColor: '#fff',
      padding: '1.5rem 2rem',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: '700',
        margin: 0,
        color: '#333',
      }}>
        自分の名刺(プロフィール)
      </h1>
      <button
        onClick={handleEditClick}
        style={{
          padding: '0.6rem 0.6rem',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 3px 8px rgba(0,123,255,0.5)',
        }}
      >
        プロフィール編集
      </button>
    </header>

    {/* メインエリア */}
    <main style={{
      flex: 1,
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}>
      <section style={{
        width: '100%',
        maxWidth: '1000px',
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
      }}>
        <BusinessCard
          name={cards[0].name}
          github={cards[0].github}
          skills={cards[0].skills}
          avatar={cards[0].avatar}
          message={cards[0].message}
        />
      </section>
    </main>
  </div>
</div>
  );
}
export default MyBusinessCard;
