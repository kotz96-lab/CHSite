"""Build placeholder art for CHSite from barrel-shooter game assets.

Usage: python tools/prep_placeholders.py ../barrel-shooter/assets/images public/img
"""
import os, random, sys
from PIL import Image

SRC, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT, exist_ok=True)
random.seed(7)


def load(p):
    return Image.open(os.path.join(SRC, p)).convert('RGBA')


def frame(p, grid=5, idx=0):
    im = load(p)
    fw, fh = im.width // grid, im.height // grid
    c, r = idx % grid, idx // grid
    f = im.crop((c * fw, r * fh, (c + 1) * fw, (r + 1) * fh))
    return f.crop(f.getbbox())


def trim(im):
    return im.crop(im.getbbox())


def save(im, name, maxw=None, q=82):
    if maxw and im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    im.save(os.path.join(OUT, name + '.webp'), 'WEBP', quality=q, method=6)


def fit(im, w, h):
    s = max(w / im.width, h / im.height)
    im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    x, y = (im.width - w) // 2, (im.height - h) // 2
    return im.crop((x, y, x + w, y + h))


def scale_h(im, h):
    return im.resize((round(im.width * h / im.height), h), Image.LANCZOS)


# Hero
save(fit(load('main_menu.png'), 1920, 1080), 'hero-bg', q=78)
save(load('game_icon.png'), 'hero-char', maxw=1100)

# Worlds — painted map art
worlds = {
    'park': 'park/map.png', 'mall': 'mall/map.png',
    'construction': 'construction_site/map.png', 'beach': 'beach/map.png',
    'theater': 'theater/arena.png', 'museum': 'museum/map.png',
}
for k, p in worlds.items():
    save(fit(load(p), 1920, 1080), 'world-' + k, q=78)

# Bosses — first idle frame, trimmed
park_boss = load('park/boss.png')
bosses = {
    'groundskeeper': trim(park_boss.crop((0, 0, park_boss.width // 2, park_boss.height // 2))),
    'zombie-claus': trim(load('mall/boss1.png')),
    'forklift': trim(load('construction_site/boss1.png')),
    'kraken': trim(load('beach/boss.png').crop((800, 0, 1200, 270))),
    'ballerina': frame('theater/boss_idle.png'),
    'trex': frame('museum/boss_idle.png'),
}
for k, im in bosses.items():
    save(im, 'boss-' + k, maxw=900)

# Gameplay stills — composited stand-ins until real footage exists
def still(arena, enemies, name, extras=()):
    bg = fit(load(arena), 1600, 900)
    player = scale_h(frame('player_walk_right.png'), 150)
    bg.alpha_composite(player, (220, 600))
    for p, n, h in enemies:
        spr = scale_h(frame(p), h)
        for _ in range(n):
            bg.alpha_composite(spr, (random.randint(650, 1450), random.randint(120, 720)))
    for p, h, xy in extras:
        bg.alpha_composite(scale_h(trim(load(p)), h), xy)
    save(bg.convert('RGB'), name, q=78)

still('park/arena.png', [('park/walker_walk.png', 14, 110), ('park/tank_walk.png', 4, 160),
                         ('park/runner_walk.png', 8, 100)], 'still-horde')
still('mall/arena.png', [('mall/walker_walk.png', 5, 110)], 'still-boss',
      extras=[('mall/boss1.png', 420, (900, 180))])
still('construction_site/arena.png', [('park/walker_walk.png', 6, 110)], 'still-upgrade',
      extras=[('obj_explosion.png', 380, (800, 200)), ('obj_goldcoin.png', 70, (560, 560)),
              ('park/cage.png', 160, (420, 300))])
still('beach/arena.png', [('beach/walker_walk.png', 4, 110)], 'still-calm',
      extras=[('park/cage.png', 140, (700, 400))])

# Arsenal icons
for n in ['zap_trap', 'soaker', 'lawn_menace', 'disco_inferno', 'duck_armada', 'boombox_basher',
          'blender_grenade', 'gas_can', 'sticky_bomb', 'popcorn_machine',
          'homing_coil', 'splinter_shot', 'drill_bit', 'firecracker', 'battery_pack',
          'glue_glob', 'bouncy_ball', 'turbo_fan']:
    save(trim(load('icon_' + n + '.png')), 'icon-' + n.replace('_', '-'), maxw=400)

for p, n in [('obj_explosion.png', 'fx-explosion'), ('obj_goldcoin.png', 'fx-coin'),
             ('park/cage.png', 'fx-cage')]:
    save(trim(load(p)), n, maxw=600)
print('done', len(os.listdir(OUT)))
