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
    <aside className='p-6 text-gray-200 '>
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
      <nav className=''>
        <p className='text-sm mb-4 mt-4'>Menu</p>
        <Link href={'/'} className='flex gap-4 mb-6 '>
          <Home size={22} />
          Inicial
        </Link>
        <Link href={'/'} className='flex gap-4 mb-6'>
          <LayoutDashboard size={22}/>
          Dashboard
        </Link>
        <Link href={'/'} className='flex gap-4 mb-6'>
          <Filter size={22}/>
          Triagem
        </Link>
        <Link href={'/'} className='flex gap-4 mb-6'>
          <ClipboardSignature size={22}/>
          Cadastro
        </Link>
        <Link href={'/'} className='flex gap-4 mb-6'>
          <ListChecks size={22}/>
          Cumprimento
        </Link>
        <Link href={'/'} className='flex gap-4 mb-6'>
          <BadgeCheck size={22}/>
          Qualidade
        </Link>
        <Link href={'/'} className='flex gap-4 mb-6'>
          <LayoutDashboard size={22}/>
          Pagamento
        </Link>
        <p className='text-sm mb-4 mt-4'>Configuração e ajuda</p>
        <Link href={'/'} className='flex gap-4 mb-6'>
          <HelpCircle size={22}/>
          Ajuda
        </Link>
        <Link href={'/'} className='flex gap-4 mb-6'>
          <Settings size={22}/>
          Configuração
        </Link>
        <Link href={'/'} className='flex gap-4 mb-6'>
          <LogOut size={22}/>
          Sair
        </Link>

      </nav>

    </aside>
  )
}