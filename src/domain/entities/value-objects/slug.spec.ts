import { expect, test } from 'vitest';
import { Slug } from './slug';

test('It should be able to create a new slug from text', () => {
  const slug = Slug.createFromText('An example of question title')

  expect(slug.value).toEqual('an-example-of-question-title')
})