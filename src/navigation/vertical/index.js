import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: '/logo.svg',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://explorer.nodestake.top',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Website',
      href: 'http://ppnv.space',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Discord',
    href: 'https://discordapp.com/users/400556753059708929/',
    icon: 'EyeIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/ppnv_service',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/sergiomateiko',
    icon: 'GithubIcon',
  })

  return chainMenus
}

export default processMenu()
