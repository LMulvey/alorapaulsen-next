import { newsreader } from '@/lib/fonts';
import clsx from 'clsx';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-4 flex flex-col gap-8">
        <div className="max-w-[644px] max-h-[422px]">
          <Image
            alt="Alora Paulsen: Internet Researcher"
            height={271}
            sizes="100%"
            src="/logos/logo-stacked.svg"
            width={512}
          />
        </div>
        <h1 className={clsx('text-6xl', newsreader.className)}>
          Internet Researcher
        </h1>
      </div>
    </div>
  );
}
