import Link from "next/link";

const Header =()=> {
    return(
     <div className="bg-green-600">
       <header className="text-3xl">
          <div className="container mx-auto flex justify-between item-center">
            <h1 className="font-bold p-3"><i>Bilal Khan</i></h1>
            <nav>
                <ul className="flex space-x-6">
                  <li className="font-bold hover:text-white underline p-3 text-black-600" >
                      <Link href="/">Home</Link>
                  </li>
                  <li className="font-bold hover:text-white underline p-3 text-black-600">
                      <Link href="/about">About</Link>
                  </li>
                  <li className="font-bold hover:text-white underline p-3 text-black-600">
                      <Link href="/skills">Skills</Link>
                  </li>
                  <li className="font-bold hover:text-white underline p-3 text-black-600">
                      <Link href="/contact">Contact</Link>
                  </li>
                </ul>
            </nav>
          </div>
       </header>
    </div> 
    )
};
export default Header