
import Image from 'next/image'
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();

  const onClick = () => {
    router.push("contacts/");
  }

  return (
      <main className=" container mx-auto max-w-2xl ">
        <div className=" m-auto mx-auto">
          <Image src="/contacts.png" loading="eager" width={900} height={600} alt="contacting ilustration"/>
        </div>
        <div className="mx-auto m-auto">
          <button className="block bg-red-400 hover:bg-red-500 text-white text-lg mx-auto p-4 rounded-full" onClick={() => onClick()}>
            My Contacts
            </button>
          </div> 
      </main>
  )
}
