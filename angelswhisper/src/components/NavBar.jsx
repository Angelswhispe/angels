// import React from 'react'

function NavBar() {
  return (
   <>
     <nav className="absolute m-5 ">
        <ul className="text-orange-100 lg:text-[240%] ml-2 mt-3 flex lg:space-x-44 lg:ml-40 lg:mt-12 space-x-7">
            <li>HOME</li>
            <li>PLAY</li>
            <li>LIGHTPAPER</li>
            <h2 className="bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text text-3xl lg:text-6xl relative lg:-left-16 -left-4 font-bold">NFT</h2>
        </ul>
     </nav>
   </>
  )
}

export default NavBar
