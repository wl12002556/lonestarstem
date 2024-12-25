import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-[#0095ff] py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-png.png"
            alt="The Academic Vault Logo"
            width={300}
            height={75}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <nav>
          <ul className="flex gap-8">
            {['Scholarships', 'Extracurriculars', 'Programs'].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="nav-link"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

