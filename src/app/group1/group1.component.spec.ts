import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Group1Component } from './group1.component';

describe('Group1Component', () => {
  let component: Group1Component;
  let fixture: ComponentFixture<Group1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Group1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Group1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
