interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
}

export class AnswerQuestionUseCase {
  
  handler({ instructorId, questionId }: AnswerQuestionUseCaseRequest) {

  }
}

new AnswerQuestionUseCase().handler({
  instructorId: '1',
  questionId: '2'
})