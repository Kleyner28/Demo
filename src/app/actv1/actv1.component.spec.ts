import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Actv1Component } from './actv1.component';

describe('Actv1Component', () => {
  let component: Actv1Component;
  let fixture: ComponentFixture<Actv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Actv1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Actv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
