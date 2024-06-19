import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/ja/%E5%86%99%E7%9C%9F/%E9%9C%A7%E3%81%AE%E5%B1%B1%E3%80%85%E3%81%AE%E8%88%AA%E7%A9%BA%E5%86%99%E7%9C%9F-1527pjeb6jg"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 0000/00/00</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt corrupti maxime, est commodi qui a blanditiis, at, rerum nesciunt eveniet animi minus explicabo possimus expedita totam! Soluta placeat architecto hic!
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">続きを読む</Link>
        </div>
      </article>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/ja/%E5%86%99%E7%9C%9F/%E9%9C%A7%E3%81%AE%E5%B1%B1%E3%80%85%E3%81%AE%E8%88%AA%E7%A9%BA%E5%86%99%E7%9C%9F-1527pjeb6jg"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 0000/00/00</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt corrupti maxime, est commodi qui a blanditiis, at, rerum nesciunt eveniet animi minus explicabo possimus expedita totam! Soluta placeat architecto hic!
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">続きを読む</Link>
        </div>
      </article>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 0000/00/00</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt corrupti maxime, est commodi qui a blanditiis, at, rerum nesciunt eveniet animi minus explicabo possimus expedita totam! Soluta placeat architecto hic!
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">続きを読む</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList