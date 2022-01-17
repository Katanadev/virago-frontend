import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
  sousId: 0,
  tokenName: 'VIR',
  stakingTokenName: QuoteToken.CAKE,
  stakingTokenAddress: '0x85582d24455caaf44fc4f914bdca2a6cb73e6681',
  contractAddress: {
  97: '0x9FcA113B2D4E64462229E107A8F4Aa7359D055F5', // souschef
  56: '0xfC2BA5B6Ec7A5Fe68546fC8fB55A915b5CA5E261', // masterchef
  },
  poolCategory: PoolCategory.CORE,
  projectLink: 'https://pancakeswap.finance/',
  harvest: true,
  tokenPerBlock: '0.00295',
  sortOrder: 1,
  isFinished: false,
  tokenDecimals: 18,
  },
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },
]

export default pools
