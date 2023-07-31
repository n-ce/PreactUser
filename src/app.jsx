import { useState } from 'preact/hooks'

const userDataSrc = "https://randomuser.me/api/";
const userData = await fetch(userDataSrc)
  .then(res => res.json())
  .then(data => data.results[0])
  .catch(err => err);

const avatar = userData.picture.large;
const name = userData.name.first + " " + userData.name.last;
const email = "mailto:" + userData.email;
const phone = "tel:" + userData.phone;

function LikeButton({ state, handleClick }) {
  const classname = "text-4xl bi bi-heart" + (state ? "-fill" : "");
  return (
    <button onClick={handleClick} class="text-pink-600">
      <i class={classname}></i>
    </button>
  )
}



export function App() {
  const [likeState, setLikeState] = useState(false);

  return (
    <>
      <div class="flex items-center h-2/3 w-3/4">
        <img src={avatar} class="rounded-full w-1/4 aspect-square border-2 mx-4" />
        <h1 class="text-2xl font-bold text-center" >{name}</h1>
      </div>
      <div class="h-1/3 flex justify-evenly items-center">
        <LikeButton state={likeState} handleClick={() => setLikeState(!likeState)} />
        <a href={email} class="text-yellow-500">
          <i class="text-4xl bi bi-envelope-fill"></i>
        </a>
        <a href={phone} class="text-green-600">
          <i class="text-4xl bi bi-telephone-fill"></i>
        </a>
      </div>
    </>
  )
}