"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var util_1 = require("../util");
var RBY = [];
var GSC = [
    'Berry Juice',
//     'Berry',
//     'Berserk Gene',
//     'Bitter Berry',
    'Black Belt',
    'Black Glasses',
    'Bright Powder',
//     'Burnt Berry',
    'Charcoal',
    'Dragon Fang',
    'Dragon Scale',
    'Energy Powder',
//     'Focus Band',
//     'Gold Berry',
    'Hard Stone',
    'Leftovers',
    'Light Ball',
    'Lucky Punch',
    'Magnet',
    'Metal Coat',
    'Metal Powder',
//     'Mint Berry',
//     'Miracle Berry',
    'Miracle Seed',
//     'Mystery Berry',
    'Mystic Water',
    'Never-Melt Ice',
    'Poison Barb',
    'Quick Claw',
    'Sharp Beak',
    'SilverPowder',
    'Soft Sand',
    'Spell Tag',
    'Stick',
    'Thick Club',
    'Twisted Spoon',
];
var GSC_ONLY = [
//     'Berry',
//     'Berserk Gene',
//     'Bitter Berry',
//     'Burnt Berry',
//     'Ice Berry',
//     'Mint Berry',
//     'Miracle Berry',
//     'Mystery Berry',
//     'PRZ Cure Berry',
//     'Gold Berry',
//     'Pink Bow',
//     'Polkadot Bow',
//     'PSN Cure Berry',
//     'Enigma Berry',
];
var ADV = GSC.filter(function (i) { return !GSC_ONLY.includes(i); }).concat([
    'Aguav Berry',
    'Apicot Berry',
    'Aspear Berry',
    'Belue Berry',
    'Bluk Berry',
    'Cheri Berry',
    'Chesto Berry',
    'Choice Band',
    'Cornn Berry',
    'Durin Berry',
    'Enigma Berry',
    'Figy Berry',
    'Ganlon Berry',
    'Grepa Berry',
    'Hondew Berry',
    'Iapapa Berry',
    'Kelpsy Berry',
    'Lansat Berry',
//     'Lax Incense',
    'Leppa Berry',
    'Liechi Berry',
    'Lum Berry',
//     'Macho Brace',
    'Mago Berry',
    'Magost Berry',
    'Mental Herb',
    'Nanab Berry',
    'Nomel Berry',
    'Oran Berry',
    'Pamtre Berry',
    'Pecha Berry',
    'Persim Berry',
    'Petaya Berry',
    'Pinap Berry',
    'Pomeg Berry',
    'Qualot Berry',
    'Rabuta Berry',
    'Rawst Berry',
    'Razz Berry',
    'Salac Berry',
    'Sea Incense',
    'Shell Bell',
    'Silk Scarf',
    'Sitrus Berry',
    'Soul Dew',
    'Spelon Berry',
    'Starf Berry',
    'Tamato Berry',
    'Watmel Berry',
    'Wepear Berry',
    'White Herb',
    'Wiki Berry',
]);
var DPP = ADV.concat([
//     'Adamant Orb',
    'Babiri Berry',
    'Big Root',
    'Black Sludge',
    'Charti Berry',
    'Chilan Berry',
    'Choice Scarf',
    'Choice Specs',
    'Chople Berry',
    'Coba Berry',
    'Colbur Berry',
    'Custap Berry',
    'Damp Rock',
    'Draco Plate',
    'Dread Plate',
//     'Dusk Ball',
    'Dusk Stone',
    'Earth Plate',
    'Enigma Berry',
    'Expert Belt',
    'Fist Plate',
    'Flame Orb',
    'Flame Plate',
    'Focus Sash',
//     'Full Incense',
//     'Grip Claw',
    'Griseous Orb',
    'Haban Berry',
    'Heat Rock',
    'Icicle Plate',
    'Icy Rock',
    'Insect Plate',
    'Iron Ball',
    'Iron Plate',
    'Jaboca Berry',
    'Kasib Berry',
    'Kebia Berry',
//     'Lagging Tail',
    'Life Orb',
    'Light Clay',
    'Lustrous Orb',
//     'Macho Brace',
    'Meadow Plate',
    'Metronome',
    'Micle Berry',
    'Mind Plate',
    'Muscle Band',
    'Occa Berry',
//     'Odd Incense',
    'Passho Berry',
    'Payapa Berry',
    'Protector',
    'Quick Powder',
    'Razor Claw',
    'Razor Fang',
    'Rindo Berry',
//     'Rock Incense',
//     'Rose Incense',
    'Rowap Berry',
//     'Shiny Stone',
    'Shuca Berry',
//     'Skull Fossil',
    'Sky Plate',
    'Smooth Rock',
    'Splash Plate',
    'Spooky Plate',
//     'Sticky Barb',
    'Stone Plate',
    'Tanga Berry',
    'Toxic Orb',
    'Toxic Plate',
    'Wacan Berry',
//     'Wave Incense',
//     'Wide Lens',
    'Wise Glasses',
    'Yache Berry',
    'Zap Plate',
//     'Zoom Lens',
]);
var BW = DPP.concat([
    'Absorb Bulb',
    'Air Balloon',
    'Binding Band',
    'Bug Gem',
    'Cell Battery',
    'Chill Drive',
    'Dark Gem',
    'Douse Drive',
    'Dragon Gem',
    'Eject Button',
    'Electric Gem',
    'Eviolite',
    'Fighting Gem',
    'Fire Gem',
    'Float Stone',
    'Flying Gem',
    'Ghost Gem',
    'Grass Gem',
    'Ground Gem',
    'Ice Gem',
    'Normal Gem',
    'Poison Gem',
    'Psychic Gem',
    'Ring Target',
    'Rock Gem',
    'Rocky Helmet',
    'Shock Drive',
    'Steel Gem',
    'Water Gem',
]);
exports.MEGA_STONES = {
    Absolite: 'Absol',
    Abomasite: 'Abomasnow',
    Aerodactylite: 'Aerodactyl',
    Aggronite: 'Aggron',
    Alakazite: 'Alakazam',
    Altarianite: 'Altaria',
    Ampharosite: 'Ampharos',
    Audinite: 'Audino',
    Banettite: 'Banette',
    Beedrillite: 'Beedrill',
    Blastoisinite: 'Blastoise',
    Blazikenite: 'Blaziken',
    Cameruptite: 'Camerupt',
    'Charizardite X': 'Charizard',
    'Charizardite Y': 'Charizard',
    Crucibellite: 'Crucibelle',
    Diancite: 'Diancie',
    Galladite: 'Gallade',
    Garchompite: 'Garchomp',
    Gardevoirite: 'Gardevoir',
    Gengarite: 'Gengar',
    Glalitite: 'Glalie',
    Gyaradosite: 'Gyarados',
    Heracronite: 'Heracross',
    Houndoominite: 'Houndoom',
    Kangaskhanite: 'Kangaskhan',
    Latiasite: 'Latias',
    Latiosite: 'Latios',
    Lopunnite: 'Lopunny',
    Lucarionite: 'Lucario',
    Manectite: 'Manectric',
    Mawilite: 'Mawile',
    Medichamite: 'Medicham',
    Metagrossite: 'Metagross',
    'Mewtwonite X': 'Mewtwo',
    'Mewtwonite Y': 'Mewtwo',
    Pidgeotite: 'Pidgeot',
    Pinsirite: 'Pinsir',
    Sablenite: 'Sableye',
    Salamencite: 'Salamence',
    Sceptilite: 'Sceptile',
    Scizorite: 'Scizor',
    Sharpedonite: 'Sharpedo',
    Slowbronite: 'Slowbro',
    Steelixite: 'Steelix',
    Swampertite: 'Swampert',
    Tyranitarite: 'Tyranitar',
    Venusaurite: 'Venusaur'
};
var XY = BW.concat(__spreadArrays(Object.keys(exports.MEGA_STONES), [
    'Assault Vest',
    'Blue Orb',
    'Fairy Gem',
    'Kee Berry',
    'Luminous Moss',
    'Maranga Berry',
    'Pixie Plate',
    'Power Herb',
    'Red Orb',
    'Roseli Berry',
    'Safety Goggles',
    'Snowball',
    'Weakness Policy',
]).sort());
var SM = XY.filter(function (i) { return i !== 'Old Amber'; }).concat([
//     'Adrenaline Orb',
    'Electric Seed',
    'Grassy Seed',
    'Misty Seed',
//     'Protective Pads',
    'Psychic Seed',
//     'Terrain Extender',
]);
var SS = SM.concat([
    'Aged Vial',
    'Blast Band',
    'Blunder Policy',
    'Broken Glasses',
    'Buddy Rock',
    'Cheri Scarf',
    'Cinders',
    'Comet Shard',
    'Cracked Spoon',
    'Eject Pack',
    'Elemental Tag',
    'Faded Pecha Scarf',
    'Faded Cheri Scarf',
    'Faded Persim Band',
    'Fae Antennae',
    'Fetid Scale',
    'Focus Cape',
    'Friend Gemstone',
    'Granite Stone',
    'Grey Powder',
    'Grotto Tag',
    'Ground Claw',
    'Heal Ribbon',
    'Heavy-Duty Boots',
    'Historic Icecap',
    'Icy Ribbon',
    'Iron Band',
    'Jazzy Scarf',    
    'Leek',
    'Magic Leaf',
    'Marble',
    'Pecha Scarf',
    'Persim Band',
    'Pragmatic Sash',
    'Rainy Ribbon',
    'Rebound Band',
    'Return Band',
    'Ripped Belt',
    'Ripped Silk Scarf',
    'Room Service',
//     'Rusted Shield',
//     'Rusted Sword',
    'Shady Dust',
    'Sharp Talon',
    'Smooth Ribbon',
    'Steel Feather',
    'Sunglasses',
    'Sunny Ribbon',
    'Sylph Stardust',
    'Tainted Hook',
    'Tarot Card',
    'Throat Spray',
    'Twist Band',
    'Weather Band',
    'Weather Cape',
    'Zinc Band',
    'Zinc Cape',
    
    'Nupeat Berry',
    'Ninikeu Berry',
    'Kuo Berry',
    'Gimelac Berry',
    'Astalea Berry',
    'Igneas Berry',
    'Caleas Berry',
    'Aspelon Berry',
]);
// for (var i = 0; i < 100; i++) {
//     SS.push("TR" + (i < 10 ? "0" + i : i));
// }
SS.push('Utility Umbrella');
SS.push.apply(SS, __spreadArrays(GSC_ONLY, ['Old Amber']));
var BERRIES = {
    'Aguav Berry': { t: 'Dragon', p: 60 },
    'Apicot Berry': { t: 'Ground', p: 100 },
    'Aspear Berry': { t: 'Ice', p: 60 },
    'Aspelon Berry': { t: 'Dark', p: 70 },
    'Astalea Berry': { t: 'Bug', p: 100 },
    'Babiri Berry': { t: 'Steel', p: 80 },
    'Belue Berry': { t: 'Electric', p: 100 },
//     Berry: { t: 'Poison', p: 80 },
//     'Bitter Berry': { t: 'Ground', p: 80 },
    'Bluk Berry': { t: 'Fire', p: 70 },
//     'Burnt Berry': { t: 'Ice', p: 80 },
    'Caleas Berry': { t: 'Ruined', p: 100 },
    'Charti Berry': { t: 'Rock', p: 80 },
    'Cheri Berry': { t: 'Fire', p: 60 },
    'Chesto Berry': { t: 'Water', p: 60 },
    'Chilan Berry': { t: 'Normal', p: 80 },
    'Chople Berry': { t: 'Fighting', p: 80 },
    'Coba Berry': { t: 'Flying', p: 80 },
    'Colbur Berry': { t: 'Dark', p: 80 },
    'Cornn Berry': { t: 'Bug', p: 70 },
    'Custap Berry': { t: 'Ghost', p: 100 },
    'Durin Berry': { t: 'Water', p: 100 },
    'Enigma Berry': { t: 'Bug', p: 100 },
    'Figy Berry': { t: 'Bug', p: 60 },
    'Ganlon Berry': { t: 'Ice', p: 100 },
    'Gimelac Berry': { t: 'Steel', p: 90 },
//     'Gold Berry': { t: 'Psychic', p: 80 },
    'Grepa Berry': { t: 'Flying', p: 70 },
    'Haban Berry': { t: 'Dragon', p: 80 },
    'Hondew Berry': { t: 'Ground', p: 70 },
    'Iapapa Berry': { t: 'Dark', p: 60 },
//     'Ice Berry': { t: 'Grass', p: 80 },
    'Igneas Berry': { t: 'Ruined', p: 90 },
    'Jaboca Berry': { t: 'Dragon', p: 100 },
    'Kasib Berry': { t: 'Ghost', p: 80 },
    'Kebia Berry': { t: 'Poison', p: 80 },
    'Kee Berry': { t: 'Fairy', p: 70 },
    'Kelpsy Berry': { t: 'Fighting', p: 70 },
    'Kuo Berry': { t: 'Fairy', p: 100 },    
    'Lansat Berry': { t: 'Flying', p: 100 },
    'Leppa Berry': { t: 'Fighting', p: 60 },
    'Liechi Berry': { t: 'Grass', p: 100 },
    'Lum Berry': { t: 'Flying', p: 60 },
    'Mago Berry': { t: 'Ghost', p: 60 },
    'Magost Berry': { t: 'Rock', p: 70 },
    'Maranga Berry': { t: 'Dark', p: 100 },
    'Micle Berry': { t: 'Rock', p: 100 },
//     'Mint Berry': { t: 'Water', p: 80 },
//     'Miracle Berry': { t: 'Flying', p: 80 },
//     'Mystery Berry': { t: 'Fighting', p: 80 },
    'Nanab Berry': { t: 'Water', p: 70 },
    'Ninikeu Berry': { t: 'Fairy', p: 90 },
    'Nomel Berry': { t: 'Dragon', p: 70 },
    'Nupeat Berry': { t: 'Normal', p:150 },
    'Occa Berry': { t: 'Fire', p: 80 },
    'Oran Berry': { t: 'Poison', p: 60 },
    'Pamtre Berry': { t: 'Steel', p: 70 },
    'Passho Berry': { t: 'Water', p: 80 },
    'Payapa Berry': { t: 'Psychic', p: 80 },
    'Pecha Berry': { t: 'Electric', p: 60 },
    'Persim Berry': { t: 'Ground', p: 60 },
    'Petaya Berry': { t: 'Poison', p: 100 },
    'Pinap Berry': { t: 'Grass', p: 70 },
    'Pomeg Berry': { t: 'Ice', p: 70 },
//     'PRZ Cure Berry': { t: 'Fire', p: 80 },
//     'PSN Cure Berry': { t: 'Electric', p: 80 },
    'Qualot Berry': { t: 'Poison', p: 70 },
    'Rabuta Berry': { t: 'Ghost', p: 70 },
    'Rawst Berry': { t: 'Grass', p: 60 },
    'Razz Berry': { t: 'Steel', p: 60 },
    'Rindo Berry': { t: 'Grass', p: 80 },
    'Roseli Berry': { t: 'Fairy', p: 60 },
    'Rowap Berry': { t: 'Dark', p: 100 },
    'Salac Berry': { t: 'Fighting', p: 100 },
    'Shuca Berry': { t: 'Ground', p: 80 },
    'Sitrus Berry': { t: 'Psychic', p: 60 },
    'Spelon Berry': { t: 'Dark', p: 90 },
    'Starf Berry': { t: 'Psychic', p: 100 },
    'Tamato Berry': { t: 'Psychic', p: 70 },
    'Tanga Berry': { t: 'Bug', p: 80 },
    'Wacan Berry': { t: 'Electric', p: 80 },
    'Watmel Berry': { t: 'Fire', p: 100 },
    'Wepear Berry': { t: 'Electric', p: 70 },
    'Wiki Berry': { t: 'Rock', p: 60 },
    'Yache Berry': { t: 'Ice', p: 80 }
};
exports.ITEMS = [[], RBY, GSC, ADV, DPP, BW, XY, SM, SS];
var Items = (function () {
    function Items(gen) {
        this.gen = gen;
    }
    Items.prototype.get = function (id) {
        return ITEMS_BY_ID[this.gen][id];
    };
    Items.prototype[Symbol.iterator] = function () {
        var _a, _b, _i, id;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = [];
                    for (_b in ITEMS_BY_ID[this.gen])
                        _a.push(_b);
                    _i = 0;
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3, 4];
                    id = _a[_i];
                    return [4, this.get(id)];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    return Items;
}());
exports.Items = Items;
var Item = (function () {
    function Item(name, gen) {
        this.kind = 'Item';
        this.id = util_1.toID(name);
        this.name = name;
        this.megaEvolves = exports.MEGA_STONES[name];
        var berry = BERRIES[name];
        if (berry) {
            this.isBerry = true;
            this.naturalGift = {
                basePower: gen < 6 ? berry.p - 20 : berry.p,
                type: berry.t
            };
        }
    }
    return Item;
}());
var ITEMS_BY_ID = [];
var gen = 0;
for (var _i = 0, ITEMS_1 = exports.ITEMS; _i < ITEMS_1.length; _i++) {
    var items = ITEMS_1[_i];
    var map = {};
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        var i = new Item(item, gen);
        map[i.id] = i;
    }
    ITEMS_BY_ID.push(map);
    gen++;
}
//# sourceMappingURL=items.js.map
