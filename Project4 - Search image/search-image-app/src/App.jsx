import { useState } from "react";
import "./App.css";
import Picture from "./components/Picture";

function App() {
  const [word, setWord] = useState("");
  const [photos, setPhotos] = useState([]);

  function searchImage(e) {
    e.preventDefault();
    if (!word) {
      alert("กรุณากรอกข้อมูล");
    } else {
      // เรียกใช้งาน Api
      fetchImageFromAPI();
      setWord("");
    }
  }

  async function fetchImageFromAPI() {
    const url = `${import.meta.env.VITE_API_URL}?page=1&query=${word}&client_id=${import.meta.env.VITE_API_KEY}&per_page=15`;
    const res = await fetch(url);
    const data = await res.json();
    const result = data.results;
    if (result.length == 0) {
      alert("ไม่มีรูปภาพ");
    } else {
      // เเสดงข้อมูลรูปภาพ
      setPhotos(result);
    }
  }

  return (
    <>
      <h1>ระบบค้นหารูปภาพด้วย API</h1>
      <form onSubmit={searchImage}>
        <input
          type="text"
          placeholder="ป้อนชื่อรูปภาพ..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">ค้นหา</button>
      </form>

      <section className="search-result">
        {photos.map((data, index) => {
          // {...data} คือการส่ง props
          return <Picture {...data} key={index} />;
        })}
      </section>
    </>
  );
}

export default App;
