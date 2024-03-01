// import React from 'react'

function NavBar() {
  return (
   <>
     <nav className="absolute m-5 ">
        <ul className="text-orange-100 lg:text-[240%] ml-2 mt-3 flex lg:space-x-44 lg:ml-40 lg:mt-12 space-x-7">
            <li onClick='.'>HOME</li>
            <li>PLAY</li>
            <li className="cursor-pointer"  onClick={() => window.open('https://angels-whisper.gitbook.io/angels-whisper-lightpaper/angels-whisper-game/angels-whisper-game')} >LIGHTPAPER</li>
            <h2 className="cursor-pointer bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text text-3xl lg:text-6xl relative lg:-left-16 -left-4 font-bold" onClick={() => window.open('https://pallet.exchange/collection/angels-whisper')}>NFT</h2>
        </ul>
     </nav>
   </>
  )
}

export default NavBar
