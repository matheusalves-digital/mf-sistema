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
import { useState } from 'react'
import logo from '../assets/logpng.png'
import { PrimaryInputSearchIcon } from './primary-input'

export function Nav() {
  const [filterNav, setfilterNav] = useState<string>('')
  

  return (
    <aside className='p-6 text-gray-400'>
      <div className="flex justify-center">
        <Image src={logo} alt='logos' />
      </div>
      
      <div className="flex mb-2 bg-gray-700 items-center rounded-lg mt-4">
        <Search size={20}/>
        <PrimaryInputSearchIcon
          value={filterNav}
          updateValue={setfilterNav} 
          placeholder='Pesquisar...'
        />
      </div>
      <nav className=''>
        <p className='text-sm'>Menu</p>
        <Link href={'/'} className='flex'>
          <Home size={25}/>
          Inicial
        </Link>
        <Link href={'/'} className='flex'>
          <LayoutDashboard size={25}/>
          Dashboard
        </Link>
        <Link href={'/'} className='flex'>
          <Filter size={25}/>
          Triagem
        </Link>
        <Link href={'/'} className='flex'>
          <ClipboardSignature size={25}/>
          Cadastro
        </Link>
        <Link href={'/'} className='flex'>
          <ListChecks size={25}/>
          Cumprimento
        </Link>
        <Link href={'/'} className='flex'>
          <BadgeCheck size={25}/>
          Qualidade
        </Link>
        <Link href={'/'} className='flex'>
          <LayoutDashboard size={25}/>
          Pagamento
        </Link>
        <p className='text-sm'>Configuração e ajuda</p>
        <Link href={'/'} className='flex'>
          <HelpCircle size={25}/>
          Ajuda
        </Link>
        <Link href={'/'} className='flex'>
          <Settings size={25}/>
          Configuração
        </Link>
        <Link href={'/'} className='flex'>
          <LogOut size={25}/>
          Sair
        </Link>

      </nav>

    </aside>
  )
}