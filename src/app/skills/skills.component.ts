import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any = {
    technologies: [
      { name: "C#, .Net, .Net Core", percent: 90, remark: 'excellent' },
      { name: ".Net MVC, Web APIs, Entity Framework", percent: 90, remark: 'excellent' },
      { name: "Angular, AngularJs", percent: 95, remark: 'excellent' },
      { name: "SQL Server, MS Azure, Cosmos DB", percent: 80, remark: 'good' },
      { name: "TypeScript, Javascript, JQuery, AJAX", percent: 80, remark: 'very-good' },
      { name: "Material Design, Kendo UI, Flex Layout", percent: 85, remark: 'good' },
      { name: "Bootstrap, HTML, CSS", percent: 80, remark: 'good' },
    ],
    tools: [
      { name: "Git, GitHub, BitBucket", percent: 90, remark: 'excellent' },
      { name: "Visual Studio, VS Code", percent: 90, remark: 'excellent' },
      { name: "Postman", percent: 70, remark: 'very-good' },
      { name: "Kendo Report Designer", percent: 90, remark: 'excellent' },
      { name: "Docker, Kubernetes", percent: 50, remark: 'average' }
    ],
    methodologies: [
      { name: "Scrum", percent: 70, remark: 'very-good' },
      { name: "Uml", percent: 90, remark: 'excellent' }, 
      { name: "Disign Thinking", percent: 70, remark: 'good' }, 
      { name: "TDD", percent: 90, remark: 'excellent' }, 
      { name: "DevOps", percent: 50, remark: 'average' }
    ]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}




