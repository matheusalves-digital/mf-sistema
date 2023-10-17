'use client'
import { 
  LayoutDashboard, 
  Home, 
  Filter, 
  ClipboardSignature, 
  ListChecks, 
  BadgeCheck,
  LogOut,
  HelpCircle,
  Settings,
  Search
} 
  from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { useState } from 'react'
import logo from '../assets/logpng.png'
import { PrimaryInputSearchIcon } from './primary-input'

export function Nav() {
  const [filterNav, setfilterNav] = useState<string>('')
  const inactiveLink = 'flex gap-4 mb-6 ';
  const activeLink = inactiveLink+'border-l-4 border-purple-500';
  const pathname = usePathname()

  return (
    <aside className='p-6 text-gray-200'>
      <div className="flex justify-center">
        <Image src={logo} alt='logos' />
      </div>
      
      <div className="flex mb-2 bg-gray-700 items-center rounded-lg mt-4">
        <Search size={20} className='pl-2'/>
        <PrimaryInputSearchIcon
          value={filterNav}
          updateValue={setfilterNav} 
          placeholder='Pesquisar...'
        />
      </div>
      <nav className='flex flex-col justify-center'>
        <p className='text-sm mb-4 mt-4'>Menu</p>
        <Link href={'/users'} className={pathname === '/' ? activeLink : inactiveLink}>
          <Home size={32} className="pl-2"/>
          Inicial
        </Link>
        <Link href={'/dashboard'} className={pathname.includes('/dashboard') ? activeLink : inactiveLink}>
          <LayoutDashboard size={22}/>
          Dashboard
        </Link>
        <Link href={'/triagem'} className={pathname.includes('/triagem') ? activeLink : inactiveLink}>
          <Filter size={22}/>
          Triagem
        </Link>
        <Link href={'/cadastro'} className={pathname.includes('/cadastro') ? activeLink : inactiveLink}>
          <ClipboardSignature size={22}/>
          Cadastro
        </Link>
        <Link href={'/cumprimento'} className={pathname.includes('/cumprimento') ? activeLink : inactiveLink}>
          <ListChecks size={22}/>
          Cumprimento
        </Link>
        <Link href={'/qualidade'} className={pathname.includes('/qualidade') ? activeLink : inactiveLink}>
          <BadgeCheck size={22}/>
          Qualidade
        </Link>
        <Link href={'/pagamento'} className={pathname.includes('/pagamento') ? activeLink : inactiveLink}>
          <LayoutDashboard size={22}/>
          Pagamento
        </Link>
        <p className='text-sm mb-4 mt-4'>Configuração e ajuda</p>
        <Link href={'/ajuda'} className={pathname.includes('/ajuda') ? activeLink : inactiveLink}>
          <HelpCircle size={22}/>
          Ajuda
        </Link>
        <Link href={'/configuracao'} className={pathname.includes('/configuracao') ? activeLink : inactiveLink}>
          <Settings size={22}/>
          Configuração
        </Link>
        <Link href={'/sair'} className={inactiveLink}>
          <LogOut size={22}/>
          Sair
        </Link>

      </nav>

    </aside>
  )
}