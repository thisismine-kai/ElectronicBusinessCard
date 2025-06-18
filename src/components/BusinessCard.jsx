import { skillIcons } from '../data/skillIcons';

function BusinessCard({name, github, skills, avatar, message}) {
  return (
    <div style={{
      border: '2px solid #aaa',            // 薄いグレーの枠線
      borderRadius: '16px',                 // 四隅を丸くする（角の丸み）
      padding: '1rem',                     // 内側に余白
      backgroundColor: '#3b3b3b' ,             // 背景を白にする

      height: '280px',     // ← カードの高さ（例）
      width: '500px',           // ← gridに合わせるためそのまま
      boxSizing: 'border-box'  // ← padding含めてサイズ調整
    }}>


      <div style={{
        display: 'flex',// 横並びにする
         gap: '1rem'// アイコンとテキストの間に隙間を作る 
    }}>
      <img src={avatar} alt={name} style={{
        width: 80,                          // 幅80px
        height: 80,                         // 高さ80px
        borderRadius: '50%',               // 丸くする（円形に）
      }}/>

       {/* ユーザー名を表示（見出しサイズ） */}
      <h3 style={{
        color: '#ffffff',
        fontSize: '2rem', // フォントサイズを大きく
        }}>{name}</h3>

      </div>

      {/* GitHubリンクを表示 */}
      <a href={github} target="_blank" style={{
        maxWidth: '100%', 
         wordBreak: 'break-all',
         fontSize: '1.5rem',
         textDecoration: 'underline', // 下線を引く
      }}>
        <img 
        src="src\assets\GitHub_Invertocat_Light.png"  // GitHubアイコンのパス
        alt="GitHub Icon"
        style={{
          width: '30px',                // アイコンの幅
          height: '25px',               // アイコンの高さ
         verticalAlign: 'middle',      // テキストとアイコンを中央揃え
         marginRight: '0.5rem'         // アイコンとテキストの間に余白
        }}
        />
         GitHub
      </a>

      <div style={{ marginTop: '0.5rem' }}>
        {skills.map(skill => (
          // スキル1つずつをタグっぽい見た目に
          <span key={skill} style={{
            margin: '0.2rem',              // 周囲に小さな余白
            padding: '0.2rem 0.5rem',      // 中身に余白（上下と左右）
            border: '1px solid #888',      // 枠線（やや濃いグレー）
            borderRadius: '4px',           // 角を軽く丸める
            display: 'inline-block',       // 横並びタグっぽく
            fontSize: '0.9rem' ,
            color: '#000000',
            background: 'linear-gradient(to right, #ff7e5f, #feb47b)'
          }}>
            {skillIcons[skill]}{skill}　{/* スキル名を表示 */}
          </span>
        ))}
      </div>
      <p style={{ fontStyle: 'italic', color: '#ffffff', marginTop: '0.5rem' }}>
        <span style={{fontWeight: 'bold',}}>
        ひとことメッセージ：</span><br />
        {message} {/* メッセージを表示 */}
</p>

    </div>
  );
}
export default BusinessCard;