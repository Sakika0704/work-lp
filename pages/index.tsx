import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='font-body tracking-widest mx-40'>
          <div className='flex flex-col-reverse md:flex-row justify-center px-4 md:px-0'>

            <div>
              <p className="text-lg mb-4 font-bold ">
                大学や街を遊び歩く
              </p>
              <h1 className='text-4xl mb-4 font-bold'>
                地域に根差す
              </h1>
              <h1 className='text-4xl mb-4 font-bold'>
                テクノロジー集団
              </h1>
              <p className='tracking-wide leading-loose w-88'>
                学生団体U-labは、宇都宮大学の学生が中心となって、デザインやテクノロジーを用いて街や大学に対して面白いことを企て、実行する学生団体です。 圧倒的なインプット環境、普通では参加できないインターン、大規模なチームプロジェクトなどを行い、宇都宮大学で最も勢いのある学生団体を目指します。 また、定期的なゲーム会やご飯会などを通し、日々仲を深めています。
              </p>
            </div>

            <div className='w-80 h-80'>
              <img alt="学生団体U-lab" src="ulab-touka.webp" />
            </div>
          </div>
        </div>


        <div>
          <div>
            <p>U-labの</p>
            <h2>活動内容</h2>
          </div>

          <div>
            <h1>01</h1>
            <p>不定期で誰でも開催・参加することができる勉強会</p>
            <p>U-labでは誰でも自由に、勉強したことや興味のあることを教え合う勉強会を開催したり、他の人の開いた勉強会に参加したりすることができます。</p>
          </div>

          <div>
            <h1>02</h1>
            <p>異なる専門の学生同士で企むチームプロジェクト</p>
            <p>U-labでは、チームで協力して様々な面白いことを企てるチームプロジェクトというものがあります。大会やイベントに参加することもあります。</p>
          </div>
        </div>

        <div>
          <div>
            <p>U-labの</p>
            <h2>代表的なプロジェクト</h2>
          </div>

          <div>
            <p>バーチャル宇都宮大学</p>
            <p>新入生や高校生がコロナ禍で大学に来れない問題を解決するため、仮想空間にバーチャルな宇都宮大学を作成し、高校生に向けたオープンキャンパスを行いました。</p>
          </div>

          <div>
            <p>UU-Circles</p>
            <p>新入生がオンラインでも宇大のサークルを見つけることができるように、最新のweb技術を用いて、企画から構築・運用までを行いました。</p>
          </div>

          <div>
            <p>uu-yell</p>
            <p>新入生が宇都宮大学の情報を得ることが難しいという問題を解決するため、宇大生が中心となって、宇都宮大学生向けのメディアサイトを運営しています。</p>
          </div>
        </div>


        <div>
          <p>入部希望はこちらから</p>
        </div>









      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
