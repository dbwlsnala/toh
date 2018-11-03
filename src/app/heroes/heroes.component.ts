import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // hero = 'Winstorm';
  // 리터럴 객체로 생성
  /*hero: Hero = {
    hero_id: 11,
    name: 'Windstorm'
  };*/

  hero: Hero;
  //heroes = HEROES;
  isSpecial = true;
  selectedHero: Hero;

  // 생성자로 hero 서비스를 주입 받는다.
  constructor(private heroService: HeroService ) {
    // new로 객체 생성
    // this는 객체 인스턴스 자기자신을 가르킨다.
    this.hero = new Hero();
    this.hero.hero_id = 11;
    this.hero.name = 'Windstorm';

    this.heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      });
  }

  ngOnInit() {
  }
  onSave(event: any) {
    console.log(event);
    alert("Hi");
  }

  onSelected(hero: Hero){
    this.selectedHero = hero;
  }

}
