import { describe, it, expect } from 'vitest';
import * as cheerio from 'cheerio';
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

console.log($);

const els: any[] = [];
els.push($('h2'));
els.push($('h2'));
els.push($('h2'));

describe('Pager', () => {
	it('has html elements are created to work with', () => {
		expect(els).toHaveLength(3);
		expect(els[0].hasClass('title')).toBe(true);
	});
});
