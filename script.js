body {
  margin: 0;
  font-family: sans-serif;
  background: #0f1115;
  color: #eee;
}

header {
  padding: 30px;
  text-align: center;
  background: linear-gradient(135deg, #1f4037, #99f2c8);
  color: #000;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  background: #111;
  padding: 10px;
}

nav a {
  color: #9cff57;
  text-decoration: none;
  font-weight: bold;
}

.card {
  background: #1b1f27;
  margin: 20px auto;
  padding: 20px;
  max-width: 700px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0,0,0,.4);
}

.meme-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  gap: 15px;
  padding: 20px;
}

.meme-grid img {
  width: 100%;
  border-radius: 12px;
}

