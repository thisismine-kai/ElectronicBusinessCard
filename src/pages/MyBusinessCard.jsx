import React from 'react';
import BusinessCard from '../components/BusinessCard';
import SidebarList from '../components/SideBarList';
import { cards } from '../data/mycard';

function MyBusinessCard() {
  const handleEditClick = () => {
    alert("プロフィール編集画面へ（ここをあとで編集）");
  };

  return (
    <div style={{
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: "#f0f0f0",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
}}>
  {/* ヘッダー */}
  <header style={{
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '1.5rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
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
        padding: '0.6rem 1.2rem',
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

  {/* サイドバー＋メインの横並び */}
  <div style={{
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  }}>
    {/* サイドバー（左） */}
    <aside style={{
      width: '220px',
      backgroundColor: '#1e1e1e',
      color: 'white',
      padding: '1rem',
    }}>
      <SidebarList />
    </aside>

    {/* メインエリア（名刺） */}
    <main style={{
      flex: 1,
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: '#f0f0f0',
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
  )
export default MyBusinessCard;
