import { Slot } from '@/data/slots';

export const getDemoUrl = (slot: Slot): string | null => {
  const { provider, title, demoUrl } = slot;

  if (demoUrl) {
    return demoUrl;
  }

  const gameId = title.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (provider) {
    case 'Pragmatic Play':
      return `https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitsw&websiteUrl=https://www.pragmaticplay.com&jurisdiction=99&lobbyURL=https://www.pragmaticplay.com`;
    
    case 'NetEnt':
      return `https://casino-demo.netoplay.com/game/${gameId}`;
    
    case 'Play\'n GO':
      return `https://www.playngonetwork.com/casino/ContainerLauncher?pid=2&gid=${gameId}&practice=1`;
    
    case 'Microgaming':
      return `https://casino.microgaming.co.uk/games/${gameId}`;
    
    case 'Novomatic':
      return `https://www.novomaticgames.com/games/${gameId}/demo`;
    
    case 'Push Gaming':
      return `https://rgs-demo.pushgaming.com/game/${gameId}`;
    
    case 'Relax Gaming':
      return `https://demo.relaxgaming.com/${gameId}`;
    
    case 'Yggdrasil':
      return `https://yggdrasilgaming.com/games/${gameId}/play`;
    
    case 'Big Time Gaming':
      return `https://games.bigtimegaming.com/${gameId}`;
    
    case 'Playson':
      return `https://playson.com/games/${gameId}/demo`;
    
    default:
      return null;
  }
};

export const hasDemo = (slot: Slot): boolean => {
  return getDemoUrl(slot) !== null;
};
