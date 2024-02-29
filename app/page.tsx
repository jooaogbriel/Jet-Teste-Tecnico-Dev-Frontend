import Link from 'next/link';
import Image from 'next/image';
import logo  from '@/app/images/logo.png'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Teste técnico Jet.</strong> Aplicação Web{' '}
            <a className="">
              feito em NextJS. {' '}
            </a>
             Utilizando AppRouter
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            <span>Bem-vindo</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
            src={logo}
            width={560}
            height={620}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src={logo}
            width={560}
            height={620}
            className="md:hidden block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}