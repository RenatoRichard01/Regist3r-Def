import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacaoComponent } from './relacao.component';

describe('RelacaoComponent', () => {
  let component: RelacaoComponent;
  let fixture: ComponentFixture<RelacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
