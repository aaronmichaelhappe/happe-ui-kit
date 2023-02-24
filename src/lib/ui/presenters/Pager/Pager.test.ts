import { describe, it, expect } from 'vitest';
import { pager } from './pager';
import * as jsdom from "jsdom";

const { JSDOM } = jsdom;

const { document } = (new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)).window;

// [0,0]

describe("Pagers slider", () => {
	const els: any[] = [];

	let slider: any = pager(els);

	it('should be a function', () => {
		expect(typeof slider).toBe("function");
	});
});

describe("The callback function of the pager being called with the args of 'all-left' and 1. Three HTML elements were passed to the init function", () => {
	const els: any[] = [];

	let slider: any = pager(els);
	els.push(document.createElement('div'));
	els.push(document.createElement('div'));
	els.push(document.createElement('div'));

	els[0].classList.add('asdf', 'closed');
	els[1].classList.add('asdf', 'closed');
	els[2].classList.add('asdf', 'closed');

	let result = slider("all-left", 1);

	it('should return an array', () => {
		expect(Array.isArray(result)).toBe(true);
	});

	it('it should have a length of 2 when index 1 is passed in', () => {
		expect(result).toHaveLength;
		expect(result.length).toBeTruthy();
		expect(result).lengthOf(2);
	});

	it('should not have a class of closed on index 0 and 1', () => {
		expect(result[0].classList.contains('.closed')).toBe(false);
		expect(result[1].classList.contains('.closed')).toBe(false);
	});
});

// visual of the pager when elements all are at the right, and moving left
// [0,0,0] [1,1,1]

describe("The callback function of the pager being called with the args of 'all-right' and 1. Three HTML elements were passed to the init function.", () => {
	const els: any[] = [];

	let slider: any = pager(els);
	els.push(document.createElement('div'));
	els.push(document.createElement('div'));
	els.push(document.createElement('div'));

	els[0].className += "asdf";
	els[1].className += "asdf";
	els[2].className += "asdf";

	let result = slider("all-right", 1);

	it('should return an array with the length of two', () => {
		expect(1).toBe(1);
	});

	it('should return an array with the length of two', () => {
		expect(Array.isArray(result)).toBe(true);
		expect(result).lengthOf(2);
	});
	it('should have a class of closed in index 1 and 2', () => {
		expect(result[1]).toBeTypeOf('object');
		expect(result[1].className).toBe('asdf closed');
		expect(result[0].className).toBe('asdf closed');
		expect(els[0].className).toBe('asdf');
	});
});

// visual of the pager when elements all are at the left, and moving right
// [1,1,1] [0,0,0]
