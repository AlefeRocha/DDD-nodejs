import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswersRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  }
  // Ou desse outro jeito também funciona!
  // create: async function (answer: Answer): Promise<void> {
  //   return
  // }
}

test('create an answer', async() => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.handler({
    instructorId: '1',
    questionId: '2',
    content: 'Nova resposta'
  })

  expect(answer.content).toEqual('Nova resposta')
})