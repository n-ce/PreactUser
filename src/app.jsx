import { useState } from 'preact/hooks'
import "./app.css"

const userDataSrc = "https://randomuser.me/api/";
const userData = await fetch(userDataSrc)
  .then(res => res.json())
  .then(data => data.results[0])
  .catch(err => err);

const avatar = userData.picture.thumbnail;
const name = userData.name.first + " " + userData.name.last;
const email = "mailto:" + userData.email;
const phone = "tel:" + userData.phone;

function LikeButton({ state, handleClick }) {
  const classname = "bi bi-heart" + (state ? "-fill" : "");
  return (
    <button onClick={handleClick}>
      <i class={classname}></i>
    </button>
  )
}



export function App() {
  const [likeState, setLikeState] = useState(false);

  return (
    <>
      <div id="user">
        <img src={avatar} />
        <h1>{name}</h1>
      </div>
      <div id="social">
        <LikeButton state={likeState} handleClick={() => { setLikeState(!likeState) }} />
        <a href={email}>
          <i class="bi bi-envelope-fill"></i>
        </a>
        <a href={phone}>
          <i class="bi bi-telephone-fill"></i>
        </a>
      </div >
    </>
  )
}