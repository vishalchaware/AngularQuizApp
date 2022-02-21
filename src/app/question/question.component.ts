import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
	public name: string = '';
	public questionList : any = [];
	public currentQuestion: number = 0;
	public points: number = 0;
	public counter: number = 60;
	public questionLength: any = undefined;
	constructor(private questionService: QuestionService) {}
	ngOnInit(): void {
		this.name = localStorage.getItem("name")!;
		this.getAllQuestions();
	}
	getAllQuestions() {
		this.questionService.getQuestionJson().subscribe(res => {
			console.log(res.questions);
			this.questionList = res.questions;
			this.questionLength = this.questionList.length;
		});
	}
	nextQuestion() {
		this.currentQuestion++;
	}
	previousQuestion() {
		this.currentQuestion--;
	}
}
