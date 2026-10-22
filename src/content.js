// Game facts mirror ../barrel-shooter/lib/models (level_config, gadget_type, addon, curse, elite_trait).
// `slot` ids map to entries in ART_PROMPTS.md.

export const PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.shaicoolgames.barrel_storm';

export const STEPS = [
  {
    kicker: '01',
    title: 'Move. Shoot. Never stop.',
    body: 'Your nail gun fires on its own. All you do is steer — slide between lanes, line up the horde, and keep your hoodie out of reach.',
    img: '/img/still-calm.webp',
    slot: 'clip-move',
  },
  {
    kicker: '02',
    title: 'Crack the cages.',
    body: 'Cages roll in with the zombies. Shoot one open for a new gadget, a squad ally, or a pile of gold. Level up mid-run to make what you have hit harder.',
    img: '/img/still-upgrade.webp',
    slot: 'clip-cages',
  },
  {
    kicker: '03',
    title: 'Survive the horde.',
    body: 'At wave four the belt breaks and everything comes at once. No dodging your way out — either your build holds, or it doesn’t.',
    img: '/img/still-horde.webp',
    slot: 'clip-horde',
  },
  {
    kicker: '04',
    title: 'Take down the boss.',
    body: 'Every world ends with something big. Learn its tells, survive its phases, then spend your coins on permanent upgrades and go again.',
    img: '/img/still-boss.webp',
    slot: 'clip-boss',
  },
];

export const WORLDS = [
  {
    id: 'park', name: 'The Park', boss: 'The Groundskeeper', color: '#7fc243',
    levels: ['First Day', 'Something’s Ticking', 'Last Mow'],
    body: 'Where it starts. Sunny lawns, ticking bombers, and a groundskeeper who mows down anything on his grass.',
  },
  {
    id: 'mall', name: 'The Mall', boss: 'Zombie Claus', color: '#2fbf9f',
    levels: ['Closing Time', 'Genius Bar', 'Naughty List'],
    body: 'After hours, the food court gets hungry. Summoners pull shoppers out of every storefront.',
  },
  {
    id: 'construction', name: 'Construction Yard', boss: 'The Forklift', color: '#ffc21a',
    levels: ['Hard Hats Only', 'Heavy Machinery', 'Demolition Day'],
    body: 'Hard hats required. Shooters on the scaffolding, a minigun forklift, and the Storm Core humming underneath.',
  },
  {
    id: 'beach', name: 'The Beach', boss: 'The Kraken', color: '#19b8ff',
    levels: ['Rip Tide', 'Deep End', 'Tidal Terror'],
    body: 'Sun, sand and laser-eyed walkers. Something with a lot of arms is waiting past the waves.',
  },
  {
    id: 'theater', name: 'The Theater', boss: 'The Ballerina', color: '#e0315b',
    levels: ['Opening Night', 'Center Stage', 'Curtain Call'],
    body: 'The show must go on. Follow the light, stay out of the spotlight, and survive the final act.',
  },
  {
    id: 'museum', name: 'The Museum', boss: 'The T-Rex', color: '#d9a35b',
    levels: ['Fossil Hall', 'Egyptian Wing', 'Bone Yard'],
    body: 'Sarcophagi crack open in the Egyptian wing. In the fossil hall, the biggest exhibit wakes up.',
  },
];

export const BOSSES = [
  { id: 'groundskeeper', name: 'The Groundskeeper', world: 'The Park', color: '#5d9b2e',
    line: 'Keep off the grass.' },
  { id: 'zombie-claus', name: 'Zombie Claus', world: 'The Mall', color: '#b3162a',
    line: 'He knows if you’ve been bitten.' },
  { id: 'forklift', name: 'The Forklift', world: 'Construction Yard', color: '#d79a00',
    line: 'Heavy lifting. Heavier firepower.' },
  { id: 'kraken', name: 'The Kraken', world: 'The Beach', color: '#5b2fbf',
    line: 'Eight arms. All of them armed.' },
  { id: 'ballerina', name: 'The Ballerina', world: 'The Theater', color: '#8a1030',
    line: 'Three acts. No encore.' },
  { id: 'trex', name: 'The T-Rex', world: 'The Museum', color: '#8a5a2a',
    line: 'Extinction was a suggestion.' },
];

export const ARSENAL = [
  {
    id: 'gadgets', title: 'Gadgets', sub: 'Up to four at once. They fight while you steer.',
    items: [
      ['zap-trap', 'Zap Trap', 'Chain lightning'],
      ['soaker', 'Soaker', 'Slow aura'],
      ['lawn-menace', 'Lawn Menace', 'Orbiting blade'],
      ['disco-inferno', 'Disco Inferno', 'Rotating laser beams'],
      ['duck-armada', 'Duck Armada', 'Homing contact mines'],
      ['boombox-basher', 'Boombox Basher', 'Sonic stun ring'],
      ['blender-grenade', 'Blender Grenade', 'Vortex pull + shred'],
      ['gas-can', 'Gas Can', 'Slows, softens, then ignites'],
    ],
  },
  {
    id: 'addons', title: 'Nail Gun Add-ons', sub: 'Bolt them on. Stack them up.',
    items: [
      ['homing-coil', 'Homing Coil', 'Boomerang nails'],
      ['splinter-shot', 'Splinter Shot', 'Nails split into a fan'],
      ['drill-bit', 'Drill Bit', 'Nails pierce through'],
      ['firecracker', 'Firecracker', 'Nails explode on impact'],
      ['battery-pack', 'Battery Pack', 'Chain lightning on hit'],
      ['glue-glob', 'Glue Glob', 'Slowed enemies take more'],
      ['bouncy-ball', 'Bouncy Ball', 'Ricochet to the next one'],
      ['turbo-fan', 'Turbo Fan', 'Massive fire rate'],
    ],
  },
  {
    id: 'curses', title: 'Curses', sub: 'Power with a price. Take one if you dare.',
    items: [
      [null, 'Blood Pact', 'Kill or starve.'],
      [null, 'Haunted', 'The dead walk with you.'],
      [null, 'Point Blank', 'All power up close.'],
      [null, 'Swamp King', 'Rooted power.'],
      [null, 'Iron Will', 'Relentless fire.'],
      [null, 'Tunnel Vision', 'See less, hit harder.'],
      [null, 'Soul Hunger', 'Essence doesn’t wait.'],
      [null, 'Fearless', 'Don’t need to know what’s dying.'],
    ],
  },
  {
    id: 'elites', title: 'Elites', sub: 'The horde levels up too.',
    items: [
      [null, 'Captain', 'Speeds up everything around it'],
      [null, 'Berserker', 'Double speed when it’s almost dead'],
      [null, 'Regenerator', 'Stop hitting it and it heals'],
      [null, 'Detonator', 'Explodes when it dies'],
      [null, 'Ghost', 'Phases out — nails pass through'],
      [null, 'Necromancer', 'Summons walkers around itself'],
      [null, 'Telekinetic', 'Shield blocks your nails'],
      [null, 'Shooter', 'Shoots back'],
    ],
  },
];
