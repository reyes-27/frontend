import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Low-End',
    id: '1',
    href: '#',
    starting_price: '$299.000',
    description: "Ordenadores de gama baja, base con mucho potencial para actualizar.",
    features: ['Ryzen 5', 'Gráficos Integrados', 'Productividad', 'Actualizable'],
    featured: false,
  },
  {
    name: 'OVERKILL-End',
    id: '2',
    href: '#',
    starting_price: '$1.500.000',
    description: 'Gama Alta para usuarios exigentes. Te sirve para absolutamente todo.',
    features: ['Ryzen 7', 'RTX 40/50 series', 'Productividad Top', 'Eficiencia Extrema', 'Just OVERKILL'],
    featured: true,
  },
  {
    name: 'Mid-End',
    id: '3',
    href: '#',
    starting_price: '$600.000',
    description: 'Pensada para Gamers con mucho tiempo libre y ganas de competir.',
    features: ['RTX o RX GPU', 'Ryzen 5', 'Rendimiento 3D', 'Streaming Ready'],
    featured: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const PricingList = () => {
  return (
    <div className="relative isolate px-6 py-16 sm:py-24 lg:px-8">
      {/* Background Glow */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-[#3b82f6] to-[#6554b4] opacity-20"
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-400 uppercase tracking-widest">Presupuestos</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Escoge tu potencia
        </p>
      </div>

      <div className="mx-auto mt-16 grid grid-cols-1 items-stretch gap-y-8 sm:mt-20 lg:grid-cols-3 lg:gap-y-0">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured 
                ? 'relative z-10 bg-[#1e293b] ring-2 ring-blue-500 shadow-2xl scale-105' 
                : 'bg-[#111827]/60 backdrop-blur-md lg:my-8',
              tierIdx === 0 ? 'lg:rounded-r-none' : '',
              tierIdx === 2 ? 'lg:rounded-l-none' : '',
              'rounded-3xl p-8 ring-1 ring-white/10 flex flex-col justify-between'
            )}
          >
            <div>
              <h3 className={classNames(tier.featured ? 'text-blue-400' : 'text-gray-400', 'text-lg font-bold uppercase')}>
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.starting_price}
                </span>
                <span className="text-sm font-semibold text-gray-500">/Desde</span>
              </div>
              <p className="mt-6 text-base leading-7 text-gray-300">
                {tier.description}
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-blue-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <a
              href={tier.href}
              className={classNames(
                tier.featured
                  ? 'bg-gradient-to-r from-blue-600 to-[#6554b4] text-white'
                  : 'bg-[#1e293b] text-white hover:bg-white/20',
                'mt-8 block rounded-xl px-3.5 py-2.5 text-center text-sm font-bold shadow-sm transition-all'
              )}
            >
              Configurar Equipo
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingList