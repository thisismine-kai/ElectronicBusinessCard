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
      minHeight: '100vh',
      backgroundColor: "#f0f0f0",
      boxSizing: 'border-box',
      color: "#000000",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      
      {/* 左サイドバー */}
      <div style={{
        width: '250px',
        backgroundColor: '#1e1e1e',
        padding: '1rem',
        color: 'white',
      }}>
        <SidebarList />
      </div>

      {/* メインエリア*/}
      <main style={{
        flex: 1,
        backgroundColor: '#f0f0f0',  // グレー背景をここで指定
        padding: '2rem 1rem', 
        display: 'flex',
        justifyContent: 'center',     // 横方向中央寄せ
        alignItems: 'flex-start',
      }}>

        {/* 名刺カードのコンテナ */}
        <section style={{
          width: '100%',
          maxWidth: '1200px',      // 最大幅広げてカード大きく
          backgroundColor: '#fff',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
        }}>

          {/* ヘッダー */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}>
            <h1 style={{
              fontSize: '2.8rem',
              margin: 0,
              fontWeight: '700',
              color: '#333',
            }}>
              自分の名刺(プロフィール)
            </h1>
            <button
              onClick={handleEditClick}
              style={{
                padding: '0.6rem 1.4rem',
                backgroundColor: '#007bff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                color: 'white',
                cursor: 'pointer',
                boxShadow: '0 3px 8px rgba(0,123,255,0.5)',
                transition: 'background-color 0.3s ease',
              }}
            >
              プロフィール編集
            </button>
          </div>

          {/* BusinessCard コンポーネント */}
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
  );
}

export default MyBusinessCard;