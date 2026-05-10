const ROMAN_MONTHS = [
	'i',
	'ii',
	'iii',
	'iv',
	'v',
	'vi',
	'vii',
	'viii',
	'ix',
	'x',
	'xi',
	'xii',
] as const;

export function formatSumiDate(date: Date): string {
	const day = String(date.getDate()).padStart(2, '0');
	const month = ROMAN_MONTHS[date.getMonth()];
	const year = date.getFullYear();
	return `${day} . ${month} . ${year}`;
}
