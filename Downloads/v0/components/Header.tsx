import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-cyan-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="The Academic Vault Logo" width={50} height={50} />
          <span className="ml-2 text-xl font-bold">The Academic Vault</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/scholarships" className="hover:underline">Scholarships</Link></li>
            <li><Link href="/extracurriculars" className="hover:underline">Extracurriculars</Link></li>
            <li><Link href="/programs" className="hover:underline">Programs</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

