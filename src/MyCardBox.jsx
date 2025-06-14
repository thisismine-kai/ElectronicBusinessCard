import BusinessCardList from './components/BusinessCardList';

function MyCardBox() {
  return (
    <div style={{
      padding: '2rem', // ← 適度な余白に変更
      backgroundColor: '#f0f0f0',
      minHeight: '100vh', // 画面の高さ100%
      boxSizing: 'border-box' // paddingを含めて高さ100%になるようにする
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color:'#000000',
      }}>
        名刺入れ
      </h1>
      <BusinessCardList />
    </div>
  );
}
export default MyCardBox;
