import { skillIcons } from '../data/skillIcons';

function BusinessCard({name, github, skills, avatar}) {
  return (
    <div style={{
      border: '1px solid #ccc',            // 薄いグレーの枠線
      borderRadius: '8px',                 // 四隅を丸くする（角の丸み）
      padding: '1rem',                     // 内側に余白
      backgroundColor: '#fff'              // 背景を白にする
    }}>


      <div style={{
        display: 'flex',// 横並びにする
         gap: '1rem'// アイコンとテキストの間に隙間を作る 
    }}>
      <img src={avatar} alt={name} style={{
        width: 80,                          // 幅80px
        height: 80,                         // 高さ80px
        borderRadius: '50%',               // 丸くする（円形に）
        marginBottom: '0.5rem'             // 下に少し余白
      }}/>

       {/* ユーザー名を表示（見出しサイズ） */}
      <h3 style={{color: '#007bff'}}>{name}</h3>

      </div>

      {/* GitHubリンクを表示 */}
      <a href={github} target="_blank">
        {github}
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
            color: '#007bff'            
          }}>
            {skillIcons[skill]}{skill}                         {/* スキル名を表示 */}
          </span>
        ))}
      </div>

    </div>
  );
}
export default BusinessCard; 