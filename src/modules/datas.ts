export type ElementSymbol = {
	z: number
	symbol: string
	la: string
	en: string
	jp: string
	row: number
	column: number
	color: string
}

type PeriodicTableInfo = {
	row: number
	column: number
}

export const periodicTableInfo: PeriodicTableInfo = {
	row: 10,
	column: 18
}

export const periodicTableDatas: ElementSymbol[] = [
	// row 1
	{ z: 1, symbol: 'H', la: 'Hydrogenium', en: 'Hydrogen', jp: '水素', row: 1, column: 1, color: '#ff3034' },
	{ z: 2, symbol: 'He', la: 'Helium', en: 'Helium', jp: 'ヘリウム', row: 1, column: 18, color: '#ff7600' },
	// row 2
	{ z: 3, symbol: 'Li', la: 'Lithium', en: 'Lithium', jp: 'リチウム', row: 2, column: 1, color: '#59b5f6' },
	{ z: 4, symbol: 'Be', la: 'Beryllium', en: 'Beryllium', jp: 'ベリリウム', row: 2, column: 2, color: '#a5caf1' },
	{ z: 5, symbol: 'B', la: 'Borium', en: 'Boron', jp: 'ホウ素', row: 2, column: 13, color: '#fdff01' },
	{ z: 6, symbol: 'C', la: 'Carbonium', en: 'Carbon', jp: '炭素', row: 2, column: 14, color: '#ffbe23' },
	{ z: 7, symbol: 'N', la: 'Nitrogenium', en: 'Nitrogen', jp: '窒素', row: 2, column: 15, color: '#ffbe23' },
	{ z: 8, symbol: 'O', la: 'Oxygenium', en: 'Oxygen', jp: '酸素', row: 2, column: 16, color: '#ffbe23' },
	{ z: 9, symbol: 'F', la: 'Fluorum', en: 'Fluorine', jp: 'フッ素', row: 2, column: 17, color: '#ffbe23' },
	{ z: 10, symbol: 'Ne', la: 'Neon', en: 'Neon', jp: 'ネオン', row: 2, column: 18, color: '#ff7600' },
	// row 3
	{ z: 11, symbol: 'Na', la: 'Natrium', en: 'Sodium', jp: 'ナトリウム', row: 3, column: 1, color: '#59b5f6' },
	{ z: 12, symbol: 'Mg', la: 'Magnesium', en: 'Magnesium', jp: 'マグネシウム', row: 3, column: 2, color: '#a5caf1' },
	{ z: 13, symbol: 'Al', la: 'Aluminium', en: 'Aluminium', jp: 'アルミニウム', row: 3, column: 13, color: '#0cfb65' },
	{ z: 14, symbol: 'Si', la: 'Silicium', en: 'Silicon', jp: 'ケイ素', row: 3, column: 14, color: '#fefd32' },
	{ z: 15, symbol: 'P', la: 'Phosphorus', en: 'Phosphorus', jp: 'リン', row: 3, column: 15, color: '#ffbe23' },
	{ z: 16, symbol: 'S', la: 'Sulphur', en: 'Sulfur', jp: '硫黄', row: 3, column: 16, color: '#ffbe23' },
	{ z: 17, symbol: 'Cl', la: 'Chlorum', en: 'Chlorine', jp: '塩素', row: 3, column: 17, color: '#ffbe23' },
	{ z: 18, symbol: 'Ar', la: 'Argon', en: 'Argon', jp: 'アルゴン', row: 3, column: 18, color: '#ff7600' },
	// row 4
	{ z: 19, symbol: 'K', la: 'Kalium', en: 'Potassium', jp: 'カリウム', row: 4, column: 1, color: '#59b5f6' },
	{ z: 20, symbol: 'Ca', la: 'Calcium', en: 'Calcium', jp: 'カルシウム', row: 4, column: 2, color: '#a5caf1' },
	{ z: 21, symbol: 'Sc', la: 'Scandium', en: 'Scandium', jp: 'スカンジウム', row: 4, column: 3, color: '#c4b3d9' },
	{ z: 22, symbol: 'Ti', la: 'Titanium', en: 'Titanium', jp: 'チタン', row: 4, column: 4, color: '#7bd7fe' },
	{ z: 23, symbol: 'V', la: 'Vanadium', en: 'Vanadium', jp: 'バナジウム', row: 4, column: 5, color: '#3ee1f0' },
	{ z: 24, symbol: 'Cr', la: 'Chromium', en: 'Chromium', jp: 'クロム', row: 4, column: 6, color: '#02e9e9' },
	{ z: 25, symbol: 'Mn', la: 'Manganum', en: 'Manganese', jp: 'マンガン', row: 4, column: 7, color: '#16e7d2' },
	{ z: 26, symbol: 'Fe', la: 'Ferrum', en: 'Iron', jp: '鉄', row: 4, column: 8, color: '#45dcd3' },
	{ z: 27, symbol: 'Co', la: 'Cobaltum', en: 'Cobalt', jp: 'コバルト', row: 4, column: 9, color: '#5de0c8' },
	{ z: 28, symbol: 'Ni', la: 'Niccolum', en: 'Nickel', jp: 'ニッケル', row: 4, column: 10, color: '#28e4c3' },
	{ z: 29, symbol: 'Cu', la: 'Cuprum', en: 'Copper', jp: '銅', row: 4, column: 11, color: '#00e5b4' },
	{ z: 30, symbol: 'Zn', la: 'Zincum', en: 'Zinc', jp: '亜鉛', row: 4, column: 12, color: '#06f386' },
	{ z: 31, symbol: 'Ga', la: 'Gallium', en: 'Gallium', jp: 'ガリウム', row: 4, column: 13, color: '#0cfb65' },
	{ z: 32, symbol: 'Ge', la: 'Germanium', en: 'Germanium', jp: 'ゲルマニウム', row: 4, column: 14, color: '#fefd32' },
	{ z: 33, symbol: 'As', la: 'Arsenicum', en: 'Arsenic', jp: 'ヒ素', row: 4, column: 15, color: '#fefd32' },
	{ z: 34, symbol: 'Se', la: 'Selenium', en: 'Selenium', jp: 'セレン', row: 4, column: 16, color: '#ffbe23' },
	{ z: 35, symbol: 'Br', la: 'Bromum', en: 'Bromine', jp: '臭素', row: 4, column: 17, color: '#ffbe23' },
	{ z: 36, symbol: 'Kr', la: 'Krypton', en: 'Krypton', jp: 'クリプトン', row: 4, column: 18, color: '#ff7600' },
	// row 5
	{ z: 37, symbol: 'Rb', la: 'Rubidium', en: 'Rubidium', jp: 'ルビジウム', row: 5, column: 1, color: '#59b5f6' },
	{ z: 38, symbol: 'Sr', la: 'Strontium', en: 'Strontium', jp: 'ストロンチウム', row: 5, column: 2, color: '#a5caf1' },
	{ z: 39, symbol: 'Y', la: 'Yttrium', en: 'Yttrium', jp: 'イットリウム', row: 5, column: 3, color: '#c4b3d9' },
	{ z: 40, symbol: 'Zr', la: 'Zirconium', en: 'Zirconium', jp: 'ジルコニウム', row: 5, column: 4, color: '#7bd7fe' },
	{ z: 41, symbol: 'Nb', la: 'Niobium', en: 'Niobium', jp: 'ニオブ', row: 5, column: 5, color: '#3ee1f0' },
	{ z: 42, symbol: 'Mo', la: 'Molybdenum', en: 'Molybdenum', jp: 'モリブデン', row: 5, column: 6, color: '#02e9e9' },
	{ z: 43, symbol: 'Tc', la: 'Technetium', en: 'Technetium', jp: 'テクネチウム', row: 5, column: 7, color: '#16e7d2' },
	{ z: 44, symbol: 'Ru', la: 'Ruthenium', en: 'Ruthenium', jp: 'ルテニウム', row: 5, column: 8, color: '#45dcd3' },
	{ z: 45, symbol: 'Rh', la: 'Rhodium', en: 'Rhodium', jp: 'ロジウム', row: 5, column: 9, color: '#5de0c8' },
	{ z: 46, symbol: 'Pd', la: 'Palladium', en: 'Palladium', jp: 'パラジウム', row: 5, column: 10, color: '#28e4c3' },
	{ z: 47, symbol: 'Ag', la: 'Argentum', en: 'Silver', jp: '銀', row: 5, column: 11, color: '#00e5b4' },
	{ z: 48, symbol: 'Cd', la: 'Cadmium', en: 'Cadmium', jp: 'カドミウム', row: 5, column: 12, color: '#06f386' },
	{ z: 49, symbol: 'In', la: 'Indium', en: 'Indium', jp: 'インジウム', row: 5, column: 13, color: '#0cfb65' },
	{ z: 50, symbol: 'Sn', la: 'Stannum', en: 'Tin', jp: '錫', row: 5, column: 14, color: '#63ff00' },
	{ z: 51, symbol: 'Sb', la: 'Stibium', en: 'Antimony', jp: 'アンチモン', row: 5, column: 15, color: '#fefd32' },
	{ z: 52, symbol: 'Te', la: 'Tellurium', en: 'Tellurium', jp: 'テルル', row: 5, column: 16, color: '#fefd32' },
	{ z: 53, symbol: 'I', la: 'Iodum', en: 'Iodine', jp: 'ヨウ素', row: 5, column: 17, color: '#ffbe23' },
	{ z: 54, symbol: 'Xe', la: 'Xenon', en: 'Xenon', jp: 'キセノン', row: 5, column: 18, color: '#ff7600' },
	// row 6
	{ z: 55, symbol: 'Cs', la: 'Caesium', en: 'Caesium', jp: 'セシウム', row: 6, column: 1, color: '#59b5f6' },
	{ z: 56, symbol: 'Ba', la: 'Barium', en: 'Barium', jp: 'バリウム', row: 6, column: 2, color: '#a5caf1' },
	{ z: -1, symbol: '', la: '', en: '', jp: '', row: 6, column: 3, color: '#e977ff' },
	{ z: 72, symbol: 'Hf', la: 'Hafnium', en: 'Hafnium', jp: 'ハフニウム', row: 6, column: 4, color: '#7bd7fe' },
	{ z: 73, symbol: 'Ta', la: 'Tantalum', en: 'Tantalum', jp: 'タンタル', row: 6, column: 5, color: '#3ee1f0' },
	{ z: 74, symbol: 'W', la: 'Wolframium', en: 'Tungsten', jp: 'タングステン', row: 6, column: 6, color: '#02e9e9' },
	{ z: 75, symbol: 'Re', la: 'Rhenium', en: 'Rhenium', jp: 'レニウム', row: 6, column: 7, color: '#16e7d2' },
	{ z: 76, symbol: 'Os', la: 'Osmium', en: 'Osmium', jp: 'オスミウム', row: 6, column: 8, color: '#45dcd3' },
	{ z: 77, symbol: 'Ir', la: 'Iridium', en: 'Iridium', jp: 'イリジウム', row: 6, column: 9, color: '#5de0c8' },
	{ z: 78, symbol: 'Pt', la: 'Platinum', en: 'Platinum', jp: '白金', row: 6, column: 10, color: '#28e4c3' },
	{ z: 79, symbol: 'Au', la: 'Aurum', en: 'Gold', jp: '金', row: 6, column: 11, color: '#00e5b4' },
	{ z: 80, symbol: 'Hg', la: 'Hydrargyrum', en: 'Mercury', jp: '水銀', row: 6, column: 12, color: '#06f386' },
	{ z: 81, symbol: 'Tl', la: 'Thallium', en: 'Thallium', jp: 'タリウム', row: 6, column: 13, color: '#0cfb65' },
	{ z: 82, symbol: 'Pb', la: 'Plumbum', en: 'Lead', jp: '鉛', row: 6, column: 14, color: '#63ff00' },
	{ z: 83, symbol: 'Bi', la: 'Bisemutum', en: 'Bismuth', jp: 'ビスマス', row: 6, column: 15, color: '#96fe06' },
	{ z: 84, symbol: 'Po', la: 'Polonium', en: 'Polonium', jp: 'ポロニウム', row: 6, column: 16, color: '#caff02' },
	{ z: 85, symbol: 'At', la: 'Astatum', en: 'Astatine', jp: 'アスタチン', row: 6, column: 17, color: '#fefd32' },
	{ z: 86, symbol: 'Rn', la: 'Radon', en: 'Radon', jp: 'ラドン', row: 6, column: 18, color: '#ff7600' },
	// row 7
	{ z: 87, symbol: 'Fr', la: 'Francium', en: 'Francium', jp: 'フランシウム', row: 7, column: 1, color: '#59b5f6' },
	{ z: 88, symbol: 'Ra', la: 'Radium', en: 'Radium', jp: 'ラジウム', row: 7, column: 2, color: '#a5caf1' },
	{ z: -1, symbol: '', la: '', en: '', jp: '', row: 7, column: 3, color: '#aed8f1' },
	{
		z: 104,
		symbol: 'Rf',
		la: 'Rutherfordium',
		en: 'Rutherfordium',
		jp: 'ラザホージウム',
		row: 7,
		column: 4,
		color: '#7bd7fe'
	},
	{ z: 105, symbol: 'Db', la: 'Dubnium', en: 'Dubnium', jp: 'ドブニウム', row: 7, column: 5, color: '#3ee1f0' },
	{
		z: 106,
		symbol: 'Sg',
		la: 'Seaborgium',
		en: 'Seaborgium',
		jp: 'シーボーギウム',
		row: 7,
		column: 6,
		color: '#02e9e9'
	},
	{ z: 107, symbol: 'Bh', la: 'Bohrium', en: 'Bohrium', jp: 'ボーリウム', row: 7, column: 7, color: '#16e7d2' },
	{ z: 108, symbol: 'Hs', la: 'Hassium', en: 'Hassium', jp: 'ハッシウム', row: 7, column: 8, color: '#45dcd3' },
	{
		z: 109,
		symbol: 'Mt',
		la: 'Meitnerium',
		en: 'Meitnerium',
		jp: 'マイトネリウム',
		row: 7,
		column: 9,
		color: '#5de0c8'
	},
	{
		z: 110,
		symbol: 'Ds',
		la: 'Darmstadtium',
		en: 'Darmstadtium',
		jp: 'ダームスタチウム',
		row: 7,
		column: 10,
		color: '#28e4c3'
	},
	{
		z: 111,
		symbol: 'Rg',
		la: 'Roentgenium',
		en: 'Roentgenium',
		jp: 'レントゲニウム',
		row: 7,
		column: 11,
		color: '#00e5b4'
	},
	{
		z: 112,
		symbol: 'Cn',
		la: 'Copernicium',
		en: 'Copernicium',
		jp: 'コペルニシウム',
		row: 7,
		column: 12,
		color: '#06f386'
	},
	{ z: 113, symbol: 'Nh', la: 'Nihonium', en: 'Nihonium', jp: 'ニホニウム', row: 7, column: 13, color: '#0cfb65' },
	{ z: 114, symbol: 'Fl', la: 'Flerovium', en: 'Flerovium', jp: 'フレロビウム', row: 7, column: 14, color: '#63ff00' },
	{ z: 115, symbol: 'Mc', la: 'Moscovium', en: 'Moscovium', jp: 'モスコビウム', row: 7, column: 15, color: '#96fe06' },
	{
		z: 116,
		symbol: 'Lv',
		la: 'Livermorium',
		en: 'Livermorium',
		jp: 'リバモリウム',
		row: 7,
		column: 16,
		color: '#caff02'
	},
	{ z: 117, symbol: 'Ts', la: 'Tennessine', en: 'Tennessine', jp: 'テネシン', row: 7, column: 17, color: '#fefd32' },
	{ z: 118, symbol: 'Og', la: 'Oganesson', en: 'Oganesson', jp: 'オガネソン', row: 7, column: 18, color: '#ff7600' },
	// row 9
	{ z: 57, symbol: 'La', la: 'Lanthanum', en: 'Lanthanum', jp: 'ランタン', row: 9, column: 3, color: '#e977ff' },
	{ z: 58, symbol: 'Ce', la: 'Cerium', en: 'Cerium', jp: 'セリウム', row: 9, column: 4, color: '#e977ff' },
	{
		z: 59,
		symbol: 'Pr',
		la: 'Praseodymium',
		en: 'Praseodymium',
		jp: 'プラセオジム',
		row: 9,
		column: 5,
		color: '#e977ff'
	},
	{ z: 60, symbol: 'Nd', la: 'Neodymium', en: 'Neodymium', jp: 'ネオジム', row: 9, column: 6, color: '#e977ff' },
	{ z: 61, symbol: 'Pm', la: 'Promethium', en: 'Promethium', jp: 'プロメチウム', row: 9, column: 7, color: '#e977ff' },
	{ z: 62, symbol: 'Sm', la: 'Samarium', en: 'Samarium', jp: 'サマリウム', row: 9, column: 8, color: '#e977ff' },
	{ z: 63, symbol: 'Eu', la: 'Europium', en: 'Europium', jp: 'ユウロピウム', row: 9, column: 9, color: '#e977ff' },
	{ z: 64, symbol: 'Gd', la: 'Gadolinium', en: 'Gadolinium', jp: 'ガドリニウム', row: 9, column: 10, color: '#e977ff' },
	{ z: 65, symbol: 'Tb', la: 'Terbium', en: 'Terbium', jp: 'テルビウム', row: 9, column: 11, color: '#e977ff' },
	{
		z: 66,
		symbol: 'Dy',
		la: 'Dysprosium',
		en: 'Dysprosium',
		jp: 'ジスプロシウム',
		row: 9,
		column: 12,
		color: '#e977ff'
	},
	{ z: 67, symbol: 'Ho', la: 'Holmium', en: 'Holmium', jp: 'ホルミウム', row: 9, column: 13, color: '#e977ff' },
	{ z: 68, symbol: 'Er', la: 'Erbium', en: 'Erbium', jp: 'エルビウム', row: 9, column: 14, color: '#e977ff' },
	{ z: 69, symbol: 'Tm', la: 'Thulium', en: 'Thulium', jp: 'ツリウム', row: 9, column: 15, color: '#e977ff' },
	{ z: 70, symbol: 'Yb', la: 'Ytterbium', en: 'Ytterbium', jp: 'イッテルビウム', row: 9, column: 16, color: '#e977ff' },
	{ z: 71, symbol: 'Lu', la: 'Lutetium', en: 'Lutetium', jp: 'ルテチウム', row: 9, column: 17, color: '#e977ff' },
	// row 10
	{ z: 89, symbol: 'Ac', la: 'Actinium', en: 'Actinium', jp: 'アクチニウム', row: 10, column: 3, color: '#aed8f1' },
	{ z: 90, symbol: 'Th', la: 'Thorium', en: 'Thorium', jp: 'トリウム', row: 10, column: 4, color: '#aed8f1' },
	{
		z: 91,
		symbol: 'Pa',
		la: 'Protactinium',
		en: 'Protactinium',
		jp: 'プロトアクチニウム',
		row: 10,
		column: 5,
		color: '#aed8f1'
	},
	{ z: 92, symbol: 'U', la: 'Uranium', en: 'Uranium', jp: 'ウラン', row: 10, column: 6, color: '#aed8f1' },
	{ z: 93, symbol: 'Np', la: 'Neptunium', en: 'Neptunium', jp: 'ネプツニウム', row: 10, column: 7, color: '#aed8f1' },
	{ z: 94, symbol: 'Pu', la: 'Plutonium', en: 'Plutonium', jp: 'プルトニウム', row: 10, column: 8, color: '#aed8f1' },
	{ z: 95, symbol: 'Am', la: 'Americium', en: 'Americium', jp: 'アメリシウム', row: 10, column: 9, color: '#aed8f1' },
	{ z: 96, symbol: 'Cm', la: 'Curium', en: 'Curium', jp: 'キュリウム', row: 10, column: 10, color: '#aed8f1' },
	{ z: 97, symbol: 'Bk', la: 'Berkelium', en: 'Berkelium', jp: 'バークリウム', row: 10, column: 11, color: '#aed8f1' },
	{
		z: 98,
		symbol: 'Cf',
		la: 'Californium',
		en: 'Californium',
		jp: 'カリホルニウム',
		row: 10,
		column: 12,
		color: '#aed8f1'
	},
	{
		z: 99,
		symbol: 'Es',
		la: 'Einsteinium',
		en: 'Einsteinium',
		jp: 'アインスタイニウム',
		row: 10,
		column: 13,
		color: '#aed8f1'
	},
	{ z: 100, symbol: 'Fm', la: 'Fermium', en: 'Fermium', jp: 'フェルミウム', row: 10, column: 14, color: '#aed8f1' },
	{
		z: 101,
		symbol: 'Md',
		la: 'Mendelevium',
		en: 'Mendelevium',
		jp: 'メンデレビウム',
		row: 10,
		column: 15,
		color: '#aed8f1'
	},
	{ z: 102, symbol: 'No', la: 'Nobelium', en: 'Nobelium', jp: 'ノーベリウム', row: 10, column: 16, color: '#aed8f1' },
	{
		z: 103,
		symbol: 'Lr',
		la: 'Lawrencium',
		en: 'Lawrencium',
		jp: 'ローレンシウム',
		row: 10,
		column: 17,
		color: '#aed8f1'
	}
]
