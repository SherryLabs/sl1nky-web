import { metadata } from '@/constants'
import { MetadataCard } from '@/components/MetadataCard'

export default function Home (): JSX.Element {
  return (
    <main className='flex flex-col items-center justify-between p-10 gap-4 min-w-screen w-screen'>
      <section className='w-full max-w-fit h-auto flex flex-col gap-3 justify-start items-start flex-wrap md:grid md:place-items-start md:grid-cols-2 lg:grid-cols-3'>
        {metadata.map((item, index) => (
          <MetadataCard key={index} {...item} />
        ))}
      </section>
    </main>
  )
}
