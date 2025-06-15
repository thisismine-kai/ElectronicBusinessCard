//src/pages/Loginpage.jsx

import SidebarList from "../components/SideBarList";


import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("ログイン成功！");
      navigate("/mycardbox") //ここで遷移
    } catch (err) {
      setError("ログインに失敗しました: " + err.message);
    }
  };

  return (
    <div style={{ 
       display: 'flex',           // ← 横並び
      minHeight: '100vh',        // ← 高さ100%
      padding: "2rem",
      backgroundColor: "#ffffff", // ← 白背景を明示
      color: "#000000",           // ← 黒文字を明示         // ← 画面いっぱいに表示（お好みで）
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
      <h2>ログイン</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">ログイン</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>

  );
};

export default LoginPage;
