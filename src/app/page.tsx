import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen overflow-hidden ">
      <div className="font-montserrat text-[#fff] bg-slate-950 grid grid-cols-2 h-full ">
        <div className=" grid-rows-3 col-start-1 col-end-2 row-start-1 row-end-4 pl-36 flex flex-col justify-evenly">
          <div className=" row-start-1 row-end-2 flex items-start">
            <p className=" font-jakarta font-semibold text-4xl tracking-[0.02em]  bg-gray-700 rounded-[100px]  py-4 px-7 ">
              2025
            </p>
          </div>
          <div className="row-start-2 row-end-3">
            <h1 className="flex flex-col text-9xl font-bold gap-4">
              CRM
              <span className=" font-medium text-5xl text-gray-500">
                Development
              </span>
            </h1>
          </div>
          <div className="row-start-3 row-end-4 ">
            <Link
              href={'/dashboard'}
              className="inline-block font-jakarta font-semibold text-5xl tracking-[0.02em] py-4 px-7 bg-cyan-700 hover:bg-cyan-800 transition delay-250 duration-200 ease-linear rounded-[100px] text-center"
            >
              Let&apos;s watch
            </Link>
          </div>
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-4 flex items-center justify-end ">
          <div>
            <Image
              width={700}
              height={0}
              sizes="100vw"
              src="/images/Website placeholder.png"
              alt="website screenshot"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
