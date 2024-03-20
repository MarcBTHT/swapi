import Link from 'next/link';
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className='bg-light_blue'>
      <div className='backdrop-blur-3xl flex flex-col min-h-screen mx-auto' style={{ maxWidth: '1500px' }}>
        <Header />
        <main className="flex-grow">
          <section className='text-center min-h-screen flex flex-col justify-center relative'>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                background: 'linear-gradient(to bottom, rgba(212,137,127,1) 0%, rgba(201,117,156,1) 100%)',
                filter: 'blur(180px)',
                width: '770px',
                height: '770px',
              }}
            />
            <div
              className="absolute left-1/2 transform translate-x-40 -translate-y-80"
              style={{
                background: 'linear-gradient(to bottom, rgba(135,203,208,1) 100%, rgba(190,232,235,1) 0%)',
                filter: 'blur(180px)',
                width: '530px',
                height: '530px',
              }}
            />
            <div
              className="absolute transform -translate-x-10 -translate-y-80 "
              style={{
                background: 'linear-gradient(to bottom, rgba(121,35,171,1) 0%, rgba(82,55,149,1) 75%)',
                filter: 'blur(180px)',
                width: '530px',
                height: '530px',
              }}
            />
            <div className='relative z-10 mx-auto w-2/3'>
              
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div >
  );
}