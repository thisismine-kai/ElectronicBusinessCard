import BusinessCardList from '../components/BusinessCardList';
import SidebarList from '../components/SideBarList';

function MyCardBox() {
  return (
    <div style={{
      display: 'flex',               // ← 横並びにする
      minHeight: '100vh',            // 画面の高さ全体
      backgroundColor: '#f0f0f0',
      boxSizing: 'border-box',
    }}>
      
      {/* 左サイドバー */}
      <div style={{
        width: '220px',
        backgroundColor: '#1e1e1e',
        padding: '1rem',
        color: 'white'
      }}>
        <SidebarList />
      </div>

      {/* メインエリア */}
      <div style={{
        flex: 1,
        padding: '2rem',
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '2rem',
          color: '#000000',
        }}>
          名刺入れ
        </h1>
        <BusinessCardList />
      </div>
    </div>
  );
}

export default MyCardBox;
